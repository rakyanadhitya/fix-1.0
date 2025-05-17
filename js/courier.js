document.addEventListener('DOMContentLoaded', function() {
    // Display courier info
    const currentCourier = JSON.parse(localStorage.getItem('currentCourier'));
    if (currentCourier && document.getElementById('courier-details')) {
        const courierDetails = document.getElementById('courier-details');
        courierDetails.innerHTML = `
            <p><strong>ID:</strong> ${currentCourier.id}</p>
            <p><strong>Name:</strong> ${currentCourier.fullName}</p>
            <p><strong>Gender:</strong> ${currentCourier.gender}</p>
            <p><strong>Birth Date:</strong> ${currentCourier.birthDate}</p>
        `;
    }
    
    // View Active Orders Button
    const viewActiveOrdersBtn = document.getElementById('view-active-orders-btn');
    if (viewActiveOrdersBtn) {
        viewActiveOrdersBtn.addEventListener('click', function() {
            const modal = document.getElementById('active-orders-modal');
            modal.classList.remove('hidden');
            
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            const activeOrders = orders.filter(order => 
                order.status === 'pending' && order.courierId === currentCourier.id
            );
            
            const ordersList = document.getElementById('active-orders-list');
            ordersList.innerHTML = '';
            
            if (activeOrders.length === 0) {
                ordersList.innerHTML = '<p>You have no active orders.</p>';
                return;
            }
            
            activeOrders.forEach(order => {
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.dataset.orderId = order.orderId;
                orderItem.innerHTML = `
                    <p><strong>Order ID:</strong> ${order.orderId}</p>
                    <p><strong>Customer:</strong> ${order.userName}</p>
                    <p><strong>Date:</strong> ${order.date}</p>
                    <p><strong>Total:</strong> $${order.total}</p>
                `;
                
                orderItem.addEventListener('click', function() {
                    showOrderDetails(order.orderId);
                });
                
                ordersList.appendChild(orderItem);
            });
        });
    }
    
    function showOrderDetails(orderId) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = orders.find(o => o.orderId === parseInt(orderId));
        
        if (!order) return;
        
        const detailsModal = document.getElementById('order-details-modal');
        const detailsContent = document.getElementById('order-details-content');
        
        detailsContent.innerHTML = `
            <p><strong>Order ID:</strong> ${order.orderId}</p>
            <p><strong>Customer:</strong> ${order.userName}</p>
            <p><strong>Date:</strong> ${order.date}</p>
            <p><strong>Status:</strong> <span class="order-status ${order.status === 'delivered' ? 'status-delivered' : 'status-pending'}">${order.status}</span></p>
            <p><strong>Total:</strong> $${order.total}</p>
            <h3>Products:</h3>
            <ul>
                ${order.products.map(p => `<li>${p.product_name} - $${p.price} x ${p.quantity} = $${p.price * p.quantity}</li>`).join('')}
            </ul>
        `;
        
        const completeBtn = document.getElementById('complete-order-btn');
        completeBtn.onclick = function() {
            order.status = 'delivered';
            localStorage.setItem('orders', JSON.stringify(orders));
            detailsModal.classList.add('hidden');
            document.getElementById('active-orders-modal').classList.add('hidden');
            alert('Order marked as delivered!');
        };
        
        detailsModal.classList.remove('hidden');
    }
});