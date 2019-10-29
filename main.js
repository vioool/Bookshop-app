var app = new Vue({
    el: '#main',
    data: {
        allBooks: [],
        allCovers: [],
        search: '',

    },

    created: function () {
        this.getData();
        this.getCovers();
    },

    methods: {
        getData: async function () {
            var data =
                await fetch("https://api.myjson.com/bins/zyv02", {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(json => json)
                .catch(err => console.error(err))

            app.allBooks = data.books;
            console.log(app.allBooks)
            console.log(app.allCovers)
//            this.getCovers();

        },

        getCovers: function () {
            this.allCovers = [];
            for (var i = 0; i < this.allBooks.length; i++) {

                this.allCovers.push(this.allBooks[i].cover);
            }
        }
    },
    
    computed: {
            filteredList: function() {
                return this.allBooks.filter(item => {
                    return item.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },

})
