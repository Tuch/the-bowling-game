function createNodeFromHTML(HTML) {
    // Everything except iOS 7 Safari, IE 8/9, Andriod Browser 4.1/43
    let parser = new DOMParser();
    let body = parser.parseFromString(HTML, 'text/html').documentElement.childNodes[1];
    let node = body.childNodes[0];

    body.removeChild(node);

    return node;
}

function createVNodeFromNode(node) {
    let vNode = {
        type: node.nodeType
    };

    if (vNode.type === 3) {
        vNode.content = node.textContent;
    } else {
        vNode.childrens = [];
        vNode.attrs = {};
        vNode.tag = node.tagName;

        if (node.childNodes) {
            for (let i = 0, length = node.childNodes.length; i < length; i++) {
                vNode.childrens.push(createVNodeFromNode(node.childNodes[i]));
            }

        }

        for (let i = 0, length = node.attributes.length; i < length; i++) {
            let name = node.attributes[i].name;

            if (name === 'class') {
                name = 'className';
            }

            vNode.attrs[name] = node.attributes[i].value.replace(/\s\s+/g, ' ').trim().split(' ');
        }
    }

    return vNode;
}

function joinAttrs(attrs) {
    var result = [];

    for (let key in attrs) {
        let attr = attrs[key].join(' ');

        if (key === 'className') {
            key = 'class';
        }

        result.push(`${key}="${attr}"`);
    }

    return result.join(' ');
}

function createHTMLTag(vNode, innerHTML = '') {
    let attrs = joinAttrs(vNode.attrs);

    switch(vNode.type) {
        case 3: return `${innerHTML}`;
        default: return `<${vNode.tag} ${attrs}>${innerHTML}</${vNode.tag}>`;
    }
}

function renderHTML(vNode) {
    let innerHTML = '';

    if (vNode.type !== 3) {
        for (let i = 0, length = vNode.childrens.length; i < length; i++) {
            innerHTML += renderHTML(vNode.childrens[i]);
        }
    } else {
        innerHTML = vNode.content;
    }

    return createHTMLTag(vNode, innerHTML);
}

export let diff = function (vNode1, vNode2) {
    if (vNode1 && vNode2) {
        if (vNode2.tag !== vNode1.tag) {
            return {
                type: 'REPLACE_NODE',
                vNode: vNode2
            };
        } else if (vNode1.type === 3 || vNode2.type === 3) {
            if (vNode2.content !== vNode1.content) {
                return {
                    type: 'REPLACE_NODE',
                    vNode: vNode2
                };
            } else {
                return {};
            }
        } else {
            let a = [];

            for (let key in vNode2.attrs) {
                let attr1 = vNode1.attrs[key];
                let attr2 = vNode2.attrs[key];

                if (!attr1) {
                    a.push({
                        type: 'SET_ATTR',
                        name: key,
                        val: attr2.join(' ')
                    });
                } else {
                    let attr1Val = attr1.join(' ');
                    let attr2Val = attr2.join(' ');

                    if (attr1Val !== attr2Val) {
                        a.push({
                            type: 'SET_ATTR',
                            name: key,
                            val: attr2Val
                        });
                    }
                }
            }

            for (let key in vNode1.attrs) {
                let attr1 = vNode1.attrs[key];
                let attr2 = vNode2.attrs[key];

                if (!attr2) {
                    a.push({
                        type: 'REMOVE_ATTR',
                        name: attr1
                    });
                }
            }

            let patch = {};

            for (let i = 0, length = vNode1.childrens.length; i < length; i++) {
                if (!vNode2.childrens[i]) {
                    patch[i] = {
                        type: 'REMOVE_NODE'
                    };
                }
            }

            for (let i = 0, length = vNode2.childrens.length; i < length; i++) {
                let childDiff = diff(vNode1.childrens[i], vNode2.childrens[i]);

                if (Object.keys(childDiff).length) {
                    patch[i] = childDiff;
                }
            }

            patch.attrs = a;

            return patch;
        }
    } else if (vNode2) {
        return {
            type: 'ADD_NODE',
            vNode: vNode2
        };
    }

    return [];
};

function applyPatchOp(parentNode, node, p) {
    switch(p.type) {
        case 'ADD_NODE':
            parentNode.appendChild(createElement(p.vNode));
        break;
        case 'REMOVE_NODE':
            parentNode && parentNode.removeChild(node);
        break;
        case 'REPLACE_NODE':
            var newNode = createElement(p.vNode);

            if (parentNode) {
                parentNode.insertBefore(newNode, node);
                parentNode.removeChild(node);
            }

            node = newNode;
        break;
    }

    return node;
}

export let applyPatch = function (node, patch, id) {
    let parentNode = node.parentNode;

    if (id !== undefined) {
        parentNode = node;
        node = node.childNodes[id];
    }

    if (!patch) {
        return node;
    }

    if (patch.type) {
        node = applyPatchOp(parentNode, node, patch);
    } else {
        for (var key in patch) {
            let p = patch[key];

            if (key === 'attrs') {
                for (let i = 0, length = p.length; i < length; i++) {
                    let attr = p[i];
                    let name = attr.name;

                    if (name === 'className') {
                        name = 'class';
                    }

                    switch(attr.type) {
                        case 'SET_ATTR':
                            node.setAttribute(name, attr.val);
                        break;
                        case 'REMOVE_ATTR':
                            node.removeAttribute(name);
                        break;
                    }
                }
            } else {
                node.childNodes[key] = applyPatch(node, p, key);
            }
        }
    }

    return node;
};

export let createElement = function (vNode) {
    return createNodeFromHTML(renderHTML(vNode));
};

export let fromHTML = function (HTML) {
    return createVNodeFromNode(createNodeFromHTML(HTML));
};
