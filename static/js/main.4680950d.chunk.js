(this["webpackJsonppolaris-ml"]=this["webpackJsonppolaris-ml"]||[]).push([[0],{101:function(e,t){},132:function(e,t){},133:function(e,t){},175:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t,a){},89:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(12),o=a(3),l=a.n(o),i=a(87),s=a.n(i),u=a(88);a(178);function f(e){var t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(u.a.load("model"));case 2:return t=a.sent,a.abrupt("return",t.detect(e));case 4:case"end":return a.stop()}}))}function h(e){var t=e.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height)}function m(e,t){var a=e.getContext("2d");a.clearRect(0,0,a.canvas.width,a.canvas.height);var n="14px Open Sans",r=parseInt(n,10);a.font=n,a.textBaseline="top",a.strokeStyle="#2da15f",a.lineWidth=4,a.fillStyle="#2da15f";var o=!0,l=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var f=s.value,h=f.class,m=f.score,p=Object(c.a)(f.bbox,4),d=p[0],b=p[1],v=p[2],g=p[3];a.strokeRect(d,b,v,g);var y=a.measureText(L(h,m)).width;a.fillRect(d,b,y+4,r+4)}}catch(T){l=!0,i=T}finally{try{o||null==u.return||u.return()}finally{if(l)throw i}}var w=!0,k=!1,O=void 0;try{for(var j,x=t[Symbol.iterator]();!(w=(j=x.next()).done);w=!0){var E=j.value,R=E.class,S=E.score,C=Object(c.a)(E.bbox,2),N=C[0],_=C[1];a.fillStyle="#000000",a.fillText(L(R,S),N,_)}}catch(T){k=!0,O=T}finally{try{w||null==x.return||x.return()}finally{if(k)throw O}}function L(e,t){return"".concat(e," (").concat(Math.round(100*t),"%)")}}var p=document.getElementById("root");s.a.render(l.a.createElement((function(){var e=Object(o.useMemo)((function(){return new FileReader}),[]),t=Object(o.useRef)(),a=Object(o.useRef)(),n=Object(o.useRef)(),i=Object(o.useState)(""),s=Object(c.a)(i,2),u=s[0],p=s[1],d=Object(o.useState)("Click anywhere to begin"),b=Object(c.a)(d,2),v=b[0],g=b[1],y=Object(o.useState)([]),w=Object(c.a)(y,2),k=(w[0],w[1]),O="Loading..."===v,j=Object(o.useCallback)((function(t){var a=Object(c.a)(t.target.files,1)[0];a&&e.readAsDataURL(a)}),[e]);Object(o.useEffect)((function(){e.addEventListener("load",(function(e){var a,c;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=e.target.result,p(a),h(n.current),g("Loading..."),k([]),o.next=7,r.a.awrap(f(t.current));case 7:c=o.sent,console.log(c),c.length>0?(g("Click anywhere to go again"),m(n.current,c),k(c)):g("No components detected. Please try again or check the console for the raw output.");case 10:case"end":return o.stop()}}))}))}),[e]);var x=Object(o.useCallback)((function(){O||a.current.click()}),[O]),E="result-status container ".concat(O?"result-status--loading":"");return l.a.createElement("main",{className:"page-wrapper"},l.a.createElement("section",{className:"intro"},l.a.createElement("p",{className:"container"},"This ",l.a.createElement("a",{href:"https://github.com/kvendrik/polaris-ml",target:"_blank",rel:"noopener noreferrer"},"experiment")," allows you to upload a ",l.a.createElement("a",{href:"https://github.com/kvendrik/polaris-ml/tree/master/training-data",target:"_blank",rel:"noopener noreferrer"},"wireframe you sketched out")," on a whiteboard and will tell you what ",l.a.createElement("a",{href:"https://polaris.shopify.com/components",target:"_blank",rel:"noopener noreferrer"},"Polaris components")," you drew.")),l.a.createElement("section",{className:E,onClick:x},l.a.createElement("p",null,v),l.a.createElement("div",{className:"image-container"},l.a.createElement("canvas",{className:"image-container__canvas",ref:n,width:"600",height:"500"}),l.a.createElement("img",{src:u,ref:t,alt:"",width:"600",height:"500"})),l.a.createElement("input",{className:"file-picker",ref:a,type:"file",onChange:j})))}),null),p)},99:function(e,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.4680950d.chunk.js.map