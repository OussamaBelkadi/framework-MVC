// Menu
let  cartIconm = document.getElementById('cart-menu');
let  cartm = document.querySelector('.cart-menu');
let  closeCartm = document.getElementById('close-crt');
//-------------Open Menu
cartIconm.onclick = () => {
    cartm.classList.add('active');
}
//------------Close Menu
closeCartm.onclick = () =>{
    cartm.classList.remove('active');
}
//--------icon cart
//------------------Cart
let cartIcon = document.getElementById('cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.getElementById('close-cart');
//--------------------Open Cart
cartIcon.onclick = () => {
    cart.classList.add('active');
}
//--------------------Close Cart
closeCart.onclick = () =>{
    cart.classList.remove('active');
}
//----------------Filter
let list = document.querySelectorAll('.list');
let itembox = document.querySelectorAll('.itembox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener("click", () => {
        for (let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        list[i].classList.add('active');
        let dataFilter = list[i].getAttribute('data-filter');
        
        for(let k=0; k < itembox.length; k++){
            itembox[k].classList.remove('active');
            itembox[k].classList.add('hide');
    
            if(itembox[k].getAttribute('data-item')== dataFilter || dataFilter =="all"){
                itembox[k].classList.add('actived');
                itembox[k].classList.remove('hide');
            }
        }
    });
}
//--------------------Add to Cart
let addItemId=0;
function addCartClicked(item){
    addItemId += 1;
    let cartItems = document.getElementById('content');
    let selectedItem = document.createElement('div');
    selectedItem.setAttribute('id',addItemId);
    selectedItem.classList.add("cart-box");
    cartItems.append(selectedItem);
    let img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    img.classList.add("cart-img");
    selectedItem.append(img);
    let detailbox = document.createElement('div');
    detailbox.classList.add('detail-box');
    selectedItem.append(detailbox);
    let titlepr = document.createElement('div');
    titlepr.innerText = item.children[1].innerText;
    titlepr.classList.add('cart-product-title');  
    detailbox.append(titlepr);
    let pricepr = document.createElement('div');
    pricepr.innerText = item.children[2].innerText;
    pricepr.classList.add('cart-price');
    detailbox.append(pricepr);
    cartIcon.style.overflowY = "scroll";
    updatetotal()
}
//------------Updatetotal
function updatetotal(){
    let cartBoxes = document.getElementsByClassName("cart-box");
    let total = 0;
        for(let i = 0; i < cartBoxes.length; i++){
            
            let priceElement = document.getElementsByClassName("cart-price")[i];
            let price = parseFloat(priceElement.innerText.replace("$",""));  
            total = total + price;
            let ter = document.getElementsByClassName("total-price")[0];
            ter.innerText = "$" + total;
        }
    }      
//---------------btn buy
let btnbuy = document.getElementById("buy-now");
let produit = document.getElementById("content");
let dialog = document.querySelector('dialog');
let cartpr = document.querySelector('.total-price')
btnbuy.addEventListener("click", () =>{
        produit.innerHTML=""
        dialog.showModal();
        cartpr.innerText = '$' + 0;
        setTimeout(()=>{dialog.close()}, 3000);
});