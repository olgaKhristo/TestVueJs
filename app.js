const app = Vue.createApp({
    //template property(data,fanctions)
    //template: '<h2>Im a template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The final empier2',
            author: 'brender smith',
            age: 45,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
        //changeTitle(title) {
           // this.title = 'the game og'
          // this.title = title

        }

    //}

})
app.mount('#app')