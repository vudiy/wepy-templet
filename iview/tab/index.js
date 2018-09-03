'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../tabs/index': {
            type: 'parent'
        }
    },

    properties: {
        key: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        dot: {
            type: Boolean,
            value: false
        },
        count: {
            type: Number,
            value: 0
        }
    },

    data: {
        current: false,
        currentColor: '',
        scroll: false
    },

    methods: {
        changeCurrent: function changeCurrent(current) {
            this.setData({ current: current });
        },
        changeCurrentColor: function changeCurrentColor(currentColor) {
            this.setData({ currentColor: currentColor });
        },
        changeScroll: function changeScroll(scroll) {
            this.setData({ scroll: scroll });
        },
        handleClickItem: function handleClickItem() {
            var parent = this.getRelationNodes('../tabs/index')[0];
            parent.emitEvent(this.data.key);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwia2V5IiwiU3RyaW5nIiwidmFsdWUiLCJ0aXRsZSIsImRvdCIsIkJvb2xlYW4iLCJjb3VudCIsIk51bWJlciIsImRhdGEiLCJjdXJyZW50IiwiY3VycmVudENvbG9yIiwic2Nyb2xsIiwibWV0aG9kcyIsImNoYW5nZUN1cnJlbnQiLCJzZXREYXRhIiwiY2hhbmdlQ3VycmVudENvbG9yIiwiY2hhbmdlU2Nyb2xsIiwiaGFuZGxlQ2xpY2tJdGVtIiwicGFyZW50IiwiZ2V0UmVsYXRpb25Ob2RlcyIsImVtaXRFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGVBQVc7QUFDUCx5QkFBaUI7QUFDYkMsa0JBQU07QUFETztBQURWLEtBSEw7O0FBU05DLGdCQUFZO0FBQ1JDLGFBQUs7QUFDREYsa0JBQU1HLE1BREw7QUFFREMsbUJBQU87QUFGTixTQURHO0FBS1JDLGVBQU87QUFDSEwsa0JBQU1HLE1BREg7QUFFSEMsbUJBQU87QUFGSixTQUxDO0FBU1JFLGFBQUs7QUFDRE4sa0JBQU1PLE9BREw7QUFFREgsbUJBQU87QUFGTixTQVRHO0FBYVJJLGVBQU87QUFDSFIsa0JBQU1TLE1BREg7QUFFSEwsbUJBQU87QUFGSjtBQWJDLEtBVE47O0FBNEJOTSxVQUFNO0FBQ0ZDLGlCQUFTLEtBRFA7QUFFRkMsc0JBQWMsRUFGWjtBQUdGQyxnQkFBUTtBQUhOLEtBNUJBOztBQWtDTkMsYUFBUztBQUNMQyxxQkFESyx5QkFDVUosT0FEVixFQUNtQjtBQUNwQixpQkFBS0ssT0FBTCxDQUFhLEVBQUVMLGdCQUFGLEVBQWI7QUFDSCxTQUhJO0FBSUxNLDBCQUpLLDhCQUllTCxZQUpmLEVBSTZCO0FBQzlCLGlCQUFLSSxPQUFMLENBQWEsRUFBRUosMEJBQUYsRUFBYjtBQUNILFNBTkk7QUFPTE0sb0JBUEssd0JBT1NMLE1BUFQsRUFPaUI7QUFDbEIsaUJBQUtHLE9BQUwsQ0FBYSxFQUFFSCxjQUFGLEVBQWI7QUFDSCxTQVRJO0FBVUxNLHVCQVZLLDZCQVVjO0FBQ2YsZ0JBQU1DLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0IsZUFBdEIsRUFBdUMsQ0FBdkMsQ0FBZjtBQUNBRCxtQkFBT0UsU0FBUCxDQUFpQixLQUFLWixJQUFMLENBQVVSLEdBQTNCO0FBQ0g7QUFiSTtBQWxDSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcblxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL3RhYnMvaW5kZXgnOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXJlbnQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAga2V5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG90OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY291bnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGN1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRDb2xvcjogJycsXHJcbiAgICAgICAgc2Nyb2xsOiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hhbmdlQ3VycmVudCAoY3VycmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjdXJyZW50IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlQ3VycmVudENvbG9yIChjdXJyZW50Q29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudENvbG9yIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlU2Nyb2xsIChzY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc2Nyb2xsIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlQ2xpY2tJdGVtICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi90YWJzL2luZGV4JylbMF07XHJcbiAgICAgICAgICAgIHBhcmVudC5lbWl0RXZlbnQodGhpcy5kYXRhLmtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19