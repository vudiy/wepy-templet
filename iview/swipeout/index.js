'use strict';

/*
* touch事件判断方式
* https://github.com/madrobby/zepto/blob/master/src/touch.js#files
*/
function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
}

Component({
    externalClasses: ['i-class'],
    properties: {
        actions: {
            value: [],
            type: Array,
            observer: '_updateButtonSize'
        },
        unclosable: {
            value: false,
            type: Boolean
        },
        toggle: {
            value: false,
            type: Boolean,
            observer: 'closeButtonGroup'
        },
        operateWidth: {
            type: Number,
            value: 160
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    data: {
        //touch start position
        tStart: {
            pageX: 0,
            pageY: 0
        },
        //限制滑动距离
        limitMove: 0,
        //element move position
        position: {
            pageX: 0,
            pageY: 0
        }
    },
    methods: {
        //阻止事件冒泡
        loop: function loop() {},
        _updateButtonSize: function _updateButtonSize() {
            var actions = this.data.actions;
            if (actions.length > 0) {
                var query = wx.createSelectorQuery().in(this);
                var limitMovePosition = 0;
                actions.forEach(function (item) {
                    limitMovePosition += item.width || 0;
                });
                this.data.limitMove = limitMovePosition;
                /*
                    * 动态获取每个传进值的按钮尺寸不能正确获取，在安卓上少了6px
                    * 暂时实现需要在actions里面传递宽度
                    * 需要后期调研
                */
                //query.selectAll('.i-swipeout-button-right-item').boundingClientRect((rects)=>{
                //     if( rects ){
                //         console.log(rects,1111111)
                //         rects.forEach(item => {
                //             limitMovePosition += item.width;
                //         });
                //         this.data.limitMove = limitMovePosition;
                //         console.log(limitMovePosition,111111111)
                //     }
                // }).exec()
            } else {
                this.data.limitMove = this.data.operateWidth;
            }
        },
        handlerTouchstart: function handlerTouchstart(event) {
            var touches = event.touches ? event.touches[0] : {};
            var tStart = this.data.tStart;
            if (touches) {
                for (var i in tStart) {
                    if (touches[i]) {
                        tStart[i] = touches[i];
                    }
                }
            }
        },
        swipper: function swipper(touches) {
            var data = this.data;
            var start = data.tStart;
            var spacing = {
                pageX: touches.pageX - start.pageX,
                pageY: touches.pageY - start.pageY
            };
            if (data.limitMove < Math.abs(spacing.pageX)) {
                spacing.pageX = -data.limitMove;
            }
            this.setData({
                'position': spacing
            });
        },
        handlerTouchmove: function handlerTouchmove(event) {
            var start = this.data.tStart;
            var touches = event.touches ? event.touches[0] : {};
            if (touches) {
                var direction = swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
                if (direction === 'Left') {
                    this.swipper(touches);
                }
            }
        },
        handlerTouchend: function handlerTouchend(event) {
            var start = this.data.tStart;
            var touches = event.changedTouches ? event.changedTouches[0] : {};
            if (touches) {
                var direction = swipeDirection(start.pageX, touches.pageX, start.pageY, touches.pageY);
                var spacing = {
                    pageX: touches.pageX - start.pageX,
                    pageY: touches.pageY - start.pageY
                };
                if (Math.abs(spacing.pageX) >= 40 && direction === "Left") {
                    spacing.pageX = spacing.pageX < 0 ? -this.data.limitMove : this.data.limitMove;
                } else {
                    spacing.pageX = 0;
                }
                this.setData({
                    'position': spacing
                });
            }
        },
        handlerButton: function handlerButton(event) {
            if (!this.data.unclosable) {
                this.closeButtonGroup();
            }
            var dataset = event.currentTarget.dataset;
            this.triggerEvent('change', {
                index: dataset.index
            });
        },
        closeButtonGroup: function closeButtonGroup() {
            this.setData({
                'position': { pageX: 0, pageY: 0 }
            });
        },

        //控制自定义组件
        handlerParentButton: function handlerParentButton(event) {
            if (!this.data.unclosable) {
                this.closeButtonGroup();
            }
        }
    },
    ready: function ready() {
        this._updateButtonSize();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN3aXBlRGlyZWN0aW9uIiwieDEiLCJ4MiIsInkxIiwieTIiLCJNYXRoIiwiYWJzIiwiQ29tcG9uZW50IiwiZXh0ZXJuYWxDbGFzc2VzIiwicHJvcGVydGllcyIsImFjdGlvbnMiLCJ2YWx1ZSIsInR5cGUiLCJBcnJheSIsIm9ic2VydmVyIiwidW5jbG9zYWJsZSIsIkJvb2xlYW4iLCJ0b2dnbGUiLCJvcGVyYXRlV2lkdGgiLCJOdW1iZXIiLCJvcHRpb25zIiwibXVsdGlwbGVTbG90cyIsImRhdGEiLCJ0U3RhcnQiLCJwYWdlWCIsInBhZ2VZIiwibGltaXRNb3ZlIiwicG9zaXRpb24iLCJtZXRob2RzIiwibG9vcCIsIl91cGRhdGVCdXR0b25TaXplIiwibGVuZ3RoIiwicXVlcnkiLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpbiIsImxpbWl0TW92ZVBvc2l0aW9uIiwiZm9yRWFjaCIsIml0ZW0iLCJ3aWR0aCIsImhhbmRsZXJUb3VjaHN0YXJ0IiwiZXZlbnQiLCJ0b3VjaGVzIiwiaSIsInN3aXBwZXIiLCJzdGFydCIsInNwYWNpbmciLCJzZXREYXRhIiwiaGFuZGxlclRvdWNobW92ZSIsImRpcmVjdGlvbiIsImhhbmRsZXJUb3VjaGVuZCIsImNoYW5nZWRUb3VjaGVzIiwiaGFuZGxlckJ1dHRvbiIsImNsb3NlQnV0dG9uR3JvdXAiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsInRyaWdnZXJFdmVudCIsImluZGV4IiwiaGFuZGxlclBhcmVudEJ1dHRvbiIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFDOzs7O0FBSUQsU0FBU0EsY0FBVCxDQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsRUFBcEMsRUFBd0M7QUFDcEMsV0FBT0MsS0FBS0MsR0FBTCxDQUFTTCxLQUFLQyxFQUFkLEtBQ1BHLEtBQUtDLEdBQUwsQ0FBU0gsS0FBS0MsRUFBZCxDQURPLEdBQ2NILEtBQUtDLEVB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LEdBQXFCLENBQUUsS0FBS0YsSUFBTCxDQUFVSSxTQUFqQyxHQUE2QyxLQUFLSixJQUFMLENBQVVJLFNBQXZFO0FBQ0gsaUJBRkQsTUFFSztBQUNEb0IsNEJBQVF0QixLQUFSLEdBQWdCLENBQWhCO0FBQ0g7QUFDRCxxQkFBS3VCLE9BQUwsQ0FBYTtBQUNULGdDQUFhRDtBQURKLGlCQUFiO0FBR0g7QUFDSixTQXRGSztBQXVGTk0scUJBdkZNLHlCQXVGUVgsS0F2RlIsRUF1RmM7QUFDaEIsZ0JBQUksQ0FBQyxLQUFLbkIsSUFBTCxDQUFVUCxVQUFmLEVBQTJCO0FBQ3ZCLHFCQUFLc0MsZ0JBQUw7QUFDSDtBQUNELGdCQUFNQyxVQUFVYixNQUFNYyxhQUFOLENBQW9CRCxPQUFwQztBQUNBLGlCQUFLRSxZQUFMLENBQWtCLFFBQWxCLEVBQTJCO0FBQ3ZCQyx1QkFBUUgsUUFBUUc7QUFETyxhQUEzQjtBQUdILFNBL0ZLO0FBZ0dOSix3QkFoR00sOEJBZ0dZO0FBQ2QsaUJBQUtOLE9BQUwsQ0FBYTtBQUNULDRCQUFhLEVBQUN2QixPQUFRLENBQVQsRUFBV0MsT0FBUSxDQUFuQjtBQURKLGFBQWI7QUFHSCxTQXBHSzs7QUFxR047QUFDQWlDLDJCQXRHTSwrQkFzR2NqQixLQXRHZCxFQXNHb0I7QUFDdEIsZ0JBQUksQ0FBQyxLQUFLbkIsSUFBTCxDQUFVUCxVQUFmLEVBQTJCO0FBQ3ZCLHFCQUFLc0MsZ0JBQUw7QUFDSDtBQUNKO0FBMUdLLEtBeENKO0FBb0pOTSxTQXBKTSxtQkFvSkM7QUFDSCxhQUFLN0IsaUJBQUw7QUFDSDtBQXRKSyxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qXHJcbiogdG91Y2jkuovku7bliKTmlq3mlrnlvI9cclxuKiBodHRwczovL2dpdGh1Yi5jb20vbWFkcm9iYnkvemVwdG8vYmxvYi9tYXN0ZXIvc3JjL3RvdWNoLmpzI2ZpbGVzXHJcbiovXHJcbmZ1bmN0aW9uIHN3aXBlRGlyZWN0aW9uKHgxLCB4MiwgeTEsIHkyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMoeDEgLSB4MikgPj1cclxuICAgIE1hdGguYWJzKHkxIC0geTIpID8gKHgxIC0geDIgPiAwID8gJ0xlZnQnIDogJ1JpZ2h0JykgOiAoeTEgLSB5MiA+IDAgPyAnVXAnIDogJ0Rvd24nKVxyXG59XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIG9ic2VydmVyIDogJ191cGRhdGVCdXR0b25TaXplJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5jbG9zYWJsZSA6IHtcclxuICAgICAgICAgICAgdmFsdWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgdHlwZSA6IEJvb2xlYW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvZ2dsZSA6IHtcclxuICAgICAgICAgICAgdmFsdWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgdHlwZSA6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIG9ic2VydmVyIDogJ2Nsb3NlQnV0dG9uR3JvdXAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGVyYXRlV2lkdGggOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlIDogMTYwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAvLyDlnKjnu4Tku7blrprkuYnml7bnmoTpgInpobnkuK3lkK/nlKjlpJpzbG905pSv5oyBXHJcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRhdGEgOiB7XHJcbiAgICAgICAgLy90b3VjaCBzdGFydCBwb3NpdGlvblxyXG4gICAgICAgIHRTdGFydCA6IHtcclxuICAgICAgICAgICAgcGFnZVggOiAwLFxyXG4gICAgICAgICAgICBwYWdlWSA6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6ZmQ5Yi25ruR5Yqo6Led56a7XHJcbiAgICAgICAgbGltaXRNb3ZlIDogMCxcclxuICAgICAgICAvL2VsZW1lbnQgbW92ZSBwb3NpdGlvblxyXG4gICAgICAgIHBvc2l0aW9uIDoge1xyXG4gICAgICAgICAgICBwYWdlWCA6IDAsXHJcbiAgICAgICAgICAgIHBhZ2VZIDogMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzIDoge1xyXG4gICAgICAgIC8v6Zi75q2i5LqL5Lu25YaS5rOhXHJcbiAgICAgICAgbG9vcCgpe30sXHJcbiAgICAgICAgX3VwZGF0ZUJ1dHRvblNpemUoKXtcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuZGF0YS5hY3Rpb25zO1xyXG4gICAgICAgICAgICBpZiggYWN0aW9ucy5sZW5ndGggPiAwICl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW1pdE1vdmVQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXRNb3ZlUG9zaXRpb24gKz0gaXRlbS53aWR0aCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGltaXRNb3ZlID0gbGltaXRNb3ZlUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICog5Yqo5oCB6I635Y+W5q+P5Liq5Lyg6L+b5YC855qE5oyJ6ZKu5bC65a+45LiN6IO95q2j56Gu6I635Y+W77yM5Zyo5a6J5Y2T5LiK5bCR5LqGNnB4XHJcbiAgICAgICAgICAgICAgICAgICAgKiDmmoLml7blrp7njrDpnIDopoHlnKhhY3Rpb25z6YeM6Z2i5Lyg6YCS5a695bqmXHJcbiAgICAgICAgICAgICAgICAgICAgKiDpnIDopoHlkI7mnJ/osIPnoJRcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAvL3F1ZXJ5LnNlbGVjdEFsbCgnLmktc3dpcGVvdXQtYnV0dG9uLXJpZ2h0LWl0ZW0nKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlY3RzKT0+e1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKCByZWN0cyApe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZWN0cywxMTExMTExKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZWN0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGltaXRNb3ZlUG9zaXRpb24gKz0gaXRlbS53aWR0aDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZGF0YS5saW1pdE1vdmUgPSBsaW1pdE1vdmVQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cobGltaXRNb3ZlUG9zaXRpb24sMTExMTExMTExKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pLmV4ZWMoKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5saW1pdE1vdmUgPSB0aGlzLmRhdGEub3BlcmF0ZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZXJUb3VjaHN0YXJ0KGV2ZW50KXtcclxuICAgICAgICAgICAgY29uc3QgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdIDoge307XHJcbiAgICAgICAgICAgIGNvbnN0IHRTdGFydCA9IHRoaXMuZGF0YS50U3RhcnQ7XHJcbiAgICAgICAgICAgIGlmKCB0b3VjaGVzICl7XHJcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBpIGluIHRTdGFydCApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0b3VjaGVzW2ldICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRTdGFydFtpXSA9IHRvdWNoZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzd2lwcGVyKHRvdWNoZXMpe1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGRhdGEudFN0YXJ0O1xyXG4gICAgICAgICAgICBjb25zdCBzcGFjaW5nID0ge1xyXG4gICAgICAgICAgICAgICAgcGFnZVggOiB0b3VjaGVzLnBhZ2VYIC0gc3RhcnQucGFnZVgsXHJcbiAgICAgICAgICAgICAgICBwYWdlWSA6IHRvdWNoZXMucGFnZVkgLSBzdGFydC5wYWdlWVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCBkYXRhLmxpbWl0TW92ZSA8ICBNYXRoLmFicyggc3BhY2luZy5wYWdlWCApICl7XHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nLnBhZ2VYID0gLWRhdGEubGltaXRNb3ZlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbicgOiBzcGFjaW5nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVyVG91Y2htb3ZlKGV2ZW50KXtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmRhdGEudFN0YXJ0O1xyXG4gICAgICAgICAgICBjb25zdCB0b3VjaGVzID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0gOiB7fTtcclxuICAgICAgICAgICAgaWYoIHRvdWNoZXMgKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHN3aXBlRGlyZWN0aW9uKCBzdGFydC5wYWdlWCx0b3VjaGVzLnBhZ2VYLHN0YXJ0LnBhZ2VZLHRvdWNoZXMucGFnZVkgKTtcclxuICAgICAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gPT09ICdMZWZ0JyApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcHBlciggdG91Y2hlcyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVyVG91Y2hlbmQoZXZlbnQpe1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuZGF0YS50U3RhcnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDoge307XHJcbiAgICAgICAgICAgIGlmKCB0b3VjaGVzICl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBzd2lwZURpcmVjdGlvbiggc3RhcnQucGFnZVgsdG91Y2hlcy5wYWdlWCxzdGFydC5wYWdlWSx0b3VjaGVzLnBhZ2VZICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFjaW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VYIDogdG91Y2hlcy5wYWdlWCAtIHN0YXJ0LnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VZIDogdG91Y2hlcy5wYWdlWSAtIHN0YXJ0LnBhZ2VZXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiggTWF0aC5hYnMoIHNwYWNpbmcucGFnZVggKSA+PSA0MCAmJiBkaXJlY3Rpb24gPT09IFwiTGVmdFwiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZy5wYWdlWCA9IHNwYWNpbmcucGFnZVggIDwgMCA/IC0gdGhpcy5kYXRhLmxpbWl0TW92ZSA6IHRoaXMuZGF0YS5saW1pdE1vdmU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nLnBhZ2VYID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJyA6IHNwYWNpbmdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZXJCdXR0b24oZXZlbnQpe1xyXG4gICAgICAgICAgICBpZiggIXRoaXMuZGF0YS51bmNsb3NhYmxlICl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQnV0dG9uR3JvdXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhc2V0ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJyx7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA6IGRhdGFzZXQuaW5kZXhcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlQnV0dG9uR3JvdXAoKXtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbicgOiB7cGFnZVggOiAwLHBhZ2VZIDogMH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5o6n5Yi26Ieq5a6a5LmJ57uE5Lu2XHJcbiAgICAgICAgaGFuZGxlclBhcmVudEJ1dHRvbihldmVudCl7XHJcbiAgICAgICAgICAgIGlmKCAhdGhpcy5kYXRhLnVuY2xvc2FibGUgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VCdXR0b25Hcm91cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlYWR5KCl7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQnV0dG9uU2l6ZSgpO1xyXG4gICAgfVxyXG59KTtcclxuIl19