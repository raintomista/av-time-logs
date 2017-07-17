webpackJsonp([2],{

/***/ "../../../../../src/assets/fonts/Simple-Line-Icons.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Simple-Line-Icons.f19a7f6c7a0b54b74827.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/Simple-Line-Icons.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Simple-Line-Icons.5db2ea1bcb7a6cc07875.svg";

/***/ }),

/***/ "../../../../../src/assets/fonts/Simple-Line-Icons.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Simple-Line-Icons.596814caa4fbaecbf501.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Simple-Line-Icons.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Simple-Line-Icons.ff94ad94c3a9d04bd2f8.woff";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/global.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n\tbackground-color: #d9d9d9;\r\n}\r\n\r\n\r\n.ui.row#breadcrumb-container{\r\n   padding-bottom: 0px;\r\n}\r\n\r\n.ui.breadcrumb{\r\n   font-family: 'Comfortaa', cursive;\r\n   font-size: 1.2em;\r\n}\r\n\r\n.ui.breadcrumb .active{\r\n   font-weight: bolder;\r\n}\r\n\r\n\r\nuser-sidebar.ui.vertical.menu, sidebar.ui.vertical.menu{\r\n\twidth: 260px;\r\n}\r\nuser-sidebar.ui.menu .item.link, sidebar.ui.menu .item.link{\r\n\tfont-family: 'Comfortaa', cursive;\r\n\tletter-spacing: 0.3px;\r\n\tfont-size: 17px;\r\n\tfont-weight: bolder;\r\n\tcolor: #65666b;\r\n\tborder-left: 4px solid transparent;\r\n\tpadding: 15px 30px;\r\n}\r\n\r\nuser-sidebar.ui.inverted.menu .item.link:hover, sidebar.ui.inverted.menu .item.link:hover{\r\n\tborder-left: 4px solid #aa67da;\r\n\tcolor: #aa67da !important;\r\n}\r\n\r\nuser-sidebar.ui.inverted.menu .active.item.link, sidebar.ui.inverted.menu .active.item.link{\r\n\tborder-left: 4px solid #aa67da;\r\n\tbackground-color: transparent;\r\n\tcolor: #aa67da !important;\r\n}\r\n\r\nuser-sidebar.ui.inverted.menu .active.item.link:hover, sidebar.ui.inverted.menu .active.item.link:hover{\r\n\tborder-left: 4px solid #67dacb;\r\n\tcolor: #67dacb !important;\r\n}\r\n\r\nuser-sidebar.ui.inverted.top.menu, sidebar.ui.inverted.top.menu{\r\n\tbackground-color: #111111;\r\n\tborder-radius: 0px;\r\n}\r\n\r\nuser-sidebar.ui.inverted.top.menu .right.item, sidebar.ui.inverted.top.menu .right.item{\r\n\tpadding: 0px;\r\n}\r\n\r\nuser-sidebar.ui.vertical.menu .item > i.left.aligned.icon, sidebar.ui.vertical.menu .item > i.left.aligned.icon {\r\n  float: left;\r\n  margin: 0 0.5em 0 0;\r\n}\r\n\r\nuser-sidebar.ui.left.vertical.inverted.labeled.visible.menu, sidebar.ui.left.vertical.inverted.labeled.visible.menu{\r\n\tbackground-color: #2a2830;\r\n}\r\n\r\n.ui.button{\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.ui.icon.button{\r\n\tbackground-color: #dc354e;\r\n}\r\n\r\n/*Time*/\r\n\r\n\r\n\r\n.nav-icon{\r\n\tmargin-right: 15px;\r\n\tfont-size: \t22px;\r\n\tline-height: 20px;\r\n\tdisplay: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.nav-label{\r\n\tline-height: 20px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .mobile.hidden,\r\n    .tablet.only,\r\n    .small.monitor.only,\r\n    .large.monitor.only {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .mobile.only,\r\n    .tablet.hidden,\r\n    .small.monitor.only,\r\n    .large.monitor.only {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n    .mobile.only,\r\n    .tablet.only,\r\n    .small.monitor.hidden,\r\n    .large.monitor.only {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n    .mobile.only,\r\n    .tablet.only,\r\n    .small.monitor.only,\r\n    .large.monitor.hidden {\r\n        display: none !important;\r\n    }\r\n}\r\n\r\n#no-data{\r\n\tline-height: 50px;\r\n\tpadding: 20px 14px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/simple-line-icons.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n\tfont-family: 'Simple-Line-Icons';\n\tsrc:url(" + __webpack_require__("../../../../../src/assets/fonts/Simple-Line-Icons.eot") + ");\n\tsrc:url(" + __webpack_require__("../../../../../src/assets/fonts/Simple-Line-Icons.eot") + "?#iefix) format('embedded-opentype'),\n\t\turl(" + __webpack_require__("../../../../../src/assets/fonts/Simple-Line-Icons.woff") + ") format('woff'),\n\t\turl(" + __webpack_require__("../../../../../src/assets/fonts/Simple-Line-Icons.ttf") + ") format('truetype'),\n\t\turl(" + __webpack_require__("../../../../../src/assets/fonts/Simple-Line-Icons.svg") + "#Simple-Line-Icons) format('svg');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n/* Use the following CSS code if you want to use data attributes for inserting your icons */\n[data-icon]:before {\n\tfont-family: 'Simple-Line-Icons';\n\tcontent: attr(data-icon);\n\tspeak: none;\n\tfont-weight: normal;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n/* Use the following CSS code if you want to have a class per icon */\n/*\nInstead of a list of all class selectors,\nyou can use the generic selector below, but it's slower:\n[class*=\"icon-\"] {\n*/\n.icon-user-female, .icon-user-follow, .icon-user-following, .icon-user-unfollow, .icon-trophy, .icon-screen-smartphone, .icon-screen-desktop, .icon-plane, .icon-notebook, .icon-moustache, .icon-mouse, .icon-magnet, .icon-energy, .icon-emoticon-smile, .icon-disc, .icon-cursor-move, .icon-crop, .icon-credit-card, .icon-chemistry, .icon-user, .icon-speedometer, .icon-social-youtube, .icon-social-twitter, .icon-social-tumblr, .icon-social-facebook, .icon-social-dropbox, .icon-social-dribbble, .icon-shield, .icon-screen-tablet, .icon-magic-wand, .icon-hourglass, .icon-graduation, .icon-ghost, .icon-game-controller, .icon-fire, .icon-eyeglasses, .icon-envelope-open, .icon-envelope-letter, .icon-bell, .icon-badge, .icon-anchor, .icon-wallet, .icon-vector, .icon-speech, .icon-puzzle, .icon-printer, .icon-present, .icon-playlist, .icon-pin, .icon-picture, .icon-map, .icon-layers, .icon-handbag, .icon-globe-alt, .icon-globe, .icon-frame, .icon-folder-alt, .icon-film, .icon-feed, .icon-earphones-alt, .icon-earphones, .icon-drop, .icon-drawer, .icon-docs, .icon-directions, .icon-direction, .icon-diamond, .icon-cup, .icon-compass, .icon-call-out, .icon-call-in, .icon-call-end, .icon-calculator, .icon-bubbles, .icon-briefcase, .icon-book-open, .icon-basket-loaded, .icon-basket, .icon-bag, .icon-action-undo, .icon-action-redo, .icon-wrench, .icon-umbrella, .icon-trash, .icon-tag, .icon-support, .icon-size-fullscreen, .icon-size-actual, .icon-shuffle, .icon-share-alt, .icon-share, .icon-rocket, .icon-question, .icon-pie-chart, .icon-pencil, .icon-note, .icon-music-tone-alt, .icon-music-tone, .icon-microphone, .icon-loop, .icon-logout, .icon-login, .icon-list, .icon-like, .icon-home, .icon-grid, .icon-graph, .icon-equalizer, .icon-dislike, .icon-cursor, .icon-control-start, .icon-control-rewind, .icon-control-play, .icon-control-pause, .icon-control-forward, .icon-control-end, .icon-calendar, .icon-bulb, .icon-bar-chart, .icon-arrow-up, .icon-arrow-right, .icon-arrow-left, .icon-arrow-down, .icon-ban, .icon-bubble, .icon-camcorder, .icon-camera, .icon-check, .icon-clock, .icon-close, .icon-cloud-download, .icon-cloud-upload, .icon-doc, .icon-envelope, .icon-eye, .icon-flag, .icon-folder, .icon-heart, .icon-info, .icon-key, .icon-link, .icon-lock, .icon-lock-open, .icon-magnifier, .icon-magnifier-add, .icon-magnifier-remove, .icon-paper-clip, .icon-paper-plane, .icon-plus, .icon-pointer, .icon-power, .icon-refresh, .icon-reload, .icon-settings, .icon-star, .icon-symbol-female, .icon-symbol-male, .icon-target, .icon-volume-1, .icon-volume-2, .icon-volume-off, .icon-users {\n\tfont-family: 'Simple-Line-Icons';\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\t-webkit-font-smoothing: antialiased;\n}\n.icon-user-female:before {\n\tcontent: \"\\E000\";\n}\n.icon-user-follow:before {\n\tcontent: \"\\E002\";\n}\n.icon-user-following:before {\n\tcontent: \"\\E003\";\n}\n.icon-user-unfollow:before {\n\tcontent: \"\\E004\";\n}\n.icon-trophy:before {\n\tcontent: \"\\E006\";\n}\n.icon-screen-smartphone:before {\n\tcontent: \"\\E010\";\n}\n.icon-screen-desktop:before {\n\tcontent: \"\\E011\";\n}\n.icon-plane:before {\n\tcontent: \"\\E012\";\n}\n.icon-notebook:before {\n\tcontent: \"\\E013\";\n}\n.icon-moustache:before {\n\tcontent: \"\\E014\";\n}\n.icon-mouse:before {\n\tcontent: \"\\E015\";\n}\n.icon-magnet:before {\n\tcontent: \"\\E016\";\n}\n.icon-energy:before {\n\tcontent: \"\\E020\";\n}\n.icon-emoticon-smile:before {\n\tcontent: \"\\E021\";\n}\n.icon-disc:before {\n\tcontent: \"\\E022\";\n}\n.icon-cursor-move:before {\n\tcontent: \"\\E023\";\n}\n.icon-crop:before {\n\tcontent: \"\\E024\";\n}\n.icon-credit-card:before {\n\tcontent: \"\\E025\";\n}\n.icon-chemistry:before {\n\tcontent: \"\\E026\";\n}\n.icon-user:before {\n\tcontent: \"\\E005\";\n}\n.icon-speedometer:before {\n\tcontent: \"\\E007\";\n}\n.icon-social-youtube:before {\n\tcontent: \"\\E008\";\n}\n.icon-social-twitter:before {\n\tcontent: \"\\E009\";\n}\n.icon-social-tumblr:before {\n\tcontent: \"\\E00A\";\n}\n.icon-social-facebook:before {\n\tcontent: \"\\E00B\";\n}\n.icon-social-dropbox:before {\n\tcontent: \"\\E00C\";\n}\n.icon-social-dribbble:before {\n\tcontent: \"\\E00D\";\n}\n.icon-shield:before {\n\tcontent: \"\\E00E\";\n}\n.icon-screen-tablet:before {\n\tcontent: \"\\E00F\";\n}\n.icon-magic-wand:before {\n\tcontent: \"\\E017\";\n}\n.icon-hourglass:before {\n\tcontent: \"\\E018\";\n}\n.icon-graduation:before {\n\tcontent: \"\\E019\";\n}\n.icon-ghost:before {\n\tcontent: \"\\E01A\";\n}\n.icon-game-controller:before {\n\tcontent: \"\\E01B\";\n}\n.icon-fire:before {\n\tcontent: \"\\E01C\";\n}\n.icon-eyeglasses:before {\n\tcontent: \"\\E01D\";\n}\n.icon-envelope-open:before {\n\tcontent: \"\\E01E\";\n}\n.icon-envelope-letter:before {\n\tcontent: \"\\E01F\";\n}\n.icon-bell:before {\n\tcontent: \"\\E027\";\n}\n.icon-badge:before {\n\tcontent: \"\\E028\";\n}\n.icon-anchor:before {\n\tcontent: \"\\E029\";\n}\n.icon-wallet:before {\n\tcontent: \"\\E02A\";\n}\n.icon-vector:before {\n\tcontent: \"\\E02B\";\n}\n.icon-speech:before {\n\tcontent: \"\\E02C\";\n}\n.icon-puzzle:before {\n\tcontent: \"\\E02D\";\n}\n.icon-printer:before {\n\tcontent: \"\\E02E\";\n}\n.icon-present:before {\n\tcontent: \"\\E02F\";\n}\n.icon-playlist:before {\n\tcontent: \"\\E030\";\n}\n.icon-pin:before {\n\tcontent: \"\\E031\";\n}\n.icon-picture:before {\n\tcontent: \"\\E032\";\n}\n.icon-map:before {\n\tcontent: \"\\E033\";\n}\n.icon-layers:before {\n\tcontent: \"\\E034\";\n}\n.icon-handbag:before {\n\tcontent: \"\\E035\";\n}\n.icon-globe-alt:before {\n\tcontent: \"\\E036\";\n}\n.icon-globe:before {\n\tcontent: \"\\E037\";\n}\n.icon-frame:before {\n\tcontent: \"\\E038\";\n}\n.icon-folder-alt:before {\n\tcontent: \"\\E039\";\n}\n.icon-film:before {\n\tcontent: \"\\E03A\";\n}\n.icon-feed:before {\n\tcontent: \"\\E03B\";\n}\n.icon-earphones-alt:before {\n\tcontent: \"\\E03C\";\n}\n.icon-earphones:before {\n\tcontent: \"\\E03D\";\n}\n.icon-drop:before {\n\tcontent: \"\\E03E\";\n}\n.icon-drawer:before {\n\tcontent: \"\\E03F\";\n}\n.icon-docs:before {\n\tcontent: \"\\E040\";\n}\n.icon-directions:before {\n\tcontent: \"\\E041\";\n}\n.icon-direction:before {\n\tcontent: \"\\E042\";\n}\n.icon-diamond:before {\n\tcontent: \"\\E043\";\n}\n.icon-cup:before {\n\tcontent: \"\\E044\";\n}\n.icon-compass:before {\n\tcontent: \"\\E045\";\n}\n.icon-call-out:before {\n\tcontent: \"\\E046\";\n}\n.icon-call-in:before {\n\tcontent: \"\\E047\";\n}\n.icon-call-end:before {\n\tcontent: \"\\E048\";\n}\n.icon-calculator:before {\n\tcontent: \"\\E049\";\n}\n.icon-bubbles:before {\n\tcontent: \"\\E04A\";\n}\n.icon-briefcase:before {\n\tcontent: \"\\E04B\";\n}\n.icon-book-open:before {\n\tcontent: \"\\E04C\";\n}\n.icon-basket-loaded:before {\n\tcontent: \"\\E04D\";\n}\n.icon-basket:before {\n\tcontent: \"\\E04E\";\n}\n.icon-bag:before {\n\tcontent: \"\\E04F\";\n}\n.icon-action-undo:before {\n\tcontent: \"\\E050\";\n}\n.icon-action-redo:before {\n\tcontent: \"\\E051\";\n}\n.icon-wrench:before {\n\tcontent: \"\\E052\";\n}\n.icon-umbrella:before {\n\tcontent: \"\\E053\";\n}\n.icon-trash:before {\n\tcontent: \"\\E054\";\n}\n.icon-tag:before {\n\tcontent: \"\\E055\";\n}\n.icon-support:before {\n\tcontent: \"\\E056\";\n}\n.icon-size-fullscreen:before {\n\tcontent: \"\\E057\";\n}\n.icon-size-actual:before {\n\tcontent: \"\\E058\";\n}\n.icon-shuffle:before {\n\tcontent: \"\\E059\";\n}\n.icon-share-alt:before {\n\tcontent: \"\\E05A\";\n}\n.icon-share:before {\n\tcontent: \"\\E05B\";\n}\n.icon-rocket:before {\n\tcontent: \"\\E05C\";\n}\n.icon-question:before {\n\tcontent: \"\\E05D\";\n}\n.icon-pie-chart:before {\n\tcontent: \"\\E05E\";\n}\n.icon-pencil:before {\n\tcontent: \"\\E05F\";\n}\n.icon-note:before {\n\tcontent: \"\\E060\";\n}\n.icon-music-tone-alt:before {\n\tcontent: \"\\E061\";\n}\n.icon-music-tone:before {\n\tcontent: \"\\E062\";\n}\n.icon-microphone:before {\n\tcontent: \"\\E063\";\n}\n.icon-loop:before {\n\tcontent: \"\\E064\";\n}\n.icon-logout:before {\n\tcontent: \"\\E065\";\n}\n.icon-login:before {\n\tcontent: \"\\E066\";\n}\n.icon-list:before {\n\tcontent: \"\\E067\";\n}\n.icon-like:before {\n\tcontent: \"\\E068\";\n}\n.icon-home:before {\n\tcontent: \"\\E069\";\n}\n.icon-grid:before {\n\tcontent: \"\\E06A\";\n}\n.icon-graph:before {\n\tcontent: \"\\E06B\";\n}\n.icon-equalizer:before {\n\tcontent: \"\\E06C\";\n}\n.icon-dislike:before {\n\tcontent: \"\\E06D\";\n}\n.icon-cursor:before {\n\tcontent: \"\\E06E\";\n}\n.icon-control-start:before {\n\tcontent: \"\\E06F\";\n}\n.icon-control-rewind:before {\n\tcontent: \"\\E070\";\n}\n.icon-control-play:before {\n\tcontent: \"\\E071\";\n}\n.icon-control-pause:before {\n\tcontent: \"\\E072\";\n}\n.icon-control-forward:before {\n\tcontent: \"\\E073\";\n}\n.icon-control-end:before {\n\tcontent: \"\\E074\";\n}\n.icon-calendar:before {\n\tcontent: \"\\E075\";\n}\n.icon-bulb:before {\n\tcontent: \"\\E076\";\n}\n.icon-bar-chart:before {\n\tcontent: \"\\E077\";\n}\n.icon-arrow-up:before {\n\tcontent: \"\\E078\";\n}\n.icon-arrow-right:before {\n\tcontent: \"\\E079\";\n}\n.icon-arrow-left:before {\n\tcontent: \"\\E07A\";\n}\n.icon-arrow-down:before {\n\tcontent: \"\\E07B\";\n}\n.icon-ban:before {\n\tcontent: \"\\E07C\";\n}\n.icon-bubble:before {\n\tcontent: \"\\E07D\";\n}\n.icon-camcorder:before {\n\tcontent: \"\\E07E\";\n}\n.icon-camera:before {\n\tcontent: \"\\E07F\";\n}\n.icon-check:before {\n\tcontent: \"\\E080\";\n}\n.icon-clock:before {\n\tcontent: \"\\E081\";\n}\n.icon-close:before {\n\tcontent: \"\\E082\";\n}\n.icon-cloud-download:before {\n\tcontent: \"\\E083\";\n}\n.icon-cloud-upload:before {\n\tcontent: \"\\E084\";\n}\n.icon-doc:before {\n\tcontent: \"\\E085\";\n}\n.icon-envelope:before {\n\tcontent: \"\\E086\";\n}\n.icon-eye:before {\n\tcontent: \"\\E087\";\n}\n.icon-flag:before {\n\tcontent: \"\\E088\";\n}\n.icon-folder:before {\n\tcontent: \"\\E089\";\n}\n.icon-heart:before {\n\tcontent: \"\\E08A\";\n}\n.icon-info:before {\n\tcontent: \"\\E08B\";\n}\n.icon-key:before {\n\tcontent: \"\\E08C\";\n}\n.icon-link:before {\n\tcontent: \"\\E08D\";\n}\n.icon-lock:before {\n\tcontent: \"\\E08E\";\n}\n.icon-lock-open:before {\n\tcontent: \"\\E08F\";\n}\n.icon-magnifier:before {\n\tcontent: \"\\E090\";\n}\n.icon-magnifier-add:before {\n\tcontent: \"\\E091\";\n}\n.icon-magnifier-remove:before {\n\tcontent: \"\\E092\";\n}\n.icon-paper-clip:before {\n\tcontent: \"\\E093\";\n}\n.icon-paper-plane:before {\n\tcontent: \"\\E094\";\n}\n.icon-plus:before {\n\tcontent: \"\\E095\";\n}\n.icon-pointer:before {\n\tcontent: \"\\E096\";\n}\n.icon-power:before {\n\tcontent: \"\\E097\";\n}\n.icon-refresh:before {\n\tcontent: \"\\E098\";\n}\n.icon-reload:before {\n\tcontent: \"\\E099\";\n}\n.icon-settings:before {\n\tcontent: \"\\E09A\";\n}\n.icon-star:before {\n\tcontent: \"\\E09B\";\n}\n.icon-symbol-female:before {\n\tcontent: \"\\E09C\";\n}\n.icon-symbol-male:before {\n\tcontent: \"\\E09D\";\n}\n.icon-target:before {\n\tcontent: \"\\E09E\";\n}\n.icon-volume-1:before {\n\tcontent: \"\\E09F\";\n}\n.icon-volume-2:before {\n\tcontent: \"\\E0A0\";\n}\n.icon-volume-off:before {\n\tcontent: \"\\E0A1\";\n}\n.icon-users:before {\n\tcontent: \"\\E001\";\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.10/semantic.min.css);", ""]);
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/simple-line-icons.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/global.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map