/*! For license information please see multi.step.js.LICENSE.txt */
(()=>{"use strict";var t=JetFormBuilderAbstract.ConditionItem;function e(){t.call(this),this.isSupported=function(t){var e;return!(null==t||null===(e=t.page_state)||void 0===e||!e.length)},this.setOptions=function(t){var e=t.page_state;this.pageState=e},this.isPassed=function(){var t,e=null===(t=this.list)||void 0===t||null===(t=t.block)||void 0===t||null===(t=t.page)||void 0===t||null===(t=t.canSwitch)||void 0===t?void 0:t.current;return"active"===this.pageState&&!e}}e.prototype=Object.create(t.prototype);const n=e;function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),u=new I(r||[]);return i(a,"_invoke",{value:j(t,n,u)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var d={};function p(){}function v(){}function y(){}var g={};l(g,u,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(O([])));b&&b!==e&&n.call(b,u)&&(g=b);var w=y.prototype=p.prototype=Object.create(g);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,u,s){var c=h(t[i],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==r(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,s)}),(function(t){o("throw",t,u,s)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function j(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=A(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function A(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,A(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(w),l(w,c,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function i(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,s,"next",t)}function s(t){i(a,r,o,u,s,"throw",t)}u(void 0)}))}}function u(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=JetFormBuilderAbstract,l=c.ReactiveVar,f=c.createConditionalBlock,h=(c.InputData,JetFormBuilderFunctions),d=h.validateInputs,p=h.getOffsetTop,v=h.focusOnInvalidInput,y=h.populateInputs,g=JetPlugins.hooks,m=g.addAction,b=g.doAction;function w(t,e){var n;this.node=t,this.index=+t.dataset.page,this.offset=+t.dataset.pageOffset,this.state=e,this.inputs=[],this.canSwitch=new l(null),this.isShow=new l(1===this.index),this.autoFocus=null===(n=window.JetFormBuilderSettings)||void 0===n?void 0:n.auto_focus,this.initialObserveState=!1}w.prototype.observe=function(){var t=this;this.isLast()||(this.observeInputs(),this.observeConditionalBlocks()),this.canSwitch.make(),this.isShow.make(),this.isShow.watch((function(){t.isShow.current?t.onShow():t.onHide()})),this.addButtonsListeners(),this.isFirst()&&(this.initialObserveState=!0,this.updateStateAsync().then((function(){})).catch((function(){}))),m("jet.fb.observe.input.manual","jet-form-builder/page-state",(function(e){return t.observeInput(e.nodes[0])})),b("jet.fb.multistep.page.init",this)},w.prototype.observeInputs=function(){var t,e=u(this.node.querySelectorAll("[data-jfb-sync]"));try{for(e.s();!(t=e.n()).done;){var n=t.value,r=this.observeInput(n);r&&b("jet.fb.multistep.page.observed.input",r,this)}}catch(t){e.e(t)}finally{e.f()}},w.prototype.observeInput=function(t){var e=this;if(!this.isNodeBelongThis(t)||!t.hasOwnProperty("jfbSync")||t.jfbSync.hasParent())return!1;var n=t.jfbSync;return this.handleInputEnter(n),n.loading.watch((function(){n.loading.current?e.canSwitch.current=!1:e.updateState()})),n.reporting.restrictions.length?(this.inputs.push(n),n.watchValidity((function(){return e.updateState()})),n):n},w.prototype.observeConditionalBlocks=function(){var t,e=this,r=u(this.node.querySelectorAll("[data-jfb-conditional]"));try{var o=function(){var r=t.value;if(!e.isNodeBelongThis(r))return"continue";var o,i=f(r,e.state.getRoot()),a=u(i.list.getConditions());try{for(a.s();!(o=a.n()).done;)if(o.value instanceof n){i.page=e,e.canSwitch.watch((function(){return i.list.onChangeRelated()}));break}}catch(t){a.e(t)}finally{a.f()}};for(r.s();!(t=r.n()).done;)o()}catch(t){r.e(t)}finally{r.f()}},w.prototype.onShow=function(){this.node.classList.remove("jet-form-builder-page--hidden"),this.initialObserveState||(this.initialObserveState=!0,this.updateStateAsync().then((function(){})).catch((function(){})))},w.prototype.onHide=function(){this.node.classList.add("jet-form-builder-page--hidden")},w.prototype.updateState=function(){var t,e=u(this.getInputs());try{for(e.s();!(t=e.n()).done;)if(!t.value.reporting.validityState.current)return void(this.canSwitch.current=!1)}catch(t){e.e(t)}finally{e.f()}this.canSwitch.current=!0},w.prototype.updateStateAsync=a(o().mark((function t(){var e,n=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(n.length>0&&void 0!==n[0])||n[0],t.prev=1,t.next=4,d(this.getInputs(),e);case 4:this.canSwitch.current=!0,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),this.canSwitch.current=!1;case 10:case"end":return t.stop()}}),t,this,[[1,7]])}))),w.prototype.addButtonsListeners=function(){var t,e=this,n=u(this.node.querySelectorAll(".jet-form-builder__next-page, .jet-form-builder__prev-page"));try{var r=function(){var n=t.value;if(!e.isNodeBelongThis(n))return"continue";var r=n.classList.contains("jet-form-builder__prev-page");n.addEventListener("click",(function(){return e.changePage(r)}))};for(n.s();!(t=n.n()).done;)r()}catch(t){n.e(t)}finally{n.f()}},w.prototype.changePage=function(){var t=a(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return this.state.index.current=this.index-1,t.abrupt("return");case 3:if(!this.getLockState().current){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,this.updateStateAsync(!1);case 7:if(!this.canSwitch.current){t.next=10;break}return this.state.index.current=this.index+1,t.abrupt("return");case 10:this.autoFocus&&v(this.getInputs());case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),w.prototype.isNodeBelongThis=function(t){var e=t.closest(".jet-form-builder-page");return!!e&&e.isEqualNode(this.node)},w.prototype.getInputs=function(){return y(this.inputs)},w.prototype.getLockState=function(){var t,e,n=this.state.getRoot();return(null!==(t=null==n||null===(e=n.parent)||void 0===e||null===(e=e.root)||void 0===e?void 0:e.form)&&void 0!==t?t:n.form).lockState},w.prototype.isLast=function(){return this.state.isLastPage(this)},w.prototype.isFirst=function(){return this.state.isFirstPage(this)},w.prototype.handleInputEnter=function(t){var e,n=this;null==t||null===(e=t.enterKey)||void 0===e||e.addFilter((function(t){return n.changePage().then((function(){})).catch((function(){})),!1}))},w.prototype.getOffsetTop=function(){return p(this.node)-this.offset};const S=w;function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const j=function(t,e){var n=this;this.node=t,this.state=e,this.state.index.watch((function(){return n.updateItems()})),this.updateItems=function(){var t,e=this.state.index.current,n=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(this.node.children);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=+r.dataset.page;o<e?this.makePassed(r):e===o?this.makeActive(r):this.makeNotPassed(r)}}catch(t){n.e(t)}finally{n.f()}},this.makeActive=function(t){t.classList.remove("passed-page"),t.classList.add("active-page")},this.makePassed=function(t){t.classList.add("passed-page"),t.classList.remove("active-page")},this.makeNotPassed=function(t){t.classList.remove("active-page","passed-page")}};function A(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return L(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var k=JetFormBuilderAbstract,I=k.ConditionalBlock,O=k.ReactiveVar,P=JetPlugins.hooks.doAction;const E=function(){this.root=null,this.block=null,this.index=null,this.elements=[],this.setScope=function(t){t instanceof I?this.block=t:this.root=t},this.setPages=function(t){var e=this;this.elements=t.map((function(t){return new S(t,e)})),this.elements.forEach((function(t){return t.observe()})),this.index=new O(1),this.index.make(),this.index.watch(this.onChangeIndex.bind(this));var n,r=A(this.getScopeNode().children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.matches(".jet-form-builder-progress-pages")&&(this.progress=new j(o,this))}}catch(t){r.e(t)}finally{r.f()}var i=this.getRoot().getSubmit().submitter;i.hasOwnProperty("status")&&i.watchReset((function(){e.index.current=1}))},this.onChangeIndex=function(){var t,e,n=A(this.getPages());try{for(n.s();!(e=n.n()).done;){var r=e.value;r.isShow.current=r.index===this.index.current}}catch(t){n.e(t)}finally{n.f()}null===(t=window)||void 0===t||null===(t=t.jQuery(document))||void 0===t||t.trigger("jet-form-builder/switch-page")},this.getCurrentPage=function(){var t,e=A(this.getPages());try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.isShow.current)return n}}catch(t){e.e(t)}finally{e.f()}return!1},this.getPages=function(){return this.elements},this.getScopeNode=function(){var t,e;return null!==(t=null===(e=this.block)||void 0===e?void 0:e.node)&&void 0!==t?t:this.root.rootNode},this.getRoot=function(){var t,e;return null!==(t=null===(e=this.block)||void 0===e?void 0:e.root)&&void 0!==t?t:this.root},this.isLastPage=function(t){return this.elements.at(-1)===t},this.isFirstPage=function(t){return this.elements[0]===t},this.onReady=function(){P("jet.fb.multistep.init",this)}};function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F(t){var e=new E;e.setScope(t);var n,r=[],o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(e.getScopeNode().childNodes);try{for(o.s();!(n=o.n()).done;){var i,a=n.value;null!=a&&null!==(i=a.classList)&&void 0!==i&&i.contains("jet-form-builder-page")&&r.push(a)}}catch(t){o.e(t)}finally{o.f()}return r.length?(e.setPages(r),e):e}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var T=JetPlugins.hooks,B=T.addAction,C=T.addFilter,R=JetFormBuilderFunctions.getScrollParent;B("jet.fb.observe.after","jet-form-builder/multi-step",(function(t){var e,n=F(t);null!==(e=n.getPages())&&void 0!==e&&e.length&&(t.multistep=n,n.onReady())}),15),B("jet.fb.conditional.init","jet-form-builder/multi-step",(function(t){var e,n=F(t);null!==(e=n.getPages())&&void 0!==e&&e.length&&(t.multistep=n,n.onReady())})),C("jet.fb.conditional.types","jet-form-builder/multi-step",(function(t){return[n].concat(function(t){if(Array.isArray(t))return N(t)}(e=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var e})),B("jet.fb.multistep.init","jet-form-builder/multi-step/autoscroll",(function(t){var e;null!==(e=window)&&void 0!==e&&null!==(e=e.JetFormBuilderSettings)&&void 0!==e&&e.scroll_on_next&&t.index.watch((function(){var e=t.getCurrentPage(),n=R(e.node),r=e.getOffsetTop();n.scrollTo({top:r,behavior:"smooth"})}))}))})();