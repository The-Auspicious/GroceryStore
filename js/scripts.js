// Sample product data
const products = [
    { id: 1, name: 'Apple', price: 1.00, image: 'images/apple.jpg' },
    { id: 2, name: 'Banana', price: 0.50, image: 'images/banana.jpg' },
    { id: 3, name: 'Kiwi', price: 2.00, image: 'images/kiwi.jpg' },
    { id: 4, name: 'Mango', price: 3.00, image: 'images/mango.jpg' },
    { id: 5, name: 'Grapes', price: 2.50, image: 'images/grapes.jpg' },
    { id: 6, name: 'Mashrooms', price: 1.50, image: 'images/mashrooms.jpg' },
    { id: 7, name: 'Spinach', price: 0.75, image: 'images/spinach.jpg' },
    { id: 8, name: 'Peas', price: 1.75, image: 'images/peas.jpg' }
];

// Sample user data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Function to validate login
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);

    // Show loading spinner
    document.getElementById('loading-spinner').style.display = 'block';

    setTimeout(() => {
        if (user) {
            alert('Login successful!');
            // Store login state
            localStorage.setItem('isLoggedIn', 'true');
            // Redirect to home page
            window.location.href = 'index.html';
        } else {
            document.getElementById('login-message').textContent = 'Invalid username or password';
        }
        // Hide loading spinner
        document.getElementById('loading-spinner').style.display = 'none';
    }, 2000); // Simulate a delay for demonstration purposes

    return false; // Prevent form submission
}

// Function to create a new user
function createUser() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const existingUser = users.find(u => u.username === newUsername);

    if (existingUser) {
        document.getElementById('signup-message').textContent = 'Username already exists';
        return false; // Prevent form submission
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert('User created successfully!');
        // Redirect to login page
        closeSignUpModal();
        document.getElementById('login-message').textContent = 'Account created! Please log in.';
        return false; // Prevent form submission
    }
}

// Function to show the sign-up modal
function showSignUpModal() {
    document.getElementById('signup-modal').style.display = 'block';
}

// Function to close the sign-up modal
function closeSignUpModal() {
    document.getElementById('signup-modal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('signup-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Function to check login state
function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Shopping cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        showToaster(`${product.name} added to cart.`);
        updateCart();
    }
}

// Function to update cart display (for example purposes)
function updateCart() {
    console.log('Cart:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to filter products based on search input
function filterProducts() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();
        const brand = card.getAttribute('data-brand').toLowerCase();

        if (name.includes(searchInput) || category.includes(searchInput) || brand.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to show toaster message
function showToaster(message) {
    const toaster = document.getElementById('toaster');
    toaster.textContent = message;
    toaster.style.display = 'block';
    setTimeout(() => {
        toaster.style.display = 'none';
    }, 3000); // Hide after 3 seconds
}

// Function to log out the user
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalContainer.textContent = '';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    cartTotalContainer.textContent = `Total: $${total.toFixed(2)}`;
}


// Function to handle Buy button click
function handleBuyButtonClick() {
    alert('Item Bought successfully, your items are on the way!!');
    clearCart();
}

// Function to clear cart values
function clearCart() {
    // Assuming cart is stored in localStorage
    localStorage.removeItem('cart');
    // Update UI to reflect empty cart
    document.getElementById('cart-items').innerHTML = '';
}

// Attach event listener to Buy button
document.getElementById('buy-button').addEventListener('click', handleBuyButtonClick);
