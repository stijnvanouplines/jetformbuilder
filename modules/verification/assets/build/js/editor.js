/*! For license information please see editor.js.LICENSE.txt */
(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){var r,i,a;r=n,i=t,a=o[t],(i=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=wp.i18n.__,i=wp.element.useMemo,a=wp.components,l=a.Button,c=a.Tooltip,u=JetFBHooks.useActionsEdit,f=JetFBComponents.ActionsAfterNewButtonSlotFill,s=JetFBActions.Tools,m=function(){return{id:s.getRandomID(),type:"verification",settings:{}}};const p={base:{jfbApiVersion:2,name:"jf-verification"},settings:{render:function(){var e=u(),t=e.actions,a=e.setActions,s=i(m,[]),p=t.some((function(e){return"verification"===e.type}));return wp.element.createElement(f.Fill,null,wp.element.createElement(c,{text:o(p?"You have already added the Verification action":"Click here to add Verification action","jet-form-builder"),delay:200,position:"top center"},wp.element.createElement(l,{onClick:function(){var e;a([n({},s)].concat(function(e){if(Array.isArray(e))return r(e)}(e=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))},disabled:p,variant:"tertiary"},o("+ Verification","jet-form-builder"))))},icon:"filter"}};function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(){h=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),l=new I(r||[]);return o(a,"_invoke",{value:C(e,n,l)}),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var m="suspendedStart",p="suspendedYield",y="executing",v="completed",b={};function g(){}function w(){}function j(){}var E={};u(E,a,(function(){return this}));var S=Object.getPrototypeOf,O=S&&S(S(L([])));O&&O!==n&&r.call(O,a)&&(E=O);var A=j.prototype=g.prototype=Object.create(E);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,i,a,l){var c=s(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==d(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,l)}),(function(e){n("throw",e,a,l)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,l)}))}l(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function C(t,n,r){var o=m;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var c=F(l,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var u=s(t,n,r);if("normal"===u.type){if(o=r.done?v:p,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function F(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,F(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=s(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function L(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(d(t)+" is not iterable")}return w.prototype=j,o(A,"constructor",{value:j,configurable:!0}),o(j,"constructor",{value:w,configurable:!0}),w.displayName=u(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,u(e,c,"GeneratorFunction")),e.prototype=Object.create(A),e},t.awrap=function(e){return{__await:e}},_(x.prototype),u(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(A),u(A,c,"Generator"),u(A,a,(function(){return this})),u(A,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}function y(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}var v=wp.apiFetch;function b(){var e;return e=h().mark((function e(t){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return n=e.sent,e.abrupt("return",n.map((function(e){var t=e.title;return{value:e.id,label:t.rendered}})));case 4:case"end":return e.stop()}}),e)})),b=function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){y(i,r,o,a,l,"next",e)}function l(e){y(i,r,o,a,l,"throw",e)}a(void 0)}))},b.apply(this,arguments)}const g=function(e){return b.apply(this,arguments)};var w=wp.url.addQueryArgs;function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=wp.element,O=S.useState,A=S.useEffect;const _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=j(O([]),2),n=t[0],r=t[1],o=j(O(""),2),i=o[0],a=o[1];return A((function(){var t;i?g({path:(t=i,w("/wp/v2/pages",{search:t}))}).then(r):r(e)}),[i,e.length]),[n,a]};var x="verification",C="VERIFICATION.SUCCESS",F="VERIFICATION.FAILED",P="_jfb_verification_token";const k=JSON.parse('[{"type":"send_email","settings":{"mail_to":"form","from_field":"_verify_user_email","subject":"[%CT::SiteName%] Confirm your email","content":"Please confirm your registration on site %CT::SiteName%.\\n\\n<b>If this was a mistake, ignore this email and nothing will happen.</b>\\n\\nTo complete the registration click on the link:\\n%_jfb_verification_url%"},"events":["DEFAULT.PROCESS"]}]');var I=wp.i18n.__;const L=function(){return wp.element.createElement(React.Fragment,null,wp.element.createElement("h3",{style:{marginTop:0}},I("Here is a brief description of how this verification action works:","jet-form-builder")),wp.element.createElement("p",null,I("1. The user sends the form for the first time. \nOn this stage, all actions that having the","jet-form-builder")+" ",wp.element.createElement("code",null,"DEFAULT.PROCESS")," "+I("event are executed. \nAfter that, Save Record action is executed, even if it is not present \nin the list of actions. At the same time, a unique token in a hashed \nform is stored in a separate table in the database.","jet-form-builder")),wp.element.createElement("p",null,I("2. The user receives an email containing a link to your \nsite with a key to the previously saved token. This can be achieved by sending \na letter to e-mail.","jet-form-builder")),wp.element.createElement("p",null,I("3. After clicking the link, the plugin checks the key with \nthe token. If the result is positive, the actions with either no events \nor with the","jet-form-builder")+" ",wp.element.createElement("code",null,"VERIFICATION.SUCCESS")," "+I("event are executed. If the result is negative, only actions with the","jet-form-builder")+" ",wp.element.createElement("code",null,"VERIFICATION.FAILED")," "+I("event will run.","jet-form-builder")))};function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){var r,o,i;r=e,o=t,i=n[t],(o=function(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===T(t)?t:String(t)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||V(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||V(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=wp.components,U=M.__experimentalToggleGroupControl,H=M.__experimentalToggleGroupControlOption,G=M.ToggleGroupControl,z=M.ToggleGroupControlOption,Y=M.TextControl,$=M.BaseControl,Z=M.ComboboxControl,q=M.Button,Q=M.Flex,W=M.SelectControl;G=G||U,z=z||H;var K=wp.i18n.__,X=wp.element,ee=X.useState,te=X.useEffect,ne=X.useMemo,re=wp.url.addQueryArgs,oe=wp.data.useDispatch,ie=JetFBComponents,ae=ie.BaseHelp,le=ie.BaseAction,ce=ie.ToggleControl,ue=ie.ActionModalHeaderSlotFill,fe=JetFBHooks,se=fe.useActions,me=fe.useFields,pe=fe.useCurrentAction,de=(fe.useUpdateCurrentActionMeta,JetFBActions),he=de.Tools,ye=(0,de.convertFlow)(k),ve=function(e,t){var n,r=new Set(e.map((function(e){return e.value}))),o=[],i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=V(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var a=n.value;r.has(a.value)||o.push(a)}}catch(e){i.e(e)}finally{i.f()}return[].concat(R(e),o)};var be=JetFBHooks.useLoopedAction,ge=JetFBComponents,we=ge.EditActionSettingsButton,je=ge.ActionItemWrapper,Ee=ge.SelectActionsControl,Se=ge.ActionItemMoreButton,Oe=wp.components,Ae=Oe.Flex,_e=Oe.CardBody;function xe(e){return xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xe(e)}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(n),!0).forEach((function(t){var r,o,i;r=e,o=t,i=n[t],(o=function(e){var t=function(e,t){if("object"!==xe(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==xe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===xe(t)?t:String(t)}(o))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke,Ie=wp.data,Le=Ie.select,Te=Ie.dispatch;var Be=JetFBComponents.BaseComputedField,Ne=wp.i18n,De=(Ne.sprintf,Ne.__);function Re(){Be.call(this),this.getSupportedActions=function(){return["register_user"]},this.getName=function(){return P},this.getLabel=function(){return De("Secure unique token","jet-form-builder")},this.getHelp=function(){return De("A computed field. Usually used to save it in the password fields","jet-form-builder")}}Re.prototype=Object.create(Be.prototype);const Ve=Re;function Je(){Ve.call(this),this.isSupported=function(e){var t;return"verification"===e.type||"register_user"===e.type&&Object.values(null!==(t=e.selfSettings.fields_map)&&void 0!==t?t:{}).includes(P)}}Je.prototype=Object.create(Ve.prototype);const Me=Je;var Ue=JetFBComponents.BaseComputedField,He=wp.i18n,Ge=(He.sprintf,He.__);function ze(){Ue.call(this),this.getSupportedActions=function(){return["verification"]},this.getName=function(){return"_jfb_verification_token_id"},this.getLabel=function(){return Ge("ID of secure unique token","jet-form-builder")},this.getHelp=function(){return Ge("A computed field from the Verification action.","jet-form-builder")}}ze.prototype=Object.create(Ue.prototype);const Ye=ze;var $e=JetFBComponents.BaseComputedField,Ze=wp.i18n.__;function qe(){$e.call(this),this.getSupportedActions=function(){return["verification"]},this.getName=function(){return"_jfb_verification_url"},this.getLabel=function(){return Ze("Verification URL","jet-form-builder")},this.getHelp=function(){return Ze("A computed field from the Verification action. \nUsually used to send it using the Send by Email action.","jet-form-builder")}}qe.prototype=Object.create($e.prototype);const Qe=qe;function We(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ke=JetFBHooks,Xe=Ke.useLoopedAction,et=Ke.useActionsEdit,tt=Ke.useActions,nt=JetFBComponents,rt=nt.EditActionSettingsButton,ot=nt.EditActionConditionsButton,it=nt.ActionItemWrapper,at=nt.SelectActionsControl,lt=nt.ActionItemMoreButton,ct=nt.ActionItemDetails,ut=wp.components,ft=ut.Flex,st=ut.CardBody,mt=ut.CardFooter,pt=ut.Button,dt=wp.i18n.__;var ht=wp.hooks.addFilter,yt=JetFBActions,vt=yt.addAction,bt=yt.addComputedField,gt=wp.data,wt=gt.subscribe,jt=gt.dispatch;vt(x,(function(e){var t,n,r,o=e.onChangeSettingObj,i=e.settings,a=D(se([]),2),l=a[0],c=a[1],u=D(ee(!1),2),f=u[0],s=u[1],m=me({withInner:!1},[]),p=pe().currentAction,d=ne((function(){return m.find((function(e){var t;return"email"===(null==e||null===(t=e.attributes)||void 0===t?void 0:t.field_type)}))}),[]),h=D(ee(Boolean(i.mail_to)),2),y=h[0],v=h[1],b=ne((function(){return l.findIndex((function(e){var t=e.events,n=void 0===t?[]:t,r=e.type;return-1!==n.indexOf(C)&&"redirect_to_page"===r}))}),[]),w=ne((function(){return l.findIndex((function(e){var t=e.events,n=void 0===t?[]:t,r=e.type;return-1!==n.indexOf(F)&&"redirect_to_page"===r}))}),[]),j=null!==(t=l[b])&&void 0!==t?t:{},E=null!==(n=l[w])&&void 0!==n?n:{},S=D(ee([]),2),O=S[0],A=S[1],x=D(_(O),2),P=x[0],k=x[1],I=D(_(O),2),T=I[0],B=I[1],V=oe("jet-forms/actions").openActionSettings,J=function(e,t){var n=new le({type:"redirect_to_page"});return n.events=[t],e&&(n.selfSettings={redirect_type:"static_page",redirect_page:e}),c([].concat(R(l.map((function(e){return p.id!==e.id?e:p}))),[n])),n};return te((function(){g({path:"/wp/v2/pages"}).then((function(e){return A((function(t){return ve(t,e)}))}));var e=[i.success_page,i.failed_page].filter(Boolean);e.length&&g({path:re("/wp/v2/pages",{include:e})}).then((function(e){return A((function(t){return ve(t,e)}))}))}),[]),wp.element.createElement(React.Fragment,null,wp.element.createElement(ue.Fill,null,wp.element.createElement(Q,{gap:1},K("Edit Verification action","jet-form-builder"),wp.element.createElement(q,{variant:"tertiary",isPressed:f,icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),onClick:function(){return s((function(e){return!e}))}}))),f&&wp.element.createElement(L,null),wp.element.createElement($,{label:K("Link Lifespan","jet-form-builder"),className:"jet-fb label-reset-margin"},wp.element.createElement("div",{style:{flex:3}},wp.element.createElement(Y,{value:null!==(r=i.lifespan)&&void 0!==r?r:4,onChange:function(e){return o({lifespan:e})}}),wp.element.createElement(ae,{style:{marginTop:"-4px"}},K('Indicates for how many hours a verification link \nwill be active. If you leave this field empty or enter "0", it means \nverification can be completed at any given time.',"jet-form-builder")))),wp.element.createElement($,{label:K("Email Field","jet-form-builder"),className:"jet-fb label-reset-margin"},wp.element.createElement("div",{className:"jet-control-clear-full"},wp.element.createElement(W,{value:i.mail_to,onChange:function(e){return o({mail_to:e})},options:he.withPlaceholder(m),hideLabelFromVision:!0}),wp.element.createElement(ae,null,K("Send a verification link to the email address \nprovided in this field.","jet-form-builder")),!y&&Boolean(d)&&wp.element.createElement(ae,null,wp.element.createElement(Q,{justify:"flex-start",gap:1},K("(Suggestion) Choose the:","jet-form-builder"),wp.element.createElement(q,{isLink:!0,onClick:function(){v(!0),o({mail_to:d.value})}},d.label),K("field","jet-form-builder"))))),i.mail_to&&wp.element.createElement(ce,{checked:Boolean(i.custom_email),onChange:function(e){return o({custom_email:e})},help:K("If disabled, a standard verification email will be sent. \nIf enabled, you can create a custom verification email \nwith a separate Send Email action.","jet-form-builder")},wp.element.createElement(Q,{gap:3,justify:"flex-start"},K("Create custom verification email","jet-form-builder"),i.custom_email&&wp.element.createElement(q,{isLink:!0,onClick:function(){var e,t=((e=D(ye.list,1)[0]).selfSettings=N(N({},e.selfSettings),{},{from_field:i.mail_to}),c([].concat(R(l.map((function(e){return p.id!==e.id?e:p}))),[N({},e)])),e);V({index:l.length,item:t})}},K("+ Add Send Email action","jet-form-builder")))),wp.element.createElement($,{label:K("Success Page","jet-form-builder"),className:"control-flex"},wp.element.createElement(Q,{style:{flex:3.1},direction:"column"},-1!==b?wp.element.createElement(React.Fragment,null,wp.element.createElement(ae,null,K("You have already configured the \nRedirect to Page action with the event:","jet-form-builder"),wp.element.createElement("code",null,C)),wp.element.createElement(Q,null,wp.element.createElement(q,{icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})),onClick:function(){V({index:b,item:j})}},K("Edit verification success redirect","jet-form-builder")))):wp.element.createElement(React.Fragment,null,wp.element.createElement(Z,{value:i.success_page,onChange:function(e){return o({success_page:e})},options:P,hideLabelFromVision:!0,onFilterValueChange:k}),wp.element.createElement(ae,{style:{marginTop:"-1em"}},K("Select a page for the redirect after successful \nverification. By default, the user is redirected to the form page. Or","jet-form-builder")," ",wp.element.createElement(q,{isLink:!0,onClick:function(){var e=J(i.success_page,C);V({index:l.length,item:N({},e)})}},K("configure a separate Redirect to Page action","jet-form-builder")))))),wp.element.createElement($,{label:K("Failed Page","jet-form-builder"),className:"control-flex"},wp.element.createElement(Q,{style:{flex:3.1},direction:"column"},-1!==w?wp.element.createElement(React.Fragment,null,wp.element.createElement(ae,null,K("You have already configured the\nRedirect to Page action with the event:","jet-form-builder"),wp.element.createElement("code",null,F)),wp.element.createElement(Q,null,wp.element.createElement(q,{icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})),onClick:function(){V({index:w,item:E})}},K("Edit verification failed redirect","jet-form-builder")))):wp.element.createElement(React.Fragment,null,wp.element.createElement(Z,{value:i.failed_page,onChange:function(e){return o({failed_page:e})},options:T,hideLabelFromVision:!0,onFilterValueChange:B}),wp.element.createElement(ae,{style:{marginTop:"-1em"}},K("Select a page for the redirect after verification \nfailure. By default, the user is redirected to the form page. Or","jet-form-builder")," ",wp.element.createElement(q,{isLink:!0,onClick:function(){var e=J(i.failed_page,F);V({index:l.length,item:N({},e)})}},K("configure a separate Redirect to Page action","jet-form-builder")))))))})),bt(Ve,{isScoped:!0}),bt(Me),bt(Ye),bt(Qe),ht("jet.fb.register.plugin.jf-actions-panel.before","jet-form-builder/verification",(function(e){return e.push(p),e})),ht("jet.fb.action.item","jet-form-builder/verification-action",(function(e){return function(){return"verification"!==be().action.type?wp.element.createElement(e,null):wp.element.createElement(je,null,wp.element.createElement(_e,null,wp.element.createElement("div",null,wp.element.createElement(Ee,null)),wp.element.createElement(Ae,{style:{marginTop:"0.5em"},justify:"space-between"},wp.element.createElement(we,null),wp.element.createElement(Se,{exclude:["up","down","off-on"]}))))}})),ht("jet.fb.action.item","jet-form-builder/footer-notice-for-no-events",(function(e){return function(){var t,n,r,o=Xe().action,i=et().updateActionObj,a=(n=tt(),r=1,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(n,r)||function(e,t){if(e){if("string"==typeof e)return We(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?We(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].some((function(e){return"verification"===e.type}));return null!=o&&null!==(t=o.events)&&void 0!==t&&t.length||"verification"===o.type||!a?wp.element.createElement(e,null):wp.element.createElement(it,null,wp.element.createElement(st,null,wp.element.createElement("div",null,wp.element.createElement(at,null)),wp.element.createElement(ft,{style:{marginTop:"0.5em"},justify:"space-between"},wp.element.createElement(rt,null),wp.element.createElement(ot,null),wp.element.createElement(lt,null),wp.element.createElement(ct,null))),wp.element.createElement(mt,null,wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",style:{color:"var( --wp-components-color-accent-darker-10, #9e1313 )"}},wp.element.createElement("path",{fill:"currentColor",d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"})),dt("Runs after verification","jet-form-builder"),wp.element.createElement(pt,{isLink:!0,onClick:function(){return i(o.id,{events:["DEFAULT.PROCESS"]})},style:{textDecoration:"none",borderBottom:"2px dotted var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))"}},dt("Run always","jet-form-builder"))))}})),wt((function(){var e,t=Le("core/editor").getEditedPostAttribute("meta")||{};if(ke!==t._jf_actions&&"string"==typeof t._jf_actions){ke=t._jf_actions;var n=JSON.parse(ke),r=n.findIndex((function(e){return"verification"===e.type})),o=-1!==r,i=Le("jet-forms/actions").getAction("verification");if(0<r&&o){var a=n[r];n.splice(r,1),Te("core/editor").editPost({meta:Pe(Pe({},t),{},{_jf_actions:JSON.stringify([a].concat((e=n,function(e){if(Array.isArray(e))return Ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ce(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))})})}i.disabled!==o&&Te("jet-forms/actions").editAction("verification",{disabled:o})}})),jt("jet-forms/actions").editAction(x,{provideEvents:function(){return[C,F]}})})();