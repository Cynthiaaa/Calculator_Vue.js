new Vue ({
    el: "#main",
    data: {
       name: "Cynthia", 
       location: "Barcelona",
       website: "https://wikipedia.org",
       websiteTag: '<a href="https://wikipedia.org">Wikipedia Home Page</a>'
    },
    methods:{
        greet: function(time) {
            return 'Good' + ' '+ time + ' '+ this.name;
        }
    }
});