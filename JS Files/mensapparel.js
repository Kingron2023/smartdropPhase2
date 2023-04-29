let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'New York Yankees Vintage 100% Good Quality',
        tag: 'Mens Apparel01',
        imgURL: './images/Mens Apparel/Head Cup/cup1.jpg',
        price: 450,
        inCart: 0
    },
    {
        name: 'Unisex Jacket for Men Made in Korea',
        tag: 'Mens Apparel02',
        imgURL: './images/Mens Apparel/Jackets/jacket1.jpg',
        price: 1500,
        inCart: 0
    },
    {
        name: "Men's Pants High Quality Strechable Skinny Jeans",
        tag: 'Mens Apparel03',
        imgURL: './images/Mens Apparel/Jeans/pants1.jpg',
        price: 450,
        inCart: 0
    },
    {
        name: "Classic Korean Men's Plain Casual Longsleeve",
        tag: 'Mens Apparel04',
        imgURL: './images/Mens Apparel/Longsleeves/longsleeve1.jpg',
        price: 300,
        inCart: 0
    },
    {
        name: 'FOX Gear Set Motocross Jersey Pants MX Combo',
        tag: 'Mens Apparel05',
        imgURL: './images/Mens Apparel/Riding Jersey/jersey1.jpg',
        price: 2500,
        inCart: 0
    },
    {
        name: 'Boots Genuine Classic High Top Boots Unisex',
        tag: 'Mens Apparel06',
        imgURL: './images/Mens Apparel/Shoes/shoes1.jpg',
        price: 2800,
        inCart: 0
    },
    {
        name: 'Fox Racing Mens Brdshorts High Quality',
        tag: 'Mens Apparel07',
        imgURL: './images/Mens Apparel/Shorts/short1.jpg',
        price: 1250,
        inCart: 0
    },
    {
        name: "AMERICAN EAGLE Kellogg's Tony The Tiger T-shirt",
        tag: 'Mens Apparel08',
        imgURL: './images/Mens Apparel/T-Shirt/shirt1.jpg',
        price: 699,
        inCart: 0
    }
]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
    console.log("My Loop");        
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.getElementById("myCart").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    // console.log("The product clicke is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.getElementById("myCart").textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.getElementById("myCart").textContent = 1;
    }  
    setItems(product); 
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }   
}


function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.getElementById("cartproducts");
    let cartCost = localStorage.getItem('totalCost');


    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="${item.imgURL}">
                <span>${item.name}</span> 
            </div>
            <div class="price">₱${item.price}.00</div>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
                ₱${item.inCart * item.price}.00
            </div>
            `;

            
        });
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    ₱${cartCost}.00        
                </h4>
            `;
        
    }
}

onLoadCartNumbers();
displayCart();