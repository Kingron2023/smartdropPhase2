let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'Mushroom Fruiting Bag Filling Machine',
        tag: 'Agricultural Machineries01',
        imgURL: './images/Agricultural Machines/Mushroom Fruiting Bag Filling Machine/image1.jpg',
        price: 35000,
        inCart: 0
    },
    {
        name: 'Multi-Purpose Shredder',
        tag: 'Agricultural Machineries02',
        imgURL: './images/Agricultural Machines/Multi-Purpose Shredder/image1.jpg',
        price: 38000,
        inCart: 0
    },
    {
        name: 'Multi-Purpose Shredder with Wood Chipper',
        tag: 'Agricultural Machineries03',
        imgURL: './images/Agricultural Machines/Multi-Purpose Shredder with wood Chipper/image1.jpg',
        price: 75000,
        inCart: 0
    },
    {
        name: 'Grass Chopper Machine',
        tag: 'Agricultural Machineries04',
        imgURL: './images/Agricultural Machines/Grass Chopper Machine/image1.jpg',
        price: 29999,
        inCart: 0
    },
    {
        name: 'Banana Trunck Chopper',
        tag: 'Agricultural Machineries05',
        imgURL: './images/Agricultural Machines/Banana Trunk Chopper/agri1.jpg',
        price: 32500,
        inCart: 0
    },
    {
        name: 'Multi-Fiber Stripper',
        tag: 'Agricultural Machineries06',
        imgURL: './images/Agricultural Machines/Multi-fiber Stripper/agri1.jpg',
        price: 32800,
        inCart: 0
    },
    {
        name: 'Village Corn Mill/Rice Mill / Coffee Huller',
        tag: 'Agricultural Machineries07',
        imgURL: './images/Agricultural Machines/Village Corn MillRice Mill Coffee Huller/agri1.jpg',
        price: 31250,
        inCart: 0
    },
    {
        name: 'Bio Shredder Heavy Duty',
        tag: 'Agricultural Machineries08',
        imgURL: './images/Agricultural Machines/Bio Shredder Heavy Duty/agri1.jpg',
        price: 28999,
        inCart: 0
    },
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