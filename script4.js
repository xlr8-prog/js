    // script 4
    // دالة للانتقال إلى الصفحة 1
    function goToPage1() {
        document.getElementById("homePage").style.display = "none";
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        window.scrollTo(0, 0);
    }

    // دالة للانتقال إلى الصفحة 2
    function goToPage2() {
        document.getElementById("homePage").style.display = "none";
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
        window.scrollTo(0, 0);
    }
    window.onload = function() {
            window.scrollTo(0, 0);
        };
        window.onload = function() {
            document.getElementById("homePage").style.display = "block";
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "none";
            window.scrollTo(0, 0); // إعادة التمرير إلى الأعلى
        };
// zohair
        document.addEventListener('DOMContentLoaded', function() {
            const pages = document.querySelectorAll('.page2-content');
            pages.forEach(page => {
                page.style.position = 'absolute';
                page.style.top = '0';
                page.style.left = '0';
                page.style.width = '100%';
                page.style.height = '100vh';
                page.style.overflow = 'auto';
                page.style.zIndex = '10';
            });
        });
// zohair
        function adjustPagePosition() {
            const currentPage = document.querySelector('.page2-content[style*="display: block"]');
            if (currentPage) {
                currentPage.style.top = '0';
                currentPage.style.left = '0';
            }
        }

        // استدعاء الدالة بعد كل تبديل


    // دالة للعودة إلى الصفحة الرئيسية
    // function goToHomePage() {
    //     document.getElementById("homePage").style.display = "block";
    //     document.getElementById("page1").style.display = "none";
    //     document.getElementById("page2").style.display = "none";
    // }

    // // ضمان ظهور الصفحة الرئيسية عند التحميل
    // window.onload = function() {
    //     document.getElementById("homePage").style.display = "block";
    //     document.getElementById("page1").style.display = "none";
    //     document.getElementById("page2").style.display = "none";
    // };

