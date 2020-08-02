/*! For license information please see module.js.LICENSE.txt */
define(["react","d3","emotion","@grafana/ui","@grafana/data"],(function(t,e,n,r,o){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=5)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=r},function(t,e){t.exports=o},function(t,e,n){"use strict";n.r(e);var r=n(4);function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function a(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var i,u,l,c,s=n(0),f=n.n(s),d=n(2),p=n(3),v=n(1),m=function(t,e){var n=function(t){return Math.round(t)},r=t.reduce((function(t,e){var n=e[0],r=e[1];return null!==r&&(t.x+=n,t.y+=r,t.squareX+=n*n,t.product+=n*r,t.len+=1),t}),{x:0,y:0,squareX:0,product:0,len:0}),o=r.len*r.product-r.x*r.y,a=r.len*r.squareX-r.x*r.x,i=0===a?0:n(o/a),u=n(r.y/r.len-i*r.x/r.len);return n(i*e+u)},h=Object(p.stylesFactory)((function(){return{wrapper:Object(d.css)(u||(u=a(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(d.css)(l||(l=a(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),textBox:Object(d.css)(c||(c=a(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))}}));n.d(e,"plugin",(function(){return b}));var b=new r.PanelPlugin((function(t){var e=t.data,n=t.width,r=t.height,u=o(Object(s.useState)([]),2),l=u[0],c=u[1],b=o(Object(s.useState)([]),2),g=b[0],x=b[1],y=h();console.log(y);var w=Object(s.useRef)(null),O=o(Object(s.useState)(6e4),2),j=O[0],S=O[1],P=o(Object(s.useState)(),2),D=P[0],E=P[1];Object(s.useEffect)((function(){E([{label:"1 minute",description:"Forcast 1 minutes",value:6e4},{label:"10 minutes",description:"Forcast 10 minutes",value:6e5},{label:"60 minutes",description:"Forcast 60 minutes",value:36e5}])}),[]),Object(s.useEffect)((function(){var t;if(w.current&&(null===(t=l)||void 0===t?void 0:t.length)>0){var e=l.map((function(t){return{date:t}})),o=g.map((function(t,n){return{date:new Date(e[n].date),volume:t}})),a=l.map((function(){var t,e;return{myDate:l[l.length-1]+(null===(e=null===(t=D)||void 0===t?void 0:t.find((function(t){return t.value===j})))||void 0===e?void 0:e.value)}})),i=g.map((function(t,e){return[e,t]})),u=a.map((function(t,e){var n=t.myDate;return{date:new Date(n),volume:m(i,i.length-1+e)}})).concat({date:new Date(l[l.length-1]),volume:g[g.length-1]}),c=v.select("#mychart");c.select("svg > *").remove();var s={top:20,right:5,bottom:10,left:5},f=n-s.left-s.right,d=r-s.top-s.bottom,p=c.append("g").attr("transform","translate("+s.left+" "+s.top+")"),h=v.scaleTime().rangeRound([0,f]),b=v.scaleLinear().rangeRound([d,0]),x=v.line().x((function(t){var e;return h(null===(e=t)||void 0===e?void 0:e.date)})).y((function(t){var e;return b(null===(e=t)||void 0===e?void 0:e.volume)}));h.domain([v.min(o,(function(t){return t.date})),v.max(u,(function(t){return t.date}))]),b.domain([v.min(o,(function(t){return t.volume})),v.max(o,(function(t){return t.volume}))]),p.append("g").attr("transform","translate(0 "+d+")").call(v.axisBottom(h)),p.append("g").call(v.axisLeft(b)).append("text").attr("fill","#fff").attr("transform","rotate(-90)").attr("y",6).attr("dy","0.71em").attr("text-anchor","end").text("Target Value"),p.append("path").datum(o).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",4.5).attr("d",x),p.append("path").datum(u).attr("fill","none").attr("stroke","tomato").attr("stroke-dasharray","10,7").attr("stroke-width",5.5).attr("d",x)}}),[n,r,j]);return console.log("width : ",n),console.log("height : ",r),f.a.createElement("div",{className:Object(d.cx)(y.wrapper,Object(d.css)(i||(i=a(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),n,r))},f.a.createElement("h3",null,"Select time interval what you want"),f.a.createElement(p.Select,{options:D,placeholder:"Select time interval to forcast",onChange:function(t){return function(t){var n,r;console.log("target value index : ",t),S(t),c(null===(n=e.series[0])||void 0===n?void 0:n.fields[0].values.toArray()),x(null===(r=e.series[0])||void 0===r?void 0:r.fields[1].values.toArray())}(t.value)}}),f.a.createElement("svg",{id:"mychart",width:n,height:r-57,viewBox:"-1 -1 "+n+" "+(r+10),ref:w},f.a.createElement("g",{fill:"red"})))})).setPanelOptions((function(t){return t.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:function(t){return t.showSeriesCount}})}))}])}));
//# sourceMappingURL=module.js.map