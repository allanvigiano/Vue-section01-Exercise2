new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function () {
            alert('Alert');
        },
        store: function (event) {

                this.value = event.target.value;

        }
    }
});