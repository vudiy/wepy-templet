'use strict';

var VALID_MODE = ['closeable'];
var FONT_COLOR = '#f60';
var BG_COLOR = '#fff7cc';

Component({
    externalClasses: ['i-class'],

    properties: {
        closable: {
            type: Boolean,
            value: false
        },
        icon: {
            type: String,
            value: ''
        },
        loop: {
            type: Boolean,
            value: false
        },
        // 背景颜色
        backgroundcolor: {
            type: String,
            value: '#fefcec'
        },
        // 字体及图标颜色
        color: {
            type: String,
            value: '#f76a24'
        },
        // 滚动速度
        speed: {
            type: Number,
            value: 1000
        }
    },

    data: {
        show: true,
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null
    },
    detached: function detached() {
        this.destroyTimer();
    },
    ready: function ready() {
        if (this.data.loop) {
            this.initAnimation();
        }
    },


    methods: {
        initAnimation: function initAnimation() {
            var _this = this;

            wx.createSelectorQuery().in(this).select('.i-noticebar-content-wrap').boundingClientRect(function (wrapRect) {
                wx.createSelectorQuery().in(_this).select('.i-noticebar-content').boundingClientRect(function (rect) {
                    var duration = rect.width / 40 * _this.data.speed;
                    var animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: "linear"
                    });
                    _this.setData({
                        wrapWidth: wrapRect.width,
                        width: rect.width,
                        duration: duration,
                        animation: animation
                    }, function () {
                        _this.startAnimation();
                    });
                }).exec();
            }).exec();
        },
        startAnimation: function startAnimation() {
            var _this2 = this;

            //reset
            if (this.data.animation.option.transition.duration !== 0) {
                this.data.animation.option.transition.duration = 0;
                var resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: resetAnimation.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            var animationData = this.data.animation.translateX(-this.data.width).step();
            setTimeout(function () {
                _this2.setData({
                    animationData: animationData.export()
                });
            }, 100);
            var timer = setTimeout(function () {
                _this2.startAnimation();
            }, this.data.duration);
            this.setData({
                timer: timer
            });
        },
        destroyTimer: function destroyTimer() {
            if (this.data.timer) {
                clearTimeout(this.data.timer);
            }
        },
        handleClose: function handleClose() {
            this.destroyTimer();
            this.setData({
                show: false,
                timer: null
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlZBTElEX01PREUiLCJGT05UX0NPTE9SIiwiQkdfQ09MT1IiLCJDb21wb25lbnQiLCJleHRlcm5hbENsYXNzZXMiLCJwcm9wZXJ0aWVzIiwiY2xvc2FibGUiLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsImxvb3AiLCJiYWNrZ3JvdW5kY29sb3IiLCJjb2xvciIsInNwZWVkIiwiTnVtYmVyIiwiZGF0YSIsInNob3ciLCJ3cmFwV2lkdGgiLCJ3aWR0aCIsImR1cmF0aW9uIiwiYW5pbWF0aW9uIiwidGltZXIiLCJkZXRhY2hlZCIsImRlc3Ryb3lUaW1lciIsInJlYWR5IiwiaW5pdEFuaW1hdGlvbiIsIm1ldGhvZHMiLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsIndyYXBSZWN0IiwicmVjdCIsImNyZWF0ZUFuaW1hdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwic2V0RGF0YSIsInN0YXJ0QW5pbWF0aW9uIiwiZXhlYyIsIm9wdGlvbiIsInRyYW5zaXRpb24iLCJyZXNldEFuaW1hdGlvbiIsInRyYW5zbGF0ZVgiLCJzdGVwIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVDbG9zZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxhQUFhLENBQUMsV0FBRCxDQUFuQjtBQUNBLElBQU1DLGFBQWEsTUFBbkI7QUFDQSxJQUFNQyxXQUFXLFNBQWpCOztBQUVBQyxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDs7QUFHTkMsZ0JBQVk7QUFDUkMsa0JBQVU7QUFDTkMsa0JBQU1DLE9BREE7QUFFTkMsbUJBQU87QUFGRCxTQURGO0FBS1JDLGNBQU07QUFDRkgsa0JBQU1JLE1BREo7QUFFRkYsbUJBQU87QUFGTCxTQUxFO0FBU1JHLGNBQU07QUFDRkwsa0JBQU1DLE9B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QUtULGNBQUw7QUFDSCxhQUZhLEVBRVgsS0FBS3RCLElBQUwsQ0FBVUksUUFGQyxDQUFkO0FBR0EsaUJBQUtpQixPQUFMLENBQWE7QUFDVGY7QUFEUyxhQUFiO0FBR0gsU0EzQ0k7QUE0Q0xFLG9CQTVDSywwQkE0Q1U7QUFDWCxnQkFBSSxLQUFLUixJQUFMLENBQVVNLEtBQWQsRUFBcUI7QUFDakIwQiw2QkFBYSxLQUFLaEMsSUFBTCxDQUFVTSxLQUF2QjtBQUNIO0FBQ0osU0FoREk7QUFpREwyQixtQkFqREsseUJBaURTO0FBQ1YsaUJBQUt6QixZQUFMO0FBQ0EsaUJBQUthLE9BQUwsQ0FBYTtBQUNUcEIsc0JBQU0sS0FERztBQUVUSyx1QkFBTztBQUZFLGFBQWI7QUFJSDtBQXZESTtBQWxESCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVkFMSURfTU9ERSA9IFsnY2xvc2VhYmxlJ107XHJcbmNvbnN0IEZPTlRfQ09MT1IgPSAnI2Y2MCc7XHJcbmNvbnN0IEJHX0NPTE9SID0gJyNmZmY3Y2MnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNsb3NhYmxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9vcDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOiDjOaZr+minOiJslxyXG4gICAgICAgIGJhY2tncm91bmRjb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnI2ZlZmNlYydcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWtl+S9k+WPiuWbvuagh+minOiJslxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcjZjc2YTI0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5rua5Yqo6YCf5bqmXHJcbiAgICAgICAgc3BlZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTAwMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgd3JhcFdpZHRoOiAwLFxyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGFuaW1hdGlvbjogbnVsbCxcclxuICAgICAgICB0aW1lcjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBkZXRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lUaW1lcigpO1xyXG4gICAgfSxcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRBbmltYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcykuc2VsZWN0KCcuaS1ub3RpY2ViYXItY29udGVudC13cmFwJykuYm91bmRpbmdDbGllbnRSZWN0KCh3cmFwUmVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpLnNlbGVjdCgnLmktbm90aWNlYmFyLWNvbnRlbnQnKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHJlY3Qud2lkdGggLyA0MCAqIHRoaXMuZGF0YS5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBXaWR0aDogd3JhcFJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5leGVjKCk7XHJcblxyXG4gICAgICAgICAgICB9KS5leGVjKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydEFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgLy9yZXNldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmFuaW1hdGlvbi5vcHRpb24udHJhbnNpdGlvbi5kdXJhdGlvbiAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmFuaW1hdGlvbi5vcHRpb24udHJhbnNpdGlvbi5kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNldEFuaW1hdGlvbiA9IHRoaXMuZGF0YS5hbmltYXRpb24udHJhbnNsYXRlWCh0aGlzLmRhdGEud3JhcFdpZHRoKS5zdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IHJlc2V0QW5pbWF0aW9uLmV4cG9ydCgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYW5pbWF0aW9uLm9wdGlvbi50cmFuc2l0aW9uLmR1cmF0aW9uID0gdGhpcy5kYXRhLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EYXRhID0gdGhpcy5kYXRhLmFuaW1hdGlvbi50cmFuc2xhdGVYKC10aGlzLmRhdGEud2lkdGgpLnN0ZXAoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB9LCB0aGlzLmRhdGEuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgdGltZXIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVzdHJveVRpbWVyKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kYXRhLnRpbWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVRpbWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRpbWVyOiBudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==