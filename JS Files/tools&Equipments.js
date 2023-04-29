let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'INGCO Circular Saw 7 - 1/4',
        tag: 'Tools and Equipments01',
        imgURL: './images/Tools and Equipments/Circular Saw/saw1.jpg',
        price: 2800,
        inCart: 0
    },
    {
        name: 'Cordless Circular Saw',
        tag: 'Tools and Equipments02',
        imgURL: './images/Tools and Equipments/Cordless Saw/cordless1.jpg',
        price: 3475,
        inCart: 0
    },
    {
        name: 'MAKITA Electric Hammer Drill 500W',
        tag: 'Tools and Equipments03',
        imgURL: './images/Tools and Equipments/Drill/drill1.jpg',
        price: 2550,
        inCart: 0
    },
    {
        name: 'Electric Angle Grinder M10 with Free Disc',
        tag: 'Tools and Equipments04',
        imgURL: './images/Tools and Equipments/Grinder/grinder1.jpg',
        price: 950,
        inCart: 0
    },
    {
        name: 'Demolition Jack Hammer',
        tag: 'Tools and Equipments05',
        imgURL: './images/Tools and Equipments/Jack Hammer/jack1.jpg',
        price: 3510,
        inCart: 0
    },
    {
        name: 'Electric Jigsaw with Variable Speed',
        tag: 'Tools and Equipments06',
        imgURL: './images/Tools and Equipments/Jig Saw/jig1.jpg',
        price: 1738,
        inCart: 0
    },
    {
        name: '600W Electric Wood Planer',
        tag: 'Tools and Equipments07',
        imgURL: './images/Tools and Equipments/Planer/planer1.jpg',
        price: 1289,
        inCart: 0
    },
    {
        name: 'Greenfield Drive Socket',
        tag: 'Tools and Equipments08',
        imgURL: './images/Tools and Equipments/Rachet/rachet1.jpg',
        price: 1800,
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