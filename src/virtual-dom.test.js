import * as vdom from './virtual-dom.js';
import mocks from './virtual-dom.mocks.json';

function applyPatch(mock) {
    let node1 = vdom.createElement(mock.vNode1);
    let node2 = vdom.createElement(mock.vNode2);
    node1 = vdom.applyPatch(node1, vdom.diff(mock.vNode1, mock.vNode2));

    return node1.outerHTML === node2.outerHTML;
}

describe('Simple', function () {
    it('Add childrens to vnode', function () {
        expect(applyPatch(mocks.test1)).toBe(true);
    });
    it('Remove childrens from vnode', function () {
        expect(applyPatch(mocks.test2)).toBe(true);
    });
    it('Replace node', function () {
        expect(applyPatch(mocks.test3)).toBe(true);
    });
    it('Text nodes', function () {
        expect(applyPatch(mocks.test4)).toBe(true);
    });
    it('vNode from HTML', function () {
        let HTML = mocks.test5;
        var test = vdom.createElement(vdom.vNodeFromHTML(HTML)).outerHTML === HTML;
        expect(test).toBe(true);
    });
    it('Replace node by other type', function () {
        expect(applyPatch(mocks.test6[0])).toBe(true);
    });
});

describe('Advanced', function () {
    it('vNode from HTML', function () {
        expect(applyPatch({
            vNode1: vdom.vNodeFromHTML(mocks.test6[1][0]),
            vNode2: vdom.vNodeFromHTML(mocks.test6[1][1])
        })).toBe(true);
    });
});

