// Preloader fade-out effect
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("page").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("page").style.display = "none";
        }, 1000); // Matches the transition time
    }, 2500); // 5 seconds delay before fade-out
});


document.getElementById('myButton').addEventListener('click', function() {
  window.location.href = '';
});

// dark & light mode switch 
function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
    var body = document.body;
    var isChecked = document.querySelector('.input').checked;

    if (isChecked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.remove('light-mode');
    }
}

function setMode(mode) {
    var body = document.body;

    if (mode === 'default') {
        body.classList.remove('light-mode', 'dark-mode');
        document.querySelector('.input').checked = false;
    } else if (mode === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.querySelector('.input').checked = false;
    } else if (mode === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.querySelector('.input').checked = true;
    }
}
// This js is for switch toggle.
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-navbar');
    var scrollImage = document.getElementById('scroll-image');
    var navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        header.classList.add('hide');
        navbar.classList.add('hide');
        scrollImage.classList.add('show-scroll-image');
    } else {
        header.classList.remove('hide');
        navbar.classList.remove('hide');
        scrollImage.classList.remove('show-scroll-image');
    }
});
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-navbar');
    var scrollImage = document.getElementById('scroll-image');
    var navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        header.classList.add('hide');
        scrollImage.classList.add('show-scroll-image');
        navbar.classList.add('show-scroll-items');
    } else {
        header.classList.remove('hide');
        scrollImage.classList.remove('show-scroll-image');
        navbar.classList.remove('show-scroll-items');
    }
});

 // JavaScript to handle adding the 'active' class on click
 document.querySelectorAll('.nav-icons a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelectorAll('.nav-icons a').forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            });
        });

        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            });
        });


        // beginning of phone screen
        const menuIcon = document.getElementById('menuIcon');
        const menuItems = document.getElementById('menuItems');
        const menuBar = document.getElementById('menuBar');

        // Toggle menu items when icon is clicked
        menuIcon.addEventListener('click', () => {
            if (menuItems.classList.contains('show')) {
                menuItems.classList.remove('show');
                menuItems.classList.add('hide');
                
                // Remove the 'hide' class after the animation completes
                setTimeout(() => {
                    menuItems.classList.remove('hide');
                    menuItems.style.visibility = 'hidden'; // Set visibility to hidden after animation
                }, 100); // Match duration with animation time
            } else {
                menuItems.style.visibility = 'visible'; // Set visibility to visible before showing
                menuItems.classList.add('show');
            }
        });

        // Close the menu if window is resized to larger than 768px
        window.addEventListener('resize', () => {
            if (window.innerWidth > 508) {
                menuItems.classList.remove('show');
                menuItems.classList.remove('hide');
                menuItems.style.visibility = 'hidden'; // Reset visibility on resize
            }
        });

        // Follow scrolling effect for the menu bar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                menuBar.classList.add('scrolled'); // Add class to scale up
            } else {
                menuBar.classList.remove('scrolled'); 
            }
        });
        
     
         // Key-value mapping
    const values = {
        1: `With over a decade in the oil, gas, and energy sectors, ALPHAMATIC ENERGY SERVICES has grown
            from a small fabrication yard to a leading EPC provider across Nigeria. Our journey is marked by
            consistent dedication to quality and client satisfaction, establishing us as a trusted industry
            partner. 
            Our experience enables us to navigate complex challenges with ease, providing practical, reliable
            solutions for each project. This depth of knowledge, combined with a strong commitment to
            excellence, allows us to deliver projects that meet the highest standards on time and within
            budget.`,
        2: `Our experience enables us to navigate complex challenges with ease, providing practical, reliable
            solutions for each project. This depth of knowledge, combined with a strong commitment to
            excellence, allows us to deliver projects that meet the highest standards on time and within
            budget.`,
        3: `With over a decade in the oil, gas, and energy sectors, ALPHAMATIC ENERGY SERVICES has grown
            from a small fabrication yard to a leading EPC provider across Nigeria. Our journey is marked by
            consistent dedication to quality and client satisfaction, establishing us as a trusted industry
            partner.`,
        4: `Our experience enables us to navigate complex challenges with ease, providing practical, reliable
            solutions for each project. This depth of knowledge, combined with a strong commitment to
            excellence, allows us to deliver projects that meet the highest standards on time and within
            budget.`,
    };

    // Get all key cells and the value display cell
    const keys = document.querySelectorAll('.key');
    const valueDisplay = document.getElementById('valueDisplay');

    // Add event listeners to keys
    keys.forEach((key) => {
        key.addEventListener('click', function () {
            // Remove active class from all keys
            keys.forEach((key) => key.classList.remove('active'));

            // Add active class to the clicked key
            this.classList.add('active');

            // Update the value display
            const valueKey = this.getAttribute('data-value');
            valueDisplay.textContent = values[valueKey];
        });
    });
        