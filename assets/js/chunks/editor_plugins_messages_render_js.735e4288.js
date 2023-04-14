"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_plugins_messages_render_js"],{

/***/ "./editor/plugins/messages/render.js":
/*!*******************************************!*\
  !*** ./editor/plugins/messages/render.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar _wp$element = wp.element,\n  Children = _wp$element.Children,\n  cloneElement = _wp$element.cloneElement;\nvar TextControl = wp.components.TextControl;\nvar _JetFBHooks = JetFBHooks,\n  useMetaState = _JetFBHooks.useMetaState;\nfunction PluginMessages() {\n  var _useMetaState = useMetaState('_jf_messages'),\n    _useMetaState2 = _slicedToArray(_useMetaState, 2),\n    messages = _useMetaState2[0],\n    setMessages = _useMetaState2[1];\n  return wp.element.createElement(React.Fragment, null, Object.entries(JetFormEditorData.messagesDefault).map(function (_ref, id) {\n    var _messages$type;\n    var _ref2 = _slicedToArray(_ref, 2),\n      type = _ref2[0],\n      _ref2$ = _ref2[1],\n      label = _ref2$.label,\n      value = _ref2$.value;\n    return wp.element.createElement(TextControl, {\n      key: type + id,\n      label: label,\n      value: (_messages$type = messages[type]) !== null && _messages$type !== void 0 ? _messages$type : value,\n      onChange: function onChange(newValue) {\n        return setMessages(function (prev) {\n          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, type, newValue));\n        });\n      }\n    });\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginMessages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvcGx1Z2lucy9tZXNzYWdlcy9yZW5kZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLFdBQUEsR0FHVUMsRUFBRSxDQUFDQyxPQUFPO0VBRmJDLFFBQVEsR0FBQUgsV0FBQSxDQUFSRyxRQUFRO0VBQ1JDLFlBQVksR0FBQUosV0FBQSxDQUFaSSxZQUFZO0FBR25CLElBQ09DLFdBQVcsR0FDUkosRUFBRSxDQUFDSyxVQUFVLENBRGhCRCxXQUFXO0FBR2xCLElBQUFFLFdBQUEsR0FBeUJDLFVBQVU7RUFBM0JDLFlBQVksR0FBQUYsV0FBQSxDQUFaRSxZQUFZO0FBRXBCLFNBQVNDLGNBQWNBLENBQUEsRUFBRztFQUV6QixJQUFBQyxhQUFBLEdBQWtDRixZQUFZLENBQUUsY0FBYyxDQUFFO0lBQUFHLGNBQUEsR0FBQUMsY0FBQSxDQUFBRixhQUFBO0lBQXhERyxRQUFRLEdBQUFGLGNBQUE7SUFBRUcsV0FBVyxHQUFBSCxjQUFBO0VBRTdCLE9BQU9YLEVBQUEsQ0FBQUMsT0FBQSxDQUFBYyxhQUFBLENBQUFDLEtBQUEsQ0FBQUMsUUFBQSxRQUNKQyxNQUFNLENBQUNDLE9BQU8sQ0FBRUMsaUJBQWlCLENBQUNDLGVBQWUsQ0FBRSxDQUFDQyxHQUFHLENBQ3hELFVBQUFDLElBQUEsRUFBOEJDLEVBQUU7SUFBQSxJQUFBQyxjQUFBO0lBQUEsSUFBQUMsS0FBQSxHQUFBZCxjQUFBLENBQUFXLElBQUE7TUFBNUJJLElBQUksR0FBQUQsS0FBQTtNQUFBRSxNQUFBLEdBQUFGLEtBQUE7TUFBSUcsS0FBSyxHQUFBRCxNQUFBLENBQUxDLEtBQUs7TUFBRUMsS0FBSyxHQUFBRixNQUFBLENBQUxFLEtBQUs7SUFBQSxPQUFjOUIsRUFBQSxDQUFBQyxPQUFBLENBQUFjLGFBQUEsQ0FBQ1gsV0FBVztNQUNqRDJCLEdBQUcsRUFBR0osSUFBSSxHQUFHSCxFQUFJO01BQ2pCSyxLQUFLLEVBQUdBLEtBQU87TUFDZkMsS0FBSyxHQUFBTCxjQUFBLEdBQUdaLFFBQVEsQ0FBRWMsSUFBSSxDQUFFLGNBQUFGLGNBQUEsY0FBQUEsY0FBQSxHQUFJSyxLQUFPO01BQ25DRSxRQUFRLEVBQUcsU0FBQUEsU0FBQUMsUUFBUTtRQUFBLE9BQUluQixXQUFXLENBQUUsVUFBQW9CLElBQUk7VUFBQSxPQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDbENELElBQUksT0FBQUUsZUFBQSxLQUFJVCxJQUFJLEVBQUlNLFFBQVE7UUFBQSxDQUM3QixDQUFFO01BQUE7SUFBRSxFQUNKO0VBQUEsRUFDRixDQUNDO0FBQ0o7QUFFQSxpRUFBZXhCLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9tZXNzYWdlcy9yZW5kZXIuanM/YjI1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgQ2hpbGRyZW4sXHJcblx0ICAgICAgY2xvbmVFbGVtZW50LFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBUZXh0Q29udHJvbCxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IHVzZU1ldGFTdGF0ZSB9ID0gSmV0RkJIb29rcztcclxuXHJcbmZ1bmN0aW9uIFBsdWdpbk1lc3NhZ2VzKCkge1xyXG5cclxuXHRjb25zdCBbIG1lc3NhZ2VzLCBzZXRNZXNzYWdlcyBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX21lc3NhZ2VzJyApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgT2JqZWN0LmVudHJpZXMoIEpldEZvcm1FZGl0b3JEYXRhLm1lc3NhZ2VzRGVmYXVsdCApLm1hcChcclxuXHRcdFx0KCBbIHR5cGUsIHsgbGFiZWwsIHZhbHVlIH0gXSwgaWQgKSA9PiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRrZXk9eyB0eXBlICsgaWQgfVxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdHZhbHVlPXsgbWVzc2FnZXNbIHR5cGUgXSA/PyB2YWx1ZSB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRNZXNzYWdlcyggcHJldiA9PiAoXHJcblx0XHRcdFx0XHR7IC4uLnByZXYsIFsgdHlwZSBdOiBuZXdWYWx1ZSB9XHJcblx0XHRcdFx0KSApIH1cclxuXHRcdFx0Lz4sXHJcblx0XHQpIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsdWdpbk1lc3NhZ2VzOyJdLCJuYW1lcyI6WyJfd3AkZWxlbWVudCIsIndwIiwiZWxlbWVudCIsIkNoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwiVGV4dENvbnRyb2wiLCJjb21wb25lbnRzIiwiX0pldEZCSG9va3MiLCJKZXRGQkhvb2tzIiwidXNlTWV0YVN0YXRlIiwiUGx1Z2luTWVzc2FnZXMiLCJfdXNlTWV0YVN0YXRlIiwiX3VzZU1ldGFTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjcmVhdGVFbGVtZW50IiwiUmVhY3QiLCJGcmFnbWVudCIsIk9iamVjdCIsImVudHJpZXMiLCJKZXRGb3JtRWRpdG9yRGF0YSIsIm1lc3NhZ2VzRGVmYXVsdCIsIm1hcCIsIl9yZWYiLCJpZCIsIl9tZXNzYWdlcyR0eXBlIiwiX3JlZjIiLCJ0eXBlIiwiX3JlZjIkIiwibGFiZWwiLCJ2YWx1ZSIsImtleSIsIm9uQ2hhbmdlIiwibmV3VmFsdWUiLCJwcmV2IiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/plugins/messages/render.js\n");

/***/ })

}]);