'use strict';

Component({
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        //info, success, warning, error
        type: {
            type: String,
            value: 'info'
        },
        closable: {
            type: Boolean,
            value: false
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        desc: {
            type: Boolean,
            default: false
        }
    },
    data: {
        closed: false
    },
    methods: {
        handleTap: function handleTap() {
            this.setData({
                closed: !this.data.closed
            });
            this.triggerEvent('close');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImNsb3NhYmxlIiwiQm9vbGVhbiIsInNob3dJY29uIiwiZGVmYXVsdCIsImRlc2MiLCJkYXRhIiwiY2xvc2VkIiwibWV0aG9kcyIsImhhbmRsZVRhcCIsInNldERhdGEiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGFBQVM7QUFDTEMsdUJBQWU7QUFEVixLQUZIO0FBS05DLGdCQUFZO0FBQ1I7QUFDQUMsY0FBTTtBQUNGQSxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBRkU7QUFNUkMsa0JBQVU7QUFDTkgsa0JBQU1JLE9BREE7QUFFTkYsbUJBQU87QUFGRCxTQU5GO0FBVVJHLGtCQUFVO0FBQ05MLGtCQUFNSSxPQURBO0FBRU5FLHFCQUFTO0FBRkgsU0FWRjtBQWNSQyxjQUFNO0FBQ0ZQLGtCQUFNSSxPQURKO0FBRUZFLHFCQUFTO0FBRlA7QUFkRSxLQUxOO0FBd0JORSxVQUFNO0FBQ0ZDLGdCQUFRO0FBRE4sS0F4QkE7QUEyQk5DLGFBQVM7QUFDTEMsaUJBREssdUJBQ087QUFDUixpQkFBS0MsT0FBTCxDQUFhO0FBQ1RILHdCQUFRLENBQUMsS0FBS0QsSUFBTCxDQUFVQztBQURWLGFBQWI7QUFHQSxpQkFBS0ksWUFBTCxDQUFrQixPQUFsQjtBQUNIO0FBTkk7QUEzQkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIG11bHRpcGxlU2xvdHM6IHRydWVcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy9pbmZvLCBzdWNjZXNzLCB3YXJuaW5nLCBlcnJvclxyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2luZm8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zYWJsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dJY29uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNjOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY2xvc2VkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBoYW5kbGVUYXAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBjbG9zZWQ6ICF0aGlzLmRhdGEuY2xvc2VkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=