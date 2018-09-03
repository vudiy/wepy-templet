'use strict';

Component({
    externalClasses: ['i-class', 'i-class-alone'],

    properties: {
        count: {
            type: Number,
            value: 0,
            observer: 'finalCount'
        },
        overflowCount: {
            type: Number,
            value: 99
        },
        dot: {
            type: Boolean,
            value: false
        }
    },
    data: {
        finalCount: 0
    },
    methods: {
        finalCount: function finalCount() {
            this.setData({
                finalCount: parseInt(this.data.count) >= parseInt(this.data.overflowCount) ? this.data.overflowCount + '+' : this.data.count
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImV4dGVybmFsQ2xhc3NlcyIsInByb3BlcnRpZXMiLCJjb3VudCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsIm9ic2VydmVyIiwib3ZlcmZsb3dDb3VudCIsImRvdCIsIkJvb2xlYW4iLCJkYXRhIiwiZmluYWxDb3VudCIsIm1ldGhvZHMiLCJzZXREYXRhIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFVBQVU7QUFDTkMscUJBQWlCLENBQUMsU0FBRCxFQUFZLGVBQVosQ0FEWDs7QUFHTkMsZ0JBQVk7QUFDUkMsZUFBTztBQUNIQyxrQkFBTUMsTUFESDtBQUVIQyxtQkFBTyxDQUZKO0FBR0hDLHNCQUFVO0FBSFAsU0FEQztBQU1SQyx1QkFBZTtBQUNYSixrQkFBTUMsTUFESztBQUVYQyxtQkFBTztBQUZJLFNBTlA7QUFVUkcsYUFBSztBQUNETCxrQkFBTU0sT0FETDtBQUVESixtQkFBTztBQUZOO0FBVkcsS0FITjtBQWtCTkssVUFBTTtBQUNGQyxvQkFBWTtBQURWLEtBbEJBO0FBcUJOQyxhQUFTO0FBQ0xELGtCQURLLHdCQUNRO0FBQ1QsaUJBQUtFLE9BQUwsQ0FBYTtBQUNURiw0QkFBWUcsU0FBUyxLQUFLSixJQUFMLENBQVVSLEtBQW5CLEtBQTZCWSxTQUFTLEtBQUtKLElBQUwsQ0FBVUgsYUFBbkIsQ0FBN0IsR0FBb0UsS0FBS0csSUFBTCxDQUFVSCxhQUE5RSxTQUFpRyxLQUFLRyxJQUFMLENBQVVSO0FBRDlHLGFBQWI7QUFHSDtBQUxJO0FBckJILENBQVYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gICAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2ktY2xhc3MnLCAnaS1jbGFzcy1hbG9uZSddLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjb3VudDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ2ZpbmFsQ291bnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdmVyZmxvd0NvdW50OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDk5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb3Q6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZmluYWxDb3VudDogMFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBmaW5hbENvdW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgZmluYWxDb3VudDogcGFyc2VJbnQodGhpcy5kYXRhLmNvdW50KSA+PSBwYXJzZUludCh0aGlzLmRhdGEub3ZlcmZsb3dDb3VudCkgPyBgJHt0aGlzLmRhdGEub3ZlcmZsb3dDb3VudH0rYCA6IHRoaXMuZGF0YS5jb3VudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19