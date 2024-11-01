document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout-button');
    const checkoutSection = document.querySelector('.checkout');
    const checkoutForm = document.getElementById('checkout-form');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));
            const productSize = productElement.querySelector('.size').value;

            const cartItem = { id: productId, name: productName, price: productPrice, size: productSize };
            cart.push(cartItem);
            updateCart();
        });
    });

    const updateCart = () => {
        cartItems.innerHTML = '';
        let totalAmount = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} (Size: ${item.size})`;
            cartItems.appendChild(li);
            totalAmount += item.price;
        });
        total.textContent = `Total: $${totalAmount.toFixed(2)}`;
    };

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Please add at least one product to the cart.');
        } else {
            checkoutSection.style.display = 'block';
        }
    });

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Purchase completed successfully!');
        cart.length = 0;
        updateCart();
        checkoutSection.style.display = 'none';
    });
    
});
