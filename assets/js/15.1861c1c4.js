(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{300:function(e,t,n){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var s,i,r=a.util.type(t);switch(n=n||{},r){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var l in s={},n[i]=s,t)t.hasOwnProperty(l)&&(s[l]=e(t[l],n));return s;case"Array":return i=a.util.objId(t),n[i]?n[i]:(s=[],n[i]=s,t.forEach(function(t,a){s[a]=e(t,n)}),s);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){var i=(s=s||a.languages)[e],r={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);n.hasOwnProperty(l)||(r[l]=i[l])}var c=s[e];return s[e]=r,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=r)}),r},DFS:function e(t,n,s,i){i=i||{};var r=a.util.objId;for(var l in t)if(t.hasOwnProperty(l)){n.call(t,l,t[l],s||l);var o=t[l],c=a.util.type(o);"Object"!==c||i[r(o)]?"Array"!==c||i[r(o)]||(i[r(o)]=!0,e(o,n,l,i)):(i[r(o)]=!0,e(o,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var s={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s);for(var i,r=e.querySelectorAll(s.selector),l=0;i=r[l++];)a.highlightElement(i,!0===t,s.callback)},highlightElement:function(n,s,i){for(var r,l="none",o=n;o&&!t.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(t)||[,"none"])[1].toLowerCase(),r=a.languages[l]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+l,n.parentNode&&(o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+l));var c={element:n,language:l,grammar:r,code:n.textContent},u=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),s.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,i,r,l,o){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==o)return;var u=n[c];u="Array"===a.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var g=u[d],f=g.inside,p=!!g.lookbehind,h=!!g.greedy,m=0,v=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=i,b=r;x<t.length;b+=t[x].length,++x){var k=t[x];if(t.length>e.length)return;if(!(k instanceof s)){if(h&&x!=t.length-1){if(g.lastIndex=b,!(C=g.exec(e)))break;for(var w=C.index+(p?C[1].length:0),F=C.index+C[0].length,_=x,A=b,S=t.length;_<S&&(A<F||!t[_].type&&!t[_-1].greedy);++_)w>=(A+=t[_].length)&&(++x,b=A);if(t[x]instanceof s)continue;$=_-x,k=e.slice(b,A),C.index-=b}else{g.lastIndex=0;var C=g.exec(k),$=1}if(C){p&&(m=C[1]?C[1].length:0);F=(w=C.index+m)+(C=C[0].slice(m)).length;var I=k.slice(0,w),j=k.slice(F),T=[x,$];I&&(++x,b+=I.length,T.push(I));var N=new s(c,f?a.tokenize(C,f):C,v,C,h);if(T.push(N),j&&T.push(j),Array.prototype.splice.apply(t,T),1!=$&&a.matchGrammar(e,t,n,x,b,!0,c),l)break}else if(l)break}}}}},tokenize:function(e,t){var n=[e],s=t.rest;if(s){for(var i in s)t[i]=s[i];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,i=0;s=n[i++];)s(t)}},Token:s};function s(e,t,n,a,s){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!s}if(e.Prism=a,s.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return s.stringify(e,t)}).join("");var n={type:e.type,content:s.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,i)}a.hooks.run("wrap",n);var r=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(r?" "+r:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),s=n.language,i=n.code,r=n.immediateClose;e.postMessage(a.highlight(i,a.languages[s],s)),r&&e.close()},!1),a):a;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",i)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,s=e.getAttribute("data-src"),i=e,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(e.className.match(r)||[,""])[1]),!n){var l=(s.match(/\.(\w+)$/)||[,""])[1];n=t[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))},354:function(e,t,n){},458:function(e,t,n){"use strict";var a=n(354);n.n(a).a},587:function(e,t,n){"use strict";n.r(t);var a=n(300),s=n.n(a),i={name:"flex",data:function(){return{containerStyle:{"flex-direction":"row","flex-wrap":"nowrap","justify-content":"flex-start","align-items":"flex-start","align-content":"flex-start"},itemStyles:[{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"}],choosenItemIndex:-1,choosenItem:{},hideTop:!1,flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around"],alignItems:["flex-start","flex-end","center","baseline","stretch"],alignContent:["flex-start","flex-end","center","space-between","space-around"],flexGrow:[0,1],flexShrink:[0,1],alignSelf:["auto","flex-start","flex-end","center","baseline"]}},watch:{containerStyle:{handler:function(){this.setContainerStyleStr()},deep:!0}},computed:{order:function(){for(var e=[],t=0;t<this.itemStyles.length;t++)e.push(t);return e}},methods:{styleToString:function(e){var t="";for(var n in e)t+="".concat(n,": ").concat(e[n],";\n");return t},setContainerStyleStr:function(){this.$refs.flexContainer.innerHTML=s.a.highlight(this.styleToString(this.containerStyle),s.a.languages.css)},changeItemCss:function(e,t){this.$refs.flexItem.innerHTML=s.a.highlight(this.styleToString(e),s.a.languages.css),this.choosenItem=e,this.choosenItemIndex=t}},mounted:function(){this.setContainerStyleStr()}},r=(n(458),n(9)),l=Object(r.a)(i,function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"live-flex"},[a("p",{staticClass:"tip"},[t._v("click item to change stlye")]),t._v(" "),a("div",{staticClass:"flex-container",style:t.containerStyle},t._l(t.itemStyles,function(e,n){return a("div",{key:n,staticClass:"flex-item",style:e,on:{click:function(a){return t.changeItemCss(e,n)}}},[t._v("item-"+t._s(n+1)+"\n    ")])}),0),t._v(" "),a("p",{staticClass:"title"},[a("span",[t._v("style of container")]),t._v(" "),a("span",{staticClass:"tip hide-btn",on:{click:function(){return e.hideTop=!e.hideTop}}},[a("i",{class:t.hideTop?"el-icon-arrow-up":"el-icon-arrow-down"}),t._v(" "+t._s(t.hideTop?"show":"hide"))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideTop,expression:"!hideTop"}],staticClass:"bottom-border"},[a("div",{staticClass:"language-css extra-class"},[a("pre",{staticClass:"language-css"},[a("code",{ref:"flexContainer"})])]),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("flex-direction:")]),t._v(" "),t._l(t.flexDirection,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["flex-direction"],callback:function(e){t.$set(t.containerStyle,"flex-direction",e)},expression:"containerStyle['flex-direction']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("flex-wrap:")]),t._v(" "),t._l(t.flexWrap,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["flex-wrap"],callback:function(e){t.$set(t.containerStyle,"flex-wrap",e)},expression:"containerStyle['flex-wrap']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("justify-content:")]),t._v(" "),t._l(t.justifyContent,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["justify-content"],callback:function(e){t.$set(t.containerStyle,"justify-content",e)},expression:"containerStyle['justify-content']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("align-items:")]),t._v(" "),t._l(t.alignItems,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["align-items"],callback:function(e){t.$set(t.containerStyle,"align-items",e)},expression:"containerStyle['align-items']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("align-content:")]),t._v(" "),t._l(t.alignContent,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["align-content"],callback:function(e){t.$set(t.containerStyle,"align-content",e)},expression:"containerStyle['align-content']"}})})],2)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:-1!=t.choosenItemIndex,expression:"choosenItemIndex != -1"}],staticClass:"bottom-border"},[a("p",{staticClass:"title"},[t._v("style of item-"+t._s(t.choosenItemIndex+1))]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{staticClass:"language-css"},[a("code",{ref:"flexItem"})])]),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("order:")]),t._v(" "),t._l(t.order,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem.order,callback:function(e){t.$set(t.choosenItem,"order",e)},expression:"choosenItem['order']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("flex-grow:")]),t._v(" "),t._l(t.flexGrow,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["flex-grow"],callback:function(e){t.$set(t.choosenItem,"flex-grow",e)},expression:"choosenItem['flex-grow']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("flex-shrink:")]),t._v(" "),t._l(t.flexShrink,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["flex-shrink"],callback:function(e){t.$set(t.choosenItem,"flex-shrink",e)},expression:"choosenItem['flex-shrink']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("align-self:")]),t._v(" "),t._l(t.alignSelf,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["align-self"],callback:function(e){t.$set(t.choosenItem,"align-self",e)},expression:"choosenItem['align-self']"}})})],2)])])},[],!1,null,"8612575e",null);t.default=l.exports}}]);