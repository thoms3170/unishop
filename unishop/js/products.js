document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    // Get products from local storage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        displayProduct(product);
    });

    document.getElementById('add-product-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productDescription = document.getElementById('product-description').value;
        const productImageInput = document.getElementById('product-image');

        // Check if an image file is selected
        if (productImageInput.files && productImageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const productImage = e.target.result;

                // Create product object
                const product = {
                    name: productName,
                    price: productPrice,
                    description: productDescription,
                    image: productImage
                };

                // Add new product to local storage
                products.push(product);
                localStorage.setItem('products', JSON.stringify(products));

                displayProduct(product);

                alert('Product added successfully!');
                // Clear the form
                document.getElementById('add-product-form').reset();
            };
            reader.readAsDataURL(productImageInput.files[0]);
        }
    });

    function displayProduct(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    }
});
