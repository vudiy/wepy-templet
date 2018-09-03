'use strict';

Component({
    externalClasses: ['i-class', 'i-class-mask', 'i-class-header'],

    options: {
        multipleSlots: true
    },

    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        actions: {
            type: Array,
            value: []
        }
    },

    methods: {
        handleClickMask: function handleClickMask() {
            if (!this.data.maskClosable) return;
            this.handleClickCancel();
        },
        handleClickItem: function handleClickItem(_ref) {
            var _ref$currentTarget = _ref.currentTarget,
                currentTarget = _ref$currentTarget === undefined ? {} : _ref$currentTarget;

            var dataset = currentTarget.dataset || {};
            var index = dataset.index;

            this.triggerEvent('click', { index: index });
        },
        handleClickCancel: function handleClickCancel() {
            this.triggerEvent('cancel');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsInZpc2libGUiLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwibWFza0Nsb3NhYmxlIiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJTdHJpbmciLCJhY3Rpb25zIiwiQXJyYXkiLCJtZXRob2RzIiwiaGFuZGxlQ2xpY2tNYXNrIiwiZGF0YSIsImhhbmRsZUNsaWNrQ2FuY2VsIiwiaGFuZGxlQ2xpY2tJdGVtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsInRyaWdnZXJFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELEVBQVksY0FBWixFQUE0QixnQkFBNUIsQ0FEWDs7QUFHTkMsYUFBUztBQUNMQyx1QkFBZTtBQURWLEtBSEg7O0FBT05DLGdCQUFZO0FBQ1JDLGlCQUFTO0FBQ0xDLGtCQUFNQyxPQUREO0FBRUxDLG1CQUFPO0FBRkYsU0FERDtBQUtSQyxzQkFBYztBQUNWSCxrQkFBTUMsT0FESTtBQUVWQyxtQkFBTztBQUZHLFNBTE47QUFTUkUsb0JBQVk7QUFDUkosa0JBQU1DLE9BREU7QUFFUkMsbUJBQU87QUFGQyxTQVRKO0FBYVJHLG9CQUFZO0FBQ1JMLGtCQUFNTSxNQURFO0FBRVJKLG1CQUFPO0FBRkMsU0FiSjtBQWlCUkssaUJBQVM7QUFDTFAsa0JBQU1RLEtBREQ7QUFFTE4sbUJBQU87QUFGRjtBQWpCRCxLQVBOOztBQThCTk8sYUFBUztBQUNMQyx1QkFESyw2QkFDYztBQUNmLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVUixZQUFmLEVBQTZCO0FBQzdCLGlCQUFLUyxpQkFBTDtBQUNILFNBSkk7QUFNTEMsdUJBTkssaUNBTW9DO0FBQUEsMENBQXRCQyxhQUFzQjtBQUFBLGdCQUF0QkEsYUFBc0Isc0NBQU4sRUFBTTs7QUFDckMsZ0JBQU1DLFVBQVVELGNBQWNDLE9BQWQsSUFBeUIsRUFBekM7QUFEcUMsZ0JBRTdCQyxLQUY2QixHQUVuQkQsT0FGbUIsQ0FFN0JDLEtBRjZCOztBQUdyQyxpQkFBS0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQixFQUFFRCxZQUFGLEVBQTNCO0FBQ0gsU0FWSTtBQVlMSix5QkFaSywrQkFZZ0I7QUFDakIsaUJBQUtLLFlBQUwsQ0FBa0IsUUFBbEI7QUFDSDtBQWRJO0FBOUJILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnLCAnaS1jbGFzcy1tYXNrJywgJ2ktY2xhc3MtaGVhZGVyJ10sXHJcblxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIG11bHRpcGxlU2xvdHM6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHZpc2libGU6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXNrQ2xvc2FibGU6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dDYW5jZWw6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWxUZXh0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICflj5bmtognXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBoYW5kbGVDbGlja01hc2sgKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5tYXNrQ2xvc2FibGUpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGlja0NhbmNlbCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUNsaWNrSXRlbSAoeyBjdXJyZW50VGFyZ2V0ID0ge30gfSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhc2V0ID0gY3VycmVudFRhcmdldC5kYXRhc2V0IHx8IHt9O1xyXG4gICAgICAgICAgICBjb25zdCB7IGluZGV4IH0gPSBkYXRhc2V0O1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2snLCB7IGluZGV4IH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUNsaWNrQ2FuY2VsICgpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==