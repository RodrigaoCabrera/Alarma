(this["webpackJsonpreloj-25-5"]=this["webpackJsonpreloj-25-5"]||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),i=r(4),s=r.n(i),l=(r(9),r(2)),b=r.p+"static/media/piano-scary-hallowen.7c4e9574.mp3",a=r(0);function o(){var e=Object(n.useState)("00"),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)("25"),s=Object(l.a)(i,2),o=s[0],d=s[1],u=Object(n.useState)(!0),m=Object(l.a)(u,2),j=m[0],x=m[1],h=Object(n.useState)(25),O=Object(l.a)(h,2),f=O[0],g=O[1],N=Object(n.useState)(5),v=Object(l.a)(N,2),p=v[0],S=v[1],k=Object(n.useState)(!0),y=Object(l.a)(k,2),I=y[0],w=y[1],E=Object(n.useRef)(),B=function(){c((function(e){return"00"===e?59:e>10?e-1:Number(e)<11&&Number(e)>0?"0".concat(String(e-1)):void 0}))};console.log(I),Object(n.useEffect)((function(){"00"===r&&"00"===o&&!1===I&&(d("0".concat(String(f))),c("00"),document.getElementById("beep").play(),w(!0));"00"===r&&"00"===o&&!0===I&&(d("0".concat(String(p))),c("00"),document.getElementById("beep").play(),w(!1));59===r&&d((function(e){return o>10?e-1:"0".concat(String(Number(e)-1))}))}),[r]),Object(n.useEffect)((function(){0===o&&0===r&&0===p&&clearInterval(E.current)}),[p]);var C=function(e){if("session-decrement"===e.target.id&&Number(o)>1)Number(o)>10?(d(Number(o)-1),g(f-1)):(d("0".concat(String(Number(o)-1))),g(f-1));else{if(!("session-increment"===e.target.id&&Number(o)<60))return;Number(o)>10?(d(Number(o)+1),g(f+1)):(d("0".concat(String(Number(o)+1))),g(f+1))}},T=function(e){if("break-decrement"===e.target.id&&Number(p)>1)S(p-1);else{if(!("break-increment"===e.target.id&&Number(p)<60))return;S(p+1)}};return Object(a.jsxs)("div",{className:"flex flex-col bg-green-300 h-full justify-center",children:[Object(a.jsx)("h1",{className:"text-center text-5xl font-bold",children:"Alarma"}),Object(a.jsxs)("div",{className:"flex md:flex-row flex-col text-center md:justify-around",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{id:"break-label",children:"BREAK LENGTH"}),Object(a.jsx)("div",{id:"break-length",className:"text-center mb-2 text-2xl",children:Number(p)}),Object(a.jsx)("button",{id:"break-decrement",onClick:T,className:"mx-1 outline-none rounded hover:bg-red-500 hover:text-white px-2 border",children:"Decrementar"}),Object(a.jsx)("button",{id:"break-increment",onClick:T,className:"mx-1 bg-blue-500 rounded hover:bg-blue-700 hover:text-white px-2border",children:"Incrementar"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{id:"session-label",children:"SESSION LENGTH"}),Object(a.jsx)("div",{id:"session-length",className:"text-center mb-2 text-2xl",children:Number(f)}),Object(a.jsx)("button",{id:"session-decrement",onClick:C,className:"mx-1 outline-none rounded hover:bg-red-500 hover:text-white px-2 border",children:"Decrementar"}),Object(a.jsx)("button",{id:"session-increment",onClick:C,className:"mx-1 bg-blue-500 rounded hover:bg-blue-700 hover:text-white px-2border",children:"Incrementar"})]})]}),Object(a.jsx)("div",{className:"flex self-center text-white justify-center w-1/3 bg-gray-600 my-8 py-5 rounded-full",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{id:"timer-label",className:"text-center text-xl mb-2",children:I?"Session":"Break"}),Object(a.jsx)("div",{className:"text-center text-3xl",id:"time-left",children:o+":"+r})]})}),Object(a.jsxs)("div",{className:"self-center",children:[Object(a.jsx)("button",{id:"start_stop",onClick:function(){if(j)E.current=setInterval(B,1e3);else{clearInterval(E.current);var e=document.getElementById("beep");e.pause(),e.currentTime=0}x((function(e){return!e}))},className:"mx-2 bg-green-500 hover:bg-green-700 text-white font-bold px-2 rounded",children:j?"Iniciar":"Detener"}),Object(a.jsx)("button",{id:"reset",onClick:function(){clearInterval(E.current),c("00"),d("25"),S(5),g(25),x(!0),w(!0);var e=document.getElementById("beep");e.pause(),e.currentTime=0},className:"outline-none rounded hover:bg-red-700 hover:text-white px-2 border",children:"Reiniciar"}),Object(a.jsx)("audio",{id:"beep",src:b})]})]})}var d=function(){return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)(o,{})})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.e8a692ad.chunk.js.map