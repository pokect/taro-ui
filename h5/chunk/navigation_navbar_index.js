(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"100":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=_interopRequireDefault(n(4)),a=_interopRequireDefault(n(1)),r=_interopRequireDefault(n(99)),o=n(98);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(101);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.default.Component),i(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(o.View,{"className":"doc-header"},a.default.createElement(o.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":r.default.string}},"101":function(e,t,n){},"457":function(e,t,n){},"75":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=n(4),a=_interopRequireDefault(l),r=_interopRequireDefault(n(1)),o=n(98),c=n(105),s=_interopRequireDefault(n(100));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(457);var u=function(e){function Index(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var i=arguments.length,l=Array(i),a=0;a<i;a++)l[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(l))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a.default.Component),i(Index,[{"key":"handleClick","value":function handleClick(e){(0,l.showToast)({"title":e,"duration":2e3,"icon":"success"})}},{"key":"clickReturn","value":function clickReturn(){(0,l.showToast)({"title":"返回","duration":2e3,"icon":"success"})}},{"key":"clickMy","value":function clickMy(){(0,l.showToast)({"title":"我的","duration":2e3,"icon":"success"})}},{"key":"clickList","value":function clickList(){(0,l.showToast)({"title":"功能列表","duration":2e3,"icon":"success"})}},{"key":"render","value":function render(){return r.default.createElement(o.View,{"className":"page"},r.default.createElement(s.default,{"title":"NavBar 导航栏"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"基础用法"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(c.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left"})),r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(c.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(c.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftIconType":"chevron-left","rightFirstIconType":"user"})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义左上角文案"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(c.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","leftIconType":"chevron-left","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})),r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(c.AtNavBar,{"onClickLeftIcon":this.handleClick.bind(this,"返回"),"title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义颜色"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(c.AtNavBar,{"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"}))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"自定义图标样式"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(c.AtNavBar,{"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":{"value":"user","size":36,"color":"red"}}))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"无下划线"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(c.AtNavBar,{"border":!1,"onClickRgIconSt":this.clickList.bind(this),"onClickRgIconNd":this.clickMy.bind(this),"onClickLeftIcon":this.clickReturn.bind(this),"color":"#333","title":"NavBar 导航栏示例","leftText":"返回","rightFirstIconType":"bullet-list","rightSecondIconType":"user"})))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),Index}();t.default=u}}]);