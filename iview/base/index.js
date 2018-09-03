'use strict';

function getCtx(selector) {
    var pages = getCurrentPages();
    var ctx = pages[pages.length - 1];

    var componentCtx = ctx.selectComponent(selector);

    if (!componentCtx) {
        console.error('无法找到对应的组件，请按文档说明使用组件');
        return null;
    }
    return componentCtx;
}

function Toast(options) {
    var _options$selector = options.selector,
        selector = _options$selector === undefined ? '#toast' : _options$selector;

    var ctx = getCtx(selector);

    ctx.handleShow(options);
}

Toast.hide = function () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#toast';

    var ctx = getCtx(selector);

    ctx.handleHide();
};

function Message(options) {
    var _options$selector2 = options.selector,
        selector = _options$selector2 === undefined ? '#message' : _options$selector2;

    var ctx = getCtx(selector);

    ctx.handleShow(options);
}

module.exports = {
    $Toast: Toast,
    $Message: Message
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImdldEN0eCIsInNlbGVjdG9yIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjdHgiLCJsZW5ndGgiLCJjb21wb25lbnRDdHgiLCJzZWxlY3RDb21wb25lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJUb2FzdCIsIm9wdGlvbnMiLCJoYW5kbGVTaG93IiwiaGlkZSIsImhhbmRsZUhpZGUiLCJNZXNzYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsIiRUb2FzdCIsIiRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE1BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCO0FBQ3ZCLFFBQU1DLFFBQVFDLGlCQUFkO0FBQ0EsUUFBTUMsTUFBTUYsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLENBQVo7O0FBRUEsUUFBTUMsZUFBZUYsSUFBSUcsZUFBSixDQUFvQk4sUUFBcEIsQ0FBckI7O0FBRUEsUUFBSSxDQUFDSyxZQUFMLEVBQW1CO0FBQ2ZFLGdCQUFRQyxLQUFSLENBQWMsc0JBQWQ7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNELFdBQU9ILFlBQVA7QUFDSDs7QUFFRCxTQUFTSSxLQUFULENBQWVDLE9BQWYsRUFBd0I7QUFBQSw0QkFDWUEsT0FEWixDQUNaVixRQURZO0FBQUEsUUFDWkEsUUFEWSxxQ0FDRCxRQURDOztBQUVwQixRQUFNRyxNQUFNSixPQUFPQyxRQUFQLENBQVo7O0FBRUFHLFFBQUlRLFVBQUosQ0FBZUQsT0FBZjtBQUNIOztBQUVERCxNQUFNRyxJQUFOLEdBQWEsWUFBK0I7QUFBQSxRQUFyQlosUUFBcUIsdUVBQVYsUUFBVTs7QUFDeEMsUUFBTUcsTUFBTUosT0FBT0MsUUFBUCxDQUFaOztBQUVBRyxRQUFJVSxVQUFKO0FBQ0gsQ0FKRDs7QUFNQSxTQUFTQyxPQUFULENBQWlCSixPQUFqQixFQUEwQjtBQUFBLDZCQUNZQSxPQURaLENBQ2RWLFFBRGM7QUFBQSxRQUNkQSxRQURjLHNDQUNILFVBREc7O0FBRXRCLFFBQU1HLE1BQU1KLE9BQU9DLFFBQVAsQ0FBWjs7QUFFQUcsUUFBSVEsVUFBSixDQUFlRCxPQUFmO0FBQ0g7O0FBRURLLE9BQU9DLE9BQVAsR0FBaUI7QUFDYkMsWUFBUVIsS0FESztBQUViUyxjQUFVSjtBQUZHLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q3R4IChzZWxlY3Rvcikge1xyXG4gICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgIGNvbnN0IGN0eCA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudEN0eCA9IGN0eC5zZWxlY3RDb21wb25lbnQoc2VsZWN0b3IpO1xyXG5cclxuICAgIGlmICghY29tcG9uZW50Q3R4KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign5peg5rOV5om+5Yiw5a+55bqU55qE57uE5Lu277yM6K+35oyJ5paH5qGj6K+05piO5L2/55So57uE5Lu2Jyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcG9uZW50Q3R4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb2FzdChvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IHNlbGVjdG9yID0gJyN0b2FzdCcgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBjdHggPSBnZXRDdHgoc2VsZWN0b3IpO1xyXG5cclxuICAgIGN0eC5oYW5kbGVTaG93KG9wdGlvbnMpO1xyXG59XHJcblxyXG5Ub2FzdC5oaWRlID0gZnVuY3Rpb24gKHNlbGVjdG9yID0gJyN0b2FzdCcpIHtcclxuICAgIGNvbnN0IGN0eCA9IGdldEN0eChzZWxlY3Rvcik7XHJcblxyXG4gICAgY3R4LmhhbmRsZUhpZGUoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2Uob3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBzZWxlY3RvciA9ICcjbWVzc2FnZScgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBjdHggPSBnZXRDdHgoc2VsZWN0b3IpO1xyXG5cclxuICAgIGN0eC5oYW5kbGVTaG93KG9wdGlvbnMpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICRUb2FzdDogVG9hc3QsXHJcbiAgICAkTWVzc2FnZTogTWVzc2FnZVxyXG59OyJdfQ==