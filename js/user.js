document.addEventListener('DOMContentLoaded', function() {
    // Display user info
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && document.getElementById('user-details')) {
        const userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
            <p><strong>ID:</strong> ${currentUser.id}</p>
            <p><strong>Name:</strong> ${currentUser.fullName}</p>
            <p><strong>Gender:</strong> ${currentUser.gender}</p>
            <p><strong>Address:</strong> ${currentUser.address}</p>
            <p><strong>Birth Date:</strong> ${currentUser.birthDate}</p>
        `;
    }
    
    // New Order Button
    const newOrderBtn = document.getElementById('new-order-btn');
    if (newOrderBtn) {
        newOrderBtn.addEventListener('click', function() {
            const modal = document.getElementById('order-modal');
            modal.classList.remove('hidden');
            
            // Load products
            const products = [
                {'product_id': '1', 'product_name': 'Gula', 'price': 150},
                {'product_id': '2', 'product_name': 'Teh hijau celup', 'price': 80},
                {'product_id': '3', 'product_name': 'Air mineral botol', 'price': 50},
                {'product_id': '4', 'product_name': 'Pepsin koras', 'price': 40},
                {'product_id': '5', 'product_name': 'Kopi 3-in-1', 'price': 15},
                {'product_id': '6', 'product_name': 'Crocodile / kerupuk roti', 'price': 25},
                {'product_id': '7', 'product_name': 'Kopi hitam', 'price': 355},
                {'product_id': '8', 'product_name': 'Roti kering kecil berbentuk cincin', 'price': 30},
                {'product_id': '9', 'product_name': 'Teh hitam celup', 'price': 84},
                {'product_id': '10', 'product_name': 'Teh bunga melati', 'price': 40},
                {'product_id': '11', 'product_name': 'Minyak biji rami', 'price': 200},
                {'product_id': '12', 'product_name': 'Anggur', 'price': 278},
                {'product_id': '13', 'product_name': 'Kaviar', 'price': 800},
                {'product_id': '14', 'product_name': 'Mayones', 'price': 60},
                {'product_id': '15', 'product_name': 'Minyak zaitun', 'price': 450},
                {'product_id': '16', 'product_name': 'Semangka', 'price': 120},
                {'product_id': '17', 'product_name': 'Minuman lingonberry', 'price': 190},
                {'product_id': '18', 'product_name': 'Susu tomat', 'price': 58},
                {'product_id': '19', 'product_name': 'Ikan asin', 'price': 180},
                {'product_id': '20', 'product_name': 'Roti panjang (bagus bagus)', 'price': 50},
                {'product_id': '21', 'product_name': 'Kopi bubuk', 'price': 283},
                {'product_id': '22', 'product_name': 'Jus buah campuran', 'price': 120},
                {'product_id': '23', 'product_name': 'Yogurt', 'price': 45},
                {'product_id': '24', 'product_name': 'Jus jeruk', 'price': 120},
                {'product_id': '25', 'product_name': 'Kopi instant', 'price': 150},
                {'product_id': '26', 'product_name': 'Kopi klasik', 'price': 70},
                {'product_id': '27', 'product_name': 'Teh herbal daun', 'price': 121},
                {'product_id': '28', 'product_name': 'Krim (cream)', 'price': 75},
                {'product_id': '29', 'product_name': 'Minuman blueberry', 'price': 170},
                {'product_id': '30', 'product_name': 'Minuman energi', 'price': 140},
                {'product_id': '31', 'product_name': 'Gandum kuda (buckwheat)', 'price': 67},
                {'product_id': '32', 'product_name': 'Oat / havermout', 'price': 55},
                {'product_id': '33', 'product_name': 'Cokelat hitam', 'price': 60},
                {'product_id': '34', 'product_name': 'Makaroni / pasta', 'price': 90},
                {'product_id': '35', 'product_name': 'Linum (noda)', 'price': 60},
                {'product_id': '36', 'product_name': 'Kombucha (bh fermentasi)', 'price': 251},
                {'product_id': '37', 'product_name': 'Daging domba', 'price': 559},
                {'product_id': '38', 'product_name': 'Jus jeruk', 'price': 76},
                {'product_id': '39', 'product_name': 'Bulak (bot bundar seperti bagel)', 'price': 45},
                {'product_id': '40', 'product_name': 'Roti', 'price': 40},
                {'product_id': '41', 'product_name': 'Air berkarbonasi (soda air)', 'price': 70},
                {'product_id': '42', 'product_name': 'Kacang polong', 'price': 43},
                {'product_id': '43', 'product_name': 'Kopi tanpa kafein', 'price': 400},
                {'product_id': '44', 'product_name': 'Permen jelly / gummy', 'price': 70},
                {'product_id': '45', 'product_name': 'Teh hijau daun', 'price': 43},
                {'product_id': '46', 'product_name': 'Biskuit / kue kecil', 'price': 60},
                {'product_id': '47', 'product_name': 'Kris kismis (kue khas Rusia)', 'price': 51},
                {'product_id': '48', 'product_name': 'Teh hitam celup (herbal khas Rusia)', 'price': 54},
                {'product_id': '49', 'product_name': 'Buah kering', 'price': 55},
                {'product_id': '50', 'product_name': 'Teh dingin', 'price': 35},
                {'product_id': '51', 'product_name': 'Ikan asap', 'price': 195},
                {'product_id': '52', 'product_name': 'Kvasus (minuman fermentasi berbasis roti)', 'price': 76},
                {'product_id': '53', 'product_name': 'Tepung', 'price': 78},
                {'product_id': '54', 'product_name': 'Kentang kentas', 'price': 120},
                {'product_id': '55', 'product_name': 'Sarden asap kalengan', 'price': 150},
                {'product_id': '56', 'product_name': 'Sosis', 'price': 150},
                {'product_id': '57', 'product_name': 'Daging babi', 'price': 450},
                {'product_id': '58', 'product_name': 'Serai', 'price': 70},
                {'product_id': '59', 'product_name': 'Minyak wijen', 'price': 250},
                {'product_id': '60', 'product_name': 'Cokelat putih', 'price': 60},
                {'product_id': '61', 'product_name': 'Madu', 'price': 380},
                {'product_id': '62', 'product_name': 'Jus apel', 'price': 120},
                {'product_id': '63', 'product_name': 'Susu kental manis', 'price': 39},
                {'product_id': '64', 'product_name': 'Nanas', 'price': 200},
                {'product_id': '65', 'product_name': 'Pisang', 'price': 100},
                {'product_id': '66', 'product_name': 'Daging sapi', 'price': 370},
                {'product_id': '67', 'product_name': 'Garam', 'price': 67},
                {'product_id': '68', 'product_name': 'Ikan kering (kering tanpa dimasak)', 'price': 119},
                {'product_id': '69', 'product_name': 'Minuman cranberry', 'price': 175},
                {'product_id': '70', 'product_name': 'Minyak bunga matahari', 'price': 75},
                {'product_id': '71', 'product_name': 'Apel', 'price': 75},
                {'product_id': '72', 'product_name': 'Pir', 'price': 65},
                {'product_id': '73', 'product_name': 'Roti pisih', 'price': 15},
                {'product_id': '74', 'product_name': 'Aren', 'price': 80},
                {'product_id': '75', 'product_name': 'Jus nanas', 'price': 120},
                {'product_id': '76', 'product_name': 'Teh hitam celup', 'price': 56},
                {'product_id': '77', 'product_name': 'Avam', 'price': 299},
                {'product_id': '78', 'product_name': 'Kue muffin / bolu kecil', 'price': 70},
                {'product_id': '79', 'product_name': 'Teh herbal celup', 'price': 65},
                {'product_id': '80', 'product_name': 'Permen karet', 'price': 50},
                {'product_id': '81', 'product_name': 'Cuka', 'price': 30},
                {'product_id': '82', 'product_name': 'Lavash (roti tipis khas Kaukasus)', 'price': 35},
                {'product_id': '83', 'product_name': 'Wafer', 'price': 50},
                {'product_id': '84', 'product_name': 'Jeruk mandarin', 'price': 90},
                {'product_id': '85', 'product_name': 'Selai buah', 'price': 200},
                {'product_id': '86', 'product_name': 'Tomat', 'price': 45},
                {'product_id': '87', 'product_name': 'Daging sapi muda', 'price': 398}
            ];
            
                const productsGrid = document.querySelector('.products-grid');
                productsGrid.innerHTML = '';

                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.dataset.id = product.product_id;
                    productCard.innerHTML = `
                        <h3>${product.product_name}</h3>
                        <p>Price: $${product.price}</p>
                        <div class="quantity-controls" style="display: none;">
                            <button class="quantity-minus">-</button>
                            <span class="quantity">1</span>
                            <button class="quantity-plus">+</button>
                        </div>
                    `;
                    
                    // Show quantity controls when product is selected
                    productCard.addEventListener('click', function() {
                        this.classList.toggle('selected');
                        const quantityControls = this.querySelector('.quantity-controls');
                        quantityControls.style.display = this.classList.contains('selected') ? 'block' : 'none';
                        updateConfirmButton();
                    });
                    
                    // Quantity adjustment buttons
                    const minusBtn = productCard.querySelector('.quantity-minus');
                    const plusBtn = productCard.querySelector('.quantity-plus');
                    const quantityDisplay = productCard.querySelector('.quantity');
                    
                    minusBtn.addEventListener('click', function(e) {
                        e.stopPropagation(); // Prevent triggering the card click event
                        let currentQty = parseInt(quantityDisplay.textContent);
                        if (currentQty > 1) {
                            quantityDisplay.textContent = currentQty - 1;
                            updateConfirmButton();
                        }
                    });
                    
                    plusBtn.addEventListener('click', function(e) {
                        e.stopPropagation(); // Prevent triggering the card click event
                        let currentQty = parseInt(quantityDisplay.textContent);
                        quantityDisplay.textContent = currentQty + 1;
                        updateConfirmButton();
                    });
                    
                    productsGrid.appendChild(productCard);
                });
        });
    }
    
    // View Orders Button
    const viewOrdersBtn = document.getElementById('view-orders-btn');
    if (viewOrdersBtn) {
        viewOrdersBtn.addEventListener('click', function() {
            const modal = document.getElementById('orders-modal');
            modal.classList.remove('hidden');
            
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            const userOrders = orders.filter(order => order.userId === currentUser.id);
            
            const ordersList = document.getElementById('orders-list');
            ordersList.innerHTML = '';
            
            if (userOrders.length === 0) {
                ordersList.innerHTML = '<p>You have no orders yet.</p>';
                return;
            }
            
            userOrders.forEach(order => {
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.innerHTML = `
                    <p><strong>Order ID:</strong> ${order.orderId}</p>
                    <p><strong>Date:</strong> ${order.date}</p>
                    <p><strong>Status:</strong> <span class="order-status ${order.status === 'delivered' ? 'status-delivered' : 'status-pending'}">${order.status}</span></p>
                    <p><strong>Courier:</strong> ${order.courierName || 'Not assigned yet'}</p>
                `;
                
                ordersList.appendChild(orderItem);
            });
        });
    }
    
    // Confirm Order Button
    const confirmOrderBtn = document.getElementById('confirm-order-btn');
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', function() {
            const selectedProducts = Array.from(document.querySelectorAll('.product-card.selected'));
            if (selectedProducts.length === 0) return;
            
            const products = [
                {'product_id': '1', 'product_name': 'Gula', 'price': 150},
                {'product_id': '2', 'product_name': 'Teh hijau celup', 'price': 80},
                {'product_id': '3', 'product_name': 'Air mineral botol', 'price': 50},
                {'product_id': '4', 'product_name': 'Pepsin koras', 'price': 40},
                {'product_id': '5', 'product_name': 'Kopi 3-in-1', 'price': 15},
                {'product_id': '6', 'product_name': 'Crocodile / kerupuk roti', 'price': 25},
                {'product_id': '7', 'product_name': 'Kopi hitam', 'price': 355},
                {'product_id': '8', 'product_name': 'Roti kering kecil berbentuk cincin', 'price': 30},
                {'product_id': '9', 'product_name': 'Teh hitam celup', 'price': 84},
                {'product_id': '10', 'product_name': 'Teh bunga melati', 'price': 40},
                {'product_id': '11', 'product_name': 'Minyak biji rami', 'price': 200},
                {'product_id': '12', 'product_name': 'Anggur', 'price': 278},
                {'product_id': '13', 'product_name': 'Kaviar', 'price': 800},
                {'product_id': '14', 'product_name': 'Mayones', 'price': 60},
                {'product_id': '15', 'product_name': 'Minyak zaitun', 'price': 450},
                {'product_id': '16', 'product_name': 'Semangka', 'price': 120},
                {'product_id': '17', 'product_name': 'Minuman lingonberry', 'price': 190},
                {'product_id': '18', 'product_name': 'Susu tomat', 'price': 58},
                {'product_id': '19', 'product_name': 'Ikan asin', 'price': 180},
                {'product_id': '20', 'product_name': 'Roti panjang (bagus bagus)', 'price': 50},
                {'product_id': '21', 'product_name': 'Kopi bubuk', 'price': 283},
                {'product_id': '22', 'product_name': 'Jus buah campuran', 'price': 120},
                {'product_id': '23', 'product_name': 'Yogurt', 'price': 45},
                {'product_id': '24', 'product_name': 'Jus jeruk', 'price': 120},
                {'product_id': '25', 'product_name': 'Kopi instant', 'price': 150},
                {'product_id': '26', 'product_name': 'Kopi klasik', 'price': 70},
                {'product_id': '27', 'product_name': 'Teh herbal daun', 'price': 121},
                {'product_id': '28', 'product_name': 'Krim (cream)', 'price': 75},
                {'product_id': '29', 'product_name': 'Minuman blueberry', 'price': 170},
                {'product_id': '30', 'product_name': 'Minuman energi', 'price': 140},
                {'product_id': '31', 'product_name': 'Gandum kuda (buckwheat)', 'price': 67},
                {'product_id': '32', 'product_name': 'Oat / havermout', 'price': 55},
                {'product_id': '33', 'product_name': 'Cokelat hitam', 'price': 60},
                {'product_id': '34', 'product_name': 'Makaroni / pasta', 'price': 90},
                {'product_id': '35', 'product_name': 'Linum (noda)', 'price': 60},
                {'product_id': '36', 'product_name': 'Kombucha (bh fermentasi)', 'price': 251},
                {'product_id': '37', 'product_name': 'Daging domba', 'price': 559},
                {'product_id': '38', 'product_name': 'Jus jeruk', 'price': 76},
                {'product_id': '39', 'product_name': 'Bulak (bot bundar seperti bagel)', 'price': 45},
                {'product_id': '40', 'product_name': 'Roti', 'price': 40},
                {'product_id': '41', 'product_name': 'Air berkarbonasi (soda air)', 'price': 70},
                {'product_id': '42', 'product_name': 'Kacang polong', 'price': 43},
                {'product_id': '43', 'product_name': 'Kopi tanpa kafein', 'price': 400},
                {'product_id': '44', 'product_name': 'Permen jelly / gummy', 'price': 70},
                {'product_id': '45', 'product_name': 'Teh hijau daun', 'price': 43},
                {'product_id': '46', 'product_name': 'Biskuit / kue kecil', 'price': 60},
                {'product_id': '47', 'product_name': 'Kris kismis (kue khas Rusia)', 'price': 51},
                {'product_id': '48', 'product_name': 'Teh hitam celup (herbal khas Rusia)', 'price': 54},
                {'product_id': '49', 'product_name': 'Buah kering', 'price': 55},
                {'product_id': '50', 'product_name': 'Teh dingin', 'price': 35},
                {'product_id': '51', 'product_name': 'Ikan asap', 'price': 195},
                {'product_id': '52', 'product_name': 'Kvasus (minuman fermentasi berbasis roti)', 'price': 76},
                {'product_id': '53', 'product_name': 'Tepung', 'price': 78},
                {'product_id': '54', 'product_name': 'Kentang kentas', 'price': 120},
                {'product_id': '55', 'product_name': 'Sarden asap kalengan', 'price': 150},
                {'product_id': '56', 'product_name': 'Sosis', 'price': 150},
                {'product_id': '57', 'product_name': 'Daging babi', 'price': 450},
                {'product_id': '58', 'product_name': 'Serai', 'price': 70},
                {'product_id': '59', 'product_name': 'Minyak wijen', 'price': 250},
                {'product_id': '60', 'product_name': 'Cokelat putih', 'price': 60},
                {'product_id': '61', 'product_name': 'Madu', 'price': 380},
                {'product_id': '62', 'product_name': 'Jus apel', 'price': 120},
                {'product_id': '63', 'product_name': 'Susu kental manis', 'price': 39},
                {'product_id': '64', 'product_name': 'Nanas', 'price': 200},
                {'product_id': '65', 'product_name': 'Pisang', 'price': 100},
                {'product_id': '66', 'product_name': 'Daging sapi', 'price': 370},
                {'product_id': '67', 'product_name': 'Garam', 'price': 67},
                {'product_id': '68', 'product_name': 'Ikan kering (kering tanpa dimasak)', 'price': 119},
                {'product_id': '69', 'product_name': 'Minuman cranberry', 'price': 175},
                {'product_id': '70', 'product_name': 'Minyak bunga matahari', 'price': 75},
                {'product_id': '71', 'product_name': 'Apel', 'price': 75},
                {'product_id': '72', 'product_name': 'Pir', 'price': 65},
                {'product_id': '73', 'product_name': 'Roti pisih', 'price': 15},
                {'product_id': '74', 'product_name': 'Aren', 'price': 80},
                {'product_id': '75', 'product_name': 'Jus nanas', 'price': 120},
                {'product_id': '76', 'product_name': 'Teh hitam celup', 'price': 56},
                {'product_id': '77', 'product_name': 'Avam', 'price': 299},
                {'product_id': '78', 'product_name': 'Kue muffin / bolu kecil', 'price': 70},
                {'product_id': '79', 'product_name': 'Teh herbal celup', 'price': 65},
                {'product_id': '80', 'product_name': 'Permen karet', 'price': 50},
                {'product_id': '81', 'product_name': 'Cuka', 'price': 30},
                {'product_id': '82', 'product_name': 'Lavash (roti tipis khas Kaukasus)', 'price': 35},
                {'product_id': '83', 'product_name': 'Wafer', 'price': 50},
                {'product_id': '84', 'product_name': 'Jeruk mandarin', 'price': 90},
                {'product_id': '85', 'product_name': 'Selai buah', 'price': 200},
                {'product_id': '86', 'product_name': 'Tomat', 'price': 45},
                {'product_id': '87', 'product_name': 'Daging sapi muda', 'price': 398}
            ];
            
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            const couriers = JSON.parse(localStorage.getItem('couriers')) || [];
            
            // Find next courier (round-robin assignment)
            let nextCourierId = 1;
            if (couriers.length > 0) {
                if (orders.length > 0) {
                    const lastOrder = orders[orders.length - 1];
                    const lastCourierIndex = couriers.findIndex(c => c.id === lastOrder.courierId);
                    nextCourierId = couriers[(lastCourierIndex + 1) % couriers.length].id;
                } else {
                    nextCourierId = couriers[0].id;
                }
            }
            
            const courier = couriers.find(c => c.id === nextCourierId);
            
            const newOrder = {
                orderId: orders.length > 0 ? Math.max(...orders.map(o => o.orderId)) + 1 : 1,
                userId: currentUser.id,
                userName: currentUser.fullName,
                courierId: courier ? courier.id : null,
                courierName: courier ? courier.fullName : null,
                date: new Date().toLocaleString(),
                status: 'pending',
                products: selectedProducts.map(card => {
                    const productId = card.dataset.id;
                    const quantity = parseInt(card.querySelector('.quantity').textContent);
                    const product = products.find(p => p.product_id === productId);
                    return {
                        ...product, // Include all product properties
                        quantity: quantity // Add quantity to the product
                    };
                }),
                total: selectedProducts.reduce((sum, card) => {
                    const productId = card.dataset.id;
                    const quantity = parseInt(card.querySelector('.quantity').textContent);
                    const product = products.find(p => p.product_id === productId);
                    return sum + (product.price * quantity); // Multiply price by quantity
                }, 0)
            };
            
            orders.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            alert('Order placed successfully!');
            document.getElementById('order-modal').classList.add('hidden');
        });
    }
    
function updateConfirmButton() {
    const selectedProducts = document.querySelectorAll('.product-card.selected');
    let totalItems = 0;
    
    selectedProducts.forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        totalItems += quantity;
    });
    const confirmOrderBtn = document.getElementById('confirm-order-btn');
    confirmOrderBtn.disabled = totalItems === 0;
}

});