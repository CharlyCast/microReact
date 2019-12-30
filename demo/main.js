!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t){return t.length>2&&"o"===t[0]&&"n"===t[1]}function r(t,e,n){if(e.class&&n.class&&e.class==n.class&&n.component){if(console.log("Diffing component "+e.class.name),function(t,e){for(const n in t)if(n in e&&t.attr!=e.attr)return!1;for(const n in e)if(n in t&&t.attr!=e.attr)return!1;return!0}(n.props,e.props))return n;{const o=n.props.children[0],s=n.component.render();return e.component=n.component,e.domElt=n.domElt,e.props.children=[s],"string"!=typeof o&&r(t,s,o),e}}return""!=e.type&&e.type==n.type&&n.domElt?(console.log("Diffing dom element "+e.type),s(n.domElt,e,n),e.domElt=n.domElt,function(t,e,n){let o=n.props.children,s=e.props.children;var c=0;if("string"!=typeof o&&"string"!=typeof s)for(;c<o.length&&!(c>=s.length);c++){let e=o[c],n=s[c];e.domElt&&e!=n&&r(t,n,e)}if("string"!=typeof s)for(;c<s.length;c++)t.appendChild(i(s[c]))}(n.domElt,e,n),e):(e.domElt=i(e),n.domElt&&t.replaceChild(e.domElt,n.domElt),t.appendChild(e.domElt),e)}function s(t,e,n){const r=e.props,s=n.props;for(const e in s)e in r||!o(e)||t.removeEventListener(e.substring(2),s[e]);for(const e in r)e in s&&r[e]===s[e]||(o(e)&&t.addEventListener(e.substring(2),r[e]),"textContent"==e&&(t.innerHTML=r[e]));const i=e.props.style||{},c=n.props.style||{};for(const e in c)e in i||(t.style[e]="");for(const e in i)t.style[e]!==i[e]&&(t.style[e]=i[e]||"");"string"==typeof e.props.children?t.textContent=e.props.children:"string"==typeof n.props.children&&(t.textContent="")}function i(t){if(t.class){console.log("Instantiating "+t.class.name);const e=new t.class(t.props),n=e.render();return t.component=e,t.props.children=[n],e._vNode=t,i(n)}{console.log("Instanciating "+t.type);const e=document.createElement(t.type);return"string"!=typeof t.props.children&&t.props.children.forEach(t=>e.appendChild(i(t))),s(e,t,c),t.domElt=e,e}}n.r(e);const c={type:"",props:{children:[]}};class l{constructor(t){this.props=t,this._vNode={type:"",props:Object.assign(Object.assign({},t),{children:[c]})}}setState(t){this.state=t;const e=this._vNode.props.children;if("string"==typeof e)return;const n=e[0];n.domElt&&n.domElt.parentElement&&(e[0]=r(n.domElt.parentElement,this.render(),n))}}function p(t,e,...n){const o=Object.assign(Object.assign({},e),{children:d(n)?n:`${n}`});return"string"==typeof t?d(n)?{type:t,props:Object.assign(Object.assign({},e),{children:n})}:{type:t,props:o}:{type:"",props:o,class:t}}function d(t){return!(t.length>0&&("string"==typeof t[0]||"number"==typeof t[0]))}class a extends l{constructor(){super(...arguments),this.state={completed:!1},this.onClick=()=>{this.setState({completed:!this.state.completed}),console.log(this)}}render(){let t=f;return this.state.completed&&(t=g),p("div",{style:Object.assign(Object.assign({},t),u),onclick:this.onClick},p("p",{style:h},this.props.task))}}const u={fontWeight:"bold",borderRadius:"0.7rem",minHeight:"2rem",display:"flex",margin:"0.7rem",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",cursor:"pointer"},f={backgroundColor:"#00b712",backgroundImage:"linear-gradient(315deg, #00b712 0%, #5aff15 74%)"},g={backgroundColor:"#fbb034",backgroundImage:"linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)"},h={fontWeight:"bold",margin:"auto"};const m={backgroundColor:"white",height:"200px",width:"500px",textAlign:"center",margin:"auto",padding:"1rem",boxShadow:"1px 1px 17px 1px rgba(0,0,0,.16)",borderRadius:"0.7rem"};!function(t,e){if(!e)return;r(e,t,p("div",{}))}(p("div",{style:{backgroundColor:"#f8f8f8",minHeight:"100vh",height:"100%",display:"flex"}},p(class extends l{constructor(t){super(t),this.state={clicks:0},this.click=this.click.bind(this)}click(){this.setState({clicks:this.state.clicks+1})}render(){return p("div",{style:m},p("p",{style:{fontWeight:"bold",margin:"1rem"}},`You clicked ${this.state.clicks} times`),p("button",{style:{backgroundColor:"lightblue"},onclick:this.click},"Click !"),p(a,{task:"Test"}),p(a,{task:"Greet"}))}},null)),document.getElementById("app"))}]);