// 菜單懸浮js
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

// 調用siderbar.html在 menu.js 中添加
document.addEventListener("DOMContentLoaded", function() {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading sidebar:", error));
});
