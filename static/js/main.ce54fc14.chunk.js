(this["webpackJsonppolaris-ml"]=this["webpackJsonppolaris-ml"]||[]).push([[0],{101:function(e,t){},132:function(e,t){},133:function(e,t){},175:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t,n){},89:function(e,t,n){e.exports=n(90)},90:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=n(13),l=n(3),o=n.n(l),s=n(87),u=n.n(s),i=n(88),m=(n(178),{idle:"Enter a whiteboard sketch using the file picker.",loading:"Loading...",noResults:"No components detected. Please try again or check the console for the raw output."});function d(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(i.a.load("model"));case 2:return t=n.sent,n.abrupt("return",t.detect(e));case 4:case"end":return n.stop()}}))}var f=document.getElementById("root");u.a.render(o.a.createElement((function(){var e=Object(l.useMemo)((function(){return new FileReader}),[]),t=Object(l.useRef)(),n=Object(l.useState)(""),a=Object(c.a)(n,2),s=a[0],u=a[1],i=Object(l.useState)(m.idle),f=Object(c.a)(i,2),p=f[0],h=f[1],b=Object(l.useState)([]),E=Object(c.a)(b,2),g=E[0],v=E[1],k=Object(l.useCallback)((function(t){var n=Object(c.a)(t.target.files,1)[0];return e.readAsDataURL(n)}),[e]);Object(l.useEffect)((function(){e.addEventListener("load",(function(e){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.target.result,u(n),h(m.loading),v([]),c.next=6,r.a.awrap(d(t.current));case 6:a=c.sent,console.log(a),a.length>0?(h(m.idle),v(a)):h(m.noResults);case 9:case"end":return c.stop()}}))}))}),[e]);var j=g.length>0&&o.a.createElement("table",{border:"1"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Class"),o.a.createElement("th",null,"Score"))),o.a.createElement("tbody",null,g.map((function(e,t){var n=e.class,a=e.score;return o.a.createElement("tr",{key:"".concat(n).concat(a).concat(t)},o.a.createElement("td",null,n),o.a.createElement("td",null,a))}))));return o.a.createElement("main",{className:"container"},o.a.createElement("p",null,p),o.a.createElement("input",{type:"file",onChange:k}),j,o.a.createElement("img",{className:"image",src:s,ref:t,alt:""}),o.a.createElement("p",{className:"subdued"},"Not sure what to sketch? Have a look at the ",o.a.createElement("a",{href:"https://github.com/kvendrik/polaris-ml/tree/master/training-data",target:"_blank",rel:"noopener noreferrer"},"training data (examples)"),"."))}),null),f)},99:function(e,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.ce54fc14.chunk.js.map