'use strict';

var prefixCls = 'i-radio';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../radio-group/index': {
            type: 'parent'
        }
    },
    properties: {
        value: {
            type: String,
            value: ''
        },
        checked: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        color: {
            type: String,
            value: '#2d8cf0'
        },
        position: {
            type: String,
            value: 'left', //left right
            observer: 'setPosition'
        }
    },
    data: {
        checked: true,
        positionCls: prefixCls + '-radio-left'
    },
    attached: function attached() {
        this.setPosition();
    },

    methods: {
        changeCurrent: function changeCurrent(current) {
            this.setData({ checked: current });
        },
        radioChange: function radioChange() {
            if (this.data.disabled) return;
            var item = { current: !this.data.checked, value: this.data.value };
            var parent = this.getRelationNodes('../radio-group/index')[0];
            parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
        },
        setPosition: function setPosition() {
            this.setData({
                positionCls: this.data.position.indexOf('left') !== -1 ? prefixCls + '-radio-left' : prefixCls + '-radio-right'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByZWZpeENscyIsIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJTdHJpbmciLCJjaGVja2VkIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiY29sb3IiLCJwb3NpdGlvbiIsIm9ic2VydmVyIiwiZGF0YSIsInBvc2l0aW9uQ2xzIiwiYXR0YWNoZWQiLCJzZXRQb3NpdGlvbiIsIm1ldGhvZHMiLCJjaGFuZ2VDdXJyZW50IiwiY3VycmVudCIsInNldERhdGEiLCJyYWRpb0NoYW5nZSIsIml0ZW0iLCJwYXJlbnQiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZW1pdEV2ZW50IiwidHJpZ2dlckV2ZW50IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLFNBQWxCOztBQUVBQyxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxlQUFXO0FBQ1AsZ0NBQXdCO0FBQ3BCQyxrQkFBTTtBQURjO0FBRGpCLEtBRkw7QUFPTkMsZ0JBQVk7QUFDUkMsZUFBTztBQUNIRixrQkFBTUcsTUFESDtBQUVIRCxtQkFBTztBQUZKLFNBREM7QUFLUkUsaUJBQVM7QUFDTEosa0JBQU1LLE9BREQ7QUFFTEgsbUJBQU87QUFGRixTQUxEO0FBU1JJLGtCQUFVO0FBQ05OLGtCQUFNSyxPQURBO0FBRU5ILG1CQUFPO0FBRkQsU0FURjtBQWFSSyxlQUFPO0FBQ0hQLGtCQUFNRyxNQURIO0FBRUhELG1CQUFPO0FBRkosU0FiQztBQWlCUk0sa0JBQVU7QUFDTlIsa0JBQU1HLE1BREE7QUFFTkQsbUJBQU8sTUFGRCxFQUVTO0FBQ2ZPLHNCQUFVO0FBSEo7QUFqQkYsS0FQTjtBQThCTkMsVUFBTTtBQUNGTixpQkFBUyxJQURQO0FBRUZPLHFCQUFnQmYsU0FBaEI7QUFGRSxLQTlCQTtBQWtDTmdCLFlBbENNLHNCQWtDSztBQUNQLGFBQUtDLFdBQUw7QUFDSCxLQXBDSzs7QUFxQ05DLGFBQVM7QUFDTEMscUJBREsseUJBQ1NDLE9BRFQsRUFDa0I7QUFDbkIsaUJBQUtDLE9BQUwsQ0FBYSxFQUFFYixTQUFTWSxPQUFYLEVBQWI7QUFDSCxTQUhJO0FBSUxFLG1CQUpLLHlCQUlTO0FBQ1YsZ0JBQUksS0FBS1IsSUFBTCxDQUFVSixRQUFkLEVBQXdCO0FBQ3hCLGdCQUFNYSxPQUFPLEVBQUVILFNBQVMsQ0FBQyxLQUFLTixJQUFMLENBQVVOLE9BQXRCLEVBQStCRixPQUFPLEtBQUtRLElBQUwsQ0FBVVIsS0FBaEQsRUFBYjtBQUNBLGdCQUFNa0IsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixzQkFBdEIsRUFBOEMsQ0FBOUMsQ0FBZjtBQUNBRCxxQkFBU0EsT0FBT0UsU0FBUCxDQUFpQkgsSUFBakIsQ0FBVCxHQUFrQyxLQUFLSSxZQUFMLENBQWtCLFFBQWxCLEVBQTRCSixJQUE1QixDQUFsQztBQUNILFNBVEk7QUFVTE4sbUJBVksseUJBVVM7QUFDVixpQkFBS0ksT0FBTCxDQUFhO0FBQ1ROLDZCQUFhLEtBQUtELElBQUwsQ0FBVUYsUUFBVixDQUFtQmdCLE9BQW5CLENBQTJCLE1BQTNCLE1BQXVDLENBQUMsQ0FBeEMsR0FBK0M1QixTQUEvQyxtQkFBMkVBLFNBQTNFO0FBREosYUFBYjtBQUdIO0FBZEk7QUFyQ0gsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZWZpeENscyA9ICdpLXJhZGlvJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL3JhZGlvLWdyb3VwL2luZGV4Jzoge1xyXG4gICAgICAgICAgICB0eXBlOiAncGFyZW50J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcjMmQ4Y2YwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2xlZnQnLCAvL2xlZnQgcmlnaHRcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRQb3NpdGlvbidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb25DbHM6IGAke3ByZWZpeENsc30tcmFkaW8tbGVmdGAsXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGFuZ2VDdXJyZW50KGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgY2hlY2tlZDogY3VycmVudCB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhZGlvQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7IGN1cnJlbnQ6ICF0aGlzLmRhdGEuY2hlY2tlZCwgdmFsdWU6IHRoaXMuZGF0YS52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3JhZGlvLWdyb3VwL2luZGV4JylbMF07XHJcbiAgICAgICAgICAgIHBhcmVudCA/IHBhcmVudC5lbWl0RXZlbnQoaXRlbSkgOiB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgaXRlbSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQb3NpdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2xzOiB0aGlzLmRhdGEucG9zaXRpb24uaW5kZXhPZignbGVmdCcpICE9PSAtMSA/IGAke3ByZWZpeENsc30tcmFkaW8tbGVmdGAgOiBgJHtwcmVmaXhDbHN9LXJhZGlvLXJpZ2h0YCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19