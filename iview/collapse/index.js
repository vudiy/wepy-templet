'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../collapse-item/index': {
            type: 'child'
        }
    },
    properties: {
        name: String,
        accordion: Boolean
    },
    methods: {
        clickfn: function clickfn(e) {
            var params = e.detail;
            var allList = this.getRelationNodes('../collapse-item/index');
            allList.forEach(function (item) {
                if (params.name === item.data.name) {
                    item.setData({
                        showContent: 'i-collapse-item-show-content'
                    });
                } else {
                    item.setData({
                        showContent: ''
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIlN0cmluZyIsImFjY29yZGlvbiIsIkJvb2xlYW4iLCJtZXRob2RzIiwiY2xpY2tmbiIsImUiLCJwYXJhbXMiLCJkZXRhaWwiLCJhbGxMaXN0IiwiZ2V0UmVsYXRpb25Ob2RlcyIsImZvckVhY2giLCJpdGVtIiwiZGF0YSIsInNldERhdGEiLCJzaG93Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsVUFBVTtBQUNOQyxxQkFBaUIsQ0FBQyxTQUFELENBRFg7O0FBR05DLGVBQVc7QUFDUCxrQ0FBMEI7QUFDdEJDLGtCQUFNO0FBRGdCO0FBRG5CLEtBSEw7QUFRTkMsZ0JBQVk7QUFDUkMsY0FBTUMsTUFERTtBQUVSQyxtQkFBV0M7QUFGSCxLQVJOO0FBWU5DLGFBQVM7QUFDTEMsZUFESyxtQkFDR0MsQ0FESCxFQUNNO0FBQ1AsZ0JBQU1DLFNBQVNELEVBQUVFLE1BQWpCO0FBQ0EsZ0JBQU1DLFVBQVUsS0FBS0MsZ0JBQUwsQ0FBc0Isd0JBQXRCLENBQWhCO0FBQ0FELG9CQUFRRSxPQUFSLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN0QixvQkFBSUwsT0FBT1AsSUFBUCxLQUFnQlksS0FBS0MsSUFBTCxDQUFVYixJQUE5QixFQUFvQztBQUNoQ1kseUJBQUtFLE9BQUwsQ0FBYTtBQUNUQyxxQ0FBYTtBQURKLHFCQUFiO0FBR0gsaUJBSkQsTUFJTztBQUNISCx5QkFBS0UsT0FBTCxDQUFhO0FBQ1RDLHFDQUFhO0FBREoscUJBQWI7QUFHSDtBQUNKLGFBVkQ7QUFXSDtBQWZJO0FBWkgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG5cclxuICAgIHJlbGF0aW9uczoge1xyXG4gICAgICAgICcuLi9jb2xsYXBzZS1pdGVtL2luZGV4Jzoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2hpbGQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBuYW1lOiBTdHJpbmcsXHJcbiAgICAgICAgYWNjb3JkaW9uOiBCb29sZWFuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNsaWNrZm4oZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgY29uc3QgYWxsTGlzdCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vY29sbGFwc2UtaXRlbS9pbmRleCcpO1xyXG4gICAgICAgICAgICBhbGxMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubmFtZSA9PT0gaXRlbS5kYXRhLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29udGVudDogJ2ktY29sbGFwc2UtaXRlbS1zaG93LWNvbnRlbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb250ZW50OiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdfQ==