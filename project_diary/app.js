new Vue({
    el: '#component',
    data: {
        age: 25
    },
    methods: {
        greet: function(time){
            return 'Good' + time + this.name;
        }
    },
});