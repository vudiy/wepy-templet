'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        visible: {
            type: Boolean,
            value: false
        },

        mask: {
            type: Boolean,
            value: true
        },

        maskClosable: {
            type: Boolean,
            value: true
        },

        mode: {
            type: String,
            value: 'left' // left right
        }
    },
    data: {},
    methods: {
        handleMaskClick: function handleMaskClick() {
            if (!this.data.maskClosable) {
                return;
            }
            this.triggerEvent('close', {});
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ2aXNpYmxlIiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsIm1hc2siLCJtYXNrQ2xvc2FibGUiLCJtb2RlIiwiU3RyaW5nIiwiZGF0YSIsIm1ldGhvZHMiLCJoYW5kbGVNYXNrQ2xpY2siLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGdCQUFZO0FBQ1JDLGlCQUFTO0FBQ0xDLGtCQUFNQyxPQUREO0FBRUxDLG1CQUFPO0FBRkYsU0FERDs7QUFNUkMsY0FBTTtBQUNGSCxrQkFBTUMsT0FESjtBQUVGQyxtQkFBTztBQUZMLFNBTkU7O0FBV1JFLHNCQUFjO0FBQ1ZKLGtCQUFNQyxPQURJO0FBRVZDLG1CQUFPO0FBRkcsU0FYTjs7QUFnQlJHLGNBQU07QUFDRkwsa0JBQU1NLE1BREo7QUFFRkosbUJBQU8sTUFGTCxDQUVZO0FBRlo7QUFoQkUsS0FGTjtBQXVCTkssVUFBTSxFQXZCQTtBQXdCTkMsYUFBUztBQUNMQyx1QkFESyw2QkFDYTtBQUNkLGdCQUFJLENBQUMsS0FBS0YsSUFBTCxDQUFVSCxZQUFmLEVBQTZCO0FBQ3pCO0FBQ0g7QUFDRCxpQkFBS00sWUFBTCxDQUFrQixPQUFsQixFQUEyQixFQUEzQjtBQUNIO0FBTkk7QUF4QkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHZpc2libGU6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWFzazoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1hc2tDbG9zYWJsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vZGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2xlZnQnIC8vIGxlZnQgcmlnaHRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge30sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaGFuZGxlTWFza0NsaWNrKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5tYXNrQ2xvc2FibGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xvc2UnLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19