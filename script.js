document.addEventListener('DOMContentLoaded', () => {
        fetch('data.json')
            .then(response => response.json())
            .then(products => displayProducts(products))
            .catch(error => console.error('Error al cargar los productos:', error));
    
        function displayProducts(products) {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" width="100">
                    <p>Precio: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
                `;
                productList.appendChild(productDiv);
            });
        }
    
        window.addToCart = function(productId) {
            fetch('data.json')
                .then(response => response.json())
                .then(products => {
                    const product = products.find(p => p.id === productId);
                    const cartItems = document.getElementById('cart-items');
                    const cartItem = document.createElement('li');
                    cartItem.textContent = `${product.name} - $${product.price}`;
                    cartItems.appendChild(cartItem);
                })
                .catch(error => console.error('Error al agregar al carrito:', error));
        };
    
        document.getElementById('checkout-button').addEventListener('click', () => {
            alert('Compra realizada con éxito!');
        });
    });