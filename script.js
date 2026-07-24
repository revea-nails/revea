// REVÉA Products

const products = [
{
code:"RV001",
name:"Midnight Muse",
price:"1399",
images:["rv001-1.jpg.jpeg"],
category:"Dark"
},

{
code:"RV002",
name:"Bluebell Grace",
price:"1399",
images:["rv002-1.jpg.jpeg"],
category:"Blue"
},

{
code:"RV003",
name:"Champagne Veil",
price:"999",
images:["rv003-1.jpg.jpeg","rv003-2.jpg.jpeg"],
category:"Nude"
},

{
code:"RV004",
name:"Mocha Bloom",
price:"1399",
images:["rv004-1.jpg.jpeg","rv004-2.jpg.jpeg"],
category:"Nude"
},

{
code:"RV005",
name:"Berry Blush",
price:"1399",
images:["rv005-1.jpg.jpeg","rv005-2.jpg.jpeg"],
category:"Dark"
},

{
code:"RV006",
name:"Emerald Tide",
price:"1299",
images:["rv006-1.jpg.jpeg","rv006-2.jpg.jpeg"],
category:"Dark"
},

{
code:"RV007",
name:"Forest Whisper",
price:"1399",
images:["rv007-1.jpg.jpeg","rv007-2.jpg.jpeg"],
category:"Dark"
},

{
code:"RV008",
name:"Plum Petals",
price:"999",
images:["rv008-1.jpg.jpeg","rv008-2.jpg.jpeg"],
category:"Dark"
},

{
code:"RV009",
name:"Ocean Pearl",
price:"1299",
images:["rv009-1.jpg.jpeg","rv009-2.jpg.jpeg"],
category:"Blue"
},

{
code:"RV010",
name:"Velvet Merlot",
price:"899",
images:["rv010-1.jpg.jpeg"],
category:"Dark"
},

{
code:"RV011",
name:"Mocha Leaves",
price:"799",
images:["rv011-1.jpg.jpeg"],
category:"Nude"
},

{
code:"RV012",
name:"Burgundy Stardust",
price:"1399",
images:["rv012-1.jpg.jpeg","rv012-2.jpg.jpeg"],
category:"Dark"
},

{
code:"RV013",
name:"Crimson Web",
price:"1399",
images:["rv013-1.jpg.jpeg","rv013-2.jpg.jpeg"],
category:"Character"
}
];
// ===========================
// Display Products
// ===========================

const productContainer = document.getElementById("productContainer");

function displayProducts(items){

    productContainer.innerHTML = "";

    items.forEach(product => {

        productContainer.innerHTML += `

        <div class="card">

            <img src="${product.images[0]}" alt="${product.code}">

            <div class="cardContent">

                <h3>${product.name}</h3>

                <p class="code">${product.code}</p>

                <p class="price">${product.price} PKR</p>

                <div class="cardButtons">

                    <button onclick="viewProduct('${product.code}')">
                        View Details
                    </button>

                    <button onclick="orderNow('${product.code}','${product.name}')">
                        Order Now
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

displayProducts(products);
// ===========================
// Order Button
// ===========================

function orderNow(code,name){

    const message =
    `Hi! I'm interested in ${code} - ${name}.`;

    window.open(

        `https://wa.me/923283998968?text=${encodeURIComponent(message)}`,

        "_blank"

    );

}
// ===========================
// Product Popup
// ===========================

const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

function viewProduct(code){

    const product = products.find(item => item.code === code);

    let gallery = "";

    product.images.forEach(image => {
        gallery += `
            <img src="${image}" class="popupImage" alt="${product.code}">
        `;
    });

    modalBody.innerHTML = `
        <h2>${product.name}</h2>

        <p class="code">${product.code}</p>

        <div class="popupGallery">
            ${gallery}
        </div>

        <h3>${product.price} PKR</h3>

        <p>
            Reusable luxury press-on nail set.<br>
            Perfect for everyday wear and special occasions.
        </p>

        <button class="popupOrder"
            onclick="orderNow('${product.code}','${product.name}')">
            Order Now
        </button>
    `;

    modal.style.display = "flex";
}
// ===========================
// Search
// ===========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value) ||
        product.code.toLowerCase().includes(value)
    );

    displayProducts(filtered);

});
// ===========================
// Category Filters
// ===========================

const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.textContent.trim();

        if(category === "All"){

            displayProducts(products);

            return;

        }

        const filtered = products.filter(product => product.category === category);

        displayProducts(filtered);

    });

});


// ===========================
// Floating WhatsApp Button
// ===========================

const whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", () => {

    window.open(
        "https://wa.me/923283998968",
        "_blank"
    );

});


// ===========================
// Website Loaded
// ===========================

window.addEventListener("load", () => {

    displayProducts(products);

});
