const navbar = document.getElementById('navbar');

function loadNavbar() {
    const token = localStorage.getItem('token');
    navbar.innerHTML = token ?
        `<span>Welcome, ${localStorage.getItem('name')}</span>
        <a href="index.html">Home</a>
        <a href="dashboard.html">Dashboard</a>
        <button onclick="logout()">Logout</button>` :
        `<a href="index.html">Home</a>
        <a href="login.html">Login</a>
        <a href="register.html">Signup</a>`;
}
loadNavbar();

function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

// Register
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const res = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        Toastify({ text: data.message, duration: 3000 }).showToast();
        if (res.status === 201) window.location.href = 'login.html';
    });
}

// Login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const res = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.user.name);
            Toastify({ text: "Login Successful", duration: 3000 }).showToast();
            window.location.href = 'dashboard.html';
        } else {
            Toastify({ text: data.message, duration: 3000, style: { background: "red" } }).showToast();
        }
    });
}

// Dashboard
if (window.location.pathname.includes('dashboard.html')) {
    const token = localStorage.getItem('token');
    if (!token) {
        Toastify({ text: "Access Denied! Please log in first", duration: 3000, style: { background: "red" } }).showToast();
        window.location.href = 'login.html';
    } else {
        fetch('http://localhost:5000/api/protected', {
            headers: { Authorization: token }
        })
        .then(res => res.json())
        .then(data => {
            const productList = document.getElementById('productList');
            data.products.forEach(p => {
                const div = document.createElement('div');
                div.textContent = `${p.name}: ${p.sales} sales`;
                productList.appendChild(div);
            });

            const ctx = document.getElementById('salesChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.products.map(p => p.name),
                    datasets: [{
                        label: 'Sales',
                        data: data.products.map(p => p.sales),
                        backgroundColor: 'blue'
                    }]
                }
            });
        });
    }
}
