'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab/index': {
            type: 'child',
            linked: function linked() {
                this.changeCurrent();
            },
            linkChanged: function linkChanged() {
                this.changeCurrent();
            },
            unlinked: function unlinked() {
                this.changeCurrent();
            }
        }
    },

    properties: {
        current: {
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        color: {
            type: String,
            value: ''
        },
        scroll: {
            type: Boolean,
            value: false
        },
        fixed: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        changeCurrent: function changeCurrent() {
            var _this = this;

            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;

            var items = this.getRelationNodes('../tab/index');
            var len = items.length;

            if (len > 0) {
                items.forEach(function (item) {
                    item.changeScroll(_this.data.scroll);
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(_this.data.color);
                });
            }
        },
        emitEvent: function emitEvent(key) {
            this.triggerEvent('change', { key: key });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJjaGFuZ2VDdXJyZW50IiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwiU3RyaW5nIiwidmFsdWUiLCJvYnNlcnZlciIsImNvbG9yIiwic2Nyb2xsIiwiQm9vbGVhbiIsImZpeGVkIiwibWV0aG9kcyIsInZhbCIsImRhdGEiLCJpdGVtcyIsImdldFJlbGF0aW9uTm9kZXMiLCJsZW4iLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsImNoYW5nZVNjcm9sbCIsImtleSIsImNoYW5nZUN1cnJlbnRDb2xvciIsImVtaXRFdmVudCIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGVBQVc7QUFDUCx3QkFBZ0I7QUFDWkMsa0JBQU0sT0FETTtBQUVaQyxrQkFGWSxvQkFFRjtBQUNOLHFCQUFLQyxhQUFMO0FBQ0gsYUFKVztBQUtaQyx1QkFMWSx5QkFLRztBQUNYLHFCQUFLRCxhQUFMO0FBQ0gsYUFQVztBQVFaRSxvQkFSWSxzQkFRQTtBQUNSLHFCQUFLRixhQUFMO0FBQ0g7QUFWVztBQURULEtBSEw7O0FBa0JORyxnQkFBWTtBQUNSQyxpQkFBUztBQUNMTixrQkFBTU8sTUFERDtBQUVMQyxtQkFBTyxFQUZGO0FBR0xDLHNCQUFVO0FBSEwsU0FERDtBQU1SQyxlQUFPO0FBQ0hWLGtCQUFNTyxNQURIO0FBRUhDLG1CQUFPO0FBRkosU0FOQztBQVVSRyxnQkFBUTtBQUNKWCxrQkFBTVksT0FERjtBQUVKSixtQkFBTztBQUZILFNBVkE7QUFjUkssZUFBTztBQUNIYixrQkFBTVksT0FESDtBQUVISixtQkFBTztBQUZKO0FBZEMsS0FsQk47O0FBc0NOTSxhQUFTO0FBQ0xaLHFCQURLLDJCQUNtQztBQUFBOztBQUFBLGdCQUF6QmEsR0FBeUIsdUVBQW5CLEtBQUtDLElBQUwsQ0FBVVYsT0FBUzs7QUFDcEMsZ0JBQUlXLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0IsY0FBdEIsQ0FBWjtBQUNBLGdCQUFNQyxNQUFNRixNQUFNRyxNQUFsQjs7QUFFQSxnQkFBSUQsTUFBTSxDQUFWLEVBQWE7QUFDVEYsc0JBQU1JLE9BQU4sQ0FBYyxnQkFBUTtBQUNsQkMseUJBQUtDLFlBQUwsQ0FBa0IsTUFBS1AsSUFBTCxDQUFVTCxNQUE1QjtBQUNBVyx5QkFBS3BCLGFBQUwsQ0FBbUJvQixLQUFLTixJQUFMLENBQVVRLEdBQVYsS0FBa0JULEdBQXJDO0FBQ0FPLHlCQUFLRyxrQkFBTCxDQUF3QixNQUFLVCxJQUFMLENBQVVOLEtBQWxDO0FBQ0gsaUJBSkQ7QUFLSDtBQUNKLFNBWkk7QUFhTGdCLGlCQWJLLHFCQWFNRixHQWJOLEVBYVc7QUFDWixpQkFBS0csWUFBTCxDQUFrQixRQUFsQixFQUE0QixFQUFFSCxRQUFGLEVBQTVCO0FBQ0g7QUFmSTtBQXRDSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcblxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL3RhYi9pbmRleCc6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NoaWxkJyxcclxuICAgICAgICAgICAgbGlua2VkICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5saW5rZWQgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjdXJyZW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ2NoYW5nZUN1cnJlbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZml4ZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hhbmdlQ3VycmVudCAodmFsID0gdGhpcy5kYXRhLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi90YWIvaW5kZXgnKTtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxlbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFuZ2VTY3JvbGwodGhpcy5kYXRhLnNjcm9sbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFuZ2VDdXJyZW50KGl0ZW0uZGF0YS5rZXkgPT09IHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFuZ2VDdXJyZW50Q29sb3IodGhpcy5kYXRhLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWl0RXZlbnQgKGtleSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgeyBrZXkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19