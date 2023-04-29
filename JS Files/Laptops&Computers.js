let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'AFFORDABLE COMPUTER WITH Acer LED Monitor',
        tag: 'Laptops and Computer01',
        imgURL: './images/Laptops and Computers/Acer/acer1.jpg',
        price: 20000,
        inCart: 0
    },
    {
        name: 'ASUS ROG STRIX CPU AMD R7-5800 GTX 1650',
        tag: 'Laptops and Computer02',
        imgURL: './images/Laptops and Computers/Asus/asus1.jpg',
        price: 49500,
        inCart: 0
    },
    {
        name: 'Dell OptiPlex Intel Core i5-4590 8GB RAM, 120gb SSD',
        tag: 'Laptops and Computer03',
        imgURL: './images/Laptops and Computers/Dell/dell1.jpg',
        price: 4450,
        inCart: 0
    },
    {
        name: 'HP Desktop Unit ProDesk Desktop Unit',
        tag: 'Laptops and Computer04',
        imgURL: './images/Laptops and Computers/Hp/hp1.jpg',
        price: 3100,
        inCart: 0
    },
    {
        name: 'Desktop Computer Set Lenovo with Monitor',
        tag: 'Laptops and Computer05',
        imgURL: './images/Laptops and Computers/Lenovo/lenovo1.jpg',
        price: 3517,
        inCart: 0
    },
    {
        name: 'Apple Office Design game Home Desktop Computer',
        tag: 'Laptops and Computer06',
        imgURL: './images/Laptops and Computers/Mac/mac1.jpg',
        price: 63500,
        inCart: 0
    },
    {
        name: 'Msi Mpg Velox 100R - Supports ATX / PC Case',
        tag: 'Laptops and Computer07',
        imgURL: './images/Laptops and Computers/Msi/msi1.jpg',
        price: 5950,
        inCart: 0
    },
    {
        name: 'Samsung Chromebook 4 Platinum Gray',
        tag: 'Laptops and Computer08',
        imgURL: './images/Laptops and Computers/Samsung/samsung1.jpg',
        price: 8295,
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