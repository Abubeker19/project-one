const products = [
    { id: 0, image: 'images/car/c1.jfif', title: 'Mercedes', price: 100000000000000000 },
    { id: 1, image: 'images/car/c2.jfif', title: 'Rava4', price: 12000000 },
    { id: 2, image: 'images/car/c3.jfif', title: 'RangeRover', price: 23444444 },
    { id: 3, image: 'images/car/c12.jfif', title: 'Rolleceryse', price: 9000000000 }
];

const cart = [];
let productIndex = 0;

document.getElementById('root').innerHTML = products.map((item) => {
    const { image, title, price } = item;
    return `
        <div class="box">
            <div class="img-box">
                <img class="images" src="${image}" alt="${title}">
            </div>
            <div class="bottom">
                <p>${title}</p>
                <h2>$${price.toLocaleString()}</h2>
                <button onclick="addToCart(${productIndex++})">Add to Cart</button>
            </div>
        </div>
    `;
}).join('');

function addToCart(index) {
    cart.push({...products[index]});
    updateCart();
}

function updateCart() {
    const cartItemContainer = document.getElementById('cartitem');
    const cartCount = document.getElementById('count');
    const cartTotal = document.getElementById('total');

    if (cart.length === 0) {
        cartItemContainer.innerHTML = "Your cart is empty";
        cartCount.textContent = 0;
        cartTotal.textContent = "$0.00";
    } else {
        cartItemContainer.innerHTML = cart.map((item, idx) => {
            return `
                <div class="cart-item">
                    <div class="row-img">
                        <img class="rowimg" src="${item.image}" alt="${item.title}">
                    </div>
                    <p>${item.title}</p>
                    <h2>$${item.price.toLocaleString()}</h2>
                    <i class="fa-solid fa-trash" onclick="removeFromCart(${idx})"></i>
                </div>
            `;
        }).join('');
        cartCount.textContent = cart.length;
        cartTotal.textContent = `$${cart.reduce((total, item) => total + item.price, 0).toLocaleString()}`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart array
    updateCart(); // Recalculate and display updated cart
}

function clearCart() {
    cart.length = 0; // Clear the cart array
    updateCart(); // Update the cart display and total
}

// Payment Method Selection
document.getElementById('paymentMethod').addEventListener('change', function() {
    const paymentMethod = this.value;
    if (paymentMethod === 'creditCard') {
        document.getElementById('creditCardFields').style.display = 'block';
        document.getElementById('paypalFields').style.display = 'none';
    } else {
        document.getElementById('creditCardFields').style.display = 'none';
        document.getElementById('paypalFields').style.display = 'block';
    }
});

// Handle Payment Form Submission
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission
    
    // Process the payment here (e.g., form validation, API calls)
    
    // Show Payment Confirmation Message
    document.getElementById('paymentConfirmation').style.display = 'block';
    // Optionally, hide the payment form after successful payment
    document.getElementById('paymentForm').style.display = 'none';
});
