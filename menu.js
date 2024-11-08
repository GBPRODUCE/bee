        function toggleMenu() {
            const sidebar = document.querySelector('.sidebar');
            const mainContent = document.querySelector('.main-content');
            
            if (sidebar.style.left === '0px') {
                sidebar.style.left = '-200px';
                mainContent.style.marginLeft = '0';
            } else {
                sidebar.style.left = '0px';
                mainContent.style.marginLeft = '200px';
            }
        }
