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

// 調用sidebar.html並初始化子分類控制
document.addEventListener("DOMContentLoaded", function() {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            initSidebarMenu();  // 確保側邊欄加載完成後初始化子分類
        })
        .catch(error => console.error("Error loading sidebar:", error));
});

// 初始化側邊欄子分類的控制函數
function initSidebarMenu() {
    // 選擇所有帶有子分類的菜單項
    document.querySelectorAll('.sidebar .menu-item > a').forEach(function (menuLink) {
        menuLink.addEventListener('click', function (event) {
            event.preventDefault(); // 防止鏈接跳轉
            
            // 切換 'active' 類別以顯示/隱藏子分類
            const menuItem = this.parentElement;
            menuItem.classList.toggle('active');
        });
    });
}
