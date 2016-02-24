import * as vdom from './virtual-dom.js';
import mocks from './virtual-dom.mocks.json';

function applyPatch(mock) {
    let node1 = vdom.createElement(mock.vNode1);
    let node2 = vdom.createElement(mock.vNode2);
    node1 = vdom.applyPatch(node1, vdom.diff(mock.vNode1, mock.vNode2));

    return node1.outerHTML === node2.outerHTML;
}

describe('Add childrens to vnode', function () {
    it('should be equal', function () {
        expect(applyPatch(mocks.test1)).toBe(true);
    });
});

describe('Remove childrens from vnode', function () {
    it('should be equal', function () {
        expect(applyPatch(mocks.test2)).toBe(true);
    });
});

describe('Replace node', function () {
    it('should be equal', function () {
        expect(applyPatch(mocks.test3)).toBe(true);
    });
});

describe('Text nodes', function () {
    it('should be equal', function () {
        expect(applyPatch(mocks.test4)).toBe(true);
    });
});

xdescribe('vNode from HTML', function () {
    it('should be equal', function () {
        var test = vdom.createElement(vdom.fromHTML(HTML)).outerHTML === HTML;
        expect(test).toBe(true);
    });
});
