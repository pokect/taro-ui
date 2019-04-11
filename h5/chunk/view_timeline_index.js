(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"100":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(4)),i=_interopRequireDefault(n(1)),r=_interopRequireDefault(n(99)),o=n(98);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(101);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.default.Component),l(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(o.View,{"className":"doc-header"},i.default.createElement(o.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":r.default.string}},"101":function(e,t,n){},"418":function(e,t,n){},"56":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(4)),i=_interopRequireDefault(n(1)),r=n(98),o=n(105),c=_interopRequireDefault(n(100));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(418);var u=function(e){function TimelinePage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TimelinePage);for(var l=arguments.length,a=Array(l),i=0;i<l;i++)a[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=TimelinePage.__proto__||Object.getPrototypeOf(TimelinePage)).call.apply(e,[this].concat(a))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TimelinePage,a.default.Component),l(TimelinePage,[{"key":"render","value":function render(){return i.default.createElement(r.View,{"className":"page"},i.default.createElement(c.default,{"title":"Timeline 时间轴"}),i.default.createElement(r.View,{"className":"doc-body"},i.default.createElement(r.View,{"className":"panel"},i.default.createElement(r.View,{"className":"panel__title"},"基础用法"),i.default.createElement(r.View,{"className":"panel__content"},i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.AtTimeline,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),i.default.createElement(r.View,{"className":"panel"},i.default.createElement(r.View,{"className":"panel__title"},"自定义颜色"),i.default.createElement(r.View,{"className":"panel__content"},i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.AtTimeline,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐","color":"green"},{"title":"上班","color":"red"},{"title":"睡觉","color":"yellow"}]})))),i.default.createElement(r.View,{"className":"panel"},i.default.createElement(r.View,{"className":"panel__title"},"自定义图标"),i.default.createElement(r.View,{"className":"panel__content"},i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.AtTimeline,{"items":[{"title":"刷牙洗脸","icon":"check-circle"},{"title":"吃早餐","icon":"clock"},{"title":"上班","icon":"clock"},{"title":"睡觉","icon":"clock"}]})))),i.default.createElement(r.View,{"className":"panel"},i.default.createElement(r.View,{"className":"panel__title"},"幽灵节点"),i.default.createElement(r.View,{"className":"panel__content"},i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.AtTimeline,{"pending":!0,"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),i.default.createElement(r.View,{"className":"panel"},i.default.createElement(r.View,{"className":"panel__title"},"丰富内容"),i.default.createElement(r.View,{"className":"panel__content"},i.default.createElement(r.View,{"className":"example-item"},i.default.createElement(o.AtTimeline,{"pending":!0,"items":[{"title":"刷牙洗脸","content":["大概8:00"],"icon":"check-circle"},{"title":"吃早餐","content":["牛奶+面包","餐后记得吃药"],"icon":"clock"},{"title":"上班","content":["查看邮件","写PPT","发送PPT给领导"],"icon":"clock"},{"title":"睡觉","content":["不超过23:00"],"icon":"clock"}]}))))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),TimelinePage}();t.default=u}}]);