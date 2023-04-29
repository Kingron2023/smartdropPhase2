let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'Earbuds T20 Bluetooth Wireless Airbuds',
        tag: 'Mobile and Gadgets01',
        imgURL: './images/Mobile and Gadgets/Airbuds/airbuds1.jpg',
        price: 599,
        inCart: 0
    },
    {
        name: 'Gaming Headset Noise Cancelling for PC and Laptop',
        tag: 'Mobile and Gadgets02',
        imgURL: './images/Mobile and Gadgets/Airpods/airpod1.jpg',
        price: 500,
        inCart: 0
    },
    {
        name: 'Apple Watch Series 8 GPS Sport Band',
        tag: 'Mobile and Gadgets03',
        imgURL: './images/Mobile and Gadgets/Apple watch/watch1.jpg',
        price: 25890,
        inCart: 0
    },
    {
        name: 'NiTHO DRIVE PRO V16 Gaming Racing Wheel car',
        tag: 'Mobile and Gadgets04',
        imgURL: './images/Mobile and Gadgets/Gaming console/part1.jpg',
        price: 7399,
        inCart: 0
    },
    {
        name: 'Apple iPhone 14 Pro Max Brand New',
        tag: 'Mobile and Gadgets05',
        imgURL: './images/Mobile and Gadgets/iPhone/iphone1.jpg',
        price: 73890,
        inCart: 0
    },
    {
        name: 'Portable Wireless Bluetooth Karaoke Speaker',
        tag: 'Mobile and Gadgets06',
        imgURL: './images/Mobile and Gadgets/Portable devices/part1.jpg',
        price: 800,
        inCart: 0
    },
    {
        name: 'Samsung Galaxy S23 Ultra (S9180) 256GB - (HK)',
        tag: 'Mobile and Gadgets07',
        imgURL: './images/Mobile and Gadgets/Samsung Galaxy/galaxy1.jpg',
        price: 63250,
        inCart: 0
    },
    {
        name: 'Samsung Galaxy Watch5 Bluetooth (40mm)',
        tag: 'Mobile and Gadgets08',
        imgURL: './images/Mobile and Gadgets/Smart watch/smart1.jpg',
        price: 13592,
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