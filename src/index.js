let search = document.querySelector('.search-box');
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductsHTML = document.querySelector('.listProduct')

let listProducts = [];

// document.querySelector('#search-icon').onclick = () => {
//     search.classList.toggle('active')
//     navbar.classList.remove('active')
// }

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active')
    search.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.toggle('active')
    search.classList.remove('active')
}


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
});

const addDataToHTML = () => {
    listProductsHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('box');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h3>${product.name}</h3>
                <div class="content">
                    <div class="price"><span>$${product.price}</span></div>                    
                    <button class="addCart">Add To Cart</button>
                </div>`;
                listProductsHTML.appendChild(newProduct);
        })
    }
}

listProductsHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        alert(product_id);
    }
})

const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data
        addDataToHTML();
    })
}
initApp();