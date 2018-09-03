'use strict';

Component({
    externalClasses: ['i-class-content', 'i-class-title', 'i-class'],

    relations: {
        '../collapse/index': {
            type: 'parent',
            linked: function linked(target) {
                var options = {
                    accordion: target.data.accordion
                };
                if (target.data.name === this.data.name) {
                    options.showContent = 'i-collapse-item-show-content';
                }
                this.setData(options);
            }
        }
    },

    properties: {
        title: String,
        name: String
    },

    data: {
        showContent: '',
        accordion: false
    },

    options: {
        multipleSlots: true
    },

    methods: {
        trigger: function trigger(e) {
            var data = this.data;
            if (data.accordion) {
                this.triggerEvent('collapse', { name: data.name }, { composed: true, bubbles: true });
            } else {
                this.setData({
                    showContent: data.showContent ? '' : 'i-collapse-item-show-content'
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiYWNjb3JkaW9uIiwiZGF0YSIsIm5hbWUiLCJzaG93Q29udGVudCIsInNldERhdGEiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJTdHJpbmciLCJtdWx0aXBsZVNsb3RzIiwibWV0aG9kcyIsInRyaWdnZXIiLCJlIiwidHJpZ2dlckV2ZW50IiwiY29tcG9zZWQiLCJidWJibGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLGlCQUFELEVBQW9CLGVBQXBCLEVBQXFDLFNBQXJDLENBRFg7O0FBR05DLGVBQVc7QUFDUCw2QkFBcUI7QUFDakJDLGtCQUFNLFFBRFc7QUFFakJDLG9CQUFRLGdCQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLG9CQUFNQyxVQUFVO0FBQ1pDLCtCQUFXRixPQUFPRyxJQUFQLENBQVlEO0FBRFgsaUJBQWhCO0FBR0Esb0JBQUlGLE9BQU9HLElBQVAsQ0FBWUMsSUFBWixLQUFxQixLQUFLRCxJQUFMLENBQVVDLElBQW5DLEVBQXlDO0FBQ3JDSCw0QkFBUUksV0FBUixHQUFzQiw4QkFBdEI7QUFDSDtBQUNELHFCQUFLQyxPQUFMLENBQWFMLE9BQWI7QUFDSDtBQVZnQjtBQURkLEtBSEw7O0FBa0JOTSxnQkFBWTtBQUNSQyxlQUFPQyxNQURDO0FBRVJMLGNBQU1LO0FBRkUsS0FsQk47O0FBdUJOTixVQUFNO0FBQ0ZFLHFCQUFhLEVBRFg7QUFFRkgsbUJBQVc7QUFGVCxLQXZCQTs7QUE0Qk5ELGFBQVM7QUFDTFMsdUJBQWU7QUFEVixLQTVCSDs7QUFnQ05DLGFBQVM7QUFDTEMsZUFESyxtQkFDR0MsQ0FESCxFQUNNO0FBQ1AsZ0JBQU1WLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSxnQkFBSUEsS0FBS0QsU0FBVCxFQUFvQjtBQUNoQixxQkFBS1ksWUFBTCxDQUFrQixVQUFsQixFQUE4QixFQUFDVixNQUFNRCxLQUFLQyxJQUFaLEVBQTlCLEVBQWlELEVBQUNXLFVBQVUsSUFBWCxFQUFpQkMsU0FBUyxJQUExQixFQUFqRDtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLVixPQUFMLENBQWE7QUFDVEQsaUNBQWFGLEtBQUtFLFdBQUwsR0FBbUIsRUFBbkIsR0FBd0I7QUFENUIsaUJBQWI7QUFHSDtBQUNKO0FBVkk7QUFoQ0gsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcy1jb250ZW50JywgJ2ktY2xhc3MtdGl0bGUnLCAnaS1jbGFzcyddLFxyXG5cclxuICAgIHJlbGF0aW9uczoge1xyXG4gICAgICAgICcuLi9jb2xsYXBzZS9pbmRleCc6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhcmVudCcsXHJcbiAgICAgICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvcmRpb246IHRhcmdldC5kYXRhLmFjY29yZGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5kYXRhLm5hbWUgPT09IHRoaXMuZGF0YS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zaG93Q29udGVudCA9ICdpLWNvbGxhcHNlLWl0ZW0tc2hvdy1jb250ZW50JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICAgICAgbmFtZTogU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzaG93Q29udGVudDogJycsXHJcbiAgICAgICAgYWNjb3JkaW9uOiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgbXVsdGlwbGVTbG90czogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdHJpZ2dlcihlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmFjY29yZGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NvbGxhcHNlJywge25hbWU6IGRhdGEubmFtZX0sIHtjb21wb3NlZDogdHJ1ZSwgYnViYmxlczogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q29udGVudDogZGF0YS5zaG93Q29udGVudCA/ICcnIDogJ2ktY29sbGFwc2UtaXRlbS1zaG93LWNvbnRlbnQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19