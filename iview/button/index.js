'use strict';

Component({
    externalClasses: ['i-class'],

    properties: {
        // default, primary, ghost, info, success, warning, error
        type: {
            type: String,
            value: ''
        },
        inline: {
            type: Boolean,
            value: false
        },
        // default, large, small
        size: {
            type: String,
            value: ''
        },
        // circle, square
        shape: {
            type: String,
            value: 'square'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        loading: {
            type: Boolean,
            value: false
        },
        long: {
            type: Boolean,
            value: false
        },
        openType: String,
        appParameter: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        lang: {
            type: String,
            value: 'en'
        },
        sessionFrom: {
            type: String,
            value: ''
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },

    methods: {
        handleTap: function handleTap() {
            if (this.data.disabled) return false;

            this.triggerEvent('click');
        },
        bindgetuserinfo: function bindgetuserinfo() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$detail = _ref.detail,
                detail = _ref$detail === undefined ? {} : _ref$detail;

            this.triggerEvent('getuserinfo', detail);
        },
        bindcontact: function bindcontact() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$detail = _ref2.detail,
                detail = _ref2$detail === undefined ? {} : _ref2$detail;

            this.triggerEvent('contact', detail);
        },
        bindgetphonenumber: function bindgetphonenumber() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref3$detail = _ref3.detail,
                detail = _ref3$detail === undefined ? {} : _ref3$detail;

            this.triggerEvent('getphonenumber', detail);
        },
        binderror: function binderror() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref4$detail = _ref4.detail,
                detail = _ref4$detail === undefined ? {} : _ref4$detail;

            this.triggerEvent('error', detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJpbmxpbmUiLCJCb29sZWFuIiwic2l6ZSIsInNoYXBlIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwibG9uZyIsIm9wZW5UeXBlIiwiYXBwUGFyYW1ldGVyIiwiaG92ZXJTdG9wUHJvcGFnYXRpb24iLCJob3ZlclN0YXJ0VGltZSIsIk51bWJlciIsImhvdmVyU3RheVRpbWUiLCJsYW5nIiwic2Vzc2lvbkZyb20iLCJzZW5kTWVzc2FnZVRpdGxlIiwic2VuZE1lc3NhZ2VQYXRoIiwic2VuZE1lc3NhZ2VJbWciLCJzaG93TWVzc2FnZUNhcmQiLCJtZXRob2RzIiwiaGFuZGxlVGFwIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsImJpbmRnZXR1c2VyaW5mbyIsImRldGFpbCIsImJpbmRjb250YWN0IiwiYmluZGdldHBob25lbnVtYmVyIiwiYmluZGVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDs7QUFHTkMsZ0JBQVk7QUFDUjtBQUNBQyxjQUFNO0FBQ0ZBLGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0FGRTtBQU1SQyxnQkFBUTtBQUNKSCxrQkFBTUksT0FERjtBQUVKRixtQkFBTztBQUZILFNBTkE7QUFVUjtBQUNBRyxjQUFNO0FBQ0ZMLGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0FYRTtBQWVSO0FBQ0FJLGVBQU87QUFDSE4sa0JBQU1DLE1BREg7QUFFSEMsbUJBQU87QUFGSixTQWhCQztBQW9CUkssa0JBQVU7QUFDTlAsa0JBQU1JLE9BREE7QUFFTkYsbUJBQU87QUFGRCxTQXBCRjtBQXdCUk0saUJBQVM7QUFDTFIsa0JBQU1JLE9BREQ7QUFFTEYsbUJBQU87QUFGRixTQXhCRDtBQTRCUk8sY0FBTTtBQUNGVCxrQkFBTUksT0FESjtBQUVGRixtQkFBTztBQUZMLFNBNUJFO0FBZ0NSUSxrQkFBVVQsTUFoQ0Y7QUFpQ1JVLHNCQUFjVixNQWpDTjtBQWtDUlcsOEJBQXNCUixPQWxDZDtBQW1DUlMsd0JBQWdCO0FBQ1piLGtCQUFNYyxNQURNO0FBRVpaLG1CQUFPO0FBRkssU0FuQ1I7QUF1Q1JhLHVCQUFlO0FBQ1hmLGtCQUFNYyxNQURLO0FBRVhaLG1CQUFPO0FBRkksU0F2Q1A7QUEyQ1JjLGNBQU07QUFDRmhCLGtCQUFNQyxNQURKO0FBRUZDLG1CQUFPO0FBRkwsU0EzQ0U7QUErQ1JlLHFCQUFhO0FBQ1RqQixrQkFBTUMsTUFERztBQUVUQyxtQkFBTztBQUZFLFNBL0NMO0FBbURSZ0IsMEJBQWtCakIsTUFuRFY7QUFvRFJrQix5QkFBaUJsQixNQXBEVDtBQXFEUm1CLHdCQUFnQm5CLE1BckRSO0FBc0RSb0IseUJBQWlCakI7QUF0RFQsS0FITjs7QUE0RE5rQixhQUFTO0FBQ0xDLGlCQURLLHVCQUNRO0FBQ1QsZ0JBQUksS0FBS0MsSUFBTCxDQUFVakIsUUFBZCxFQUF3QixPQUFPLEtBQVA7O0FBRXhCLGlCQUFLa0IsWUFBTCxDQUFrQixPQUFsQjtBQUNILFNBTEk7QUFNTEMsdUJBTkssNkJBTWlDO0FBQUEsMkZBQUosRUFBSTtBQUFBLG1DQUFwQkMsTUFBb0I7QUFBQSxnQkFBcEJBLE1BQW9CLCtCQUFYLEVBQVc7O0FBQ2xDLGlCQUFLRixZQUFMLENBQWtCLGFBQWxCLEVBQWlDRSxNQUFqQztBQUNILFNBUkk7QUFTTEMsbUJBVEsseUJBUzZCO0FBQUEsNEZBQUosRUFBSTtBQUFBLHFDQUFwQkQsTUFBb0I7QUFBQSxnQkFBcEJBLE1BQW9CLGdDQUFYLEVBQVc7O0FBQzlCLGlCQUFLRixZQUFMLENBQWtCLFNBQWxCLEVBQTZCRSxNQUE3QjtBQUNILFNBWEk7QUFZTEUsMEJBWkssZ0NBWW9DO0FBQUEsNEZBQUosRUFBSTtBQUFBLHFDQUFwQkYsTUFBb0I7QUFBQSxnQkFBcEJBLE1BQW9CLGdDQUFYLEVBQVc7O0FBQ3JDLGlCQUFLRixZQUFMLENBQWtCLGdCQUFsQixFQUFvQ0UsTUFBcEM7QUFDSCxTQWRJO0FBZUxHLGlCQWZLLHVCQWUyQjtBQUFBLDRGQUFKLEVBQUk7QUFBQSxxQ0FBcEJILE1BQW9CO0FBQUEsZ0JBQXBCQSxNQUFvQixnQ0FBWCxFQUFXOztBQUM1QixpQkFBS0YsWUFBTCxDQUFrQixPQUFsQixFQUEyQkUsTUFBM0I7QUFDSDtBQWpCSTtBQTVESCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRlZmF1bHQsIHByaW1hcnksIGdob3N0LCBpbmZvLCBzdWNjZXNzLCB3YXJuaW5nLCBlcnJvclxyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmxpbmU6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBkZWZhdWx0LCBsYXJnZSwgc21hbGxcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gY2lyY2xlLCBzcXVhcmVcclxuICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnc3F1YXJlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZGluZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb25nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BlblR5cGU6IFN0cmluZyxcclxuICAgICAgICBhcHBQYXJhbWV0ZXI6IFN0cmluZyxcclxuICAgICAgICBob3ZlclN0b3BQcm9wYWdhdGlvbjogQm9vbGVhbixcclxuICAgICAgICBob3ZlclN0YXJ0VGltZToge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaG92ZXJTdGF5VGltZToge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiA3MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXNzaW9uRnJvbToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VuZE1lc3NhZ2VUaXRsZTogU3RyaW5nLFxyXG4gICAgICAgIHNlbmRNZXNzYWdlUGF0aDogU3RyaW5nLFxyXG4gICAgICAgIHNlbmRNZXNzYWdlSW1nOiBTdHJpbmcsXHJcbiAgICAgICAgc2hvd01lc3NhZ2VDYXJkOiBCb29sZWFuXHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBoYW5kbGVUYXAgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2snKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmRnZXR1c2VyaW5mbyh7IGRldGFpbCA9IHt9IH0gPSB7fSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZ2V0dXNlcmluZm8nLCBkZXRhaWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmluZGNvbnRhY3QoeyBkZXRhaWwgPSB7fSB9ID0ge30pIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NvbnRhY3QnLCBkZXRhaWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmluZGdldHBob25lbnVtYmVyKHsgZGV0YWlsID0ge30gfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdnZXRwaG9uZW51bWJlcicsIGRldGFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kZXJyb3IoeyBkZXRhaWwgPSB7fSB9ID0ge30pIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Vycm9yJywgZGV0YWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=