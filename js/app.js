/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("Vue.component('status', {\n  template: '<a :class=\"getSystemColor\" class=\"button is-small is-outlined is-pulled-right\" href=\"https://status.samyerkes.com\" target=\"_blank\"><strong>{{ systemStatus.data }}</strong></a>',\n  data: function () {\n    return {\n\t    systemStatus: 'All systems are operational',\n\t    systemClass: 'is-success'\n\t }\n  },\n  mounted: function() {\n  \tthis.getSystemStatus();\n  },\n  computed: {\n\t\tgetSystemColor: function() {\n            if(this.systemStatus.data !== 'All systems are operational') {\n                return this.systemClass = 'is-danger';    \n            }\n            return this.systemClass = 'is-success';\n        }\n\t},\n  methods: {\n\t\tgetSystemStatus: function() {\n            var this$1 = this;\n\n            this.$http.get('https://status.samyerkes.com/api/v1/status').then(function (data) {\n                console.log(\"Retreived status from https://status.samyerkes.com/api/v1/status\");\n                this$1.systemStatus = data.body;\n            }, function (response) {\n                this$1.systemStatus = \"Couldn't retrieve system status.\";\n            });\n        }\n\t}\n})\n\nvar app = new Vue({\n  el: '#app'\n})//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zb3VyY2UvX2Fzc2V0cy9qcy9hcHAuanM/YWQ0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJWdWUuY29tcG9uZW50KCdzdGF0dXMnLCB7XG4gIHRlbXBsYXRlOiAnPGEgOmNsYXNzPVwiZ2V0U3lzdGVtQ29sb3JcIiBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy1vdXRsaW5lZCBpcy1wdWxsZWQtcmlnaHRcIiBocmVmPVwiaHR0cHM6Ly9zdGF0dXMuc2FteWVya2VzLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPjxzdHJvbmc+e3sgc3lzdGVtU3RhdHVzLmRhdGEgfX08L3N0cm9uZz48L2E+JyxcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG5cdCAgICBzeXN0ZW1TdGF0dXM6ICdBbGwgc3lzdGVtcyBhcmUgb3BlcmF0aW9uYWwnLFxuXHQgICAgc3lzdGVtQ2xhc3M6ICdpcy1zdWNjZXNzJ1xuXHQgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgXHR0aGlzLmdldFN5c3RlbVN0YXR1cygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuXHRcdGdldFN5c3RlbUNvbG9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3lzdGVtU3RhdHVzLmRhdGEgIT09ICdBbGwgc3lzdGVtcyBhcmUgb3BlcmF0aW9uYWwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtQ2xhc3MgPSAnaXMtZGFuZ2VyJzsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1DbGFzcyA9ICdpcy1zdWNjZXNzJztcbiAgICAgICAgfVxuXHR9LFxuICBtZXRob2RzOiB7XG5cdFx0Z2V0U3lzdGVtU3RhdHVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwczovL3N0YXR1cy5zYW15ZXJrZXMuY29tL2FwaS92MS9zdGF0dXMnKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyZWl2ZWQgc3RhdHVzIGZyb20gaHR0cHM6Ly9zdGF0dXMuc2FteWVya2VzLmNvbS9hcGkvdjEvc3RhdHVzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3lzdGVtU3RhdHVzID0gZGF0YS5ib2R5O1xuICAgICAgICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeXN0ZW1TdGF0dXMgPSBcIkNvdWxkbid0IHJldHJpZXZlIHN5c3RlbSBzdGF0dXMuXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXHR9XG59KVxuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCdcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNvdXJjZS9fYXNzZXRzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);