'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        scrollTop: {
            type: Number,
            observer: function observer(val) {
                this._updateScrollTopChange();
            }
        }
    },
    relations: {
        '../sticky-item/index': {
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
        timer: null,
        itemLength: 0
    },
    methods: {
        _updateScrollTopChange: function _updateScrollTopChange() {
            var _this = this;

            var stickies = this.getRelationNodes('../sticky-item/index');
            if (stickies.length > 0) {
                stickies.forEach(function (item) {
                    if (item) {
                        item.updateScrollTopChange(_this.data.scrollTop);
                    }
                });
            }
        },
        _updateDataChange: function _updateDataChange() {
            var stickies = this.getRelationNodes('../sticky-item/index');
            if (stickies.length > 0) {
                if (this.data.timer) {
                    clearTimeout(this.data.timer);
                    this.setData({
                        timer: null
                    });
                }
                this.data.timer = setTimeout(function () {
                    stickies.forEach(function (item, index) {
                        if (item) {
                            item.updateDataChange(index);
                        }
                    });
                }, 0);
                this.setData({
                    timer: this.data.timer
                });
            }
        }
    }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJzY3JvbGxUb3AiLCJ0eXBlIiwiTnVtYmVyIiwib2JzZXJ2ZXIiLCJ2YWwiLCJfdXBkYXRlU2Nyb2xsVG9wQ2hhbmdlIiwicmVsYXRpb25zIiwibGlua2VkIiwiX3VwZGF0ZURhdGFDaGFuZ2UiLCJsaW5rQ2hhbmdlZCIsInVubGlua2VkIiwiZGF0YSIsInRpbWVyIiwiaXRlbUxlbmd0aCIsIm1ldGhvZHMiLCJzdGlja2llcyIsImdldFJlbGF0aW9uTm9kZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsInVwZGF0ZVNjcm9sbFRvcENoYW5nZSIsImNsZWFyVGltZW91dCIsInNldERhdGEiLCJzZXRUaW1lb3V0IiwiaW5kZXgiLCJ1cGRhdGVEYXRhQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxnQkFBYTtBQUNUQyxtQkFBWTtBQUNSQyxrQkFBT0MsTUFEQztBQUVSQyxvQkFGUSxvQkFFQ0MsR0FGRCxFQUVLO0FBQ1QscUJBQUtDLHNCQUFMO0FBQ0g7QUFKTztBQURILEtBRlA7QUFVTkMsZUFBWTtBQUNSLGdDQUF5QjtBQUNyQkwsa0JBQU8sT0FEYztBQUVyQk0sa0JBRnFCLG9CQUViO0FBQ0oscUJBQUtDLGlCQUFMO0FBQ0gsYUFKb0I7QUFLckJDLHVCQUxxQix5QkFLTjtBQUNYLHFCQUFLRCxpQkFBTDtBQUNILGFBUG9CO0FBUXJCRSxvQkFScUIsc0JBUVQ7QUFDUixxQkFBS0YsaUJBQUw7QUFDSDtBQVZvQjtBQURqQixLQVZOO0FBd0JORyxVQUFPO0FBQ0hDLGVBQVEsSUFETDtBQUVIQyxvQkFBYTtBQUZWLEtBeEJEO0FBNEJOQyxhQUFVO0FBQ05ULDhCQURNLG9DQUNrQjtBQUFBOztBQUNwQixnQkFBTVUsV0FBVyxLQUFLQyxnQkFBTCxDQUFzQixzQkFBdEIsQ0FBakI7QUFDQSxnQkFBSUQsU0FBU0UsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUNyQkYseUJBQVNHLE9BQVQsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCLHdCQUFJQSxJQUFKLEVBQVU7QUFDTkEsNkJBQUtDLHFCQUFMLENBQTRCLE1BQUtULElBQUwsQ0FBVVgsU0FBdEM7QUFDSDtBQUNKLGlCQUpEO0FBS0g7QUFDSixTQVZLO0FBV05RLHlCQVhNLCtCQVdjO0FBQ2hCLGdCQUFNTyxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixDQUFqQjtBQUNBLGdCQUFJRCxTQUFTRSxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLG9CQUFJLEtBQUtOLElBQUwsQ0FBVUMsS0FBZCxFQUFxQjtBQUNqQlMsaUNBQWMsS0FBS1YsSUFBTCxDQUFVQyxLQUF4QjtBQUNBLHlCQUFLVSxPQUFMLENBQWE7QUFDVFYsK0JBQVE7QUFEQyxxQkFBYjtBQUdIO0FBQ0QscUJBQUtELElBQUwsQ0FBVUMsS0FBVixHQUFrQlcsV0FBVyxZQUFJO0FBQzdCUiw2QkFBU0csT0FBVCxDQUFpQixVQUFDQyxJQUFELEVBQU1LLEtBQU4sRUFBZ0I7QUFDN0IsNEJBQUlMLElBQUosRUFBVTtBQUNOQSxpQ0FBS00sZ0JBQUwsQ0FBc0JELEtBQXRCO0FBQ0g7QUFDSixxQkFKRDtBQUtILGlCQU5pQixFQU1oQixDQU5nQixDQUFsQjtBQU9BLHFCQUFLRixPQUFMLENBQWE7QUFDVFYsMkJBQVEsS0FBS0QsSUFBTCxDQUFVQztBQURULGlCQUFiO0FBR0g7QUFDSjtBQS9CSzs7QUE1QkosQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG4gICAgcHJvcGVydGllcyA6IHtcclxuICAgICAgICBzY3JvbGxUb3AgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIG9ic2VydmVyKHZhbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxUb3BDaGFuZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWxhdGlvbnMgOiB7XHJcbiAgICAgICAgJy4uL3N0aWNreS1pdGVtL2luZGV4JyA6IHtcclxuICAgICAgICAgICAgdHlwZSA6ICdjaGlsZCcsXHJcbiAgICAgICAgICAgIGxpbmtlZCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGF0YUNoYW5nZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEYXRhQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVubGlua2VkICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURhdGFDaGFuZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhIDoge1xyXG4gICAgICAgIHRpbWVyIDogbnVsbCxcclxuICAgICAgICBpdGVtTGVuZ3RoIDogMCxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzIDoge1xyXG4gICAgICAgIF91cGRhdGVTY3JvbGxUb3BDaGFuZ2UoKXtcclxuICAgICAgICAgICAgY29uc3Qgc3RpY2tpZXMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3N0aWNreS1pdGVtL2luZGV4Jyk7XHJcbiAgICAgICAgICAgIGlmKCBzdGlja2llcy5sZW5ndGggPiAwICl7XHJcbiAgICAgICAgICAgICAgICBzdGlja2llcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGl0ZW0gKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVTY3JvbGxUb3BDaGFuZ2UoIHRoaXMuZGF0YS5zY3JvbGxUb3AgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfdXBkYXRlRGF0YUNoYW5nZSggKXtcclxuICAgICAgICAgICAgY29uc3Qgc3RpY2tpZXMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3N0aWNreS1pdGVtL2luZGV4Jyk7XHJcbiAgICAgICAgICAgIGlmKCBzdGlja2llcy5sZW5ndGggPiAwICl7XHJcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5kYXRhLnRpbWVyICl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLmRhdGEudGltZXIgKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tpZXMuZm9yRWFjaCgoaXRlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggaXRlbSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVEYXRhQ2hhbmdlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyIDogdGhpcy5kYXRhLnRpbWVyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG59KSJdfQ==