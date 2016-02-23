module.exports = function(source) {
    this.cacheable();

    //http://ejohn.org/blog/javascript-micro-templating/
    source = source
            .replace(/[\r\t\n]/mg, " ")
            .replace(/<%/mg, "\t")
            .replace(/((^|%>)[^\t]*)'/mg, "$1\r")
            .replace(/\t=(.*?)%>/mg, "',$1,'")
            .replace(/\t/mg, "');")
            .replace(/%>/mg, "\n" + "p.push('")
            .replace(/\r/mg, "\\'")
            .replace(/\<\!\-\-(.*?)\-\-\>/mg, '')
            .replace(/[ ]{2,}/mg, ' ');

    var fn = new Function("obj",
        "obj=obj|| {};var p=[],print=function(){p.push.apply(p,arguments);};" +
        "with(obj){p.push('" + source + "');}return p.join('');");

    return 'module.exports = ' + fn.toString();
};
