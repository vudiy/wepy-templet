'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var default_data = {
    visible: false,
    content: '',
    icon: '',
    image: '',
    duration: 2,
    mask: true,
    type: 'default' // default || success || warning || error || loading
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRfZGF0YSIsInZpc2libGUiLCJjb250ZW50IiwiaWNvbiIsImltYWdlIiwiZHVyYXRpb24iLCJtYXNrIiwidHlwZSIsInRpbW1lciIsIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsImRhdGEiLCJtZXRob2RzIiwiaGFuZGxlU2hvdyIsIm9wdGlvbnMiLCJzZXREYXRhIiwiZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJoYW5kbGVIaWRlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsZUFBZTtBQUNqQkMsYUFBUyxLQURRO0FBRWpCQyxhQUFTLEVBRlE7QUFHakJDLFVBQU0sRUFIVztBQUlqQkMsV0FBTyxFQUpVO0FBS2pCQyxjQUFVLENBTE87QUFNakJDLFVBQU0sSUFOVztBQU9qQkMsVUFBTSxTQVBXLENBT0E7QUFQQSxDQUFyQjs7QUFVQSxJQUFJQyxTQUFTLElBQWI7O0FBRUFDLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYOztBQUdOQyx1QkFDT1gsWUFEUCxDQUhNOztBQU9OWSxhQUFTO0FBQ0xDLGtCQURLLHNCQUNPQyxPQURQLEVBQ2dCO0FBQUE7O0FBQUEsZ0NBQzBCQSxPQUQxQixDQUNUUCxJQURTO0FBQUEsZ0JBQ1RBLElBRFMsaUNBQ0YsU0FERTtBQUFBLG9DQUMwQk8sT0FEMUIsQ0FDU1QsUUFEVDtBQUFBLGdCQUNTQSxRQURULHFDQUNvQixDQURwQjs7O0FBR2pCLGlCQUFLVSxPQUFMLGNBQ09ELE9BRFA7QUFFSVAsMEJBRko7QUFHSUYsa0NBSEo7QUFJSUoseUJBQVM7QUFKYjs7QUFPQSxnQkFBTWUsSUFBSSxLQUFLTCxJQUFMLENBQVVOLFFBQVYsR0FBcUIsSUFBL0I7O0FBRUEsZ0JBQUlHLE1BQUosRUFBWVMsYUFBYVQsTUFBYjtBQUNaLGdCQUFJUSxNQUFNLENBQVYsRUFBYTtBQUNUUix5QkFBU1UsV0FBVyxZQUFNO0FBQ3RCLDBCQUFLQyxVQUFMO0FBQ0FYLDZCQUFTLElBQVQ7QUFDSCxpQkFIUSxFQUdOUSxDQUhNLENBQVQ7QUFJSDtBQUNKLFNBcEJJO0FBc0JMRyxrQkF0Qkssd0JBc0JTO0FBQ1YsaUJBQUtKLE9BQUwsY0FDT2YsWUFEUDtBQUdIO0FBMUJJO0FBUEgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRfZGF0YSA9IHtcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBpY29uOiAnJyxcclxuICAgIGltYWdlOiAnJyxcclxuICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgbWFzazogdHJ1ZSxcclxuICAgIHR5cGU6ICdkZWZhdWx0JywgLy8gZGVmYXVsdCB8fCBzdWNjZXNzIHx8IHdhcm5pbmcgfHwgZXJyb3IgfHwgbG9hZGluZ1xyXG59O1xyXG5cclxubGV0IHRpbW1lciA9IG51bGw7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcclxuXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4uZGVmYXVsdF9kYXRhXHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBoYW5kbGVTaG93IChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSA9ICdkZWZhdWx0JywgZHVyYXRpb24gPSAyIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZGF0YS5kdXJhdGlvbiAqIDEwMDA7XHJcblxyXG4gICAgICAgICAgICBpZiAodGltbWVyKSBjbGVhclRpbWVvdXQodGltbWVyKTtcclxuICAgICAgICAgICAgaWYgKGQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRpbW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9LCBkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUhpZGUgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4uZGVmYXVsdF9kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==