// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Registration page role switching
    const userBtn = document.getElementById('user-btn');
    const courierBtn = document.getElementById('courier-btn');
    const userForm = document.getElementById('user-form');
    const courierForm = document.getElementById('courier-form');
    
    if (userBtn && courierBtn && userForm && courierForm) {
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            userBtn.classList.add('active');
            courierBtn.classList.remove('active');
            userForm.classList.remove('hidden');
            courierForm.classList.add('hidden');
        });
        
        courierBtn.addEventListener('click', function(e) {
            e.preventDefault();
            courierBtn.classList.add('active');
            userBtn.classList.remove('active');
            courierForm.classList.remove('hidden');
            userForm.classList.add('hidden');
        });
    }
    
    // Modal close buttons
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').classList.add('hidden');
        });
    });
    
    // Click outside modal to close
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    });
    
    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('currentCourier');
            window.location.href = 'index.html';
        });
    }
});