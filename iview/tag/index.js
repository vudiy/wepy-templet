'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        //slot name
        name: {
            type: String,
            value: ''
        },
        //can click or not click
        checkable: {
            type: Boolean,
            value: false
        },
        //is current choose
        checked: {
            type: Boolean,
            value: true
        },
        //background and color setting
        color: {
            type: String,
            value: 'default'
        },
        //control fill or not
        type: {
            type: String,
            value: 'dot'
        }
    },
    methods: {
        tapTag: function tapTag() {
            var data = this.data;
            if (data.checkable) {
                var checked = data.checked ? false : true;
                this.triggerEvent('change', {
                    name: data.name || '',
                    checked: checked
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwiY2hlY2thYmxlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJjb2xvciIsIm1ldGhvZHMiLCJ0YXBUYWciLCJkYXRhIiwidHJpZ2dlckV2ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxnQkFBYTtBQUNUO0FBQ0FDLGNBQU87QUFDSEMsa0JBQU9DLE1BREo7QUFFSEMsbUJBQVE7QUFGTCxTQUZFO0FBTVQ7QUFDQUMsbUJBQVk7QUFDUkgsa0JBQU9JLE9BREM7QUFFUkYsbUJBQVE7QUFGQSxTQVBIO0FBV1Q7QUFDQUcsaUJBQVU7QUFDTkwsa0JBQU9JLE9BREQ7QUFFTkYsbUJBQVE7QUFGRixTQVpEO0FBZ0JUO0FBQ0FJLGVBQVE7QUFDSk4sa0JBQU9DLE1BREg7QUFFSkMsbUJBQVE7QUFGSixTQWpCQztBQXFCVDtBQUNBRixjQUFPO0FBQ0hBLGtCQUFPQyxNQURKO0FBRUhDLG1CQUFRO0FBRkw7QUF0QkUsS0FGUDtBQTZCTkssYUFBVTtBQUNOQyxjQURNLG9CQUNFO0FBQ0osZ0JBQU1DLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSxnQkFBSUEsS0FBS04sU0FBVCxFQUFvQjtBQUNoQixvQkFBTUUsVUFBVUksS0FBS0osT0FBTCxHQUFlLEtBQWYsR0FBdUIsSUFBdkM7QUFDQSxxQkFBS0ssWUFBTCxDQUFrQixRQUFsQixFQUEyQjtBQUN2QlgsMEJBQU9VLEtBQUtWLElBQUwsSUFBYSxFQURHO0FBRXZCTSw2QkFBVUE7QUFGYSxpQkFBM0I7QUFJSDtBQUNKO0FBVks7QUE3QkosQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG4gICAgcHJvcGVydGllcyA6IHtcclxuICAgICAgICAvL3Nsb3QgbmFtZVxyXG4gICAgICAgIG5hbWUgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlIDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vY2FuIGNsaWNrIG9yIG5vdCBjbGlja1xyXG4gICAgICAgIGNoZWNrYWJsZSA6IHtcclxuICAgICAgICAgICAgdHlwZSA6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlIDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vaXMgY3VycmVudCBjaG9vc2VcclxuICAgICAgICBjaGVja2VkIDoge1xyXG4gICAgICAgICAgICB0eXBlIDogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWUgOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL2JhY2tncm91bmQgYW5kIGNvbG9yIHNldHRpbmdcclxuICAgICAgICBjb2xvciA6IHtcclxuICAgICAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWUgOiAnZGVmYXVsdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vY29udHJvbCBmaWxsIG9yIG5vdFxyXG4gICAgICAgIHR5cGUgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlIDogJ2RvdCdcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHMgOiB7XHJcbiAgICAgICAgdGFwVGFnKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmKCBkYXRhLmNoZWNrYWJsZSApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRhdGEuY2hlY2tlZCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lIDogZGF0YS5uYW1lIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgOiBjaGVja2VkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiXX0=