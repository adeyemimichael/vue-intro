const app = Vue.createApp({
  data() {
    return {
      cart:0 ,
      message: `Sellar `,
    description :'This is a website that i am replicating for a ecommerce website ',
    image: "./assets/vmSocks-green.jpeg",
    link: `https://vuejs.org/guide/quick-start.html#using-vue-from-cdn`,
    inStock:true,
    onSale:false,
    details:["$50, black socks", "$30 , white socks", "$20, blue socks"],
    variants:[
      {
        id:2223, color:'blue', image:'./assets/vmSocks-green.jpeg',quantity:60
      },
      {
        id:1234, color:'white',image:'./assets/vuw.jpg', quantity:10
      }
    ],


    
  }
},
methods: {
  addToCart(){
    this.cart += 1 
  },
  removeCart (){
this.cart -= 1
  },
  updateImage(variantImage){
    this.image = variantImage
  }
}
})

app.mount('#app')