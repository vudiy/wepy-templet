'use strict';

var prefixCls = 'i-checkbox';

Component({
    externalClasses: ['i-class'],
    relations: {
        '../checkbox-group/index': {
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
        positionCls: prefixCls + '-checkbox-left'
    },
    attached: function attached() {
        this.setPosition();
    },

    methods: {
        changeCurrent: function changeCurrent(current) {
            this.setData({ checked: current });
        },
        checkboxChange: function checkboxChange() {
            if (this.data.disabled) return;
            var item = { current: !this.data.checked, value: this.data.value };
            var parent = this.getRelationNodes('../checkbox-group/index')[0];
            parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
        },
        setPosition: function setPosition() {
            this.setData({
                positionCls: this.data.position.indexOf('left') !== -1 ? prefixCls + '-checkbox-left' : prefixCls + '-checkbox-right'
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByZWZpeENscyIsIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJTdHJpbmciLCJjaGVja2VkIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiY29sb3IiLCJwb3NpdGlvbiIsIm9ic2VydmVyIiwiZGF0YSIsInBvc2l0aW9uQ2xzIiwiYXR0YWNoZWQiLCJzZXRQb3NpdGlvbiIsIm1ldGhvZHMiLCJjaGFuZ2VDdXJyZW50IiwiY3VycmVudCIsInNldERhdGEiLCJjaGVja2JveENoYW5nZSIsIml0ZW0iLCJwYXJlbnQiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZW1pdEV2ZW50IiwidHJpZ2dlckV2ZW50IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLFlBQWxCOztBQUVBQyxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxlQUFXO0FBQ1AsbUNBQTJCO0FBQ3ZCQyxrQkFBTTtBQURpQjtBQURwQixLQUZMO0FBT05DLGdCQUFZO0FBQ1JDLGVBQU87QUFDSEYsa0JBQU1HLE1BREg7QUFFSEQsbUJBQU87QUFGSixTQURDO0FBS1JFLGlCQUFTO0FBQ0xKLGtCQUFNSyxPQUREO0FBRUxILG1CQUFPO0FBRkYsU0FMRDtBQVNSSSxrQkFBVTtBQUNOTixrQkFBTUssT0FEQTtBQUVOSCxtQkFBTztBQUZELFNBVEY7QUFhUkssZUFBTztBQUNIUCxrQkFBTUcsTUFESDtBQUVIRCxtQkFBTztBQUZKLFNBYkM7QUFpQlJNLGtCQUFVO0FBQ05SLGtCQUFNRyxNQURBO0FBRU5ELG1CQUFPLE1BRkQsRUFFUztBQUNmTyxzQkFBVTtBQUhKO0FBakJGLEtBUE47QUE4Qk5DLFVBQU07QUFDRk4saUJBQVMsSUFEUDtBQUVGTyxxQkFBZ0JmLFNBQWhCO0FBRkUsS0E5QkE7QUFrQ05nQixZQWxDTSxzQkFrQ0s7QUFDUCxhQUFLQyxXQUFMO0FBQ0gsS0FwQ0s7O0FBcUNOQyxhQUFTO0FBQ0xDLHFCQURLLHlCQUNTQyxPQURULEVBQ2tCO0FBQ25CLGlCQUFLQyxPQUFMLENBQWEsRUFBRWIsU0FBU1ksT0FBWCxFQUFiO0FBQ0gsU0FISTtBQUlMRSxzQkFKSyw0QkFJWTtBQUNiLGdCQUFJLEtBQUtSLElBQUwsQ0FBVUosUUFBZCxFQUF3QjtBQUN4QixnQkFBTWEsT0FBTyxFQUFFSCxTQUFTLENBQUMsS0FBS04sSUFBTCxDQUFVTixPQUF0QixFQUErQkYsT0FBTyxLQUFLUSxJQUFMLENBQVVSLEtBQWhELEVBQWI7QUFDQSxnQkFBTWtCLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0IseUJBQXRCLEVBQWlELENBQWpELENBQWY7QUFDQUQscUJBQVNBLE9BQU9FLFNBQVAsQ0FBaUJILElBQWpCLENBQVQsR0FBa0MsS0FBS0ksWUFBTCxDQUFrQixRQUFsQixFQUE0QkosSUFBNUIsQ0FBbEM7QUFDSCxTQVRJO0FBVUxOLG1CQVZLLHlCQVVTO0FBQ1YsaUJBQUtJLE9BQUwsQ0FBYTtBQUNUTiw2QkFBYSxLQUFLRCxJQUFMLENBQVVGLFFBQVYsQ0FBbUJnQixPQUFuQixDQUEyQixNQUEzQixNQUF1QyxDQUFDLENBQXhDLEdBQStDNUIsU0FBL0Msc0JBQThFQSxTQUE5RTtBQURKLGFBQWI7QUFHSDtBQWRJO0FBckNILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVmaXhDbHMgPSAnaS1jaGVja2JveCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcclxuICAgIHJlbGF0aW9uczoge1xyXG4gICAgICAgICcuLi9jaGVja2JveC1ncm91cC9pbmRleCc6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3BhcmVudCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja2VkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnIzJkOGNmMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdsZWZ0JywgLy9sZWZ0IHJpZ2h0XHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0UG9zaXRpb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBjaGVja2VkOiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uQ2xzOiBgJHtwcmVmaXhDbHN9LWNoZWNrYm94LWxlZnRgLFxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hhbmdlQ3VycmVudChjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGNoZWNrZWQ6IGN1cnJlbnQgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja2JveENoYW5nZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0geyBjdXJyZW50OiAhdGhpcy5kYXRhLmNoZWNrZWQsIHZhbHVlOiB0aGlzLmRhdGEudmFsdWUgfTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC1ncm91cC9pbmRleCcpWzBdO1xyXG4gICAgICAgICAgICBwYXJlbnQgPyBwYXJlbnQuZW1pdEV2ZW50KGl0ZW0pIDogdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZScsIGl0ZW0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNsczogdGhpcy5kYXRhLnBvc2l0aW9uLmluZGV4T2YoJ2xlZnQnKSAhPT0gLTEgPyBgJHtwcmVmaXhDbHN9LWNoZWNrYm94LWxlZnRgIDogYCR7cHJlZml4Q2xzfS1jaGVja2JveC1yaWdodGAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==