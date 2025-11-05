// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    
    // 初始化语言
    const savedLang = getCurrentLanguage();
    updateLanguageButtons(savedLang);
    renderPage();
});

// 初始化页面内容
function initializePage() {
    // 设置品牌名称
    document.getElementById('brand-logo').textContent = CONFIG.brand.name;
    document.getElementById('footer-brand').textContent = CONFIG.brand.name;
    
    // 设置外部链接
    document.getElementById('models-link').href = CONFIG.links.models;
    document.getElementById('footer-models-link').href = CONFIG.links.models;
    document.getElementById('terms-link').href = CONFIG.links.terms;
}

// 渲染页面内容（支持多语言）
function renderPage() {
    // 更新导航栏
    updateNavigation();
    
    // 设置 Hero 区域
    document.getElementById('hero-title').textContent = t('hero.title');
    document.getElementById('hero-description').textContent = t('hero.description');
    
    // 更新 Hero 按钮
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons[0]) heroButtons[0].textContent = t('hero.viewPricing');
    if (heroButtons[1]) heroButtons[1].textContent = t('hero.download');
    
    // 设置促销横幅
    const promoBanner = document.getElementById('promo-banner');
    if (CONFIG.promotion.enabled) {
        document.getElementById('promo-text').textContent = t('promotion.text');
        promoBanner.classList.remove('hidden');
    } else {
        promoBanner.classList.add('hidden');
    }
    
    // 渲染特色优势
    renderBenefits();
    
    // 渲染特色功能
    renderFeatures();
    
    // 渲染定价方案
    renderPricing();
    
    // 渲染下载区域
    renderDownloadSection();
    
    // 渲染 FAQ
    renderFAQ();
    
    // 更新页脚
    updateFooter();
}

// 更新导航栏
function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks[0]) navLinks[0].textContent = t('nav.pricing');
    if (navLinks[1]) navLinks[1].textContent = t('nav.features');
    if (navLinks[2]) navLinks[2].textContent = t('nav.models');
    if (navLinks[3]) navLinks[3].textContent = t('nav.faq');
}

// 渲染特色优势
function renderBenefits() {
    const benefitsSection = document.querySelector('.featured-benefits h2');
    if (benefitsSection) {
        benefitsSection.textContent = t('benefits.title');
    }
    
    const benefitsList = document.getElementById('benefits-list');
    benefitsList.innerHTML = '';
    t('benefits.list').forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        li.classList.add('fade-in');
        benefitsList.appendChild(li);
    });
}

// 渲染特色功能
function renderFeatures() {
    const featuresTitle = document.querySelector('.why-choose h2');
    if (featuresTitle) {
        featuresTitle.textContent = t('whyChoose.title');
    }
    
    const featuresGrid = document.getElementById('features-grid');
    featuresGrid.innerHTML = '';
    t('whyChoose.features').forEach(feature => {
        const card = document.createElement('div');
        card.className = 'feature-card fade-in';
        card.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresGrid.appendChild(card);
    });
}

// 渲染定价方案
function renderPricing() {
    const pricingTitle = document.querySelector('.pricing h2');
    if (pricingTitle) {
        pricingTitle.textContent = t('pricing.title');
    }
    
    const pricingGrid = document.getElementById('pricing-grid');
    pricingGrid.innerHTML = '';
    
    const plans = t('pricing.plans');
    CONFIG.plans.forEach((plan, index) => {
        const planData = plans[index];
        const card = document.createElement('div');
        card.className = `pricing-card ${plan.recommended ? 'recommended' : ''} fade-in`;
        
        // 设置推荐标签文本
        if (plan.recommended) {
            card.setAttribute('data-recommended-text', t('pricing.recommended'));
        }
        
        const featuresHTML = planData.features.map(f => `<li>${f}</li>`).join('');
        
        card.innerHTML = `
            <div class="plan-name">${planData.name}</div>
            <div class="plan-quota">${planData.quota}</div>
            <div class="plan-price">${planData.price}</div>
            <ul class="plan-features">
                ${featuresHTML}
            </ul>
            <button class="btn btn-primary plan-buy-btn" data-plan="${plan.id}">${t('pricing.buyButton')}</button>
        `;
        pricingGrid.appendChild(card);
    });
}

