"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[386],{9386:(e,t,n)=>{function l(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}n.r(t),n.d(t,{default:()=>v});var a=JetFBComponents.AdvancedModalControl,i=JetFBActions.Tools.withPlaceholder,m=wp.components,u=m.TextControl,c=m.TextareaControl,s=m.SelectControl,f=m.FormTokenField,p=m.BaseControl,_=m.ToggleControl,d=wp.element,h=d.useState,y=d.useEffect,b=JetFBHooks.useFields;const v=function(e){var t,n,r=e.settings,m=e.source,d=e.label,v=e.help,w=e.onChangeSetting,C=e.onChangeSettingObj,g=b(),E=(t=h([]),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,o,r,a,i=[],m=!0,u=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;m=!1}else for(;!(m=(l=r.call(n)).done)&&(i.push(l.value),i.length!==t);m=!0);}catch(e){u=!0,o=e}finally{try{if(!m&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return i}}(t,n)||o(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),j=E[0],k=E[1];return y((function(){k(g.map((function(e){return e.value})))}),[]),wp.element.createElement(React.Fragment,null,wp.element.createElement(s,{key:"mail_to",labelPosition:"side",className:"full-width",value:r.mail_to,options:m.mailTo,label:d("mail_to"),help:v("mail_to"),onChange:function(e){w(e,"mail_to")}}),"custom"===r.mail_to&&wp.element.createElement(u,{key:"custom_email",value:r.custom_email,label:d("custom_email"),help:v("custom_email"),onChange:function(e){w(e,"custom_email")}}),"form"===r.mail_to&&wp.element.createElement(s,{key:"from_field",labelPosition:"side",className:"full-width",value:r.from_field,options:i(g),label:d("from_field"),help:v("from_field"),onChange:function(e){w(e,"from_field")}}),wp.element.createElement(s,{key:"reply_to",labelPosition:"side",className:"full-width",value:r.reply_to,options:m.replyTo,label:d("reply_to"),help:v("reply_to"),onChange:function(e){w(e,"reply_to")}}),"custom"===r.reply_to&&wp.element.createElement(a,{value:r.reply_to_email,label:d("reply_to_email"),macroWithCurrent:!0,onChangeMacros:function(e){var t;return C({reply_to_email:(null!==(t=null==r?void 0:r.reply_to_email)&&void 0!==t?t:"")+e})}},wp.element.createElement(u,{value:r.reply_to_email,help:v("reply_to_email"),onChange:function(e){return C({reply_to_email:e})}})),"form"===r.reply_to&&wp.element.createElement(s,{key:"reply_from_field",labelPosition:"side",className:"full-width",value:r.reply_from_field,options:i(g),label:d("reply_from_field"),help:v("reply_from_field"),onChange:function(e){w(e,"reply_from_field")}}),wp.element.createElement(a,{value:r.subject,label:d("subject"),macroWithCurrent:!0,onChangeMacros:function(e){var t;return C({subject:(null!==(t=null==r?void 0:r.subject)&&void 0!==t?t:"")+e})}},wp.element.createElement(u,{value:r.subject,help:v("subject"),onChange:function(e){return C({subject:e})}})),wp.element.createElement(a,{value:r.from_name,label:d("from_name"),macroWithCurrent:!0,onChangeMacros:function(e){var t;return C({from_name:(null!==(t=null==r?void 0:r.from_name)&&void 0!==t?t:"")+e})}},wp.element.createElement(u,{value:r.from_name,help:v("from_name"),onChange:function(e){return C({from_name:e})}})),wp.element.createElement(a,{value:r.from_address,label:d("from_address"),macroWithCurrent:!0,onChangeMacros:function(e){var t;return C({from_address:(null!==(t=null==r?void 0:r.from_address)&&void 0!==t?t:"")+e})}},wp.element.createElement(u,{value:r.from_address,help:v("from_address"),onChange:function(e){return C({from_address:e})}})),wp.element.createElement(s,{key:"content_type",labelPosition:"side",className:"full-width",value:r.content_type,options:m.content_type,label:d("content_type"),help:v("content_type"),onChange:function(e){return w(e,"content_type")}}),Boolean(!r.content_type||"text/html"===r.content_type)&&wp.element.createElement(_,{label:d("disable_format"),help:v("disable_format"),checked:r.disable_format,onChange:function(e){return C({disable_format:e})}}),wp.element.createElement(a,{value:r.content,label:d("content"),macroWithCurrent:!0,onChangeMacros:function(e){var t;return C({content:(null!==(t=null==r?void 0:r.content)&&void 0!==t?t:"")+e})}},wp.element.createElement(c,{value:r.content,help:v("content"),onChange:function(e){return C({content:e})}})),wp.element.createElement(p,{label:d("attachments"),className:"control-flex"},wp.element.createElement(f,{label:d("add_attachment"),value:r.attachments,suggestions:j,onChange:function(e){return C({attachments:l(new Set(e))})},tokenizeOnSpace:!0})))}}}]);