let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'Mushroom Fruiting Bag Filling Machine',
        tag: 'Agricultural Machineries01',
        imgURL: './images/Agricultural Machines/Mushroom Fruiting Bag Filling Machine/image1.jpg',
        price: 35000,
        inCart: 0,
        id: 01
    },
    {
        name: 'Multi-Purpose Shredder',
        tag: 'Agricultural Machineries02',
        imgURL: './images/Agricultural Machines/Multi-Purpose Shredder/image1.jpg',
        price: 38000,
        inCart: 0,
        id: 02
    },
    {
        name: 'Multi-Purpose Shredder with Wood Chipper',
        tag: 'Agricultural Machineries03',
        imgURL: './images/Agricultural Machines/Multi-Purpose Shredder with wood Chipper/image1.jpg',
        price: 75000,
        inCart: 0,
        id: 03
    },
    {
        name: 'Grass Chopper Machine',
        tag: 'Agricultural Machineries04',
        imgURL: './images/Agricultural Machines/Grass Chopper Machine/image1.jpg',
        price: 29999,
        inCart: 0,
        id: 04
    },
    {
        name: 'Banana Trunck Chopper',
        tag: 'Agricultural Machineries05',
        imgURL: './images/Agricultural Machines/Banana Trunk Chopper/agri1.jpg',
        price: 32500,
        inCart: 0,
        id: 05
    },
    {
        name: 'Multi-Fiber Stripper',
        tag: 'Agricultural Machineries06',
        imgURL: './images/Agricultural Machines/Multi-fiber Stripper/agri1.jpg',
        price: 32800,
        inCart: 0,
        id: 06
    },
    {
        name: 'Village Corn Mill/Rice Mill / Coffee Huller',
        tag: 'Agricultural Machineries07',
        imgURL: './images/Agricultural Machines/Village Corn MillRice Mill Coffee Huller/agri1.jpg',
        price: 31250,
        inCart: 0,
        id: 07
    },
    {
        name: 'Bio Shredder Heavy Duty',
        tag: 'Agricultural Machineries08',
        imgURL: './images/Agricultural Machines/Bio Shredder Heavy Duty/agri1.jpg',
        price: 28999,
        inCart: 0,
        id: 08
    },
    {
        name: 'AFFORDABLE COMPUTER WITH Acer LED Monitor',
        tag: 'Laptops and Computer01',
        imgURL: './images/Laptops and Computers/Acer/acer1.jpg',
        price: 20000,
        inCart: 0,
        id: 09
    },
    {
        name: 'ASUS ROG STRIX CPU AMD R7-5800 GTX 1650',
        tag: 'Laptops and Computer02',
        imgURL: './images/Laptops and Computers/Asus/asus1.jpg',
        price: 49500,
        inCart: 0,
        id: 10
    },
    {
        name: 'Dell OptiPlex Intel Core i5-4590 8GB RAM, 120gb SSD',
        tag: 'Laptops and Computer03',
        imgURL: './images/Laptops and Computers/Dell/dell1.jpg',
        price: 4450,
        inCart: 0,
        id: 11
    },
    {
        name: 'HP Desktop Unit ProDesk Desktop Unit',
        tag: 'Laptops and Computer04',
        imgURL: './images/Laptops and Computers/Hp/hp1.jpg',
        price: 3100,
        inCart: 0,
        id: 12
    },
    {
        name: 'Desktop Computer Set Lenovo with Monitor',
        tag: 'Laptops and Computer05',
        imgURL: './images/Laptops and Computers/Lenovo/lenovo1.jpg',
        price: 3517,
        inCart: 0,
        id: 13
    },
    {
        name: 'Apple Office Design game Home Desktop Computer',
        tag: 'Laptops and Computer06',
        imgURL: './images/Laptops and Computers/Mac/mac1.jpg',
        price: 63500,
        inCart: 0,
        id: 14
    },
    {
        name: 'Msi Mpg Velox 100R - Supports ATX / PC Case',
        tag: 'Laptops and Computer07',
        imgURL: './images/Laptops and Computers/Msi/msi1.jpg',
        price: 5950,
        inCart: 0,
        id: 15
    },
    {
        name: 'Samsung Chromebook 4 Platinum Gray',
        tag: 'Laptops and Computer08',
        imgURL: './images/Laptops and Computers/Samsung/samsung1.jpg',
        price: 8295,
        inCart: 0,
        id: 16
    },
    {
        name: 'INGCO Circular Saw 7 - 1/4',
        tag: 'Tools and Equipments01',
        imgURL: './images/Tools and Equipments/Circular Saw/saw1.jpg',
        price: 2800,
        inCart: 0,
        id: 17
    },
    {
        name: 'Cordless Circular Saw',
        tag: 'Tools and Equipments02',
        imgURL: './images/Tools and Equipments/Cordless Saw/cordless1.jpg',
        price: 3475,
        inCart: 0,
        id: 18
    },
    {
        name: 'MAKITA Electric Hammer Drill 500W',
        tag: 'Tools and Equipments03',
        imgURL: './images/Tools and Equipments/Drill/drill1.jpg',
        price: 2550,
        inCart: 0,
        id: 19
    },
    {
        name: 'Electric Angle Grinder M10 with Free Disc',
        tag: 'Tools and Equipments04',
        imgURL: './images/Tools and Equipments/Grinder/grinder1.jpg',
        price: 950,
        inCart: 0,
        id: 20
    },
    {
        name: 'Demolition Jack Hammer',
        tag: 'Tools and Equipments05',
        imgURL: './images/Tools and Equipments/Jack Hammer/jack1.jpg',
        price: 3510,
        inCart: 0,
        id: 21
    },
    {
        name: 'Electric Jigsaw with Variable Speed',
        tag: 'Tools and Equipments06',
        imgURL: './images/Tools and Equipments/Jig Saw/jig1.jpg',
        price: 1738,
        inCart: 0,
        id: 22
    },
    {
        name: '600W Electric Wood Planer',
        tag: 'Tools and Equipments07',
        imgURL: './images/Tools and Equipments/Planer/planer1.jpg',
        price: 1289,
        inCart: 0,
        id: 23
    },
    {
        name: 'Greenfield Drive Socket',
        tag: 'Tools and Equipments08',
        imgURL: './images/Tools and Equipments/Rachet/rachet1.jpg',
        price: 1800,
        inCart: 0,
        id: 24
    },
    {
        name: 'Earbuds T20 Bluetooth Wireless Airbuds',
        tag: 'Mobile and Gadgets01',
        imgURL: './images/Mobile and Gadgets/Airbuds/airbuds1.jpg',
        price: 599,
        inCart: 0,
        id: 25
    },
    {
        name: 'Gaming Headset Noise Cancelling for PC and Laptop',
        tag: 'Mobile and Gadgets02',
        imgURL: './images/Mobile and Gadgets/Airpods/airpod1.jpg',
        price: 500,
        inCart: 0,
        id: 26
    },
    {
        name: 'Apple Watch Series 8 GPS Sport Band',
        tag: 'Mobile and Gadgets03',
        imgURL: './images/Mobile and Gadgets/Apple watch/watch1.jpg',
        price: 25890,
        inCart: 0,
        id: 27
    },
    {
        name: 'NiTHO DRIVE PRO V16 Gaming Racing Wheel car',
        tag: 'Mobile and Gadgets04',
        imgURL: './images/Mobile and Gadgets/Gaming console/part1.jpg',
        price: 7399,
        inCart: 0,
        id: 28
    },
    {
        name: 'Apple iPhone 14 Pro Max Brand New',
        tag: 'Mobile and Gadgets05',
        imgURL: './images/Mobile and Gadgets/iPhone/iphone1.jpg',
        price: 73890,
        inCart: 0,
        id: 29
    },
    {
        name: 'Portable Wireless Bluetooth Karaoke Speaker',
        tag: 'Mobile and Gadgets06',
        imgURL: './images/Mobile and Gadgets/Portable devices/part1.jpg',
        price: 800,
        inCart: 0,
        id: 30
    },
    {
        name: 'Samsung Galaxy S23 Ultra (S9180) 256GB - (HK)',
        tag: 'Mobile and Gadgets07',
        imgURL: './images/Mobile and Gadgets/Samsung Galaxy/galaxy1.jpg',
        price: 63250,
        inCart: 0,
        id: 31
    },
    {
        name: 'Samsung Galaxy Watch5 Bluetooth (40mm)',
        tag: 'Mobile and Gadgets08',
        imgURL: './images/Mobile and Gadgets/Smart watch/smart1.jpg',
        price: 13592,
        inCart: 0,
        id: 32
    },
    {
        name: 'Personal Three Door Refrigerator',
        tag: 'Home and Living01',
        imgURL: './images/Home and Living/Appliances/appliances1.jpg',
        price: 4936,
        inCart: 0,
        id: 33
    },
    {
        name: 'Palermo Queen Size Bedframe',
        tag: 'Home and Living02',
        imgURL: './images/Home and Living/Bedroom/image1.jpg',
        price: 19990,
        inCart: 0,
        id: 34
    },
    {
        name: 'Solid Wood Dining Chair',
        tag: 'Home and Living03',
        imgURL: './images/Home and Living/Dining/image1.jpg',
        price: 359,
        inCart: 0,
        id: 35
    },
    {
        name: 'Sofa Bed for Living Room',
        tag: 'Home and Living04',
        imgURL: './images/Home and Living/Furniture/furniture1.jpg',
        price: 6490,
        inCart: 0,
        id: 36
    },
    {
        name: 'Living Room Sala Set',
        tag: 'Home and Living05',
        imgURL: './images/Home and Living/Home Decors/decor1.jpg',
        price: 35590,
        inCart: 0,
        id: 37
    },
    {
        name: 'Stainless Steel Stock Pot',
        tag: 'Home and Living06',
        imgURL: './images/Home and Living/Kitchen ware/utensil1.jpg',
        price: 999,
        inCart: 0,
        id: 38
    },
    {
        name: 'Fully Automatic Top Load washing Machine',
        tag: 'Home and Living07',
        imgURL: './images/Home and Living/Laundry/laundry1.jpg',
        price: 11614,
        inCart: 0,
        id: 39
    },
    {
        name: 'Plastic Drawers Organizer Storage',
        tag: 'Home and Living08',
        imgURL: './images/Home and Living/Pantry/pantry1.jpg',
        price: 655,
        inCart: 0,
        id: 40
    },
    {
        name: 'Korean Blazer for Women',
        tag: 'Womens Apparel01',
        imgURL: './images/Womens Apparel/Coat/coat1.jpg',
        price: 600,
        inCart: 0,
        id: 41
    },
    {
        name: 'Women Casual Formal Plus Size Dress',
        tag: 'Womens Apparel02',
        imgURL: './images/Womens Apparel/Dress/dress1.jpg',
        price: 575,
        inCart: 0,
        id: 42
    },
    {
        name: 'Banquet Long Elegant',
        tag: 'Womens Apparel03',
        imgURL: './images/Womens Apparel/Gown/gown1.jpg',
        price: 840,
        inCart: 0,
        id: 43
    },
    {
        name: 'High Waist pants Joni Jeans Skinny',
        tag: 'Womens Apparel04',
        imgURL: './images/Womens Apparel/Jeans/jeans1.jpg',
        price: 350,
        inCart: 0,
        id: 44
    },
    {
        name: 'Leggings Plain Cotton',
        tag: 'Womens Apparel05',
        imgURL: './images/Womens Apparel/Leggings/leggings1.jpg',
        price: 310,
        inCart: 0,
        id: 45
    },
    {
        name: 'Sweatshirt Longsleeves Jackets',
        tag: 'Womens Apparel06',
        imgURL: './images/Womens Apparel/Longsleeves/longsleeve1.jpg',
        price: 238,
        inCart: 0,
        id: 46
    },
    {
        name: 'Korean Fashion Womens High Waist Skirt',
        tag: 'Womens Apparel07',
        imgURL: './images/Womens Apparel/Skirt/skirt1.jpg',
        price: 346,
        inCart: 0,
        id: 47
    },
    {
        name: 'Korean TShirt Cotton candy',
        tag: 'Womens Apparel08',
        imgURL: './images/Womens Apparel/T-Shirt/shirt1.jpg',
        price: 200,
        inCart: 0,
        id: 48
    },
    {
        name: 'New York Yankees Vintage 100% Good Quality',
        tag: 'Mens Apparel01',
        imgURL: './images/Mens Apparel/Head Cup/cup1.jpg',
        price: 450,
        inCart: 0,
        id: 49
    },
    {
        name: 'Unisex Jacket for Men Made in Korea',
        tag: 'Mens Apparel02',
        imgURL: './images/Mens Apparel/Jackets/jacket1.jpg',
        price: 1500,
        inCart: 0,
        id: 50
    },
    {
        name: "Men's Pants High Quality Strechable Skinny Jeans",
        tag: 'Mens Apparel03',
        imgURL: './images/Mens Apparel/Jeans/pants1.jpg',
        price: 450,
        inCart: 0,
        id: 51
    },
    {
        name: "Classic Korean Men's Plain Casual Longsleeve",
        tag: 'Mens Apparel04',
        imgURL: './images/Mens Apparel/Longsleeves/longsleeve1.jpg',
        price: 300,
        inCart: 0,
        id: 52
    },
    {
        name: 'FOX Gear Set Motocross Jersey Pants MX Combo',
        tag: 'Mens Apparel05',
        imgURL: './images/Mens Apparel/Riding Jersey/jersey1.jpg',
        price: 2500,
        inCart: 0,
        id: 53
    },
    {
        name: 'Boots Genuine Classic High Top Boots Unisex',
        tag: 'Mens Apparel06',
        imgURL: './images/Mens Apparel/Shoes/shoes1.jpg',
        price: 2800,
        inCart: 0,
        id: 54
    },
    {
        name: 'Fox Racing Mens Brdshorts High Quality',
        tag: 'Mens Apparel07',
        imgURL: './images/Mens Apparel/Shorts/short1.jpg',
        price: 1250,
        inCart: 0,
        id: 55
    },
    {
        name: "AMERICAN EAGLE Kellogg's Tony The Tiger T-shirt",
        tag: 'Mens Apparel08',
        imgURL: './images/Mens Apparel/T-Shirt/shirt1.jpg',
        price: 699,
        inCart: 0,
        id: 56
    }
]

