function showMenu() {
    document.getElementById("mobile-nav-menu").style.display = "block";
    document.getElementById("menu-toggle-show").style.display = "none";
    document.getElementById("menu-toggle-hide").style.display = "block";
}

function hideMenu() {
    document.getElementById("mobile-nav-menu").style.display = "none";
    document.getElementById("menu-toggle-show").style.display = "block";
    document.getElementById("menu-toggle-hide").style.display = "none";
}


// Show the header based on the user's device type
// Mobile devices
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('header').style.display = 'none';
    document.getElementById('mobile-header').style.display = 'block';

    document.getElementById("menu-toggle-show").style.display = 'block';
    document.getElementById("menu-toggle-hide").style.display = 'none';
}

// DESKTOP AND TABLET
else {
    document.getElementById('header').style.display = 'block';
    document.getElementById('mobile-header').style.display = 'none';
}


// Menu dropdown functionality
