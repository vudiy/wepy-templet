'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../cell/index': {
            type: 'child',
            linked: function linked() {
                this._updateIsLastCell();
            },
            linkChanged: function linkChanged() {
                this._updateIsLastCell();
            },
            unlinked: function unlinked() {
                this._updateIsLastCell();
            }
        }
    },

    methods: {
        _updateIsLastCell: function _updateIsLastCell() {
            var cells = this.getRelationNodes('../cell/index');
            var len = cells.length;

            if (len > 0) {
                var lastIndex = len - 1;

                cells.forEach(function (cell, index) {
                    cell.updateIsLastCell(index === lastIndex);
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJfdXBkYXRlSXNMYXN0Q2VsbCIsImxpbmtDaGFuZ2VkIiwidW5saW5rZWQiLCJtZXRob2RzIiwiY2VsbHMiLCJnZXRSZWxhdGlvbk5vZGVzIiwibGVuIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiZm9yRWFjaCIsImNlbGwiLCJpbmRleCIsInVwZGF0ZUlzTGFzdENlbGwiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYOztBQUdOQyxlQUFXO0FBQ1AseUJBQWlCO0FBQ2JDLGtCQUFNLE9BRE87QUFFYkMsa0JBRmEsb0JBRUg7QUFDTixxQkFBS0MsaUJBQUw7QUFDSCxhQUpZO0FBS2JDLHVCQUxhLHlCQUtFO0FBQ1gscUJBQUtELGlCQUFMO0FBQ0gsYUFQWTtBQVFiRSxvQkFSYSxzQkFRRDtBQUNSLHFCQUFLRixpQkFBTDtBQUNIO0FBVlk7QUFEVixLQUhMOztBQWtCTkcsYUFBUztBQUNMSCx5QkFESywrQkFDZTtBQUNoQixnQkFBSUksUUFBUSxLQUFLQyxnQkFBTCxDQUFzQixlQUF0QixDQUFaO0FBQ0EsZ0JBQU1DLE1BQU1GLE1BQU1HLE1BQWxCOztBQUVBLGdCQUFJRCxNQUFNLENBQVYsRUFBYTtBQUNULG9CQUFJRSxZQUFZRixNQUFNLENBQXRCOztBQUVBRixzQkFBTUssT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQkQseUJBQUtFLGdCQUFMLENBQXNCRCxVQUFVSCxTQUFoQztBQUNILGlCQUZEO0FBR0g7QUFDSjtBQVpJO0FBbEJILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcclxuXHJcbiAgICByZWxhdGlvbnM6IHtcclxuICAgICAgICAnLi4vY2VsbC9pbmRleCc6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NoaWxkJyxcclxuICAgICAgICAgICAgbGlua2VkICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUlzTGFzdENlbGwoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlua0NoYW5nZWQgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXNMYXN0Q2VsbCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bmxpbmtlZCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVJc0xhc3RDZWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBfdXBkYXRlSXNMYXN0Q2VsbCgpIHtcclxuICAgICAgICAgICAgbGV0IGNlbGxzID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jZWxsL2luZGV4Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGNlbGxzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEluZGV4ID0gbGVuIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBjZWxscy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwudXBkYXRlSXNMYXN0Q2VsbChpbmRleCA9PT0gbGFzdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19