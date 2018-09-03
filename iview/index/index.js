'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        height: {
            type: String,
            value: '300'
        },
        itemHeight: {
            type: Number,
            value: 18
        }
    },
    relations: {
        '../index-item/index': {
            type: 'child',
            linked: function linked() {
                this._updateDataChange();
            },
            linkChanged: function linkChanged() {
                this._updateDataChange();
            },
            unlinked: function unlinked() {
                this._updateDataChange();
            }
        }
    },
    data: {
        scrollTop: 0,
        fixedData: [],
        current: 0,
        timer: null,
        startTop: 0,
        itemLength: 0,
        currentName: '',
        isTouches: false
    },
    methods: {
        loop: function loop() {},
        _updateDataChange: function _updateDataChange() {
            var _this = this;

            var indexItems = this.getRelationNodes('../index-item/index');
            var len = indexItems.length;
            var fixedData = this.data.fixedData;
            /*
             * 使用函数节流限制重复去设置数组内容进而限制多次重复渲染
             * 暂时没有研究微信在渲染的时候是否会进行函数节流
            */
            if (len > 0) {

                if (this.data.timer) {
                    clearTimeout(this.data.timer);
                    this.setData({
                        timer: null
                    });
                }

                this.data.timer = setTimeout(function () {
                    var data = [];
                    indexItems.forEach(function (item) {
                        if (item.data.name && fixedData.indexOf(item.data.name) === -1) {
                            data.push(item.data.name);
                            item.updateDataChange();
                        }
                    });
                    _this.setData({
                        fixedData: data,
                        itemLength: indexItems.length
                    });
                    //组件加载完成之后重新设置顶部高度
                    _this.setTouchStartVal();
                }, 0);
                this.setData({
                    timer: this.data.timer
                });
            }
        },
        handlerScroll: function handlerScroll(event) {
            var _this2 = this;

            var detail = event.detail;
            var scrollTop = detail.scrollTop;
            var indexItems = this.getRelationNodes('../index-item/index');
            indexItems.forEach(function (item, index) {
                var data = item.data;
                var offset = data.top + data.height;
                if (scrollTop < offset && scrollTop >= data.top) {
                    _this2.setData({
                        current: index,
                        currentName: data.currentName
                    });
                }
            });
        },
        getCurrentItem: function getCurrentItem(index) {
            var indexItems = this.getRelationNodes('../index-item/index');
            var result = {};
            result = indexItems[index].data;
            result.total = indexItems.length;
            return result;
        },
        triggerCallback: function triggerCallback(options) {
            this.triggerEvent('change', options);
        },
        handlerFixedTap: function handlerFixedTap(event) {
            var eindex = event.currentTarget.dataset.index;
            var item = this.getCurrentItem(eindex);
            this.setData({
                scrollTop: item.top,
                currentName: item.currentName,
                isTouches: true
            });
            this.triggerCallback({
                index: eindex,
                current: item.currentName
            });
        },
        handlerTouchMove: function handlerTouchMove(event) {
            var data = this.data;
            var touches = event.touches[0] || {};
            var pageY = touches.pageY;
            var rest = pageY - data.startTop;
            var index = Math.ceil(rest / data.itemHeight);
            index = index >= data.itemLength ? data.itemLength - 1 : index;
            var movePosition = this.getCurrentItem(index);

            /*
             * 当touch选中的元素和当前currentName不相等的时候才震动一下
             * 微信震动事件
            */
            if (movePosition.name !== this.data.currentName) {
                wx.vibrateShort();
            }

            this.setData({
                scrollTop: movePosition.top,
                currentName: movePosition.name,
                isTouches: true
            });

            this.triggerCallback({
                index: index,
                current: movePosition.name
            });
        },
        handlerTouchEnd: function handlerTouchEnd() {
            this.setData({
                isTouches: false
            });
        },
        setTouchStartVal: function setTouchStartVal() {
            var _this3 = this;

            var className = '.i-index-fixed';
            var query = wx.createSelectorQuery().in(this);
            query.select(className).boundingClientRect(function (res) {
                _this3.setData({
                    startTop: res.top
                });
            }).exec();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJoZWlnaHQiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJpdGVtSGVpZ2h0IiwiTnVtYmVyIiwicmVsYXRpb25zIiwibGlua2VkIiwiX3VwZGF0ZURhdGFDaGFuZ2UiLCJsaW5rQ2hhbmdlZCIsInVubGlua2VkIiwiZGF0YSIsInNjcm9sbFRvcCIsImZpeGVkRGF0YSIsImN1cnJlbnQiLCJ0aW1lciIsInN0YXJ0VG9wIiwiaXRlbUxlbmd0aCIsImN1cnJlbnROYW1lIiwiaXNUb3VjaGVzIiwibWV0aG9kcyIsImxvb3AiLCJpbmRleEl0ZW1zIiwiZ2V0UmVsYXRpb25Ob2RlcyIsImxlbiIsImxlbmd0aCIsImNsZWFyVGltZW91dCIsInNldERhdGEiLCJzZXRUaW1lb3V0IiwiZm9yRWFjaCIsIml0ZW0iLCJuYW1lIiwiaW5kZXhPZiIsInB1c2giLCJ1cGRhdGVEYXRhQ2hhbmdlIiwic2V0VG91Y2hTdGFydFZhbCIsImhhbmRsZXJTY3JvbGwiLCJldmVudCIsImRldGFpbCIsImluZGV4Iiwib2Zmc2V0IiwidG9wIiwiZ2V0Q3VycmVudEl0ZW0iLCJyZXN1bHQiLCJ0b3RhbCIsInRyaWdnZXJDYWxsYmFjayIsIm9wdGlvbnMiLCJ0cmlnZ2VyRXZlbnQiLCJoYW5kbGVyRml4ZWRUYXAiLCJlaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImhhbmRsZXJUb3VjaE1vdmUiLCJ0b3VjaGVzIiwicGFnZVkiLCJyZXN0IiwiTWF0aCIsImNlaWwiLCJtb3ZlUG9zaXRpb24iLCJ3eCIsInZpYnJhdGVTaG9ydCIsImhhbmRsZXJUb3VjaEVuZCIsImNsYXNzTmFtZSIsInF1ZXJ5IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVzIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFB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VUFBZCxHQUEyQk4sS0FBS00sVUFBTCxHQUFpQixDQUE1QyxHQUFnRHNCLEtBQXhEO0FBQ0EsZ0JBQU1tQixlQUFlLEtBQUtoQixjQUFMLENBQW9CSCxLQUFwQixDQUFyQjs7QUFFRDs7OztBQUlDLGdCQUFJbUIsYUFBYTNCLElBQWIsS0FBc0IsS0FBS3BCLElBQUwsQ0FBVU8sV0FBcEMsRUFBaUQ7QUFDN0N5QyxtQkFBR0MsWUFBSDtBQUNIOztBQUVELGlCQUFLakMsT0FBTCxDQUFhO0FBQ1RmLDJCQUFZOEMsYUFBYWpCLEdBRGhCO0FBRVR2Qiw2QkFBY3dDLGFBQWEzQixJQUZsQjtBQUdUWiwyQkFBWTtBQUhILGFBQWI7O0FBTUEsaUJBQUswQixlQUFMLENBQXFCO0FBQ2pCTix1QkFBUUEsS0FEUztBQUVqQnpCLHlCQUFVNEMsYUFBYTNCO0FBRk4sYUFBckI7QUFJSCxTQXpHSztBQTBHTjhCLHVCQTFHTSw2QkEwR1c7QUFDYixpQkFBS2xDLE9BQUwsQ0FBYTtBQUNUUiwyQkFBWTtBQURILGFBQWI7QUFHSCxTQTlHSztBQStHTmdCLHdCQS9HTSw4QkErR1k7QUFBQTs7QUFDZCxnQkFBTTJCLFlBQVksZ0JBQWxCO0FBQ0EsZ0JBQU1DLFFBQVFKLEdBQUdLLG1CQUFILEdBQXlCQyxFQUF6QixDQUE0QixJQUE1QixDQUFkO0FBQ0FGLGtCQUFNRyxNQUFOLENBQWNKLFNBQWQsRUFBMEJLLGtCQUExQixDQUE2QyxVQUFDQyxHQUFELEVBQU87QUFDaEQsdUJBQUt6QyxPQUFMLENBQWE7QUFDVFgsOEJBQVdvRCxJQUFJM0I7QUFETixpQkFBYjtBQUdILGFBSkQsRUFJRzRCLElBSkg7QUFLSDtBQXZISztBQXBDSixDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcbiAgICBwcm9wZXJ0aWVzIDoge1xyXG4gICAgICAgIGhlaWdodCA6IHtcclxuICAgICAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWUgOiAnMzAwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbUhlaWdodCA6IHtcclxuICAgICAgICAgICAgdHlwZSA6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWUgOiAxOFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWxhdGlvbnMgOiB7XHJcbiAgICAgICAgJy4uL2luZGV4LWl0ZW0vaW5kZXgnIDoge1xyXG4gICAgICAgICAgICB0eXBlIDogJ2NoaWxkJyxcclxuICAgICAgICAgICAgbGlua2VkKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEYXRhQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpbmtDaGFuZ2VkICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURhdGFDaGFuZ2UoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5saW5rZWQgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGF0YUNoYW5nZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEgOiB7XHJcbiAgICAgICAgc2Nyb2xsVG9wIDogMCxcclxuICAgICAgICBmaXhlZERhdGEgOiBbXSxcclxuICAgICAgICBjdXJyZW50IDogMCxcclxuICAgICAgICB0aW1lciA6IG51bGwsXHJcbiAgICAgICAgc3RhcnRUb3AgOiAwLFxyXG4gICAgICAgIGl0ZW1MZW5ndGggOiAwLFxyXG4gICAgICAgIGN1cnJlbnROYW1lIDogJycsXHJcbiAgICAgICAgaXNUb3VjaGVzIDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBtZXRob2RzIDoge1xyXG4gICAgICAgIGxvb3AoKXt9LFxyXG4gICAgICAgIF91cGRhdGVEYXRhQ2hhbmdlKCApe1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleEl0ZW1zID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9pbmRleC1pdGVtL2luZGV4Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGluZGV4SXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBmaXhlZERhdGEgPSB0aGlzLmRhdGEuZml4ZWREYXRhO1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgKiDkvb/nlKjlh73mlbDoioLmtYHpmZDliLbph43lpI3ljrvorr7nva7mlbDnu4TlhoXlrrnov5vogIzpmZDliLblpJrmrKHph43lpI3muLLmn5NcclxuICAgICAgICAgICAgICog5pqC5pe25rKh5pyJ56CU56m25b6u5L+h5Zyo5riy5p+T55qE5pe25YCZ5piv5ZCm5Lya6L+b6KGM5Ye95pWw6IqC5rWBXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuZGF0YS50aW1lciApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCggdGhpcy5kYXRhLnRpbWVyIClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lciA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggaXRlbS5kYXRhLm5hbWUgJiYgZml4ZWREYXRhLmluZGV4T2YoIGl0ZW0uZGF0YS5uYW1lICkgPT09IC0xICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goaXRlbS5kYXRhLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVEYXRhQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkRGF0YSA6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MZW5ndGggOiBpbmRleEl0ZW1zLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy/nu4Tku7bliqDovb3lrozmiJDkuYvlkI7ph43mlrDorr7nva7pobbpg6jpq5jluqZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRvdWNoU3RhcnRWYWwoKTtcclxuICAgICAgICAgICAgICAgIH0sMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyIDogdGhpcy5kYXRhLnRpbWVyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZXJTY3JvbGwoZXZlbnQpe1xyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWwgPSBldmVudC5kZXRhaWw7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRldGFpbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4SXRlbXMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2luZGV4LWl0ZW0vaW5kZXgnKTtcclxuICAgICAgICAgICAgaW5kZXhJdGVtcy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBpdGVtLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gZGF0YS50b3AgKyBkYXRhLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGlmKCBzY3JvbGxUb3AgPCBvZmZzZXQgJiYgc2Nyb2xsVG9wID49IGRhdGEudG9wICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TmFtZSA6IGRhdGEuY3VycmVudE5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q3VycmVudEl0ZW0oaW5kZXgpe1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleEl0ZW1zID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9pbmRleC1pdGVtL2luZGV4Jyk7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gaW5kZXhJdGVtc1tpbmRleF0uZGF0YTtcclxuICAgICAgICAgICAgcmVzdWx0LnRvdGFsID0gaW5kZXhJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cmlnZ2VyQ2FsbGJhY2sob3B0aW9ucyl7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLG9wdGlvbnMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVyRml4ZWRUYXAoZXZlbnQpe1xyXG4gICAgICAgICAgICBjb25zdCBlaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEN1cnJlbnRJdGVtKGVpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3AgOiBpdGVtLnRvcCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnROYW1lIDogaXRlbS5jdXJyZW50TmFtZSxcclxuICAgICAgICAgICAgICAgIGlzVG91Y2hlcyA6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgaW5kZXggOiBlaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50IDogaXRlbS5jdXJyZW50TmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlclRvdWNoTW92ZShldmVudCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdWNoZXMgPSBldmVudC50b3VjaGVzWzBdIHx8IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlWSA9IHRvdWNoZXMucGFnZVk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3QgPSBwYWdlWSAtIGRhdGEuc3RhcnRUb3A7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguY2VpbCggcmVzdC9kYXRhLml0ZW1IZWlnaHQgKTtcclxuICAgICAgICAgICAgaW5kZXggPSBpbmRleCA+PSBkYXRhLml0ZW1MZW5ndGggPyBkYXRhLml0ZW1MZW5ndGggLTEgOiBpbmRleDtcclxuICAgICAgICAgICAgY29uc3QgbW92ZVBvc2l0aW9uID0gdGhpcy5nZXRDdXJyZW50SXRlbShpbmRleCk7XHJcblxyXG4gICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICog5b2TdG91Y2jpgInkuK3nmoTlhYPntKDlkozlvZPliY1jdXJyZW50TmFtZeS4jeebuOetieeahOaXtuWAmeaJjemch+WKqOS4gOS4i1xyXG4gICAgICAgICAgICAqIOW+ruS/oemch+WKqOS6i+S7tlxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmKCBtb3ZlUG9zaXRpb24ubmFtZSAhPT0gdGhpcy5kYXRhLmN1cnJlbnROYW1lICl7XHJcbiAgICAgICAgICAgICAgICB3eC52aWJyYXRlU2hvcnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCA6IG1vdmVQb3NpdGlvbi50b3AsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TmFtZSA6IG1vdmVQb3NpdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaXNUb3VjaGVzIDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgaW5kZXggOiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgOiBtb3ZlUG9zaXRpb24ubmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlclRvdWNoRW5kKCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBpc1RvdWNoZXMgOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VG91Y2hTdGFydFZhbCgpe1xyXG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSAnLmktaW5kZXgtZml4ZWQnO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KCBjbGFzc05hbWUgKS5ib3VuZGluZ0NsaWVudFJlY3QoKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUb3AgOiByZXMudG9wXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KS5leGVjKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl19