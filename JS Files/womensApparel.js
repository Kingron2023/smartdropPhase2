let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'Korean Blazer for Women',
        tag: 'Womens Apparel01',
        imgURL: './images/Womens Apparel/Coat/coat1.jpg',
        price: 600,
        inCart: 0
    },
    {
        name: 'Women Casual Formal Plus Size Dress',
        tag: 'Womens Apparel02',
        imgURL: './images/Womens Apparel/Dress/dress1.jpg',
        price: 575,
        inCart: 0
    },
    {
        name: 'Banquet Long Elegant',
        tag: 'Womens Apparel03',
        imgURL: './images/Womens Apparel/Gown/gown1.jpg',
        price: 840,
        inCart: 0
    },
    {
        name: 'High Waist pants Joni Jeans Skinny',
        tag: 'Womens Apparel04',
        imgURL: './images/Womens Apparel/Jeans/jeans1.jpg',
        price: 350,
        inCart: 0
    },
    {
        name: 'Leggings Plain Cotton',
        tag: 'Womens Apparel05',
        imgURL: './images/Womens Apparel/Leggings/leggings1.jpg',
        price: 310,
        inCart: 0
    },
    {
        name: 'Sweatshirt Longsleeves Jackets',
        tag: 'Womens Apparel06',
        imgURL: './images/Womens Apparel/Longsleeves/longsleeve1.jpg',
        price: 238,
        inCart: 0
    },
    {
        name: 'Korean Fashion Womens High Waist Skirt',
        tag: 'Womens Apparel07',
        imgURL: './images/Womens Apparel/Skirt/skirt1.jpg',
        price: 346,
        inCart: 0
    },
    {
        name: 'Korean TShirt Cotton candy',
        tag: 'Womens Apparel08',
        imgURL: './images/Womens Apparel/T-Shirt/shirt1.jpg',
        price: 200,
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