function id01() {
        cartNumbers(products[0]);
        totalCost(products[0]);
}

function id02() {
    cartNumbers(products[1]);
    totalCost(products[1]);
}

function id03() {
    cartNumbers(products[2]);
    totalCost(products[2]);
}

function id04() {
    cartNumbers(products[3]);
    totalCost(products[3]);
}
function id05() {
    cartNumbers(products[4]);
    totalCost(products[4]);
}
function id06() {
    cartNumbers(products[5]);
    totalCost(products[5]);
}
function id07() {
    cartNumbers(products[6]);
    totalCost(products[6]);
}
function id08() {
    cartNumbers(products[7]);
    totalCost(products[7]);
}
function id09() {
    cartNumbers(products[8]);
    totalCost(products[8]);
}
function id10() {
    cartNumbers(products[9]);
    totalCost(products[9]);
}
function id11() {
    cartNumbers(products[10]);
    totalCost(products[10]);
}
function id12() {
    cartNumbers(products[11]);
    totalCost(products[11]);
}
function id13() {
    cartNumbers(products[12]);
    totalCost(products[12]);
}
function id14() {
    cartNumbers(products[13]);
    totalCost(products[13]);
}
function id15() {
    cartNumbers(products[14]);
    totalCost(products[14]);
}
function id16() {
    cartNumbers(products[15]);
    totalCost(products[15]);
}
function id17() {
    cartNumbers(products[16]);
    totalCost(products[16]);
}
function id18() {
    cartNumbers(products[17]);
    totalCost(products[17]);
}
function id19() {
    cartNumbers(products[18]);
    totalCost(products[18]);
}
function id20() {
    cartNumbers(products[19]);
    totalCost(products[19]);
}
function id21() {
    cartNumbers(products[20]);
    totalCost(products[20]);
}
function id22() {
    cartNumbers(products[21]);
    totalCost(products[21]);
}
function id23() {
    cartNumbers(products[22]);
    totalCost(products[22]);
}
function id24() {
    cartNumbers(products[23]);
    totalCost(products[23]);
}
function id25() {
    cartNumbers(products[24]);
    totalCost(products[24]);
}
function id26() {
    cartNumbers(products[25]);
    totalCost(products[25]);
}
function id27() {
    cartNumbers(products[26]);
    totalCost(products[26]);
}
function id28() {
    cartNumbers(products[27]);
    totalCost(products[27]);
}
function id29() {
    cartNumbers(products[28]);
    totalCost(products[28]);
}
function id30() {
    cartNumbers(products[29]);
    totalCost(products[29]);
}
function id31() {
    cartNumbers(products[30]);
    totalCost(products[30]);
}
function id32() {
    cartNumbers(products[31]);
    totalCost(products[31]);
}
function id33() {
    cartNumbers(products[32]);
    totalCost(products[32]);
}
function id34() {
    cartNumbers(products[33]);
    totalCost(products[33]);
}
function id35() {
    cartNumbers(products[34]);
    totalCost(products[34]);
}
function id36() {
    cartNumbers(products[35]);
    totalCost(products[35]);
}
function id37() {
    cartNumbers(products[36]);
    totalCost(products[36]);
}
function id38() {
    cartNumbers(products[37]);
    totalCost(products[37]);
}
function id39() {
    cartNumbers(products[38]);
    totalCost(products[38]);
}
function id40() {
    cartNumbers(products[39]);
    totalCost(products[39]);
}
function id41() {
    cartNumbers(products[40]);
    totalCost(products[40]);
}
function id42() {
    cartNumbers(products[41]);
    totalCost(products[41]);
}
function id43() {
    cartNumbers(products[42]);
    totalCost(products[42]);
}
function id44() {
    cartNumbers(products[43]);
    totalCost(products[43]);
}
function id45() {
    cartNumbers(products[44]);
    totalCost(products[44]);
}
function id46() {
    cartNumbers(products[45]);
    totalCost(products[45]);
}
function id47() {
    cartNumbers(products[46]);
    totalCost(products[46]);
}
function id48() {
    cartNumbers(products[47]);
    totalCost(products[47]);
}
function id49() {
    cartNumbers(products[48]);
    totalCost(products[48]);
}
function id50() {
    cartNumbers(products[49]);
    totalCost(products[49]);
}
function id51() {
    cartNumbers(products[50]);
    totalCost(products[50]);
}
function id52() {
    cartNumbers(products[51]);
    totalCost(products[51]);
}
function id53() {
    cartNumbers(products[52]);
    totalCost(products[52]);
}
function id54() {
    cartNumbers(products[53]);
    totalCost(products[53]);
}
function id55() {
    cartNumbers(products[54]);
    totalCost(products[54]);
}
function id56() {
    cartNumbers(products[55]);
    totalCost(products[55]);
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