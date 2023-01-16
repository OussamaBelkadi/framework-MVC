let  cartIconm = document.getElementById('cart-menu');
let  cartm = document.querySelector('.cart-menu');
let  closeCartm = document.getElementById('close-crt');
//Open Cart
cartIconm.onclick = () => {
    cartm.classList.add('active');
}
// //Close Cart
closeCartm.onclick = () =>{
    cartm.classList.remove('active');
}