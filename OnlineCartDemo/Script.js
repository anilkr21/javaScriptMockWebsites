async function getData() {
      
    let response = await fetch("./index.json");
    let data = await response.json();
    const products = data.products;

    const productContainer = document.getElementById('product-container');
    const templateCard = document.getElementById('product-template');

    function renderProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = templateCard.cloneNode(true);
            productCard.style.display = 'block'; // Make the card visible
            productCard.querySelector('img').src = product.images[0];
            productCard.querySelector('.card-title').textContent = product.title;
            productCard.querySelector('.card-item-price').textContent = `Price: $${product.price}`;
            productCard.querySelector('.btn').addEventListener('click', () => {
                alert(`You clicked buy for ${product.title}`);
            });

            productContainer.appendChild(productCard);
        });
    }

    renderProducts(products);

    document.querySelector('.low').addEventListener('click', () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        renderProducts(sortedProducts);
    });

    document.querySelector('.high').addEventListener('click', () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        renderProducts(sortedProducts);
    });


}
getData();

// Men
// document.addEventListener('DOMContentLoaded', () => {
//     let menBtn = document.querySelector(".menProductsBtn");
    
//     if (menBtn) {
//     menBtn.addEventListener('click', async function(event) {
//         event.preventDefault();
//         console.log("Men Collection button clicked.");
//         try {
//             let response1 = await fetch("./index.json");
//             let data1 = await response1.json();
//             const Products1 = data1.products.filter(product => product.category === "Men");
//             console.log("Filtered Men's Products:", Products1);
          
//             const productContainer1 = document.getElementById('product-container');
//             const templateCard1 = document.getElementById('product-template');
    
//             function renderProducts1(products) {
    
//                 productContainer1.innerHTML = '';
    
//                 products.forEach(product => {
    
//                     const productCard1 = templateCard1.cloneNode(true);
//                     productCard1.style.display = 'block'; // Make the card visible
//                     productCard1.querySelector('img').src = product.images[0];
//                     productCard1.querySelector('.card-title').textContent = product.title;
//                     productCard1.querySelector('.card-item-price').textContent = `Price: $${product.price}`;
//                     productCard1.querySelector('.btn').addEventListener('click', () => {
//                         alert(`You clicked buy for ${product.title}`);
//                     });
    
//                     productContainer1.appendChild(productCard1);
//                 });
//             }
    
//             renderProducts1(Products1);
//         } catch (error) {
//             console.error('Error fetching or rendering women products:', error);
//         }
//     });
//     }
//     });
    

// // Women
// document.addEventListener('DOMContentLoaded', () => {
// let womenBtn = document.querySelector(".WomenBtn");

// if (womenBtn) {
// womenBtn.addEventListener('click', async function(event) {
//     event.preventDefault();
//     try {
//         let response = await fetch("./index.json");
//         let data = await response.json();
//         const womenProducts = data.products.filter(product => product.category === "Women");

      
//         const productContainer = document.getElementById('product-container');
//         const templateCard = document.getElementById('product-template');

//         function renderProducts(products) {

//             productContainer.innerHTML = '';

//             products.forEach(product => {

//                 const productCard = templateCard.cloneNode(true);
//                 productCard.style.display = 'block'; // Make the card visible
//                 productCard.querySelector('img').src = product.images[0];
//                 productCard.querySelector('.card-title').textContent = product.title;
//                 productCard.querySelector('.card-item-price').textContent = `Price: $${product.price}`;
//                 productCard.querySelector('.btn').addEventListener('click', () => {
//                     alert(`You clicked buy for ${product.title}`);
//                 });

//                 productContainer.appendChild(productCard);
//             });
//         }

//         renderProducts(womenProducts);
//     } catch (error) {
//         console.error('Error fetching or rendering women products:', error);
//     }
// });
// }
// });

// Dynamically works for all Category
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const templateCard = document.getElementById('product-template');

    function renderProducts(products) {
        productContainer.innerHTML = ''; // Clear existing content

        products.forEach(product => {
            const productCard = templateCard.cloneNode(true);
            productCard.style.display = 'block'; // Make the card visible
            productCard.querySelector('img').src = product.images[0];
            productCard.querySelector('.card-title').textContent = product.title;
            productCard.querySelector('.card-item-price').textContent = `Price: $${product.price}`;
            productCard.querySelector('.btn').addEventListener('click', () => {
                alert(`You clicked buy for ${product.title}`);
            });

            productContainer.appendChild(productCard);
        });
    }

    function fetchAndRenderProducts(category) {
        fetch("./index.json")
            .then(response => response.json())
            .then(data => {
                const filteredProducts = data.products.filter(product => product.category === category);
                renderProducts(filteredProducts);
            })
            .catch(error => console.error('Error fetching or rendering products:', error));
    }

    document.querySelector(".menProductsBtn").addEventListener('click', function(event) {
        event.preventDefault();
        fetchAndRenderProducts("Men");
    });

    document.querySelector(".WomenBtn").addEventListener('click', function(event) {
        event.preventDefault();
        fetchAndRenderProducts("Women");
    });

    document.querySelector(".kidProductsBtn").addEventListener('click', function(event) {
        event.preventDefault();
        fetchAndRenderProducts("Kid");
    });
});



// document.addEventListener('DOMContentLoaded', () => {
//     let kidBtn = document.querySelector(".kidProductsBtn");
    
//     if (kidBtn) {
//     kidBtn.addEventListener('click', async function(event) {
//         event.preventDefault();
//         console.log("Men Collection button clicked.");
//         try {
//             let response2 = await fetch("./index.json");
//             let data2 = await response2.json();
//             const Products2 = data2.products.filter(product => product.category === "Kid");
//             console.log("Filtered Men's Products:", Products2);
          
//             const productContainer2 = document.getElementById('product-container');
//             const templateCard2 = document.getElementById('product-template');
    
//             function renderProducts2(products) {
    
//                 productContainer2.innerHTML = '';
    
//                 products.forEach(product => {
    
//                     const productCard2 = templateCard2.cloneNode(true);
//                     productCard2.style.display = 'block'; // Make the card visible
//                     productCard2.querySelector('img').src = product.images[0];
//                     productCard2.querySelector('.card-title').textContent = product.title;
//                     productCard2.querySelector('.card-item-price').textContent = `Price: $${product.price}`;
//                     productCard2.querySelector('.btn').addEventListener('click', () => {
//                         alert(`You clicked buy for ${product.title}`);
//                     });
    
//                     productContainer2.appendChild(productCard2);
//                 });
//             }
    
//             renderProducts2(Products2);
//         } catch (error) {
//             console.error('Error fetching or rendering women products:', error);
//         }
//     });
//     }
//     });
    





// document.addEventListener('DOMContentLoaded', (event) => {
//     WomenBtn.addEventListener('click', function(event) {
//         // Redirect to the women.html page
//         window.location.href = this.href;
//     });
//     // Check if we are on the women.html page
//     if (window.location.pathname.includes('women.html')) {
//         getWomenData();
//     }

//     // Women button event listener
//     let WomenBtn = document.querySelector(".WomenBtn");
//     WomenBtn.addEventListener('click', function(event) {
//         // Optional: Prevent default action if needed
//         // event.preventDefault();
//         getWomenData();
//     });

//     async function getWomenData() {
//         let WomenResponse = await fetch("./index.json");
//         let WomenData = await WomenResponse.json();
//         const WomenProducts = WomenData.products.filter(product => product.category === "women");

//         const productContainer1 = document.getElementById('product-container');
//         const templateCard1 = document.getElementById('product-template');

//         function renderProducts(products) {
//             // Clear existing products
//             productContainer1.innerHTML = '';
//             products.forEach(product => {
//                 // Clone the template card
//                 const productCard1 = templateCard1.cloneNode(true);
//                 productCard1.style.display = 'block'; // Make the card visible
//                 productCard1.querySelector('img').src = product.images[0];
//                 productCard1.querySelector('.card-title').textContent = product.title;
//                 productCard1.querySelector('.card-item-price').textContent = `Price: $${product.price}`;
//                 productCard1.querySelector('.btn').addEventListener('click', () => {
//                     alert(`You clicked buy for ${product.title}`);
//                 });

//                 productContainer1.appendChild(productCard1);
//             });
//         }

//         renderProducts(WomenProducts);
//     }
// });






    // document.addEventListener('DOMContentLoaded',(event=>{
    //     let WomenBtn =document.querySelector(".WomenBtn");
    
    //     WomenBtn.addEventListener('click', function(event){
        
    //     async function getWomenData(){

    //         let WomenResponse  = await fetch("./index.json");
    //         let WomenData = await WomenResponse.json();
    //         const WomenProducts = WomenData.products.filter(product => product.category === "women");

    //         const productContainer1 = document.getElementById('product-container');
    //         const templateCard1 = document.getElementById('product-template');

    //         function renderProducts(products) {
    //             // Clear existing products
    //             productContainer1.innerHTML = '';
    //             products.forEach(product => {
    //                 // Clone the template card
    //                 const productCard1 = templateCard1.cloneNode(true);
    //                 productCard1.style.display = 'block'; // Make the card visible
    //                 productCard1.querySelector('img').src = product.images[0];
    //                 productCard1.querySelector('.card-title').textContent = product.title;
    //                 productCard1.querySelector('.card-item-price').textContent = `Price: $${product.price}`;
    //                 productCard1.querySelector('.btn').addEventListener('click', () => {
    //                     alert(`You clicked buy for ${product.title}`);
    //                 });

    //                 productContainer1.appendChild(productCard1);
    //             });
    //         }

    //         renderProducts(WomenProducts);
    //     } getWomenData();

    //     });


    // }));



