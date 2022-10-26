/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/listing.options/main.js":
/*!******************************************!*\
  !*** ./frontend/listing.options/main.js ***!
  \******************************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar addAction = wp.hooks.addAction;\n/**\r\n * @param input {InputData}\r\n */\n\nfunction isSupported(input) {\n  var _iterator = _createForOfIteratorHelper(input.nodes),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var node = _step.value;\n\n      if (['radio', 'checkbox'].includes(node === null || node === void 0 ? void 0 : node.type)) {\n        return true;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return false;\n}\n\naddAction('jet.fb.input.makeReactive', 'jet-form-builder/listing-options',\n/**\r\n * @param input {InputData}\r\n */\nfunction (input) {\n  if (!isSupported(input)) {\n    return;\n  }\n\n  var template = null;\n\n  var _iterator2 = _createForOfIteratorHelper(input.nodes),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var node = _step2.value;\n\n      /**\r\n       * @type {Element}\r\n       */\n      template = node.closest('.jet-form-builder__field-wrap').querySelector('.jet-form-builder__field-template');\n\n      if (!template) {\n        continue;\n      }\n\n      template.addEventListener('click', function (_ref) {\n        var target = _ref.target;\n\n        if (!target.classList.contains('jet-form-builder__field-template')) {\n          target = target.closest('.jet-form-builder__field-template');\n        } // click on <label> programmatically\n        // it has <input> inside\n\n\n        target.nextElementSibling.click();\n      });\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  if (!template) {\n    return;\n  }\n\n  input.watch(function () {\n    var _iterator3 = _createForOfIteratorHelper(input.nodes),\n        _step3;\n\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var node = _step3.value;\n        var currentTemp = node.closest('.jet-form-builder__field-wrap').querySelector('.jet-form-builder__field-template');\n        currentTemp.classList.toggle('jet-form-builder__field-template--checked', node.checked);\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9saXN0aW5nLm9wdGlvbnMvbWFpbi5qcy5qcyIsIm5hbWVzIjpbImFkZEFjdGlvbiIsIndwIiwiaG9va3MiLCJpc1N1cHBvcnRlZCIsImlucHV0Iiwibm9kZXMiLCJub2RlIiwiaW5jbHVkZXMiLCJ0eXBlIiwidGVtcGxhdGUiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5leHRFbGVtZW50U2libGluZyIsImNsaWNrIiwid2F0Y2giLCJjdXJyZW50VGVtcCIsInRvZ2dsZSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL2xpc3Rpbmcub3B0aW9ucy9tYWluLmpzP2E3NTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuICAgICAgfSA9IHdwLmhvb2tzO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTdXBwb3J0ZWQoIGlucHV0ICkge1xyXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgaW5wdXQubm9kZXMgKSB7XHJcblx0XHRpZiAoIFsgJ3JhZGlvJywgJ2NoZWNrYm94JyBdLmluY2x1ZGVzKCBub2RlPy50eXBlICkgKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5pbnB1dC5tYWtlUmVhY3RpdmUnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2xpc3Rpbmctb3B0aW9ucycsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdGlmICggIWlzU3VwcG9ydGVkKCBpbnB1dCApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHRlbXBsYXRlID0gbnVsbDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIGlucHV0Lm5vZGVzICkge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogQHR5cGUge0VsZW1lbnR9XHJcblx0XHRcdCAqL1xyXG5cdFx0XHR0ZW1wbGF0ZSA9IG5vZGUuY2xvc2VzdChcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnLFxyXG5cdFx0XHQpLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC10ZW1wbGF0ZScsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoICF0ZW1wbGF0ZSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGVtcGxhdGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCB7IHRhcmdldCB9ICkgPT4ge1xyXG5cdFx0XHRcdGlmICggIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdGVtcGxhdGUnLFxyXG5cdFx0XHRcdCkgKSB7XHJcblx0XHRcdFx0XHR0YXJnZXQgPSB0YXJnZXQuY2xvc2VzdChcclxuXHRcdFx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC10ZW1wbGF0ZScsXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gY2xpY2sgb24gPGxhYmVsPiBwcm9ncmFtbWF0aWNhbGx5XHJcblx0XHRcdFx0Ly8gaXQgaGFzIDxpbnB1dD4gaW5zaWRlXHJcblx0XHRcdFx0dGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGljaygpO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhdGVtcGxhdGUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dC53YXRjaCggKCkgPT4ge1xyXG5cdFx0XHRmb3IgKCBjb25zdCBub2RlIG9mIGlucHV0Lm5vZGVzICkge1xyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRUZW1wID0gbm9kZS5jbG9zZXN0KFxyXG5cdFx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyxcclxuXHRcdFx0XHQpLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXRlbXBsYXRlJyxcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRjdXJyZW50VGVtcC5jbGFzc0xpc3QudG9nZ2xlKFxyXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXRlbXBsYXRlLS1jaGVja2VkJyxcclxuXHRcdFx0XHRcdG5vZGUuY2hlY2tlZCxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fSxcclxuKTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQ09BLFNBRFAsR0FFVUMsRUFBRSxDQUFDQyxLQUZiLENBQ09GLFNBRFA7QUFJQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0csV0FBVCxDQUFzQkMsS0FBdEIsRUFBOEI7RUFBQSwyQ0FDVEEsS0FBSyxDQUFDQyxLQURHO0VBQUE7O0VBQUE7SUFDN0Isb0RBQWtDO01BQUEsSUFBdEJDLElBQXNCOztNQUNqQyxJQUFLLENBQUUsT0FBRixFQUFXLFVBQVgsRUFBd0JDLFFBQXhCLENBQWtDRCxJQUFsQyxhQUFrQ0EsSUFBbEMsdUJBQWtDQSxJQUFJLENBQUVFLElBQXhDLENBQUwsRUFBc0Q7UUFDckQsT0FBTyxJQUFQO01BQ0E7SUFDRDtFQUw0QjtJQUFBO0VBQUE7SUFBQTtFQUFBOztFQU83QixPQUFPLEtBQVA7QUFDQTs7QUFFRFIsU0FBUyxDQUNSLDJCQURRLEVBRVIsa0NBRlE7QUFHUjtBQUNEO0FBQ0E7QUFDQyxVQUFXSSxLQUFYLEVBQW1CO0VBQ2xCLElBQUssQ0FBQ0QsV0FBVyxDQUFFQyxLQUFGLENBQWpCLEVBQTZCO0lBQzVCO0VBQ0E7O0VBRUQsSUFBSUssUUFBUSxHQUFHLElBQWY7O0VBTGtCLDRDQU9FTCxLQUFLLENBQUNDLEtBUFI7RUFBQTs7RUFBQTtJQU9sQix1REFBa0M7TUFBQSxJQUF0QkMsSUFBc0I7O01BQ2pDO0FBQ0g7QUFDQTtNQUNHRyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksT0FBTCxDQUNWLCtCQURVLEVBRVRDLGFBRlMsQ0FHVixtQ0FIVSxDQUFYOztNQU1BLElBQUssQ0FBQ0YsUUFBTixFQUFpQjtRQUNoQjtNQUNBOztNQUVEQSxRQUFRLENBQUNHLGdCQUFULENBQTJCLE9BQTNCLEVBQW9DLGdCQUFrQjtRQUFBLElBQWRDLE1BQWMsUUFBZEEsTUFBYzs7UUFDckQsSUFBSyxDQUFDQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQ0wsa0NBREssQ0FBTixFQUVJO1VBQ0hGLE1BQU0sR0FBR0EsTUFBTSxDQUFDSCxPQUFQLENBQ1IsbUNBRFEsQ0FBVDtRQUdBLENBUG9ELENBU3JEO1FBQ0E7OztRQUNBRyxNQUFNLENBQUNHLGtCQUFQLENBQTBCQyxLQUExQjtNQUNBLENBWkQ7SUFhQTtFQWxDaUI7SUFBQTtFQUFBO0lBQUE7RUFBQTs7RUFvQ2xCLElBQUssQ0FBQ1IsUUFBTixFQUFpQjtJQUNoQjtFQUNBOztFQUVETCxLQUFLLENBQUNjLEtBQU4sQ0FBYSxZQUFNO0lBQUEsNENBQ0VkLEtBQUssQ0FBQ0MsS0FEUjtJQUFBOztJQUFBO01BQ2xCLHVEQUFrQztRQUFBLElBQXRCQyxJQUFzQjtRQUNqQyxJQUFNYSxXQUFXLEdBQUdiLElBQUksQ0FBQ0ksT0FBTCxDQUNuQiwrQkFEbUIsRUFFbEJDLGFBRmtCLENBR25CLG1DQUhtQixDQUFwQjtRQU1BUSxXQUFXLENBQUNMLFNBQVosQ0FBc0JNLE1BQXRCLENBQ0MsMkNBREQsRUFFQ2QsSUFBSSxDQUFDZSxPQUZOO01BSUE7SUFaaUI7TUFBQTtJQUFBO01BQUE7SUFBQTtFQWFsQixDQWJEO0FBY0EsQ0E1RE8sQ0FBVCJ9\n//# sourceURL=webpack-internal:///./frontend/listing.options/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./frontend/listing.options/main.js"]();
/******/ 	
/******/ })()
;