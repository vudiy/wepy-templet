'use strict';

Component({
    externalClasses: ['i-class'],

    relations: {
        '../tab-bar/index': {
            type: 'parent'
        }
    },

    properties: {
        icon: {
            type: String,
            value: ''
        },
        currentIcon: {
            type: String,
            value: ''
        },
        img: {
            type: String,
            value: ''
        },
        currentImg: {
            type: String,
            value: ''
        },
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
        currentColor: ''
    },

    methods: {
        changeCurrent: function changeCurrent(current) {
            this.setData({ current: current });
        },
        changeCurrentColor: function changeCurrentColor(currentColor) {
            this.setData({ currentColor: currentColor });
        },
        handleClickItem: function handleClickItem() {
            var parent = this.getRelationNodes('../tab-bar/index')[0];
            parent.emitEvent(this.data.key);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInJlbGF0aW9ucyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwiaWNvbiIsIlN0cmluZyIsInZhbHVlIiwiY3VycmVudEljb24iLCJpbWciLCJjdXJyZW50SW1nIiwia2V5IiwidGl0bGUiLCJkb3QiLCJCb29sZWFuIiwiY291bnQiLCJOdW1iZXIiLCJkYXRhIiwiY3VycmVudCIsImN1cnJlbnRDb2xvciIsIm1ldGhvZHMiLCJjaGFuZ2VDdXJyZW50Iiwic2V0RGF0YSIsImNoYW5nZUN1cnJlbnRDb2xvciIsImhhbmRsZUNsaWNrSXRlbSIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJlbWl0RXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxDQURYOztBQUdOQyxlQUFXO0FBQ1AsNEJBQW9CO0FBQ2hCQyxrQkFBTTtBQURVO0FBRGIsS0FITDs7QUFTTkMsZ0JBQVk7QUFDUkMsY0FBTTtBQUNGRixrQkFBTUcsTUFESjtBQUVGQyxtQkFBTztBQUZMLFNBREU7QUFLUkMscUJBQWE7QUFDVEwsa0JBQU1HLE1BREc7QUFFVEMsbUJBQU87QUFGRSxTQUxMO0FBU1JFLGFBQUs7QUFDRE4sa0JBQU1HLE1BREw7QUFFREMsbUJBQU87QUFGTixTQVRHO0FBYVJHLG9CQUFZO0FBQ1JQLGtCQUFNRyxNQURFO0FBRVJDLG1CQUFPO0FBRkMsU0FiSjtBQWlCUkksYUFBSztBQUNEUixrQkFBTUcsTUFETDtBQUVEQyxtQkFBTztBQUZOLFNBakJHO0FBcUJSSyxlQUFPO0FBQ0hULGtCQUFNRyxNQURIO0FBRUhDLG1CQUFPO0FBRkosU0FyQkM7QUF5QlJNLGFBQUs7QUFDRFYsa0JBQU1XLE9BREw7QUFFRFAsbUJBQU87QUFGTixTQXpCRztBQTZCUlEsZUFBTztBQUNIWixrQkFBTWEsTUFESDtBQUVIVCxtQkFBTztBQUZKO0FBN0JDLEtBVE47O0FBNENOVSxVQUFNO0FBQ0ZDLGlCQUFTLEtBRFA7QUFFRkMsc0JBQWM7QUFGWixLQTVDQTs7QUFpRE5DLGFBQVM7QUFDTEMscUJBREsseUJBQ1VILE9BRFYsRUFDbUI7QUFDcEIsaUJBQUtJLE9BQUwsQ0FBYSxFQUFFSixnQkFBRixFQUFiO0FBQ0gsU0FISTtBQUlMSywwQkFKSyw4QkFJZUosWUFKZixFQUk2QjtBQUM5QixpQkFBS0csT0FBTCxDQUFhLEVBQUVILDBCQUFGLEVBQWI7QUFDSCxTQU5JO0FBT0xLLHVCQVBLLDZCQU9jO0FBQ2YsZ0JBQU1DLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0Isa0JBQXRCLEVBQTBDLENBQTFDLENBQWY7QUFDQUQsbUJBQU9FLFNBQVAsQ0FBaUIsS0FBS1YsSUFBTCxDQUFVTixHQUEzQjtBQUNIO0FBVkk7QUFqREgsQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgICBleHRlcm5hbENsYXNzZXM6IFsnaS1jbGFzcyddLFxyXG5cclxuICAgIHJlbGF0aW9uczoge1xyXG4gICAgICAgICcuLi90YWItYmFyL2luZGV4Jzoge1xyXG4gICAgICAgICAgICB0eXBlOiAncGFyZW50J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbnRJY29uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbnRJbWc6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRvdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvdW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBjdXJyZW50OiBmYWxzZSxcclxuICAgICAgICBjdXJyZW50Q29sb3I6ICcnXHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjaGFuZ2VDdXJyZW50IChjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGN1cnJlbnQgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2VDdXJyZW50Q29sb3IgKGN1cnJlbnRDb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjdXJyZW50Q29sb3IgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVDbGlja0l0ZW0gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYi1iYXIvaW5kZXgnKVswXTtcclxuICAgICAgICAgICAgcGFyZW50LmVtaXRFdmVudCh0aGlzLmRhdGEua2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=