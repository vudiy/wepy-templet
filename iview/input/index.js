'use strict';

Component({
    behaviors: ['wx://form-field'],

    externalClasses: ['i-class'],

    properties: {
        title: {
            type: String
        },
        // text || textarea || password || number
        type: {
            type: String,
            value: 'text'
        },
        disabled: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String,
            value: ''
        },
        autofocus: {
            type: Boolean,
            value: false
        },
        mode: {
            type: String,
            value: 'normal'
        },
        right: {
            type: Boolean,
            value: false
        },
        error: {
            type: Boolean,
            value: false
        },
        maxlength: {
            type: Number
        }
    },

    methods: {
        handleInputChange: function handleInputChange(event) {
            var _event$detail = event.detail,
                detail = _event$detail === undefined ? {} : _event$detail;
            var _detail$value = detail.value,
                value = _detail$value === undefined ? '' : _detail$value;

            this.setData({ value: value });

            this.triggerEvent('change', event);
        },
        handleInputFocus: function handleInputFocus(event) {
            this.triggerEvent('focus', event);
        },
        handleInputBlur: function handleInputBlur(event) {
            this.triggerEvent('blur', event);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImJlaGF2aW9ycyIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsImRpc2FibGVkIiwiQm9vbGVhbiIsInBsYWNlaG9sZGVyIiwiYXV0b2ZvY3VzIiwibW9kZSIsInJpZ2h0IiwiZXJyb3IiLCJtYXhsZW5ndGgiLCJOdW1iZXIiLCJtZXRob2RzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsImRldGFpbCIsInNldERhdGEiLCJ0cmlnZ2VyRXZlbnQiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLGVBQVcsQ0FBQyxpQkFBRCxDQURMOztBQUdOQyxxQkFBaUIsQ0FBQyxTQUFELENBSFg7O0FBS05DLGdCQUFZO0FBQ1JDLGVBQU87QUFDSEMsa0JBQU1DO0FBREgsU0FEQztBQUlSO0FBQ0FELGNBQU07QUFDRkEsa0JBQU1DLE1BREo7QUFFRkMsbUJBQU87QUFGTCxTQUxFO0FBU1JDLGtCQUFVO0FBQ05ILGtCQUFNSSxPQURBO0FBRU5GLG1CQUFPO0FBRkQsU0FURjtBQWFSRyxxQkFBYTtBQUNUTCxrQkFBTUMsTUFERztBQUVUQyxtQkFBTztBQUZFLFNBYkw7QUFpQlJJLG1CQUFXO0FBQ1BOLGtCQUFNSSxPQURDO0FBRVBGLG1CQUFPO0FBRkEsU0FqQkg7QUFxQlJLLGNBQU07QUFDRlAsa0JBQU1DLE1BREo7QUFFRkMsbUJBQU87QUFGTCxTQXJCRTtBQXlCUk0sZUFBTztBQUNIUixrQkFBTUksT0FESDtBQUVIRixtQkFBTztBQUZKLFNBekJDO0FBNkJSTyxlQUFPO0FBQ0hULGtCQUFNSSxPQURIO0FBRUhGLG1CQUFPO0FBRkosU0E3QkM7QUFpQ1JRLG1CQUFXO0FBQ1BWLGtCQUFNVztBQURDO0FBakNILEtBTE47O0FBMkNOQyxhQUFTO0FBQ0xDLHlCQURLLDZCQUNhQyxLQURiLEVBQ29CO0FBQUEsZ0NBQ0dBLEtBREgsQ0FDYkMsTUFEYTtBQUFBLGdCQUNiQSxNQURhLGlDQUNKLEVBREk7QUFBQSxnQ0FFRUEsTUFGRixDQUViYixLQUZhO0FBQUEsZ0JBRWJBLEtBRmEsaUNBRUwsRUFGSzs7QUFHckIsaUJBQUtjLE9BQUwsQ0FBYSxFQUFFZCxZQUFGLEVBQWI7O0FBRUEsaUJBQUtlLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEJILEtBQTVCO0FBQ0gsU0FQSTtBQVNMSSx3QkFUSyw0QkFTWUosS0FUWixFQVNtQjtBQUNwQixpQkFBS0csWUFBTCxDQUFrQixPQUFsQixFQUEyQkgsS0FBM0I7QUFDSCxTQVhJO0FBYUxLLHVCQWJLLDJCQWFXTCxLQWJYLEVBYWtCO0FBQ25CLGlCQUFLRyxZQUFMLENBQWtCLE1BQWxCLEVBQTBCSCxLQUExQjtBQUNIO0FBZkk7QUEzQ0gsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFsnd3g6Ly9mb3JtLWZpZWxkJ10sXHJcblxyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB0ZXh0IHx8IHRleHRhcmVhIHx8IHBhc3N3b3JkIHx8IG51bWJlclxyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvZm9jdXM6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdub3JtYWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlclxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGV0YWlsID0ge30gfSA9IGV2ZW50O1xyXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlID0gJycgfSA9IGRldGFpbDtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgdmFsdWUgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUlucHV0Rm9jdXMoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2ZvY3VzJywgZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZUlucHV0Qmx1cihldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnYmx1cicsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=