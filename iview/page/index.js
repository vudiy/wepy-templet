'use strict';

Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true
    },

    properties: {
        // button || number || pointer
        mode: {
            type: String,
            value: 'button'
        },
        current: {
            type: Number,
            value: 1
        },
        total: {
            type: Number,
            value: 0
        },
        // 是否隐藏数值
        simple: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        handleChange: function handleChange(type) {
            this.triggerEvent('change', {
                type: type
            });
        },
        handlePrev: function handlePrev() {
            this.handleChange('prev');
        },
        handleNext: function handleNext() {
            this.handleChange('next');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicHJvcGVydGllcyIsIm1vZGUiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJjdXJyZW50IiwiTnVtYmVyIiwidG90YWwiLCJzaW1wbGUiLCJCb29sZWFuIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZSIsInRyaWdnZXJFdmVudCIsImhhbmRsZVByZXYiLCJoYW5kbGVOZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDs7QUFHTkMsYUFBUztBQUNMQyx1QkFBZTtBQURWLEtBSEg7O0FBT05DLGdCQUFZO0FBQ1I7QUFDQUMsY0FBTTtBQUNGQyxrQkFBTUMsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBRkU7QUFNUkMsaUJBQVM7QUFDTEgsa0JBQU1JLE1BREQ7QUFFTEYsbUJBQU87QUFGRixTQU5EO0FBVVJHLGVBQU87QUFDSEwsa0JBQU1JLE1BREg7QUFFSEYsbUJBQU87QUFGSixTQVZDO0FBY1I7QUFDQUksZ0JBQVE7QUFDSk4sa0JBQU1PLE9BREY7QUFFSkwsbUJBQU87QUFGSDtBQWZBLEtBUE47O0FBNEJOTSxhQUFTO0FBQ0xDLG9CQURLLHdCQUNTVCxJQURULEVBQ2U7QUFDaEIsaUJBQUtVLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEI7QUFDeEJWLHNCQUFNQTtBQURrQixhQUE1QjtBQUdILFNBTEk7QUFNTFcsa0JBTkssd0JBTVM7QUFDVixpQkFBS0YsWUFBTCxDQUFrQixNQUFsQjtBQUNILFNBUkk7QUFTTEcsa0JBVEssd0JBU1M7QUFDVixpQkFBS0gsWUFBTCxDQUFrQixNQUFsQjtBQUNIO0FBWEk7QUE1QkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG5cclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBidXR0b24gfHwgbnVtYmVyIHx8IHBvaW50ZXJcclxuICAgICAgICBtb2RlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdidXR0b24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJyZW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdGFsOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaYr+WQpumakOiXj+aVsOWAvFxyXG4gICAgICAgIHNpbXBsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBoYW5kbGVDaGFuZ2UgKHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVQcmV2ICgpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoJ3ByZXYnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZU5leHQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgnbmV4dCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==