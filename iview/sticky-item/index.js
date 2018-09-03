'use strict';

Component({
    externalClasses: ['i-class'],
    options: {
        multipleSlots: true
    },
    relations: {
        '../sticky/index': {
            type: 'parent'
        }
    },
    data: {
        top: 0,
        height: 0,
        isFixed: false,
        index: -1
    },
    methods: {
        updateScrollTopChange: function updateScrollTopChange(scrollTop) {
            var data = this.data;
            var top = data.top;
            var height = data.height;
            this.setData({
                isFixed: scrollTop >= top && scrollTop < top + height ? true : false
            });
        },
        updateDataChange: function updateDataChange(index) {
            var _this = this;

            var className = '.i-sticky-item';
            var query = wx.createSelectorQuery().in(this);
            query.select(className).boundingClientRect(function (res) {
                if (res) {
                    _this.setData({
                        top: res.top,
                        height: res.height,
                        index: index
                    });
                }
            }).exec();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsIm9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwicmVsYXRpb25zIiwidHlwZSIsImRhdGEiLCJ0b3AiLCJoZWlnaHQiLCJpc0ZpeGVkIiwiaW5kZXgiLCJtZXRob2RzIiwidXBkYXRlU2Nyb2xsVG9wQ2hhbmdlIiwic2Nyb2xsVG9wIiwic2V0RGF0YSIsInVwZGF0ZURhdGFDaGFuZ2UiLCJjbGFzc05hbWUiLCJxdWVyeSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVzIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7QUFFTkMsYUFBUztBQUNMQyx1QkFBZTtBQURWLEtBRkg7QUFLTkMsZUFBWTtBQUNSLDJCQUFvQjtBQUNoQkMsa0JBQU87QUFEUztBQURaLEtBTE47QUFVTkMsVUFBTztBQUNIQyxhQUFNLENBREg7QUFFSEMsZ0JBQVMsQ0FGTjtBQUdIQyxpQkFBVSxLQUhQO0FBSUhDLGVBQVEsQ0FBQztBQUpOLEtBVkQ7QUFnQk5DLGFBQVM7QUFDTEMsNkJBREssaUNBQ2lCQyxTQURqQixFQUMyQjtBQUM1QixnQkFBTVAsT0FBTyxLQUFLQSxJQUFsQjtBQUNBLGdCQUFNQyxNQUFNRCxLQUFLQyxHQUFqQjtBQUNBLGdCQUFNQyxTQUFTRixLQUFLRSxNQUFwQjtBQUNBLGlCQUFLTSxPQUFMLENBQWE7QUFDVEwseUJBQVlJLGFBQWFOLEdBQWIsSUFBb0JNLFlBQVlOLE1BQU1DLE1BQXhDLEdBQW1ELElBQW5ELEdBQTBEO0FBRDNELGFBQWI7QUFHSCxTQVJJO0FBU0xPLHdCQVRLLDRCQVNZTCxLQVRaLEVBU21CO0FBQUE7O0FBQ3BCLGdCQUFNTSxZQUFZLGdCQUFsQjtBQUNBLGdCQUFNQyxRQUFRQyxHQUFHQyxtQkFBSCxHQUF5QkMsRUFBekIsQ0FBNEIsSUFBNUIsQ0FBZDtBQUNBSCxrQkFBTUksTUFBTixDQUFjTCxTQUFkLEVBQTBCTSxrQkFBMUIsQ0FBNkMsVUFBQ0MsR0FBRCxFQUFPO0FBQzVDLG9CQUFJQSxHQUFKLEVBQVM7QUFDTCwwQkFBS1QsT0FBTCxDQUFhO0FBQ1RQLDZCQUFNZ0IsSUFBSWhCLEdBREQ7QUFFVEMsZ0NBQVNlLElBQUlmLE1BRko7QUFHVEUsK0JBQVFBO0FBSEMscUJBQWI7QUFLSDtBQUNSLGFBUkQsRUFRR2MsSUFSSDtBQVNIO0FBckJJO0FBaEJILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnXSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcmVsYXRpb25zIDoge1xyXG4gICAgICAgICcuLi9zdGlja3kvaW5kZXgnIDoge1xyXG4gICAgICAgICAgICB0eXBlIDogJ3BhcmVudCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSA6IHtcclxuICAgICAgICB0b3AgOiAwLFxyXG4gICAgICAgIGhlaWdodCA6IDAsXHJcbiAgICAgICAgaXNGaXhlZCA6IGZhbHNlLFxyXG4gICAgICAgIGluZGV4IDogLTEsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZVNjcm9sbFRvcENoYW5nZShzY3JvbGxUb3Ape1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCB0b3AgPSBkYXRhLnRvcDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBpc0ZpeGVkIDogKCBzY3JvbGxUb3AgPj0gdG9wICYmIHNjcm9sbFRvcCA8IHRvcCArIGhlaWdodCApID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVEYXRhQ2hhbmdlKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9ICcuaS1zdGlja3ktaXRlbSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG4gICAgICAgICAgICBxdWVyeS5zZWxlY3QoIGNsYXNzTmFtZSApLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZXMgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA6IHJlcy50b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiByZXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggOiBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuZXhlYygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSJdfQ==