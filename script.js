const path = window.location.pathname;
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let items = JSON.parse(localStorage.getItem("items")) || [];
items = items.map(item => ({
    ...item,
    quantity: item.quantity ? item.quantity : 1
}));

const products = [
    { id: 1, name: "Bag", price: 400, image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, name: "Watch", price: 900, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "Headphone", price: 700, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "Perfume", price: 500, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 5, name: "Sunglass", price: 200, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 6, name: "Red Shoe", price: 1000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" },
    { id: 7, name: "Smart Watch", price: 2000, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" },
    { id: 8, name: "Red Lipstick", price: 400, image: "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" },
    { id: 9, name: "Golden Earring", price: 200, image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5fGVufDB8fDB8fHww" },
    { id: 10, name: "Green Shoe", price: 1000, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" },
    { id: 11, name: "Clinique Lipstick", price: 600, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" },
    { id: 12, name: "White t-shirt", price: 600, image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" },

];

// ----------- PRODUCT RENDERING (index.html) -----------
function renderProducts() {
    const container = document.getElementById("product");
    if (!container) return;
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-amber-lg rounded-lg border-gray-300 shadow-sm border";
        card.innerHTML = `
        <img src="${product.image}" alt="Product Image" class="w-full h-70 object-cover rounded-t-lg shadow-lg">
        <div class="flex flex-wrap justify-between items-center p-4">
            <div>
                <h2 class="text-xl font-semibold mt-2 px-4">${product.name}</h2>
                <p class="text-gray-600 px-4">Rs.${product.price}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2 mt-2 ">
                <button class="wishlist_btn cursor-pointer px-4 py-2 hover:bg-pink-200 hover:rounded-lg" data-id="${product.id}">
                    <i class="ri-heart-line"></i>
                </button>
                <button class="addtocart_btn cursor-pointer overflow-x-hidden bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-3 " data-id="${product.id}">
                    <i id="cart_icon" class="ri-shopping-cart-line"></i>
                </button>
            </div>
        </div>`;
        card.addEventListener("click", (e) => {
            if (e.target.closest("button")) return;
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product.html";
});

        container.appendChild(card);
    });
   
    updateWishlistIcons();
    

    
}
function renderSearchResults(query) {
    const search= document.getElementById("search_bar");
    if (!search) return;
    const container = document.getElementById("product");
    if (!container) return;
    container.innerHTML = "";

    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    )

    if(filtered.length === 0) {
        container.innerHTML = `<div class="w-full h-30 flex justify-center items-center text-3xl text-red-500">No products found</div>`;
        return;
    }
    filtered.forEach(product =>{
        const card = document.createElement("div");
        card.className = "bg-white shadow-amber-lg rounded-lg border-gray-300 shadow-sm border";
        card.innerHTML = `
        <img src="${product.image}" alt="Product Image" class="w-full h-70 object-cover rounded-t-lg shadow-lg">
        <div class="flex justify-between items-center p-4">
            <div>
                <h2 class="text-xl font-semibold mt-2 px-4">${product.name}</h2>
                <p class="text-gray-600 px-4">Rs.${product.price}</p>
            </div>
            <div class="flex items-center gap-2 mt-2">
                <button class="wishlist_btn cursor-pointer px-4 py-2 hover:bg-pink-200 hover:rounded-lg" data-id="${product.id}">
                    <i class="ri-heart-line"></i>
                </button>
                <button class="addtocart_btn cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-3 " data-id="${product.id}">
                    <i id="cart_icon" class="ri-shopping-cart-line"></i>
                </button>
            </div>
        </div>`;
        card.addEventListener("click", (e) => {
            if (e.target.closest("button")) return;
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = `product.html?query=${encodeURIComponent(query)}`;;
});

        container.appendChild(card);
    });
   
    updateWishlistIcons();

   
}

function updateWishlistIcons() {
    const buttons = document.querySelectorAll(".wishlist_btn");
    buttons.forEach(button => {
        const productId = parseInt(button.getAttribute("data-id"));
        const icon = button.querySelector("i");

        const inWishlist = wishlist.some(p => p.id === productId);

        if (inWishlist) {
            button.classList.add("text-pink-200");
            icon.classList.remove("ri-heart-line");
            icon.classList.add("ri-heart-fill", "text-pink-600");
        } else {
            button.classList.remove("text-pink-200");
            icon.classList.remove("ri-heart-fill", "text-pink-600");
            icon.classList.add("ri-heart-line");
        }

        button.onclick = () => {
            const index = wishlist.findIndex(p => p.id === productId);
            if (index === -1) {
                wishlist.push(products.find(p => p.id === productId));
            } else {
                wishlist.splice(index, 1);
            }
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            localStorage.setItem("wishlist_event", Date.now());
            updateWishlistIcons();
        };
    });
}
function addToWishlist(product) {
 

  const alreadyInWishlist = wishlist.find(item => item.id === product.id);

  

  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  wishlist_icon.classList.remove("ri-heart-line");
  wishlist_icon.classList.add("ri-heart-fill", "text-pink-600");
  
}

// ----------- WISHLIST RENDERING (wishlist.html) -----------
function renderWishlist() {
    const wishlisted = document.getElementById("wishlist");
    if (!wishlisted) return;
    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlisted.innerHTML = "";
    wishlist.forEach(product => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-amber-lg rounded-lg border-gray-300 shadow-sm border m-4";
        card.setAttribute("data-id", product.id);
        card.innerHTML = `
        <img src="${product.image}" alt="Product Image" class="w-full h-70 object-cover rounded-t-lg shadow-lg">
        <div>
            <h2 class="text-xl font-semibold mt-2 px-4">${product.name}</h2>
            <p class="text-gray-600 px-4">Rs.${product.price}</p>
        </div>
        <div class="flex items-center gap-2 mt-2 m-4">
            <button  class="wishlist_cart cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-3" data-id="${product.id}"><i id="cart_icon" class="ri-shopping-cart-line"></i></button>
            <button class="remove_btn cursor-pointer m-2 bg-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white" data-id="${product.id}">Remove</button>
        </div>`;
        card.addEventListener("click", (e) => {
            if (e.target.closest("button")) return;
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product.html";
});
        
        wishlisted.appendChild(card);
    });

    document.querySelectorAll(".remove_btn").forEach(button => {
        const productId = parseInt(button.getAttribute("data-id"));
        button.onclick = () => {
            wishlist = wishlist.filter(p => p.id !== productId);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            localStorage.setItem("wishlist_event", Date.now());
            renderWishlist();
        };
    });
}

// ----------- STORAGE EVENT (runs on all pages) -----------
window.addEventListener("storage", (event) => {
    if (event.key === "wishlist" || event.key === "wishlist_event") {
        wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        if (typeof renderProducts === "function") renderProducts();
        if (typeof renderWishlist === "function") renderWishlist();
        if (typeof updateWishlistIcons === "function") updateWishlistIcons();
        if(typeof renderSearchResults === "function") {
            const searchInput = document.getElementById("search_input");
            if (searchInput) {
                const query = searchInput.value;
                renderSearchResults(query);
            } 
        }
    }
});

// ----------- DOM READY: Load Based on Page -----------
document.addEventListener("DOMContentLoaded", () => {
    if (path.includes("/index.html") || path === "/" || path.includes("/Shopping/index.html")) {
        renderProducts();
        renderCart();
        setTimeout(() => {
            addToCartListener();
        }, 0);
    } else if (path.includes("/wishlist.html") || path === "/Shopping/wishlist.html") {
        renderWishlist();
        setTimeout(() => {
        addToCartListener(); // <--- ADD THIS
    }, 0);
    
    }
     else if (path.includes("/product.html") || path === "/Shopping/product.html") {
    renderproductpage();
    updateWishlistIcons();
    addToCartListener();
     // optional if needed on product page
}


 document.addEventListener("click", (event) => {
  const home = event.target.closest("#home");
  if (home) {
    console.log("Home clicked");
    window.location.href = "index.html";
  }
});
  const buy = document.getElementById("buy_now");
if(buy){
    buy.addEventListener("click", () => {
        window.location.href = "checkout.html";
    })
    }
    const continue_btn = document.getElementById("continue");
    if(continue_btn){
    continue_btn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
    }
    const checkout_btn= document.getElementById("checkout");
    if(checkout_btn){
    checkout_btn.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });
    }

   
   

    function renderproductpage(){
        const productData=JSON.parse(localStorage.getItem("selectedProduct"));
        if(!productData){
            
            return;
        }


        document.getElementById("product_img").src=productData.image;
        document.getElementById("product_title").textContent=productData.name;
        document.getElementById("product_price").textContent="Rs."+ productData.price;

  
        const close_btn=document.getElementById("close_btn");
        close_btn.addEventListener("click",()=>{
            const query_para= new URLSearchParams(window.location.search).get("query");
            if(query_para){
                window.location.href=`search.html?query=${encodeURIComponent(query_para)}`;
            }else{
            window.location.href="index.html";
            }
        })
        const product_carts=document.getElementById("product_cart");
        product_carts.addEventListener("click",()=>{
            
            const added=document.getElementById("added_tocart");
            added.innerHTML="Added to Cart <i class='ri-checkbox-circle-line' style='color: green;'></i>";
            const product=productData;
        const productId = product.id;
         // you must define `products` globally
        if (product) {
            let existingItem = items.find(p => p.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;}
            else{
            items.push({ ...product, quantity:1});}
            localStorage.setItem("items", JSON.stringify(items));
          
            renderCart();
            total_price();
        }

        })
        const product=productData;
        const productId = product.id;
        const product_wish=document.getElementById("product_wishlist");
        
        const wishlist_icon = document.querySelector("#product_wishlist i");

        if(wishlist.find(item => item.id === product.id)){
            wishlist_icon.classList.remove("ri-heart-line");
            wishlist_icon.classList.add("ri-heart-fill", "text-pink-600");
           
        }
        
       
        
        product_wish.addEventListener("click",()=>{
        const alreadyInWishlist = wishlist.find(item => item.id === product.id);
        if(alreadyInWishlist){
            wishlist_icon.classList.remove("ri-heart-fill", "text-pink-600");
            wishlist_icon.classList.add("ri-heart-line");
            wishlist = wishlist.filter(p => p.id !== productId);
            
        }
        else{
            wishlist_icon.classList.remove("ri-heart-line");
            wishlist_icon.classList.add("ri-heart-fill", "text-pink-600");
            addToWishlist(productData);

        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        })

}
// Get search query from URL and render results
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");
if (query) {
    const searchInput = document.getElementById("search_input");
    if (searchInput) searchInput.value = query;
    renderSearchResults(query);
}




    // Optional: Sidebar menu logic (if you're using it)
    const menu = document.getElementById("menu_bar");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close_btn");
    const contactForm = document.getElementById("info");

    if (menu && sidebar && closeBtn && contactForm) {
        menu.addEventListener("click", () => {
            sidebar.classList.toggle("translate-x-full");
            sidebar.classList.toggle("translate-x-0");
        });

        closeBtn.addEventListener("click", () => {
            sidebar.classList.add("translate-x-full");
            sidebar.classList.remove("translate-x-0");
        });

        contactForm.addEventListener("click", () => {
            sidebar.classList.add("translate-x-full");
            sidebar.classList.remove("translate-x-0");
        });
    }

    const wishlist_nav = document.getElementById("wishlist_nav");
    wishlist_nav.addEventListener("click" , () =>{
        window.location.href = "wishlist.html";
    })


    const cart= document.getElementById("cart");
    const cartBtn =document.getElementById("cart_bar");
    cartBtn.addEventListener("click",() => {
         cart.classList.toggle("translate-x-full");
            cart.classList.toggle("translate-x-0");
    })
    const close_cart =document.getElementById("close_cart");
    close_cart.addEventListener("click",() => {
        cart.classList.add("translate-x-full");
        cart.classList.remove("translate-x-0");
    })

    const cart_sidebar =document.getElementById("cart_sidebar");
    cart_sidebar.addEventListener("click", ()=>{
        sidebar.classList.add("translate-x-full");
            sidebar.classList.remove("translate-x-0");
            cart.classList.remove("translate-x-full");
            cart.classList.add("translate-x-0");
    })

    const login_btn= document.getElementById("login");
    login_btn.addEventListener("click",()=>{
        sidebar.classList.remove("translate-x-0");
        cart.classList.add("translate-x-full");
    })
    const login_page =document.getElementById("profile");
    login_page.addEventListener("click",()=>{
        
        window.location.href = "login.html";
    })

    const search = document.getElementById("search_bar");
    search.addEventListener("keydown" ,(e) =>{
        if(e.key === "Enter"){
            const query = document.getElementById("search_input").value;
            if (query) {
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            } 
        }

    })
    const search_btn = document.getElementById("search_button");
    search_btn.addEventListener("click", () => {
        const query = document.getElementById("search_input").value;
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        } 
    });
    const clear_search = document.getElementById("clear_search");
    clear_search.addEventListener("click", () =>{
         search_input.value = "";
    } );
    
    
    
    
    
   

    

});
function renderCart() {
    

    const cart_items = document.getElementById("items");
    cart_items.innerHTML = "";

    items.forEach(product => {
      

        const card = document.createElement("div");
        card.className = "bg-white shadow-amber-lg rounded-lg border-gray-300 shadow-sm border m-4";
        card.setAttribute("data-id", product.id);
        card.innerHTML = `<div class="flex w-full">
        <div class="flex  gap-2 w-[90%]">
            <img src="${product.image}" alt="Product Image" class="w-[30%] h-30 object-cover rounded-t-lg shadow-lg">
            <div class="flex-1 flex-col justify-between">
            <div>
                <h2 class="text-xl text-black font-semibold mt-2 px-4">${product.name}</h2>
                <div class="flex items-center gap-2 px-4 my-2">
        <button class="decrease-btn text-black bg-gray-400 hover:bg-gray-600 px-2 py-1 rounded text-xl">-</button>
        <span class="quantity text-lg w-6 text-black text-center">${product.quantity}</span>
        <button class="increase-btn text-black bg-gray-400 hover:bg-gray-600 px-2 py-1 rounded text-xl">+</button>
      </div>
                <p class="text-gray-600 px-4">Rs.${product.price * product.quantity}</p>
            </div>
        </div>
            <div class="flex-1 justify-end items-center ml-7 mt-2">
                <button class="remove_btn text-black m-2 bg-gray-100 px-2 py-1 rounded hover:bg-gray-600 hover:text-white" data-id="${product.id}"><i class="ri-close-fill"></i></button>
            </div>
            </div>
        
        `;
        
        cart_items.appendChild(card);
         

       
    });
    quantitylisteners();

    // Remove buttons
    document.querySelectorAll(".remove_btn").forEach(button => {
        button.onclick = () => {
            const productId = parseInt(button.getAttribute("data-id"));
            items = items.filter(p => p.id !== productId);
            localStorage.setItem("items", JSON.stringify(items));
            renderCart();
            total_price();
        };
    });
    
total_price();
};
function addToCartListener(){
    
    document.querySelectorAll(".addtocart_btn").forEach(button => {
    button.addEventListener("click", () => {
        const cart_icon = button.querySelector("#cart_icon");
        cart_icon.classList.remove("ri-shopping-cart-line");
        cart_icon.classList.add("ri-checkbox-circle-line", "text-green-600");
        const productId = parseInt(button.getAttribute("data-id"));
        const product = products.find(p => p.id === productId); // you must define `products` globally
        if (product) {
            let existingItem = items.find(p => p.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;}
            else{
            items.push({ ...product, quantity:1});}
            localStorage.setItem("items", JSON.stringify(items));
          
            renderCart();
            total_price();
              
        }
    });
    
    
})
document.querySelectorAll(".wishlist_cart").forEach(button => {
        button.addEventListener("click", () => {
        const cart_icon = button.querySelector("#cart_icon");
        cart_icon.classList.remove("ri-shopping-cart-line");
        cart_icon.classList.add("ri-checkbox-circle-line", "text-green-600");
        const productId = parseInt(button.getAttribute("data-id"));
        
        const product = wishlist.find(p => p.id === productId); 

        if (product) {
            let existingItem = items.find(p => p.id === productId);
           
            if (existingItem) {
                existingItem.quantity += 1;}
            else{
            items.push({ ...product, quantity:1});}
            localStorage.setItem("items", JSON.stringify(items));
          
            renderCart();
            total_price();
        }
        })
    })

}

function quantitylisteners(){
    document.querySelectorAll('.increase-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        
        const card = btn.closest("[data-id]");
            const id = parseInt(card.getAttribute("data-id"));

            const item = items.find(i => i.id === id);
            if (item) {
                item.quantity += 1;
                localStorage.setItem("items", JSON.stringify(items));
                renderCart();
                total_price();
            }
    });
});

document.querySelectorAll('.decrease-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        
        const card = btn.closest("[data-id]");
            const id = parseInt(card.getAttribute("data-id"));

            const itemIndex = items.findIndex(i => i.id === id);
            if (itemIndex !== -1) {
                if (items[itemIndex].quantity > 1) {
                    items[itemIndex].quantity -= 1;
                } else {
                    items.splice(itemIndex, 1);
                }

                localStorage.setItem("items", JSON.stringify(items));
                renderCart();
                total_price();
            }
    });
});



}
function total_price(){
    const grandtotal = document.getElementById("subtotal");
    let total=0;
    items.forEach(product =>{
        total+=product.price * product.quantity;
    })
    grandtotal.textContent = "Total: Rs."+total;
}
