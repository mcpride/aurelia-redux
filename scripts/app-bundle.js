define("app",["exports"],function(e){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.App=function e(){n(this,e),this.data="Hello World!"}}),define("environment",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={debug:!1,testing:!1}}),define("main",["exports","./environment"],function(e,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e){e.use.standardConfiguration().feature("resources"),i.default.debug&&e.use.developmentLogging(),i.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=r;var i=t(n);Promise.config({warnings:{wForgottenReturn:!1}})}),define("markdown-aurelia",["exports","marked","aurelia-framework"],function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r){t&&Object.defineProperty(e,n,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n,t,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce(function(t,r){return r(e,n,t)||t},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,n,o),o=null),o}Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownAurelia=void 0;var u,l,d=r(n);e.MarkdownAurelia=(u=function(){function e(){o(this,e),i(this,"raw",l,this),this.html=""}return e.prototype.rawChanged=function(e){this.html=(0,d.default)(e)},e}(),l=a(u.prototype,"raw",[t.bindable],{enumerable:!0,initializer:null}),u)}),define("markdown-redux",["exports","marked","aurelia-framework","redux"],function(e,n,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,r){t&&Object.defineProperty(e,n,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n,t,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce(function(t,r){return r(e,n,t)||t},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,n,o),o=null),o}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{raw:"",html:""},n=arguments[1];switch(n.type){case f:return{raw:n.text,html:(0,c.default)(n.text)};default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownRedux=void 0;var d,s,c=i(n),f=(e.MarkdownRedux=(d=function(){function e(){a(this,e),o(this,"raw",s,this),this.html="",this.store=(0,r.createStore)(l),this.store.subscribe(this.update.bind(this))}return e.prototype.update=function(){var e=this.store.getState();this.html=e.html,this.raw=e.raw},e.prototype.keyupHandler=function(e){this.store.dispatch(p(e))},e.prototype.attached=function(){this.keyupHandler(this.raw)},e}(),s=u(d.prototype,"raw",[t.bindable],{enumerable:!0,initializer:null}),d),"UPDATE"),p=function(e){return{type:f,text:e}}}),define("markdown",["exports","marked","aurelia-framework","redux","redux-undo"],function(e,n,t,r,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r){t&&Object.defineProperty(e,n,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n,t,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce(function(t,r){return r(e,n,t)||t},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,n,o),o=null),o}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{raw:"",html:""},n=arguments[1];switch(n.type){case b:return{raw:n.text,html:(0,f.default)(n.text)};default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.Markdown=void 0;var s,c,f=o(n),p=o(i),b=(e.Markdown=(s=function(){function e(){u(this,e),a(this,"raw",c,this),this.html="",this.store=(0,r.createStore)((0,p.default)(d)),this.pastCount=0,this.futureCount=0,this.store.subscribe(this.update.bind(this))}return e.prototype.update=function(){var e=this.store.getState().present;this.html=e.html,this.raw=e.raw,this.pastCount=this.store.getState().past.length,this.futureCount=this.store.getState().future.length},e.prototype.keyupHandler=function(e){this.store.dispatch(h(e))},e.prototype.undo=function(){this.store.dispatch(i.ActionCreators.undo())},e.prototype.redo=function(){this.store.dispatch(i.ActionCreators.redo())},e.prototype.attached=function(){this.keyupHandler(this.raw)},e}(),c=l(s.prototype,"raw",[t.bindable],{enumerable:!0,initializer:null}),s),"UPDATE"),h=function(e){return{type:b,text:e}}}),define("resources/index",["exports"],function(e){"use strict";function n(e){}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=n}),define("text!app.html",["module"],function(e){e.exports='<template>\n\n  <!-- The Aurelia Way -->\n  <!--<require from="./markdown-aurelia"></require>\n  <markdown-aurelia raw.bind="data"></markdown-aurelia>-->\n\n  <!-- The Redux Way -->\n  <!--<require from="./markdown-redux"></require>\n  <markdown-redux raw.bind="data"></markdown-redux>-->\n\n  <!-- The Redux Way with Undo/Redo -->\n  <require from="./markdown"></require>\n  <markdown raw.bind="data"></markdown>\n\n</template>\n'}),define("text!styles.css",["module"],function(e){e.exports="body {\n  background-color: #37474F;\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  padding: 15px;\n}\n\n.cf:before,\n.cf:after {\n  content: \" \";\n  display: table;\n}\n\n.cf:after {\n  clear: both;\n}\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.markdown-editor {\n  width: 100%;\n  height: auto;\n  margin-bottom: 25px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Passion One', cursive;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\n\nh1 {\n  text-align: center;\n  font-size: 3.6rem;\n}\n\n.subtitle {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.markdown-editor .editor,\n.markdown-editor .preview {\n  float: left;\n  min-height: 60vh;\n  padding: 10px;\n  width: 100%;\n  transition: all 200ms ease-out;\n  margin-bottom: 30px;\n}\n\n.markdown-editor .preview {\n  border: dashed 2px #b5bfc3;\n}\n\n.markdown-editor .preview:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.toolbar {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.toolbar button {\n  border: 0px;\n  padding: 15px 25px;\n  margin: 0px 10px;\n  -webkit-appearance: none;\n  appearance: none;\n  background: #263238;\n  color: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  border-bottom: solid 2px #546E7A;\n  transition: all 200ms ease-in;\n}\n\n.toolbar button:active,\n.toolbar button:focus,\n.toolbar button:hover {\n  background: #546e7a;\n  border-bottom: solid 2px #90A4AE;\n}\n\na:link    { color: #fff }\na:visited { color: #bebebe }\na:hover   { background: #fff; color: #37474F }\na:active  { color: #fff }\n\n/*Larger profiles and upwards*/\n\n@media all and (min-width: 768px) {\n  body {\n    padding: 25px 100px;\n  }\n  .markdown-editor .editor,\n  .markdown-editor .preview {\n    width: 47.5%;\n  }\n  .markdown-editor .preview {\n    margin-left: 5%;\n  }\n}\n"}),define("text!markdown-aurelia.html",["module"],function(e){e.exports='<template>\n  <require from="./styles.css"></require>\n\n  <h1>Aurelia Markdown</h1>\n\n  <div class="markdown-editor cf">\n    <textarea class="editor" value.bind="raw"></textarea>\n    <div class="preview" innerHTML.bind="html"></div>\n  </div>\n</template>\n'}),define("text!markdown-redux.html",["module"],function(e){e.exports='<template>\n  <require from="./styles.css"></require>\n\n  <h1>Aurelia Markdown Redux</h1>\n\n  <div class="markdown-editor cf">\n    <textarea class="editor"\n              keyup.trigger="keyupHandler($event.target.value) & debounce"\n              value.one-way="raw"></textarea>\n    <div class="preview" innerHTML.bind="html"></div>\n  </div>\n</template>\n'}),define("text!markdown.html",["module"],function(e){e.exports='<template>\n  <require from="./styles.css"></require>\n\n  <h1>Aurelia Markdown Redux</h1>\n\n  <div class="toolbar">\n    <button click.trigger="undo()">(${pastCount}) Undo</button>\n    <button click.trigger="redo()">Redo (${futureCount})</button>\n  </div>\n\n  <div class="markdown-editor cf">\n    <textarea class="editor"\n              keyup.trigger="keyupHandler($event.target.value) & debounce"\n              value.one-way="raw"></textarea>\n    <div class="preview" innerHTML.bind="html"></div>\n  </div>\n</template>\n'});