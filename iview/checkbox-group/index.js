'use strict';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../checkbox/index': {
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
            type: Array,
            value: [],
            observer: 'changeCurrent'
        }
    },
    methods: {
        changeCurrent: function changeCurrent() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data.current;

            var items = this.getRelationNodes('../checkbox/index');
            var len = items.length;
            if (len > 0) {
                items.forEach(function (item) {
                    item.changeCurrent(val.indexOf(item.data.value) !== -1);
                });
            }
        },
        emitEvent: function emitEvent(current) {
            this.triggerEvent('change', current);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJjaGFuZ2VDdXJyZW50IiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwiQXJyYXkiLCJ2YWx1ZSIsIm9ic2VydmVyIiwibWV0aG9kcyIsInZhbCIsImRhdGEiLCJpdGVtcyIsImdldFJlbGF0aW9uTm9kZXMiLCJsZW4iLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4T2YiLCJlbWl0RXZlbnQiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGVBQVc7QUFDUCw2QkFBcUI7QUFDakJDLGtCQUFNLE9BRFc7QUFFakJDLGtCQUZpQixvQkFFUjtBQUNMLHFCQUFLQyxhQUFMO0FBQ0gsYUFKZ0I7QUFLakJDLHVCQUxpQix5QkFLSDtBQUNWLHFCQUFLRCxhQUFMO0FBQ0gsYUFQZ0I7QUFRakJFLG9CQVJpQixzQkFRTjtBQUNQLHFCQUFLRixhQUFMO0FBQ0g7QUFWZ0I7QUFEZCxLQUZMO0FBZ0JORyxnQkFBWTtBQUNSQyxpQkFBUztBQUNMTixrQkFBTU8sS0FERDtBQUVMQyxtQkFBTyxFQUZGO0FBR0xDLHNCQUFVO0FBSEw7QUFERCxLQWhCTjtBQXVCTkMsYUFBUztBQUNMUixxQkFESywyQkFDa0M7QUFBQSxnQkFBekJTLEdBQXlCLHVFQUFuQixLQUFLQyxJQUFMLENBQVVOLE9BQVM7O0FBQ25DLGdCQUFJTyxRQUFRLEtBQUtDLGdCQUFMLENBQXNCLG1CQUF0QixDQUFaO0FBQ0EsZ0JBQU1DLE1BQU1GLE1BQU1HLE1BQWxCO0FBQ0EsZ0JBQUlELE1BQU0sQ0FBVixFQUFhO0FBQ1RGLHNCQUFNSSxPQUFOLENBQWMsZ0JBQVE7QUFDbEJDLHlCQUFLaEIsYUFBTCxDQUFtQlMsSUFBSVEsT0FBSixDQUFZRCxLQUFLTixJQUFMLENBQVVKLEtBQXRCLE1BQWlDLENBQUMsQ0FBckQ7QUFDSCxpQkFGRDtBQUdIO0FBQ0osU0FUSTtBQVVMWSxpQkFWSyxxQkFVS2QsT0FWTCxFQVVjO0FBQ2YsaUJBQUtlLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEJmLE9BQTVCO0FBQ0g7QUFaSTtBQXZCSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcbiAgICByZWxhdGlvbnM6IHtcclxuICAgICAgICAnLi4vY2hlY2tib3gvaW5kZXgnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGlsZCcsXHJcbiAgICAgICAgICAgIGxpbmtlZCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bmxpbmtlZCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjdXJyZW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogW10sXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAnY2hhbmdlQ3VycmVudCdcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGFuZ2VDdXJyZW50KHZhbCA9IHRoaXMuZGF0YS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vY2hlY2tib3gvaW5kZXgnKTtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoYW5nZUN1cnJlbnQodmFsLmluZGV4T2YoaXRlbS5kYXRhLnZhbHVlKSAhPT0gLTEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtaXRFdmVudChjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCBjdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=