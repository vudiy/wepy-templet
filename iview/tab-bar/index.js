'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab-bar-item/index': {
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
        fixed: {
            type: Boolean,
            value: false
        }
    },

    data: {
        list: []
    },

    methods: {
        changeCurrent: function changeCurrent() {
            var _this = this;

            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;

            var items = this.getRelationNodes('../tab-bar-item/index');
            var len = items.length;

            if (len > 0) {
                var list = [];
                items.forEach(function (item) {
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(_this.data.color);
                    list.push({
                        key: item.data.key
                    });
                });
                this.setData({
                    list: list
                });
            }
        },
        emitEvent: function emitEvent(key) {
            this.triggerEvent('change', { key: key });
        },
        handleClickItem: function handleClickItem(e) {
            var key = e.currentTarget.dataset.key;
            this.emitEvent(key);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJjaGFuZ2VDdXJyZW50IiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwiU3RyaW5nIiwidmFsdWUiLCJvYnNlcnZlciIsImNvbG9yIiwiZml4ZWQiLCJCb29sZWFuIiwiZGF0YSIsImxpc3QiLCJtZXRob2RzIiwidmFsIiwiaXRlbXMiLCJnZXRSZWxhdGlvbk5vZGVzIiwibGVuIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJjaGFuZ2VDdXJyZW50Q29sb3IiLCJwdXNoIiwic2V0RGF0YSIsImVtaXRFdmVudCIsInRyaWdnZXJFdmVudCIsImhhbmRsZUNsaWNrSXRlbSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGVBQVc7QUFDUCxpQ0FBeUI7QUFDckJDLGtCQUFNLE9BRGU7QUFFckJDLGtCQUZxQixvQkFFWDtBQUNOLHFCQUFLQyxhQUFMO0FBQ0gsYUFKb0I7QUFLckJDLHVCQUxxQix5QkFLTjtBQUNYLHFCQUFLRCxhQUFMO0FBQ0gsYUFQb0I7QUFRckJFLG9CQVJxQixzQkFRVDtBQUNSLHFCQUFLRixhQUFMO0FBQ0g7QUFWb0I7QUFEbEIsS0FITDs7QUFrQk5HLGdCQUFZO0FBQ1JDLGlCQUFTO0FBQ0xOLGtCQUFNTyxNQUREO0FBRUxDLG1CQUFPLEVBRkY7QUFHTEMsc0JBQVU7QUFITCxTQUREO0FBTVJDLGVBQU87QUFDSFYsa0JBQU1PLE1BREg7QUFFSEMsbUJBQU87QUFGSixTQU5DO0FBVVJHLGVBQU87QUFDSFgsa0JBQU1ZLE9BREg7QUFFSEosbUJBQU87QUFGSjtBQVZDLEtBbEJOOztBQWtDTkssVUFBTTtBQUNGQyxjQUFNO0FBREosS0FsQ0E7O0FBc0NOQyxhQUFTO0FBQ0xiLHFCQURLLDJCQUNtQztBQUFBOztBQUFBLGdCQUF6QmMsR0FBeUIsdUVBQW5CLEtBQUtILElBQUwsQ0FBVVAsT0FBUzs7QUFDcEMsZ0JBQUlXLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0IsdUJBQXRCLENBQVo7QUFDQSxnQkFBTUMsTUFBTUYsTUFBTUcsTUFBbEI7O0FBRUEsZ0JBQUlELE1BQU0sQ0FBVixFQUFhO0FBQ1Qsb0JBQU1MLE9BQU8sRUFBYjtBQUNBRyxzQkFBTUksT0FBTixDQUFjLGdCQUFRO0FBQ2xCQyx5QkFBS3BCLGFBQUwsQ0FBbUJvQixLQUFLVCxJQUFMLENBQVVVLEdBQVYsS0FBa0JQLEdBQXJDO0FBQ0FNLHlCQUFLRSxrQkFBTCxDQUF3QixNQUFLWCxJQUFMLENBQVVILEtBQWxDO0FBQ0FJLHlCQUFLVyxJQUFMLENBQVU7QUFDTkYsNkJBQUtELEtBQUtULElBQUwsQ0FBVVU7QUFEVCxxQkFBVjtBQUdILGlCQU5EO0FBT0EscUJBQUtHLE9BQUwsQ0FBYTtBQUNUWiwwQkFBTUE7QUFERyxpQkFBYjtBQUdIO0FBQ0osU0FsQkk7QUFtQkxhLGlCQW5CSyxxQkFtQk1KLEdBbkJOLEVBbUJXO0FBQ1osaUJBQUtLLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEIsRUFBRUwsUUFBRixFQUE1QjtBQUNILFNBckJJO0FBc0JMTSx1QkF0QkssMkJBc0JZQyxDQXRCWixFQXNCZTtBQUNoQixnQkFBTVAsTUFBTU8sRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JULEdBQXBDO0FBQ0EsaUJBQUtJLFNBQUwsQ0FBZUosR0FBZjtBQUNIO0FBekJJO0FBdENILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcclxuXHJcbiAgICByZWxhdGlvbnM6IHtcclxuICAgICAgICAnLi4vdGFiLWJhci1pdGVtL2luZGV4Jzoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2hpbGQnLFxyXG4gICAgICAgICAgICBsaW5rZWQgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxpbmtDaGFuZ2VkICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bmxpbmtlZCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGN1cnJlbnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAnY2hhbmdlQ3VycmVudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXhlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsaXN0OiBbXVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hhbmdlQ3VycmVudCAodmFsID0gdGhpcy5kYXRhLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi90YWItYmFyLWl0ZW0vaW5kZXgnKTtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxlbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFuZ2VDdXJyZW50KGl0ZW0uZGF0YS5rZXkgPT09IHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFuZ2VDdXJyZW50Q29sb3IodGhpcy5kYXRhLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0uZGF0YS5rZXlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBsaXN0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1pdEV2ZW50IChrZXkpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIHsga2V5IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlQ2xpY2tJdGVtIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=