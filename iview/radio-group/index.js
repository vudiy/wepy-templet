'use strict';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../radio/index': {
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
        }
    },
    methods: {
        changeCurrent: function changeCurrent() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;

            var items = this.getRelationNodes('../radio/index');
            var len = items.length;
            if (len > 0) {
                items.forEach(function (item) {
                    item.changeCurrent(val === item.data.value);
                });
            }
        },
        emitEvent: function emitEvent(current) {
            this.triggerEvent('change', current);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJjaGFuZ2VDdXJyZW50IiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwiU3RyaW5nIiwidmFsdWUiLCJvYnNlcnZlciIsIm1ldGhvZHMiLCJ2YWwiLCJkYXRhIiwiaXRlbXMiLCJnZXRSZWxhdGlvbk5vZGVzIiwibGVuIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJlbWl0RXZlbnQiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGVBQVc7QUFDUCwwQkFBa0I7QUFDZEMsa0JBQU0sT0FEUTtBQUVkQyxrQkFGYyxvQkFFTDtBQUNMLHFCQUFLQyxhQUFMO0FBQ0gsYUFKYTtBQUtkQyx1QkFMYyx5QkFLQTtBQUNWLHFCQUFLRCxhQUFMO0FBQ0gsYUFQYTtBQVFkRSxvQkFSYyxzQkFRSDtBQUNQLHFCQUFLRixhQUFMO0FBQ0g7QUFWYTtBQURYLEtBRkw7QUFnQk5HLGdCQUFZO0FBQ1JDLGlCQUFTO0FBQ0xOLGtCQUFNTyxNQUREO0FBRUxDLG1CQUFPLEVBRkY7QUFHTEMsc0JBQVU7QUFITDtBQURELEtBaEJOO0FBdUJOQyxhQUFTO0FBQ0xSLHFCQURLLDJCQUNrQztBQUFBLGdCQUF6QlMsR0FBeUIsdUVBQW5CLEtBQUtDLElBQUwsQ0FBVU4sT0FBUzs7QUFDbkMsZ0JBQUlPLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0IsZ0JBQXRCLENBQVo7QUFDQSxnQkFBTUMsTUFBTUYsTUFBTUcsTUFBbEI7QUFDQSxnQkFBSUQsTUFBTSxDQUFWLEVBQWE7QUFDVEYsc0JBQU1JLE9BQU4sQ0FBYyxnQkFBUTtBQUNsQkMseUJBQUtoQixhQUFMLENBQW1CUyxRQUFRTyxLQUFLTixJQUFMLENBQVVKLEtBQXJDO0FBQ0gsaUJBRkQ7QUFHSDtBQUNKLFNBVEk7QUFVTFcsaUJBVksscUJBVUtiLE9BVkwsRUFVYztBQUNmLGlCQUFLYyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCZCxPQUE1QjtBQUNIO0FBWkk7QUF2QkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL3JhZGlvL2luZGV4Jzoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2hpbGQnLFxyXG4gICAgICAgICAgICBsaW5rZWQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGlua0NoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5saW5rZWQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY3VycmVudDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdjaGFuZ2VDdXJyZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNoYW5nZUN1cnJlbnQodmFsID0gdGhpcy5kYXRhLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9yYWRpby9pbmRleCcpO1xyXG4gICAgICAgICAgICBjb25zdCBsZW4gPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhbmdlQ3VycmVudCh2YWwgPT09IGl0ZW0uZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1pdEV2ZW50KGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIGN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==