// 渲染下载区域
function renderDownloadSection() {
    const downloadTitle = document.querySelector('.download-section h2');
    const downloadSubtitle = document.querySelector('.download-section .section-subtitle');
    
    if (downloadTitle) downloadTitle.textContent = t('downloadSection.title');
    if (downloadSubtitle) downloadSubtitle.textContent = t('downloadSection.subtitle');
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons[0]) tabButtons[0].textContent = t('downloadSection.windows');
    if (tabButtons[1]) tabButtons[1].textContent = t('downloadSection.macos');
    
    const downloadInfo = document.querySelector('.download-info');
    if (downloadInfo) downloadInfo.textContent = t('downloadSection.info');
    
    // 更新下载按钮
    const activeTab = document.querySelector('.tab-btn.active');
    const os = activeTab ? activeTab.dataset.os : 'windows';
    updateDownloadButton(os);
}

// 渲染 FAQ
function renderFAQ() {
    const faqTitle = document.querySelector('.faq-section h2');
    if (faqTitle) {
        faqTitle.textContent = t('faqSection.title');
    }
    
    const faqList = document.getElementById('faq-list');
    faqList.innerHTML = '';
    t('faqSection.questions').forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item fade-in';
        faqItem.innerHTML = `
            <div class="faq-question">${item.question}</div>
            <div class="faq-answer">${item.answer}</div>
        `;
        faqList.appendChild(faqItem);
    });
    
    // 重新绑定 FAQ 点击事件
    setupFAQListeners();
}

// 更新页脚
function updateFooter() {
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks[0]) footerLinks[0].textContent = t('nav.pricing');
    if (footerLinks[1]) footerLinks[1].textContent = t('nav.features');
    if (footerLinks[2]) footerLinks[2].textContent = t('nav.models');
    if (footerLinks[3]) footerLinks[3].textContent = t('nav.faq');
    if (footerLinks[4]) footerLinks[4].textContent = t('footer.termsOfService');
    
    const copyright = document.querySelector('.footer p');
    if (copyright) {
        copyright.innerHTML = `&copy; 2025 <span id="footer-brand">${CONFIG.brand.name}</span>. ${t('footer.copyright')}`;
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 语言切换按钮
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const newLang = this.dataset.lang;
            setCurrentLanguage(newLang);
            updateLanguageButtons(newLang);
            renderPage();
        });
    });
    
    // 下载标签页切换
    let currentOS = 'windows';
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentOS = this.dataset.os;
            updateDownloadButton(currentOS);
        });
    });
    
    // 下载按钮
    const downloadBtn = document.getElementById('download-btn');
    updateDownloadButton('windows');
    downloadBtn.addEventListener('click', function() {
        const url = currentOS === 'windows' 
            ? CONFIG.download.windowsUrl 
            : CONFIG.download.macosUrl;
        
        console.log('Downloading from:', url);
        window.location.href = url;
    });
    
    // 购买按钮
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('plan-buy-btn')) {
            const planId = e.target.dataset.plan;
            handlePurchase(planId);
        }
    });
    
    // FAQ 折叠/展开
    setupFAQListeners();
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80; // 导航栏高度
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// 更新语言按钮状态
function updateLanguageButtons(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// 设置 FAQ 监听器
function setupFAQListeners() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        // 移除旧的监听器（如果有）
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
    });
    
    // 添加新的监听器
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            
            // 关闭所有其他项
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            
            // 切换当前项
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });
}

// 更新下载按钮
function updateDownloadButton(os) {
    const downloadBtn = document.getElementById('download-btn');
    const osName = os === 'windows' ? t('downloadSection.windows') : t('downloadSection.macos');
    downloadBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        ${t('downloadSection.buttonFor')} ${osName}
    `;
}

// 处理购买
function handlePurchase(planId) {
    const paymentUrls = {
        '1day': CONFIG.payment.plan1Day,
        '7day': CONFIG.payment.plan7Day,
        '30day': CONFIG.payment.plan30Day,
    };
    
    const url = paymentUrls[planId];
    if (url) {
        console.log('Redirecting to payment:', url);
        window.location.href = url;
    } else {
        console.error('Invalid plan ID:', planId);
    }
}

// 添加滚动动画效果
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 导航栏背景透明度
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
    
    lastScrollTop = scrollTop;
});

// 观察元素进入视口时添加动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有带有 fade-in 类的元素
window.addEventListener('load', function() {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

