'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        status: {
            type: String,
            //wait、process、finish、error
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        content: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    relations: {
        '../steps/index': {
            type: 'parent'
        }
    },
    data: {
        //step length
        len: 1,
        //current in step index
        index: 0,
        //parent component select current index
        current: 0,
        //css direction
        direction: 'horizontal'
    },
    methods: {
        updateDataChange: function updateDataChange(options) {
            this.setData({
                len: options.len,
                index: options.index,
                current: options.current,
                direction: options.direction
            });
        }
    }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJzdGF0dXMiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWUiLCJ0aXRsZSIsImNvbnRlbnQiLCJpY29uIiwib3B0aW9ucyIsIm11bHRpcGxlU2xvdHMiLCJyZWxhdGlvbnMiLCJkYXRhIiwibGVuIiwiaW5kZXgiLCJjdXJyZW50IiwiZGlyZWN0aW9uIiwibWV0aG9kcyIsInVwZGF0ZURhdGFDaGFuZ2UiLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxVQUFVO0FBQ05DLHFCQUFpQixDQUFDLFNBQUQsQ0FEWDtBQUVOQyxnQkFBYTtBQUNUQyxnQkFBUztBQUNMQyxrQkFBT0MsTUFERjtBQUVMO0FBQ0FDLG1CQUFRO0FBSEgsU0FEQTtBQU1UQyxlQUFRO0FBQ0pILGtCQUFPQyxNQURIO0FBRUpDLG1CQUFRO0FBRkosU0FOQztBQVVURSxpQkFBVTtBQUNOSixrQkFBT0MsTUFERDtBQUVOQyxtQkFBUTtBQUZGLFNBVkQ7QUFjVEcsY0FBTztBQUNITCxrQkFBT0MsTUFESjtBQUVIQyxtQkFBUTtBQUZMO0FBZEUsS0FGUDtBQXFCTkksYUFBUztBQUNMO0FBQ0FDLHVCQUFlO0FBRlYsS0FyQkg7QUF5Qk5DLGVBQVk7QUFDUiwwQkFBbUI7QUFDZlIsa0JBQU87QUFEUTtBQURYLEtBekJOO0FBOEJOUyxVQUFPO0FBQ0g7QUFDQUMsYUFBTSxDQUZIO0FBR0g7QUFDQUMsZUFBUSxDQUpMO0FBS0g7QUFDQUMsaUJBQVUsQ0FOUDtBQU9IO0FBQ0FDLG1CQUFZO0FBUlQsS0E5QkQ7QUF3Q05DLGFBQVU7QUFDTkMsd0JBRE0sNEJBQ1lULE9BRFosRUFDcUI7QUFDdkIsaUJBQUtVLE9BQUwsQ0FBYTtBQUNUTixxQkFBTUosUUFBUUksR0FETDtBQUVUQyx1QkFBUUwsUUFBUUssS0FGUDtBQUdUQyx5QkFBVU4sUUFBUU0sT0FIVDtBQUlUQywyQkFBWVAsUUFBUU87QUFKWCxhQUFiO0FBTUg7QUFSSzs7QUF4Q0osQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG4gICAgcHJvcGVydGllcyA6IHtcclxuICAgICAgICBzdGF0dXMgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIC8vd2FpdOOAgXByb2Nlc3PjgIFmaW5pc2jjgIFlcnJvclxyXG4gICAgICAgICAgICB2YWx1ZSA6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZSA6IHtcclxuICAgICAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWUgOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IHtcclxuICAgICAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWUgOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbiA6IHtcclxuICAgICAgICAgICAgdHlwZSA6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWUgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgLy8g5Zyo57uE5Lu25a6a5LmJ5pe255qE6YCJ6aG55Lit5ZCv55So5aSac2xvdOaUr+aMgVxyXG4gICAgICAgIG11bHRpcGxlU2xvdHM6IHRydWVcclxuICAgIH0sXHJcbiAgICByZWxhdGlvbnMgOiB7XHJcbiAgICAgICAgJy4uL3N0ZXBzL2luZGV4JyA6IHtcclxuICAgICAgICAgICAgdHlwZSA6ICdwYXJlbnQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEgOiB7XHJcbiAgICAgICAgLy9zdGVwIGxlbmd0aFxyXG4gICAgICAgIGxlbiA6IDEsXHJcbiAgICAgICAgLy9jdXJyZW50IGluIHN0ZXAgaW5kZXhcclxuICAgICAgICBpbmRleCA6IDAsXHJcbiAgICAgICAgLy9wYXJlbnQgY29tcG9uZW50IHNlbGVjdCBjdXJyZW50IGluZGV4XHJcbiAgICAgICAgY3VycmVudCA6IDAsXHJcbiAgICAgICAgLy9jc3MgZGlyZWN0aW9uXHJcbiAgICAgICAgZGlyZWN0aW9uIDogJ2hvcml6b250YWwnXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kcyA6IHtcclxuICAgICAgICB1cGRhdGVEYXRhQ2hhbmdlKCBvcHRpb25zICl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBsZW4gOiBvcHRpb25zLmxlbixcclxuICAgICAgICAgICAgICAgIGluZGV4IDogb3B0aW9ucy5pbmRleCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgOiBvcHRpb25zLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gOiBvcHRpb25zLmRpcmVjdGlvblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pIl19