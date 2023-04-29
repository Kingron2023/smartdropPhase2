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
        price: 75000,
        inCart: 0
    },
    {
        name: 'Grass Chopper Machine',
        tag: 'Agricultural Machineries04',
        price: 29999,
        inCart: 0
    },
    {
        name: 'Banana Trunck Chopper',
        tag: 'Agricultural Machineries05',
        price: 32500,
        inCart: 0
    },
    {
        name: 'Multi-Fiber Stripper',
        tag: 'Agricultural Machineries06',
        price: 32800,
        inCart: 0
    },
    {
        name: 'Village Corn Mill/Rice Mill / Coffee Huller',
        tag: 'Agricultural Machineries07',
        price: 31250,
        inCart: 0
    },
    {
        name: 'Bio Shredder Heavy Duty',
        tag: 'Agricultural Machineries08',
        price: 28999,
        inCart: 0
    },
    {
        name: 'AFFORDABLE COMPUTER WITH Acer LED Monitor',
        tag: 'Laptops and Computer01',
        price: 20000,
        inCart: 0
    },
    {
        name: 'ASUS ROG STRIX CPU AMD R7-5800 GTX 1650',
        tag: 'Laptops and Computer02',
        price: 49500,
        inCart: 0
    },
    {
        name: 'Dell OptiPlex Intel Core i5-4590 8GB RAM, 120gb SSD',
        tag: 'Laptops and Computer03',
        price: 4450,
        inCart: 0
    },
    {
        name: 'HP Desktop Unit ProDesk Desktop Unit',
        tag: 'Laptops and Computer04',
        price: 3100,
        inCart: 0
    },
    {
        name: 'Desktop Computer Set Lenovo with Monitor',
        tag: 'Laptops and Computer05',
        price: 3517,
        inCart: 0
    },
    {
        name: 'Apple Office Design game Home Desktop Computer',
        tag: 'Laptops and Computer06',
        price: 63500,
        inCart: 0
    },
    {
        name: 'Msi Mpg Velox 100R - Supports ATX / PC Case',
        tag: 'Laptops and Computer07',
        price: 5950,
        inCart: 0
    },
    {
        name: 'Samsung Chromebook 4 Platinum Gray',
        tag: 'Laptops and Computer08',
        price: 8295,
        inCart: 0
    },
    {
        name: 'INGCO Circular Saw 7 - 1/4',
        tag: 'Tools and Equipments01',
        price: 2800,
        inCart: 0
    },
    {
        name: 'Cordless Circular Saw',
        tag: 'Tools and Equipments02',
        price: 3475,
        inCart: 0
    },
    {
        name: 'MAKITA Electric Hammer Drill 500W',
        tag: 'Tools and Equipments03',
        price: 2550,
        inCart: 0
    },
    {
        name: 'Electric Angle Grinder M10 with Free Disc',
        tag: 'Tools and Equipments04',
        price: 950,
        inCart: 0
    },
    {
        name: 'Demolition Jack Hammer',
        tag: 'Tools and Equipments05',
        price: 3510,
        inCart: 0
    },
    {
        name: 'Electric Jigsaw with Variable Speed',
        tag: 'Tools and Equipments06',
        price: 1738,
        inCart: 0
    },
    {
        name: '600W Electric Wood Planer',
        tag: 'Tools and Equipments07',
        price: 1289,
        inCart: 0
    },
    {
        name: 'Greenfield Drive Socket',
        tag: 'Tools and Equipments08',
        price: 1800,
        inCart: 0
    },
    {
        name: 'Earbuds T20 Bluetooth Wireless Airbuds',
        tag: 'Mobile and Gadgets01',
        price: 599,
        inCart: 0
    },
    {
        name: 'Gaming Headset Noise Cancelling for PC and Laptop',
        tag: 'Mobile and Gadgets02',
        price: 500,
        inCart: 0
    },
    {
        name: 'Apple Watch Series 8 GPS Sport Band',
        tag: 'Mobile and Gadgets03',
        price: 25890,
        inCart: 0
    },
    {
        name: 'NiTHO DRIVE PRO V16 Gaming Racing Wheel car',
        tag: 'Mobile and Gadgets04',
        price: 7399,
        inCart: 0
    },
    {
        name: 'Apple iPhone 14 Pro Max Brand New',
        tag: 'Mobile and Gadgets05',
        price: 73890,
        inCart: 0
    },
    {
        name: 'Portable Wireless Bluetooth Karaoke Speaker',
        tag: 'Mobile and Gadgets06',
        price: 800,
        inCart: 0
    },
    {
        name: 'Samsung Galaxy S23 Ultra (S9180) 256GB - (HK)',
        tag: 'Mobile and Gadgets07',
        price: 63250,
        inCart: 0
    },
    {
        name: 'Samsung Galaxy Watch5 Bluetooth (40mm)',
        tag: 'Mobile and Gadgets08',
        price: 13592,
        inCart: 0
    },
    {
        name: 'Personal Three Door Refrigerator',
        tag: 'Home and Living01',
        price: 4936,
        inCart: 0
    },
    {
        name: 'Palermo Queen Size Bedframe',
        tag: 'Home and Living02',
        price: 19990,
        inCart: 0
    },
    {
        name: 'Solid Wood Dining Chair',
        tag: 'Home and Living03',
        price: 359,
        inCart: 0
    },
    {
        name: 'Sofa Bed for Living Room',
        tag: 'Home and Living04',
        price: 6490,
        inCart: 0
    },
    {
        name: 'Living Room Sala Set',
        tag: 'Home and Living05',
        price: 35590,
        inCart: 0
    },
    {
        name: 'Stainless Steel Stock Pot',
        tag: 'Home and Living06',
        price: 999,
        inCart: 0
    },
    {
        name: 'Fully Automatic Top Load washing Machine',
        tag: 'Home and Living07',
        price: 11614,
        inCart: 0
    },
    {
        name: 'Plastic Drawers Organizer Storage',
        tag: 'Home and Living08',
        price: 655,
        inCart: 0
    },
    {
        name: 'Korean Blazer for Women',
        tag: 'Womens Apparel01',
        price: 600,
        inCart: 0
    },
    {
        name: 'Women Casual Formal Plus Size Dress',
        tag: 'Womens Apparel02',
        price: 575,
        inCart: 0
    },
    {
        name: 'Banquet Long Elegant',
        tag: 'Womens Apparel03',
        price: 840,
        inCart: 0
    },
    {
        name: 'High Waist pants Joni Jeans Skinny',
        tag: 'Womens Apparel04',
        price: 350,
        inCart: 0
    },
    {
        name: 'Leggings Plain Cotton',
        tag: 'Womens Apparel05',
        price: 310,
        inCart: 0
    },
    {
        name: 'Sweatshirt Longsleeves Jackets',
        tag: 'Womens Apparel06',
        price: 238,
        inCart: 0
    },
    {
        name: 'Korean Fashion Womens High Waist Skirt',
        tag: 'Womens Apparel07',
        price: 346,
        inCart: 0
    },
    {
        name: 'Korean TShirt Cotton candy',
        tag: 'Womens Apparel08',
        price: 200,
        inCart: 0
    },
    {
        name: 'New York Yankees Vintage 100% Good Quality',
        tag: 'Mens Apparel01',
        price: 450,
        inCart: 0
    },
    {
        name: 'Unisex Jacket for Men Made in Korea',
        tag: 'Mens Apparel02',
        price: 1500,
        inCart: 0
    },
    {
        name: "Men's Pants High Quality Strechable Skinny Jeans",
        tag: 'Mens Apparel03',
        price: 450,
        inCart: 0
    },
    {
        name: "Classic Korean Men's Plain Casual Longsleeve",
        tag: 'Mens Apparel04',
        price: 300,
        inCart: 0
    },
    {
        name: 'FOX Gear Set Motocross Jersey Pants MX Combo',
        tag: 'Mens Apparel05',
        price: 2500,
        inCart: 0
    },
    {
        name: 'Boots Genuine Classic High Top Boots Unisex',
        tag: 'Mens Apparel06',
        price: 2800,
        inCart: 0
    },
    {
        name: 'Fox Racing Mens Brdshorts High Quality',
        tag: 'Mens Apparel07',
        price: 1250,
        inCart: 0
    },
    {
        name: "AMERICAN EAGLE Kellogg's Tony The Tiger T-shirt",
        tag: 'Mens Apparel08',
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