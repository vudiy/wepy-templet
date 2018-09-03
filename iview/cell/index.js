'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var warn = function warn(msg, getValue) {
    console.warn(msg);
    console.log('接受到的值为：', getValue);
};

Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true
    },

    relations: {
        '../cell-group/index': {
            type: 'parent'
        }
    },

    properties: {
        // 左侧标题
        title: {
            type: String
        },
        // 标题下方的描述信息
        label: {
            type: String
        },
        // 右侧内容
        value: {
            type: String
        },
        // 只有点击 footer 区域才触发 tab 事件
        onlyTapFooter: {
            type: Boolean
        },
        // 是否展示右侧箭头并开启尝试以 url 跳转
        isLink: {
            type: null,
            value: ''
        },
        // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
        linkType: {
            type: String,
            value: 'navigateTo'
        },
        url: {
            type: String,
            value: ''
        }
    },

    data: {
        isLastCell: true
    },

    methods: {
        navigateTo: function navigateTo() {
            var url = this.data.url;

            var type = _typeof(this.data.isLink);

            this.triggerEvent('click', {});

            if (!this.data.isLink || !url || url === 'true' || url === 'false') return;

            if (type !== 'boolean' && type !== 'string') {
                warn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink);
                return;
            }

            if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
                warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
                return;
            }
            wx[this.data.linkType].call(wx, { url: url });
        },
        handleTap: function handleTap() {
            if (!this.data.onlyTapFooter) {
                this.navigateTo();
            }
        },
        updateIsLastCell: function updateIsLastCell(isLastCell) {
            this.setData({ isLastCell: isLastCell });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndhcm4iLCJtc2ciLCJnZXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiLCJleHRlcm5hbENsYXNzZXMiLCJvcHRpb25zIiwibXVsdGlwbGVTbG90cyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJTdHJpbmciLCJsYWJlbCIsInZhbHVlIiwib25seVRhcEZvb3RlciIsIkJvb2xlYW4iLCJpc0xpbmsiLCJsaW5rVHlwZSIsInVybCIsImRhdGEiLCJpc0xhc3RDZWxsIiwibWV0aG9kcyIsIm5hdmlnYXRlVG8iLCJ0cmlnZ2VyRXZlbnQiLCJpbmRleE9mIiwid3giLCJjYWxsIiwiaGFuZGxlVGFwIiwidXBkYXRlSXNMYXN0Q2VsbCIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQzVCQyxZQUFRSCxJQUFSLENBQWFDLEdBQWI7QUFDQUUsWUFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJGLFFBQXZCO0FBQ0gsQ0FIRDs7QUFLQUcsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGFBQVM7QUFDTEMsdUJBQWU7QUFEVixLQUhIOztBQU9OQyxlQUFXO0FBQ1AsK0JBQXVCO0FBQ25CQyxrQkFBTTtBQURhO0FBRGhCLEtBUEw7O0FBYU5DLGdCQUFZO0FBQ1I7QUFDQUMsZUFBTztBQUNIRixrQkFBTUc7QUFESCxTQUZDO0FBS1I7QUFDQUMsZUFBTztBQUNISixrQkFBTUc7QUFESCxTQU5DO0FBU1I7QUFDQUUsZUFBTztBQUNITCxrQkFBTUc7QUFESCxTQVZDO0FBYVI7QUFDQUcsdUJBQWU7QUFDWE4sa0JBQU1PO0FBREssU0FkUDtBQWlCUjtBQUNBQyxnQkFBUTtBQUNKUixrQkFBTSxJQURGO0FBRUpLLG1CQUFPO0FBRkgsU0FsQkE7QUFzQlI7QUFDQUksa0JBQVU7QUFDTlQsa0JBQU1HLE1BREE7QUFFTkUsbUJBQU87QUFGRCxTQXZCRjtBQTJCUkssYUFBSztBQUNEVixrQkFBTUcsTUFETDtBQUVERSxtQkFBTztBQUZOO0FBM0JHLEtBYk47O0FBOENOTSxVQUFNO0FBQ0ZDLG9CQUFZO0FBRFYsS0E5Q0E7O0FBa0ROQyxhQUFTO0FBQ0xDLGtCQURLLHdCQUNTO0FBQUEsZ0JBQ0ZKLEdBREUsR0FDTSxLQUFLQyxJQURYLENBQ0ZELEdBREU7O0FBRVYsZ0JBQU1WLGVBQWMsS0FBS1csSUFBTCxDQUFVSCxNQUF4QixDQUFOOztBQUVBLGlCQUFLTyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLEVBQTNCOztBQUVBLGdCQUFJLENBQUMsS0FBS0osSUFBTCxDQUFVSCxNQUFYLElBQXFCLENBQUNFLEdBQXRCLElBQTZCQSxRQUFRLE1BQXJDLElBQStDQSxRQUFRLE9BQTNELEVBQW9FOztBQUVwRSxnQkFBSVYsU0FBUyxTQUFULElBQXNCQSxTQUFTLFFBQW5DLEVBQTZDO0FBQ3pDVixxQkFBSyx3QkFBTCxFQUErQixLQUFLcUIsSUFBTCxDQUFVSCxNQUF6QztBQUNBO0FBQ0g7O0FBRUQsZ0JBQUksQ0FBQyxZQUFELEVBQWUsWUFBZixFQUE2QixXQUE3QixFQUEwQyxVQUExQyxFQUFzRFEsT0FBdEQsQ0FBOEQsS0FBS0wsSUFBTCxDQUFVRixRQUF4RSxNQUFzRixDQUFDLENBQTNGLEVBQThGO0FBQzFGbkIscUJBQUssMERBQUwsRUFBaUUsS0FBS3FCLElBQUwsQ0FBVUYsUUFBM0U7QUFDQTtBQUNIO0FBQ0RRLGVBQUcsS0FBS04sSUFBTCxDQUFVRixRQUFiLEVBQXVCUyxJQUF2QixDQUE0QkQsRUFBNUIsRUFBZ0MsRUFBQ1AsUUFBRCxFQUFoQztBQUNILFNBbkJJO0FBb0JMUyxpQkFwQkssdUJBb0JRO0FBQ1QsZ0JBQUksQ0FBQyxLQUFLUixJQUFMLENBQVVMLGFBQWYsRUFBOEI7QUFDMUIscUJBQUtRLFVBQUw7QUFDSDtBQUNKLFNBeEJJO0FBMEJMTSx3QkExQkssNEJBMEJhUixVQTFCYixFQTBCeUI7QUFDMUIsaUJBQUtTLE9BQUwsQ0FBYSxFQUFFVCxzQkFBRixFQUFiO0FBQ0g7QUE1Qkk7QUFsREgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdhcm4gPSAobXNnLCBnZXRWYWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS53YXJuKG1zZyk7XHJcbiAgICBjb25zb2xlLmxvZygn5o6l5Y+X5Yiw55qE5YC85Li677yaJywgZ2V0VmFsdWUpO1xyXG59O1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcblxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIG11bHRpcGxlU2xvdHM6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL2NlbGwtZ3JvdXAvaW5kZXgnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXJlbnQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5bem5L6n5qCH6aKYXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmoIfpopjkuIvmlrnnmoTmj4/ov7Dkv6Hmga9cclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWPs+S+p+WGheWuuVxyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Y+q5pyJ54K55Ye7IGZvb3RlciDljLrln5/miY3op6blj5EgdGFiIOS6i+S7tlxyXG4gICAgICAgIG9ubHlUYXBGb290ZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5piv5ZCm5bGV56S65Y+z5L6n566t5aS05bm25byA5ZCv5bCd6K+V5LulIHVybCDot7PovaxcclxuICAgICAgICBpc0xpbms6IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDpk77mjqXnsbvlnovvvIzlj6/pgInlgLzkuLogbmF2aWdhdGVUb++8jHJlZGlyZWN0VG/vvIxzd2l0Y2hUYWLvvIxyZUxhdW5jaFxyXG4gICAgICAgIGxpbmtUeXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICduYXZpZ2F0ZVRvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXJsOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaXNMYXN0Q2VsbDogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgbmF2aWdhdGVUbyAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsIH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdGhpcy5kYXRhLmlzTGluaztcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbGljaycsIHt9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmlzTGluayB8fCAhdXJsIHx8IHVybCA9PT0gJ3RydWUnIHx8IHVybCA9PT0gJ2ZhbHNlJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdib29sZWFuJyAmJiB0eXBlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgd2FybignaXNMaW5rIOWxnuaAp+WAvOW/hemhu+aYr+S4gOS4quWtl+espuS4suaIluW4g+WwlOWAvCcsIHRoaXMuZGF0YS5pc0xpbmspO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoWyduYXZpZ2F0ZVRvJywgJ3JlZGlyZWN0VG8nLCAnc3dpdGNoVGFiJywgJ3JlTGF1bmNoJ10uaW5kZXhPZih0aGlzLmRhdGEubGlua1R5cGUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgd2FybignbGlua1R5cGUg5bGe5oCn5Y+v6YCJ5YC85Li6IG5hdmlnYXRlVG/vvIxyZWRpcmVjdFRv77yMc3dpdGNoVGFi77yMcmVMYXVuY2gnLCB0aGlzLmRhdGEubGlua1R5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHd4W3RoaXMuZGF0YS5saW5rVHlwZV0uY2FsbCh3eCwge3VybH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlVGFwICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEub25seVRhcEZvb3Rlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVJc0xhc3RDZWxsIChpc0xhc3RDZWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGlzTGFzdENlbGwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19