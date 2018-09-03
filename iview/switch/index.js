'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        value: {
            type: Boolean,
            value: false
        },
        //large small default
        size: {
            type: String,
            value: 'default'
        },
        // is or not disable
        disabled: {
            type: Boolean,
            value: false
        },
        // hidden inut name
        name: {
            type: String,
            value: ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    methods: {
        toggle: function toggle() {
            if (this.data.disabled) return;
            var data = this.data;
            var value = data.value ? false : true;
            this.triggerEvent('change', {
                value: value
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsInR5cGUiLCJCb29sZWFuIiwic2l6ZSIsIlN0cmluZyIsImRpc2FibGVkIiwibmFtZSIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwibWV0aG9kcyIsInRvZ2dsZSIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGdCQUFhO0FBQ1RDLGVBQVE7QUFDSkMsa0JBQU9DLE9BREg7QUFFSkYsbUJBQVE7QUFGSixTQURDO0FBS1Q7QUFDQUcsY0FBTztBQUNIRixrQkFBT0csTUFESjtBQUVISixtQkFBUTtBQUZMLFNBTkU7QUFVVDtBQUNBSyxrQkFBVztBQUNQSixrQkFBT0MsT0FEQTtBQUVQRixtQkFBUTtBQUZELFNBWEY7QUFlVDtBQUNBTSxjQUFPO0FBQ0hMLGtCQUFPRyxNQURKO0FBRUhKLG1CQUFRO0FBRkw7QUFoQkUsS0FGUDtBQXVCTk8sYUFBUztBQUNMO0FBQ0FDLHVCQUFlO0FBRlYsS0F2Qkg7QUEyQk5DLGFBQVU7QUFDTkMsY0FETSxvQkFDRTtBQUNKLGdCQUFJLEtBQUtDLElBQUwsQ0FBVU4sUUFBZCxFQUF5QjtBQUN6QixnQkFBTU0sT0FBTyxLQUFLQSxJQUFsQjtBQUNBLGdCQUFNWCxRQUFRVyxLQUFLWCxLQUFMLEdBQWEsS0FBYixHQUFxQixJQUFuQztBQUNBLGlCQUFLWSxZQUFMLENBQWtCLFFBQWxCLEVBQTJCO0FBQ3ZCWix1QkFBUUE7QUFEZSxhQUEzQjtBQUdIO0FBUks7QUEzQkosQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG4gICAgcHJvcGVydGllcyA6IHtcclxuICAgICAgICB2YWx1ZSA6IHtcclxuICAgICAgICAgICAgdHlwZSA6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlIDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vbGFyZ2Ugc21hbGwgZGVmYXVsdFxyXG4gICAgICAgIHNpemUgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlIDogJ2RlZmF1bHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBpcyBvciBub3QgZGlzYWJsZVxyXG4gICAgICAgIGRpc2FibGVkIDoge1xyXG4gICAgICAgICAgICB0eXBlIDogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWUgOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gaGlkZGVuIGludXQgbmFtZVxyXG4gICAgICAgIG5hbWUgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlIDogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIC8vIOWcqOe7hOS7tuWumuS5ieaXtueahOmAiemhueS4reWQr+eUqOWkmnNsb3TmlK/mjIFcclxuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kcyA6IHtcclxuICAgICAgICB0b2dnbGUoKXtcclxuICAgICAgICAgICAgaWYoIHRoaXMuZGF0YS5kaXNhYmxlZCApIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhLnZhbHVlID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJyx7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19