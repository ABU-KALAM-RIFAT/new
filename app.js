const menuBtn = document.querySelector('.menu-btn');
        const navItem = document.querySelector('.nav-item');

        menuBtn.addEventListener('click', function(){
            navItem.classList.toggle('active');
        });