!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=32)}({32:function(e,t,r){"use strict";r.r(t);var n=r(5),o=[{value:"reload",label:"Page Reload"},{value:"ajax",label:"AJAX"}],l=[{value:"column",label:"Column"},{value:"row",label:"Row"}];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=wp.blocks.registerBlockType,p=wp.i18n.__,f=wp.blockEditor?wp.blockEditor:wp.editor,m=f.InspectorControls,b=f.useBlockProps,d=wp.components,y=d.PanelBody,w=d.SelectControl,g=d.TextControl,h=d.ToggleControl,v=wp.serverSideRender,O=function(e){return"".concat(n.name,"/").concat(e)};s(n.name,a(a({},n),{},{title:p("JetForm"),icon:wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:n.icon}}),attributes:n.attributes,edit:function(e){var t=e.attributes,r=e.setAttributes,i=e.isSelected,a=window.JetFormData,u=b();return[i&&wp.element.createElement(m,{key:O("InspectorControls")},wp.element.createElement(y,{title:p("Form Settings"),key:O("PanelBody")},wp.element.createElement(w,{key:"form_id",label:p("Choose Form"),labelposition:"top",value:t.form_id,onChange:function(e){r({form_id:Number(e)})},options:a.forms_list}),Boolean(t.form_id)&&wp.element.createElement(React.Fragment,null,wp.element.createElement(w,{label:"Fields Layout",value:t.fields_layout,options:l,onChange:function(e){r({fields_layout:e})}}),wp.element.createElement(g,{label:"Required Mark",value:t.required_mark,onChange:function(e){r({required_mark:e})}}),wp.element.createElement(w,{label:"Submit Type",value:t.submit_type,options:o,onChange:function(e){r({submit_type:e})}}),wp.element.createElement(h,{key:"enable_progress",label:p("Enable form pages progress"),checked:t.enable_progress,onChange:function(e){r({enable_progress:Boolean(e)})}})))),wp.element.createElement("div",c({key:O("viewBlock")},u),wp.element.createElement(v,{block:n.name,attributes:t,httpMethod:"POST"}))]}}))},5:function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"jet-forms/form-block","keywords":["jetformbuilder"],"textdomain":"jet-form-builder","supports":{"html":false,"className":true},"category":"layout","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"15\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"31\\" y=\\"32.2\\" width=\\"26\\" height=\\"28.8\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M31 35.2C31 33.5431 32.3431 32.2 34 32.2H54C55.6569 32.2 57 33.5431 57 35.2V43.4H31V35.2Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M36.4615 30C36.4615 29.4477 36.9092 29 37.4615 29H37.6154C38.1676 29 38.6154 29.4477 38.6154 30V34.6C38.6154 35.1523 38.1676 35.6 37.6154 35.6H37.4615C36.9092 35.6 36.4615 35.1523 36.4615 34.6V30Z\\" fill=\\"#162B40\\"/><path d=\\"M49.3846 30C49.3846 29.4477 49.8323 29 50.3846 29H50.5384C51.0907 29 51.5384 29.4477 51.5384 30V34.6C51.5384 35.1523 51.0907 35.6 50.5384 35.6H50.3846C49.8323 35.6 49.3846 35.1523 49.3846 34.6V30Z\\" fill=\\"#162B40\\"/></svg>","attributes":{"form_id":{"type":"number","default":0},"submit_type":{"type":"string","default":"reload"},"required_mark":{"type":"string","default":"*"},"fields_layout":{"type":"string","default":"column"},"enable_progress":{"type":"boolean","default":false}}}')}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ibG9jay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mb3JtLWJsb2NrLmpzIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==