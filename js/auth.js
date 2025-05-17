// Initialize data storage if not exists
function initializeStorage() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
    if (!localStorage.getItem('couriers')) {
        localStorage.setItem('couriers', JSON.stringify([]));
    }
    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([]));
    }
}

// User Registration
document.addEventListener('DOMContentLoaded', function() {
    initializeStorage();
    
    const userForm = document.getElementById('user-form');
    if (userForm) {
        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const users = JSON.parse(localStorage.getItem('users'));
            const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
            
            const newUser = {
                id: newId,
                fullName: document.getElementById('user-fullname').value,
                gender: document.getElementById('user-gender').value,
                address: document.getElementById('user-address').value,
                birthDate: document.getElementById('user-birthdate').value,
                password: document.getElementById('user-password').value
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            alert(`Registration successful! Your user ID is ${newId}`);
            window.location.href = 'login.html';
        });
    }
    
    // Courier Registration
    const courierForm = document.getElementById('courier-form');
    if (courierForm) {
        courierForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const couriers = JSON.parse(localStorage.getItem('couriers'));
            const newId = couriers.length > 0 ? Math.max(...couriers.map(c => c.id)) + 1 : 1;
            
            const newCourier = {
                id: newId,
                fullName: document.getElementById('courier-fullname').value,
                gender: document.getElementById('courier-gender').value,
                birthDate: document.getElementById('courier-birthdate').value,
                password: document.getElementById('courier-password').value
            };
            
            couriers.push(newCourier);
            localStorage.setItem('couriers', JSON.stringify(couriers));
            
            alert(`Registration successful! Your courier ID is ${newId}`);
            window.location.href = 'login.html';
        });
    }
    
    // Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const role = document.getElementById('login-role').value;
            const id = document.getElementById('login-id').value;
            const password = document.getElementById('login-password').value;
            
            if (role === 'user') {
                const users = JSON.parse(localStorage.getItem('users'));
                const user = users.find(u => u.id === parseInt(id) && u.password === password);
                
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    window.location.href = 'user.html';
                } else {
                    alert('Invalid user ID or password');
                }
            } else if (role === 'courier') {
                const couriers = JSON.parse(localStorage.getItem('couriers'));
                const courier = couriers.find(c => c.id === parseInt(id) && c.password === password);
                
                if (courier) {
                    localStorage.setItem('currentCourier', JSON.stringify(courier));
                    window.location.href = 'courier.html';
                } else {
                    alert('Invalid courier ID or password');
                }
            }
        });
    }
});