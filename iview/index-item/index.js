'use strict';

Component({
    externalClasses: ['i-class'],
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    relations: {
        '../index/index': {
            type: 'parent'
        }
    },
    data: {
        top: 0,
        height: 0,
        currentName: ''
    },
    methods: {
        updateDataChange: function updateDataChange() {
            var _this = this;

            var className = '.i-index-item';
            var query = wx.createSelectorQuery().in(this);
            query.select(className).boundingClientRect(function (res) {
                _this.setData({
                    top: res.top,
                    height: res.height,
                    currentName: _this.data.name
                });
            }).exec();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwicmVsYXRpb25zIiwiZGF0YSIsInRvcCIsImhlaWdodCIsImN1cnJlbnROYW1lIiwibWV0aG9kcyIsInVwZGF0ZURhdGFDaGFuZ2UiLCJjbGFzc05hbWUiLCJxdWVyeSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVzIiwic2V0RGF0YSIsImV4ZWMiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYO0FBRU5DLGdCQUFhO0FBQ1RDLGNBQU87QUFDSEMsa0JBQU9DLE1BREo7QUFFSEMsbUJBQVE7QUFGTDtBQURFLEtBRlA7QUFRTkMsZUFBWTtBQUNSLDBCQUFtQjtBQUNmSCxrQkFBTztBQURRO0FBRFgsS0FSTjtBQWFOSSxVQUFPO0FBQ0hDLGFBQU0sQ0FESDtBQUVIQyxnQkFBUyxDQUZOO0FBR0hDLHFCQUFjO0FBSFgsS0FiRDtBQWtCTkMsYUFBUztBQUNMQyx3QkFESyw4QkFDYztBQUFBOztBQUNmLGdCQUFNQyxZQUFZLGVBQWxCO0FBQ0EsZ0JBQU1DLFFBQVFDLEdBQUdDLG1CQUFILEdBQXlCQyxFQUF6QixDQUE0QixJQUE1QixDQUFkO0FBQ0FILGtCQUFNSSxNQUFOLENBQWNMLFNBQWQsRUFBMEJNLGtCQUExQixDQUE2QyxVQUFDQyxHQUFELEVBQU87QUFDNUMsc0JBQUtDLE9BQUwsQ0FBYTtBQUNUYix5QkFBTVksSUFBSVosR0FERDtBQUVUQyw0QkFBU1csSUFBSVgsTUFGSjtBQUdUQyxpQ0FBYyxNQUFLSCxJQUFMLENBQVVMO0FBSGYsaUJBQWI7QUFLUCxhQU5ELEVBTUdvQixJQU5IO0FBT0g7QUFYSTtBQWxCSCxDQUFWIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydpLWNsYXNzJ10sXHJcbiAgICBwcm9wZXJ0aWVzIDoge1xyXG4gICAgICAgIG5hbWUgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlIDogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVsYXRpb25zIDoge1xyXG4gICAgICAgICcuLi9pbmRleC9pbmRleCcgOiB7XHJcbiAgICAgICAgICAgIHR5cGUgOiAncGFyZW50J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhIDoge1xyXG4gICAgICAgIHRvcCA6IDAsXHJcbiAgICAgICAgaGVpZ2h0IDogMCxcclxuICAgICAgICBjdXJyZW50TmFtZSA6ICcnXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZURhdGFDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9ICcuaS1pbmRleC1pdGVtJztcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhpcyk7XHJcbiAgICAgICAgICAgIHF1ZXJ5LnNlbGVjdCggY2xhc3NOYW1lICkuYm91bmRpbmdDbGllbnRSZWN0KChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wIDogcmVzLnRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogcmVzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5hbWUgOiB0aGlzLmRhdGEubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pLmV4ZWMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiXX0=