let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'Personal Three Door Refrigerator',
        tag: 'Home and Living01',
        imgURL: './images/Home and Living/Appliances/appliances1.jpg',
        price: 4936,
        inCart: 0
    },
    {
        name: 'Palermo Queen Size Bedframe',
        tag: 'Home and Living02',
        imgURL: './images/Home and Living/Bedroom/image1.jpg',
        price: 19990,
        inCart: 0
    },
    {
        name: 'Solid Wood Dining Chair',
        tag: 'Home and Living03',
        imgURL: './images/Home and Living/Dining/image1.jpg',
        price: 359,
        inCart: 0
    },
    {
        name: 'Sofa Bed for Living Room',
        tag: 'Home and Living04',
        imgURL: './images/Home and Living/Furniture/furniture1.jpg',
        price: 6490,
        inCart: 0
    },
    {
        name: 'Living Room Sala Set',
        tag: 'Home and Living05',
        imgURL: './images/Home and Living/Home Decors/decor1.jpg',
        price: 35590,
        inCart: 0
    },
    {
        name: 'Stainless Steel Stock Pot',
        tag: 'Home and Living06',
        imgURL: './images/Home and Living/Kitchen ware/utensil1.jpg',
        price: 999,
        inCart: 0
    },
    {
        name: 'Fully Automatic Top Load washing Machine',
        tag: 'Home and Living07',
        imgURL: './images/Home and Living/Laundry/laundry1.jpg',
        price: 11614,
        inCart: 0
    },
    {
        name: 'Plastic Drawers Organizer Storage',
        tag: 'Home and Living08',
        imgURL: './images/Home and Living/Pantry/pantry1.jpg',
        price: 655,
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