'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../grid-item/index': {
            type: 'child',
            linked: function linked() {
                this.setGridItemWidth();
            },
            linkChanged: function linkChanged() {
                this.setGridItemWidth();
            },
            unlinked: function unlinked() {
                this.setGridItemWidth();
            }
        }
    },

    methods: {
        setGridItemWidth: function setGridItemWidth() {
            var nodes = this.getRelationNodes('../grid-item/index');

            // const len = nodes.length;
            // if (len < 3) {
            //     nodes.forEach(item => {
            //         item.setData({
            //             'width': '33.33%'
            //         });
            //     });
            // } else {
            //     const width = 100 / nodes.length;
            //     nodes.forEach(item => {
            //         item.setData({
            //             'width': width + '%'
            //         });
            //     });
            // }
            var width = 100 / nodes.length;
            nodes.forEach(function (item) {
                item.setData({
                    'width': width + '%'
                });
            });
        }
    },

    ready: function ready() {
        this.setGridItemWidth();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJsaW5rZWQiLCJzZXRHcmlkSXRlbVdpZHRoIiwibGlua0NoYW5nZWQiLCJ1bmxpbmtlZCIsIm1ldGhvZHMiLCJub2RlcyIsImdldFJlbGF0aW9uTm9kZXMiLCJ3aWR0aCIsImxlbmd0aCIsImZvckVhY2giLCJpdGVtIiwic2V0RGF0YSIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDs7QUFHTkMsZUFBVztBQUNQLDhCQUFzQjtBQUNsQkMsa0JBQU0sT0FEWTtBQUVsQkMsa0JBRmtCLG9CQUVSO0FBQ04scUJBQUtDLGdCQUFMO0FBQ0gsYUFKaUI7QUFLbEJDLHVCQUxrQix5QkFLSDtBQUNYLHFCQUFLRCxnQkFBTDtBQUNILGFBUGlCO0FBUWxCRSxvQkFSa0Isc0JBUU47QUFDUixxQkFBS0YsZ0JBQUw7QUFDSDtBQVZpQjtBQURmLEtBSEw7O0FBa0JORyxhQUFTO0FBQ0xILHdCQURLLDhCQUNlO0FBQ2hCLGdCQUFNSSxRQUFRLEtBQUtDLGdCQUFMLENBQXNCLG9CQUF0QixDQUFkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFNQyxRQUFRLE1BQU1GLE1BQU1HLE1BQTFCO0FBQ0FILGtCQUFNSSxPQUFOLENBQWMsZ0JBQVE7QUFDbEJDLHFCQUFLQyxPQUFMLENBQWE7QUFDVCw2QkFBU0osUUFBUTtBQURSLGlCQUFiO0FBR0gsYUFKRDtBQUtIO0FBekJJLEtBbEJIOztBQThDTkssU0E5Q00sbUJBOENHO0FBQ0wsYUFBS1gsZ0JBQUw7QUFDSDtBQWhESyxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcblxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL2dyaWQtaXRlbS9pbmRleCc6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NoaWxkJyxcclxuICAgICAgICAgICAgbGlua2VkICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0R3JpZEl0ZW1XaWR0aCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZCAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEdyaWRJdGVtV2lkdGgoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5saW5rZWQgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRHcmlkSXRlbVdpZHRoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZXRHcmlkSXRlbVdpZHRoICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2dyaWQtaXRlbS9pbmRleCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgbGVuID0gbm9kZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyBpZiAobGVuIDwgMykge1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpdGVtLnNldERhdGEoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAnd2lkdGgnOiAnMzMuMzMlJ1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCB3aWR0aCA9IDEwMCAvIG5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gICAgIG5vZGVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaXRlbS5zZXREYXRhKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgJ3dpZHRoJzogd2lkdGggKyAnJSdcclxuICAgICAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gMTAwIC8gbm9kZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiB3aWR0aCArICclJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZEl0ZW1XaWR0aCgpO1xyXG4gICAgfVxyXG59KTtcclxuIl19