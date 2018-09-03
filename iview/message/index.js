'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var default_data = {
    visible: false,
    content: '',
    duration: 2,
    type: 'default' // default || success || warning || error
};

var timmer = null;

Component({
    externalClasses: ['i-class'],

    data: _extends({}, default_data),

    methods: {
        handleShow: function handleShow(options) {
            var _this = this;

            var _options$type = options.type,
                type = _options$type === undefined ? 'default' : _options$type,
                _options$duration = options.duration,
                duration = _options$duration === undefined ? 2 : _options$duration;


            this.setData(_extends({}, options, {
                type: type,
                duration: duration,
                visible: true
            }));

            var d = this.data.duration * 1000;

            if (timmer) clearTimeout(timmer);
            if (d !== 0) {
                timmer = setTimeout(function () {
                    _this.handleHide();
                    timmer = null;
                }, d);
            }
        },
        handleHide: function handleHide() {
            this.setData(_extends({}, default_data));
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRfZGF0YSIsInZpc2libGUiLCJjb250ZW50IiwiZHVyYXRpb24iLCJ0eXBlIiwidGltbWVyIiwiQ29tcG9uZW50IiwiZXh0ZXJuYWxDbGFzc2VzIiwiZGF0YSIsIm1ldGhvZHMiLCJoYW5kbGVTaG93Iiwib3B0aW9ucyIsInNldERhdGEiLCJkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZUhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxlQUFlO0FBQ2pCQyxhQUFTLEtBRFE7QUFFakJDLGFBQVMsRUFGUTtBQUdqQkMsY0FBVSxDQUhPO0FBSWpCQyxVQUFNLFNBSlcsQ0FJQTtBQUpBLENBQXJCOztBQU9BLElBQUlDLFNBQVMsSUFBYjs7QUFFQUMsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLHVCQUNPUixZQURQLENBSE07O0FBT05TLGFBQVM7QUFDTEMsa0JBREssc0JBQ09DLE9BRFAsRUFDZ0I7QUFBQTs7QUFBQSxnQ0FDMEJBLE9BRDFCLENBQ1RQLElBRFM7QUFBQSxnQkFDVEEsSUFEUyxpQ0FDRixTQURFO0FBQUEsb0NBQzBCTyxPQUQxQixDQUNTUixRQURUO0FBQUEsZ0JBQ1NBLFFBRFQscUNBQ29CLENBRHBCOzs7QUFHakIsaUJBQUtTLE9BQUwsY0FDT0QsT0FEUDtBQUVJUCwwQkFGSjtBQUdJRCxrQ0FISjtBQUlJRix5QkFBUztBQUpiOztBQU9BLGdCQUFNWSxJQUFJLEtBQUtMLElBQUwsQ0FBVUwsUUFBVixHQUFxQixJQUEvQjs7QUFFQSxnQkFBSUUsTUFBSixFQUFZUyxhQUFhVCxNQUFiO0FBQ1osZ0JBQUlRLE1BQU0sQ0FBVixFQUFhO0FBQ1RSLHlCQUFTVSxXQUFXLFlBQU07QUFDdEIsMEJBQUtDLFVBQUw7QUFDQVgsNkJBQVMsSUFBVDtBQUNILGlCQUhRLEVBR05RLENBSE0sQ0FBVDtBQUlIO0FBQ0osU0FwQkk7QUFzQkxHLGtCQXRCSyx3QkFzQlM7QUFDVixpQkFBS0osT0FBTCxjQUNPWixZQURQO0FBR0g7QUExQkk7QUFQSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdF9kYXRhID0ge1xyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgdHlwZTogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0IHx8IHN1Y2Nlc3MgfHwgd2FybmluZyB8fCBlcnJvclxyXG59O1xyXG5cclxubGV0IHRpbW1lciA9IG51bGw7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcclxuXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4uZGVmYXVsdF9kYXRhXHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBoYW5kbGVTaG93IChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSA9ICdkZWZhdWx0JywgZHVyYXRpb24gPSAyIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZGF0YS5kdXJhdGlvbiAqIDEwMDA7XHJcblxyXG4gICAgICAgICAgICBpZiAodGltbWVyKSBjbGVhclRpbWVvdXQodGltbWVyKTtcclxuICAgICAgICAgICAgaWYgKGQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRpbW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9LCBkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUhpZGUgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdF9kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19