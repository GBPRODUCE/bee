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



// JavaScript控制動態提示
        document.querySelector('.link-with-tooltip').addEventListener('mouseover', function(event) {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.display = 'block';
            tooltip.innerText = '填寫欄位:購買民眾資訊、公司行號名稱、型號、序號、保固期間、外觀。存檔列印:使用系統視窗列印、印表機選「另存PDF」，先下載再列印檔案避免跑版。';
        });
        document.querySelector('.link-with-tooltip').addEventListener('mousemove', function(event) {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.top = event.pageY + 10 + 'px';
            tooltip.style.left = event.pageX + 10 + 'px';
        });
        document.querySelector('.link-with-tooltip').addEventListener('mouseout', function() {
            document.getElementById('tooltip').style.display = 'none';
        });
