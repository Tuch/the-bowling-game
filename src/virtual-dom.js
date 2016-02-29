const propNames = {
    value: true
};

function createNodeFromHTML(HTML) {
    if (HTML.trim() === ''){
        return document.createTextNode(HTML);
    }

    let node = document.createElement('div');
    node.innerHTML = HTML;
    node = node.childNodes[0];
    node.parentNode.removeChild(node);

    return node;
}

export function createVNodeFromNode(node) {
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
    if (vNode1 && !vNode2) {
        return {
            type: 'REMOVE_NODE'
        };
    } else if (!vNode1 && vNode2) {
        return {
            type: 'ADD_NODE',
            vNode: vNode2
        };
    } else if (vNode1.tag !== vNode2.tag) {
        return {
            type: 'REPLACE_NODE',
            vNode: vNode2
        };
    } else if (vNode1.type === 3 || vNode2.type === 3) {
        if (vNode1.content !== vNode2.content) {
            return {
                type: 'REPLACE_NODE',
                vNode: vNode2
            };
        }
    } else {
        let attrs = [];
        let patch = {};

        for (let key in vNode2.attrs) {
            let attr1 = vNode1.attrs[key];
            let attr2 = vNode2.attrs[key];

            if (!attr1) {
                attrs.push({
                    type: 'SET',
                    name: key,
                    val: attr2.join(' ')
                });
            } else {
                let attr1Val = attr1.join(' ');
                let attr2Val = attr2.join(' ');

                if (attr1Val !== attr2Val) {
                    attrs.push({
                        type: 'SET',
                        name: key,
                        val: attr2Val
                    });
                }
            }
        }

        for (let key in vNode1.attrs) {
            let attr2 = vNode2.attrs[key];

            if (!attr2) {
                attrs.push({
                    type: 'REMOVE',
                    name: key
                });
            }
        }

        for (let i = 0, length = vNode1.childrens.length; i < length; i++) {
            let cDiff = diff(vNode1.childrens[i], vNode2.childrens[i]);

            if (cDiff) {
                patch[i] = cDiff;
            }
        }

        for (let i = 0, length = vNode2.childrens.length; i < length; i++) {
            if (!vNode1.childrens[i]) {
                let cDiff = diff(vNode1.childrens[i], vNode2.childrens[i]);

                if (cDiff) {
                    patch[i] = cDiff;
                }
            }
        }

        if (attrs.length) {
            patch.attrs = attrs;
        }

        if (Object.keys(patch).length) {
            return patch;
        }
    }
};

function applyPatchOp(parentNode, node, op) {
    switch(op.type) {
        case 'ADD_NODE':
            if (parentNode) {
                parentNode.appendChild(createElement(op.vNode));
            }
        break;
        case 'REMOVE_NODE':
            if (parentNode) {
                 parentNode.removeChild(node);
            }
        break;
        case 'REPLACE_NODE':
            var newNode = createElement(op.vNode);

            if (parentNode) {
                parentNode.insertBefore(newNode, node);
                parentNode.removeChild(node);
            }

            node = newNode;
        break;
    }

    return node;
}

function applyAttrOps(node, ops) {
    for (let i = 0, length = ops.length; i < length; i++) {
        let op = ops[i];
        let name = op.name;

        if (name === 'className') {
            name = 'class';
        }

        let isProp = propNames[name];

        switch(op.type) {
            case 'SET':
                if (isProp) {
                    node[name] = op.val;
                } else {
                    node.setAttribute(name, op.val);
                }
            break;
            case 'REMOVE':
                if (isProp) {
                    node[name] = '';
                } else {
                    node.removeAttribute(name);
                }
            break;
        }
    }

    return node;
}

export let applyPatch = function (node, patches, parentNode) {
    parentNode = parentNode || node.parentNode;

    if (!patches) {
        return node;
    }

    if (patches.type) {
        node = applyPatchOp(parentNode, node, patches);
    } else {
        let childNodes = Array.prototype.slice.call(node.childNodes);

        for (var key in patches) {
            if (key === 'attrs') {
                applyAttrOps(node, patches[key]);
            } else {
                applyPatch(childNodes[key], patches[key], node);
            }
        }
    }

    return node;
};

export let createElement = function (vNode) {
    return createNodeFromHTML(renderHTML(vNode));
};

export let vNodeFromHTML = function (HTML) {
    return createVNodeFromNode(createNodeFromHTML(HTML));
};

export let applyVNode = function (node, vNode) {
    return applyPatch(node, diff(createVNodeFromNode(node), vNode));
}
