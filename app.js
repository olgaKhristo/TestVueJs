const app = Vue.createApp({
    //template property(data,fanctions)
    //template: '<h2>Im a template</h2>'
    data() {
        return {
            url: 'https://github.com/olgaKhristo',
            showBooks: true,
            books:[
                { title: 'The final empier2', author: 'brender smith' , img: '/img/pexels-photo-301920.webp', isFav: true},
                { title: 'The fiii', author: 'brender smith' , img: '/img/pexels-photo-694740.jpeg', isFav: false},
                { title: 'The final empier33', author: 'brender smith' },
                { title: 'The fooooooo', author: 'brender smith' }
            ]
            
           
            
            //x: 0,
            //y: 0
        }
    },

    computed:{
        filteredBooks(){
            return this.books.filter((book)=>book.isFav)
        }
    },

    methods: {
        
        toggleFev(book){
            book.isFav = !book.isFav

        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY

        }
        //changeTitle(title) {
           // this.title = 'the game og'
          // this.title = title

        }

    //}

})
app.mount('#app')