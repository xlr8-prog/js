<script>
    <!-- side bar script -->
    // دالة لمحاكاة النقر
    function simulateClick(elem) {
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        return !elem.dispatchEvent(evt);
    }
    
    // دوال التنقل
    function goToHomePage() {
        console.log("Navigating to Home Page");
        document.getElementById("homePage").style.display = "block";
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "none";
        window.scrollTo(0, 0);
        hideSidebar();
    }
    
    function goToPage1() {
        console.log("Navigating to Rewards Page");
        document.getElementById("homePage").style.display = "none";
        document.getElementById("page1").style.display = "block";
        document.getElementById("page2").style.display = "none";
        window.scrollTo(0, 0);
        hideSidebar();
    }
    
    function goToPage2() {
        console.log("Navigating to Reward Details Page");
        document.getElementById("homePage").style.display = "none";
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
        window.scrollTo(0, 0);
        hideSidebar();
    }
    
    // دالة لإخفاء الشريط الجانبي
    function hideSidebar() {
        console.log("Attempting to hide sidebar");
        if (document.body.classList.contains('small-screen-sidebar-active')) {
            var navToggle = document.querySelector('.small-screens-sidebar-link a');
            if (navToggle) {
                console.log("Simulating click on nav toggle");
                simulateClick(navToggle);
            } else {
                console.log("Nav toggle not found, removing class manually");
                document.body.classList.remove('small-screen-sidebar-active');
            }
        } else {
            console.log("Sidebar not active, no action needed");
        }
    }
    
    // إعداد مستمعات الأحداث بعد الكود الأصلي
    document.addEventListener("DOMContentLoaded", function() {
        // Home
        document.getElementById("nav-home").addEventListener("click", function(e) {
            e.preventDefault();
            goToHomePage();
        });
    
        // Rewards
        document.getElementById("nav-rewards").addEventListener("click", function(e) {
            e.preventDefault();
            console.log("Rewards clicked");
            goToPage1();
        });
    
        // Giveaways
        document.getElementById("nav-giveaways").addEventListener("click", function(e) {
            e.preventDefault();
            goToHomePage();
        });
    
        // إزالة حدث jQuery الأصلي من #nav-rewards فقط
        if (typeof jQuery !== 'undefined') {
            $('#nav-rewards').off('click'); // إلغاء حدث jQuery على Rewards
        }
    });
    
    // ضمان ظهور الصفحة الرئيسية عند التحميل
    window.onload = function() {
        document.getElementById("homePage").style.display = "block";
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "none";
        window.scrollTo(0, 0);
    
        // استرجاع بيانات المكافأة إذا وجدت
        try {
            const savedData = localStorage.getItem('selectedReward');
            if (savedData) {
                const data = JSON.parse(savedData);
                const selectedImage = document.getElementById('selected-image');
                const selectedTitle = document.getElementById('selected-title');
                const selectedDescription = document.getElementById('selected-description');
                const rewardCard = document.getElementById('reward-card');
    
                if (selectedImage) selectedImage.src = data.src || '';
                if (selectedTitle) selectedTitle.textContent = data.title || 'بدون عنوان';
                if (selectedDescription) selectedDescription.textContent = data.description || 'بدون وصف';
                if (rewardCard) rewardCard.style.background = data.background || '#fff';
            }
        } catch (error) {
            console.error('خطأ في استرجاع البيانات:', error);
        }
    };
    
    // دالة selectReward
    function selectReward(link) {
        try {
            const card = link.closest('.card');
            if (!card) return;
    
            const img = link.querySelector('img');
            if (!img) return;
    
            const src = img.src || '';
            const title = card.querySelector('.title')?.textContent || 'بدون عنوان';
            const type = card.querySelector('.redeem-type-text')?.textContent || 'Gift Card';
            const description = card.querySelector('.description')?.textContent || 'بدون وصف';
            const background = card.getAttribute('data-background') || '#fff';
    
            const rewardData = { src, title, type, description, background };
            localStorage.setItem('selectedReward', JSON.stringify(rewardData));
    
            const data = JSON.parse(localStorage.getItem('selectedReward') || '{}');
            const selectedImage = document.getElementById('selected-image');
            const selectedTitle = document.getElementById('selected-title');
            const selectedDescription = document.getElementById('selected-description');
            const rewardCard = document.getElementById('reward-card');
            const payoutInputs = document.getElementById('payout-inputs');
            const actionButton = document.getElementById('action-button');
            const buttonText = document.getElementById('button-text');
    
            if (selectedImage) selectedImage.src = data.src || '';
            if (selectedTitle) selectedTitle.textContent = data.title;
            if (selectedDescription) selectedDescription.textContent = data.description;
            if (rewardCard) rewardCard.style.background = data.background;
    
            if (data.type.includes('Payout')) {
                payoutInputs.style.display = 'block';
                buttonText.textContent = 'Continue';
            } else {
                payoutInputs.style.display = 'none';
                buttonText.textContent = 'Redeem';
            }
    
            goToPage2();
        } catch (error) {
            console.error('خطأ في دالة selectReward:', error);
        }
    }
</script>
