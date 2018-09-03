'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        current: {
            type: Number,
            value: -1,
            observer: '_updateDataChange'
        },
        status: {
            type: String,
            //wait、process、finish、error
            value: ''
        },
        direction: {
            type: String,
            //value has horizontal or vertical 
            value: 'horizontal'
        }
    },
    relations: {
        '../step/index': {
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
    methods: {
        _updateDataChange: function _updateDataChange() {
            var _this = this;

            var steps = this.getRelationNodes('../step/index');
            var len = steps.length;
            if (len > 0) {
                steps.forEach(function (step, index) {
                    step.updateDataChange({
                        len: len,
                        index: index,
                        current: _this.data.current,
                        direction: _this.data.direction
                    });
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJjdXJyZW50IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwib2JzZXJ2ZXIiLCJzdGF0dXMiLCJTdHJpbmciLCJkaXJlY3Rpb24iLCJyZWxhdGlvbnMiLCJsaW5rZWQiLCJfdXBkYXRlRGF0YUNoYW5nZSIsImxpbmtDaGFuZ2VkIiwidW5saW5rZWQiLCJtZXRob2RzIiwic3RlcHMiLCJnZXRSZWxhdGlvbk5vZGVzIiwibGVuIiwibGVuZ3RoIiwiZm9yRWFjaCIsInN0ZXAiLCJpbmRleCIsInVwZGF0ZURhdGFDaGFuZ2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxnQkFBYTtBQUNUQyxpQkFBVTtBQUNOQyxrQkFBT0MsTUFERDtBQUVOQyxtQkFBUSxDQUFDLENBRkg7QUFHTkMsc0JBQVc7QUFITCxTQUREO0FBTVRDLGdCQUFTO0FBQ0xKLGtCQUFPSyxNQURGO0FBRUw7QUFDQUgsbUJBQVE7QUFISCxTQU5BO0FBV1RJLG1CQUFZO0FBQ1JOLGtCQUFPSyxNQURDO0FBRVI7QUFDQUgsbUJBQVE7QUFIQTtBQVhILEtBRlA7QUFtQk5LLGVBQVk7QUFDUix5QkFBa0I7QUFDZFAsa0JBQU8sT0FETztBQUVkUSxrQkFGYyxvQkFFTjtBQUNKLHFCQUFLQyxpQkFBTDtBQUNILGFBSmE7QUFLZEMsdUJBTGMseUJBS0M7QUFDWCxxQkFBS0QsaUJBQUw7QUFDSCxhQVBhO0FBUWRFLG9CQVJjLHNCQVFGO0FBQ1IscUJBQUtGLGlCQUFMO0FBQ0g7QUFWYTtBQURWLEtBbkJOO0FBaUNORyxhQUFTO0FBQ0xILHlCQURLLCtCQUNlO0FBQUE7O0FBQ2hCLGdCQUFJSSxRQUFRLEtBQUtDLGdCQUFMLENBQXNCLGVBQXRCLENBQVo7QUFDQSxnQkFBTUMsTUFBTUYsTUFBTUcsTUFBbEI7QUFDQSxnQkFBSUQsTUFBTSxDQUFWLEVBQWE7QUFDVEYsc0JBQU1JLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDM0JELHlCQUFLRSxnQkFBTCxDQUFzQjtBQUNsQkwsNkJBQU1BLEdBRFk7QUFFbEJJLCtCQUFRQSxLQUZVO0FBR2xCcEIsaUNBQVUsTUFBS3NCLElBQUwsQ0FBVXRCLE9BSEY7QUFJbEJPLG1DQUFZLE1BQUtlLElBQUwsQ0FBVWY7QUFKSixxQkFBdEI7QUFNSCxpQkFQRDtBQVFIO0FBQ0o7QUFkSTtBQWpDSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcbiAgICBwcm9wZXJ0aWVzIDoge1xyXG4gICAgICAgIGN1cnJlbnQgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlIDogLTEsXHJcbiAgICAgICAgICAgIG9ic2VydmVyIDogJ191cGRhdGVEYXRhQ2hhbmdlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhdHVzIDoge1xyXG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgICAgICAvL3dhaXTjgIFwcm9jZXNz44CBZmluaXNo44CBZXJyb3JcclxuICAgICAgICAgICAgdmFsdWUgOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlyZWN0aW9uIDoge1xyXG4gICAgICAgICAgICB0eXBlIDogU3RyaW5nLFxyXG4gICAgICAgICAgICAvL3ZhbHVlIGhhcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsIFxyXG4gICAgICAgICAgICB2YWx1ZSA6ICdob3Jpem9udGFsJ1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG4gICAgcmVsYXRpb25zIDoge1xyXG4gICAgICAgICcuLi9zdGVwL2luZGV4JyA6IHtcclxuICAgICAgICAgICAgdHlwZSA6ICdjaGlsZCcsXHJcbiAgICAgICAgICAgIGxpbmtlZCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGF0YUNoYW5nZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEYXRhQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVubGlua2VkICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURhdGFDaGFuZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgX3VwZGF0ZURhdGFDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwcyA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vc3RlcC9pbmRleCcpO1xyXG4gICAgICAgICAgICBjb25zdCBsZW4gPSBzdGVwcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXAudXBkYXRlRGF0YUNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA6IGxlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggOiBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA6IHRoaXMuZGF0YS5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gOiB0aGlzLmRhdGEuZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiXX0=