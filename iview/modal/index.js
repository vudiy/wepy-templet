'use strict';

Component({
    externalClasses: ['i-class', 'i-class-mask'],

    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: ''
        },
        showOk: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: true
        },
        okText: {
            type: String,
            value: '确定'
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        // 按钮组，有此值时，不显示 ok 和 cancel 按钮
        actions: {
            type: Array,
            value: []
        },
        // horizontal || vertical
        actionMode: {
            type: String,
            value: 'horizontal'
        }
    },

    methods: {
        handleClickItem: function handleClickItem(_ref) {
            var _ref$currentTarget = _ref.currentTarget,
                currentTarget = _ref$currentTarget === undefined ? {} : _ref$currentTarget;

            var dataset = currentTarget.dataset || {};
            var index = dataset.index;

            this.triggerEvent('click', { index: index });
        },
        handleClickOk: function handleClickOk() {
            this.triggerEvent('ok');
        },
        handleClickCancel: function handleClickCancel() {
            this.triggerEvent('cancel');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJ2aXNpYmxlIiwidHlwZSIsIkJvb2xlYW4iLCJ2YWx1ZSIsInRpdGxlIiwiU3RyaW5nIiwic2hvd09rIiwic2hvd0NhbmNlbCIsIm9rVGV4dCIsImNhbmNlbFRleHQiLCJhY3Rpb25zIiwiQXJyYXkiLCJhY3Rpb25Nb2RlIiwibWV0aG9kcyIsImhhbmRsZUNsaWNrSXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJ0cmlnZ2VyRXZlbnQiLCJoYW5kbGVDbGlja09rIiwiaGFuZGxlQ2xpY2tDYW5jZWwiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxFQUFZLGNBQVosQ0FEWDs7QUFHTkMsZ0JBQVk7QUFDUkMsaUJBQVM7QUFDTEMsa0JBQU1DLE9BREQ7QUFFTEMsbUJBQU87QUFGRixTQUREO0FBS1JDLGVBQU87QUFDSEgsa0JBQU1JLE1BREg7QUFFSEYsbUJBQU87QUFGSixTQUxDO0FBU1JHLGdCQUFRO0FBQ0pMLGtCQUFNQyxPQURGO0FBRUpDLG1CQUFPO0FBRkgsU0FUQTtBQWFSSSxvQkFBWTtBQUNSTixrQkFBTUMsT0FERTtBQUVSQyxtQkFBTztBQUZDLFNBYko7QUFpQlJLLGdCQUFRO0FBQ0pQLGtCQUFNSSxNQURGO0FBRUpGLG1CQUFPO0FBRkgsU0FqQkE7QUFxQlJNLG9CQUFZO0FBQ1JSLGtCQUFNSSxNQURFO0FBRVJGLG1CQUFPO0FBRkMsU0FyQko7QUF5QlI7QUFDQU8saUJBQVM7QUFDTFQsa0JBQU1VLEtBREQ7QUFFTFIsbUJBQU87QUFGRixTQTFCRDtBQThCUjtBQUNBUyxvQkFBWTtBQUNSWCxrQkFBTUksTUFERTtBQUVSRixtQkFBTztBQUZDO0FBL0JKLEtBSE47O0FBd0NOVSxhQUFTO0FBQ0xDLHVCQURLLGlDQUNvQztBQUFBLDBDQUF0QkMsYUFBc0I7QUFBQSxnQkFBdEJBLGFBQXNCLHNDQUFOLEVBQU07O0FBQ3JDLGdCQUFNQyxVQUFVRCxjQUFjQyxPQUFkLElBQXlCLEVBQXpDO0FBRHFDLGdCQUU3QkMsS0FGNkIsR0FFbkJELE9BRm1CLENBRTdCQyxLQUY2Qjs7QUFHckMsaUJBQUtDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsRUFBRUQsWUFBRixFQUEzQjtBQUNILFNBTEk7QUFNTEUscUJBTkssMkJBTVk7QUFDYixpQkFBS0QsWUFBTCxDQUFrQixJQUFsQjtBQUNILFNBUkk7QUFTTEUseUJBVEssK0JBU2dCO0FBQ2pCLGlCQUFLRixZQUFMLENBQWtCLFFBQWxCO0FBQ0g7QUFYSTtBQXhDSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJywgJ2ktY2xhc3MtbWFzayddLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB2aXNpYmxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dPazoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0NhbmNlbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2tUZXh0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICfnoa7lrponXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWxUZXh0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICflj5bmtognXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmjInpkq7nu4TvvIzmnInmraTlgLzml7bvvIzkuI3mmL7npLogb2sg5ZKMIGNhbmNlbCDmjInpkq5cclxuICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGhvcml6b250YWwgfHwgdmVydGljYWxcclxuICAgICAgICBhY3Rpb25Nb2RlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdob3Jpem9udGFsJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGhhbmRsZUNsaWNrSXRlbSAoeyBjdXJyZW50VGFyZ2V0ID0ge30gfSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhc2V0ID0gY3VycmVudFRhcmdldC5kYXRhc2V0IHx8IHt9O1xyXG4gICAgICAgICAgICBjb25zdCB7IGluZGV4IH0gPSBkYXRhc2V0O1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2xpY2snLCB7IGluZGV4IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlQ2xpY2tPayAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdvaycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlQ2xpY2tDYW5jZWwgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2FuY2VsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19