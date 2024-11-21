# Grocery Store

This project is a simple web-based grocery store application. It allows users to browse products, add them to a cart, and purchase them. Check out running application with this Url: https://the-auspicious.github.io/GroceryStore/

## Features

- **Product Listing**: Displays a list of products with images, names, prices, and an "Add to Cart" button.
- **User Authentication**: Allows users to log in with a username and password.
- **Cart Management**: Users can add products to their cart and purchase them.
- **Notifications**: Displays a toaster notification for successful actions.
- **Responsive Design**: The application is designed to be responsive and works well on different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

- `index.html`: The main HTML file that contains the structure of the web page.
- `styles.css`: The CSS file that contains the styles for the web page.
- `scripts.js`: The JavaScript file that contains the functionality for the web page.

## How to Use

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/grocery-store.git
    ```

2. **Open the project**:
    Open the `index.html` file in your web browser.

3. **Browse Products**:
    - The products are displayed with their images, names, and prices.
    - Click the "Add to Cart" button to add a product to your cart.

4. **User Authentication**:
    - Enter your username and password to log in.
    - The sample user data is hardcoded in the `scripts.js` file.

5. **Purchase Products**:
    - Click the "Buy" button to purchase the items in your cart.
    - A toaster notification will appear to confirm the purchase.

## Sample Code

### HTML (Excerpt from `index.html`)

```html
<div class="product-card" data-name="Grapes" data-category="Fruits" data-brand="BrandA">
    <img src="images/grapes.jpg" alt="Grapes" class="product-image">
    <h3 class="product-name">Grapes</h3>
    <p class="product-price">$2.50</p>
    <button class="add-to-cart-btn" onclick="addToCart(5)">Add to Cart</button>
</div>
