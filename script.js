// تهيئة التطبيق
class TechServiceApp {
    constructor() {
        this.config = {
            phone: '+201275817812',
            email: 'F3lcoCenter@gmail.com',
            whatsapp: 'https://wa.me/201275817812',
            facebook: 'https://facebook.com',
            location: 'الأقصر البغدادي - بجوار مكتبة التميز',
            address: 'الطريق السياحي، البغدادي، الأقصر'
        };
        
        this.state = {
            userData: null,
            cookiesAccepted: false,
            currentOrder: null,
            chatOpen: false,
            csrfToken: this.generateCSRFToken(),
            portfolioItems: [],
            currentFilter: 'all',
            currentImageIndex: 0,
            sparkInterval: null,
            userRating: null,
            showRatingWidget: false
        };
        
        this.portfolioData = [
            {
                id: 1,
                category: 'computer',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><rect x="100" y="100" width="600" height="400" rx="20" fill="%2310B981"/><rect x="150" y="150" width="500" height="300" fill="%230F172A"/><circle cx="400" cy="300" r="50" fill="%23F59E0B"/><text x="400" y="470" font-family="Arial" font-size="24" fill="white" text-anchor="middle">صيانة كمبيوتر</text></svg>',
                title: 'صيانة لاب توب Dell',
                description: 'تحديث BIOS وإصلاح مشاكل التشغيل'
            },
            {
                id: 2,
                category: 'playstation',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><rect x="150" y="150" width="500" height="300" rx="30" fill="%23003791"/><circle cx="300" cy="300" r="40" fill="white"/><circle cx="500" cy="300" r="40" fill="white"/><rect x="280" y="280" width="40" height="40" rx="10" fill="%23003791"/><rect x="480" y="280" width="40" height="40" rx="10" fill="%23003791"/><text x="400" y="500" font-family="Arial" font-size="24" fill="white" text-anchor="middle">صيانة بلايستيشن</text></svg>',
                title: 'صيانة PS5',
                description: 'تحديث نظام وتنظيف داخلي كامل'
            },
            {
                id: 3,
                category: 'mobile',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><rect x="200" y="100" width="400" height="500" rx="40" fill="%2310B981"/><rect x="220" y="120" width="360" height="460" rx="30" fill="%230F172A"/><circle cx="400" cy="200" r="20" fill="%2310B981"/><rect x="300" y="300" width="200" height="100" rx="20" fill="%23F59E0B"/><text x="400" y="380" font-family="Arial" font-size="20" fill="white" text-anchor="middle">موبايل</text><text x="400" y="500" font-family="Arial" font-size="24" fill="white" text-anchor="middle">صيانة هواتف</text></svg>',
                title: 'صيانة هواتف متنوعة',
                description: 'إصلاح مشاكل السوفتوير لأجهزة iOS و Android'
            },
            {
                id: 4,
                category: 'receiver',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><rect x="150" y="150" width="500" height="300" rx="20" fill="%231E3A8A"/><rect x="200" y="200" width="400" height="200" fill="%230F172A"/><circle cx="400" cy="300" r="30" fill="%23F59E0B"/><rect x="350" y="140" width="100" height="20" rx="10" fill="%231E3A8A"/><text x="400" y="470" font-family="Arial" font-size="24" fill="white" text-anchor="middle">تحديث ريسيفر</text></svg>',
                title: 'تحديث ريسيفر',
                description: 'تحديث فيرموير ريسيفر لمشاهدة القنوات'
            },
            {
                id: 5,
                category: 'design',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><circle cx="400" cy="250" r="100" fill="%23EC4899"/><rect x="250" y="400" width="300" height="100" rx="20" fill="%23F59E0B"/><text x="400" y="460" font-family="Arial" font-size="32" fill="white" text-anchor="middle">تصميم</text><text x="400" y="500" font-family="Arial" font-size="24" fill="white" text-anchor="middle">تصميم هوية بصرية</text></svg>',
                title: 'تصميم هوية بصرية',
                description: 'تصميم شعار وبطاقات عمل لشركة تقنية'
            },
            {
                id: 6,
                category: 'computer',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><rect x="150" y="150" width="500" height="300" rx="20" fill="%23059669"/><path d="M200,200 L600,400 M200,400 L600,200" stroke="%23F59E0B" stroke-width="10"/><circle cx="400" cy="300" r="50" fill="%2310B981" opacity="0.5"/><text x="400" y="500" font-family="Arial" font-size="24" fill="white" text-anchor="middle">استعادة بيانات</text></svg>',
                title: 'استعادة بيانات مفقودة',
                description: 'استرجاع ملفات من قرص صلب تالف'
            }
        ];
        
        this.init();
    }
    
    init() {
        this.setupDOM();
        this.loadUserData();
        this.setupEventListeners();
        this.setupServiceWorker();
        this.setupAnalytics();
        this.initPortfolio();
        this.startSparkEffect();
    }
    
    setupDOM() {
        // تحديث السنة الحالية
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // إعداد CSRF token
        document.getElementById('csrfToken').value = this.state.csrfToken;
        
        // إعداد تاريخ الحجز
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.min = new Date().toISOString().split('T')[0];
            dateInput.value = tomorrow.toISOString().split('T')[0];
        }
    }
    
    loadUserData() {
        try {
            const userData = localStorage.getItem('tech_service_user');
            const cookies = localStorage.getItem('tech_service_cookies');
            const orders = localStorage.getItem('tech_service_orders');
            const rating = localStorage.getItem('tech_service_rating');
            
            this.state.userData = userData ? JSON.parse(userData) : {};
            this.state.cookiesAccepted = cookies ? JSON.parse(cookies) : false;
            this.state.orders = orders ? JSON.parse(orders) : [];
            this.state.userRating = rating ? JSON.parse(rating) : null;
            
            if (!this.state.cookiesAccepted) {
                setTimeout(() => this.showCookieConsent(), 2000);
            }
            
            this.loadOrderHistory();
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }
    
    setupEventListeners() {
        // شريط التمرير
        window.addEventListener('scroll', () => this.handleScroll());
        
        // قائمة الجوال
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', (event) => {
            const navLinks = document.getElementById('navLinks');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            if (navLinks && navLinks.classList.contains('active') && 
                mobileMenuBtn && !navLinks.contains(event.target) && 
                !mobileMenuBtn.contains(event.target)) {
                this.toggleMobileMenu();
            }
        });
        
        // تحديث الرابط النشط
        window.addEventListener('scroll', () => this.updateActiveNavLink());
        
        // اختصارات لوحة المفاتيح
        document.addEventListener('keydown', (event) => this.handleKeyboardShortcuts(event));
        
        // تغيير حجم النافذة
        window.addEventListener('resize', () => this.handleResize());
        
        // Chatbot
        const chatbotToggle = document.getElementById('chatbotToggle');
        if (chatbotToggle) {
            chatbotToggle.addEventListener('click', () => this.toggleChatbot());
        }
        
        const chatbotInput = document.getElementById('chatbotInput');
        if (chatbotInput) {
            chatbotInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    this.sendChatMessage();
                }
            });
        }
        
        // النماذج
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('input', () => this.autosaveForm());
        }
        
        // تأثيرات الشعار
        const logoContainer = document.querySelector('.logo');
        if (logoContainer) {
            logoContainer.addEventListener('mouseenter', () => this.increaseSparkEffect());
            logoContainer.addEventListener('mouseleave', () => this.normalSparkEffect());
        }
        
        // Lazy loading للصور
        this.setupLazyLoading();
        
        // Rating stars
        document.querySelectorAll('.rating-star').forEach(star => {
            star.addEventListener('click', (e) => this.handleStarClick(e));
            star.addEventListener('mouseover', (e) => this.handleStarHover(e));
        });
    }
    
    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', async () => {
                try {
                    const registration = await navigator.serviceWorker.register('/sw.js');
                    console.log('ServiceWorker registered:', registration);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        console.log('New service worker found:', newWorker);
                    });
                } catch (error) {
                    console.log('ServiceWorker registration failed:', error);
                    // Continue without service worker
                }
            });
        }
    }
    
    setupAnalytics() {
        if (this.state.cookiesAccepted) {
            console.log('Analytics enabled');
            // يمكنك إضافة Google Analytics هنا
            // gtag('config', 'GA_MEASUREMENT_ID');
        }
    }
    
    setupLazyLoading() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px',
            threshold: 0.1
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
    }
    
    generateCSRFToken() {
        return 'csrf_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }
    
    startSparkEffect() {
        // تأثير الشرارات للشعار الرئيسي
        this.state.sparkInterval = setInterval(() => {
            this.createSpark('logoSparkContainer');
            this.createSpark('heroLogoContainer');
        }, 300);
    }
    
    createSpark(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const spark = document.createElement('div');
        spark.className = containerId === 'heroLogoContainer' ? 'hero-spark' : 'logo-spark';
        
        // موضع عشوائي حول الشعار
        const angle = Math.random() * Math.PI * 2;
        const radius = containerId === 'heroLogoContainer' ? 80 : 25;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        spark.style.left = `calc(50% + ${x}px)`;
        spark.style.top = `calc(50% + ${y}px)`;
        
        // إضافة الشرارة
        container.appendChild(spark);
        
        // تحريك الشرارة
        const targetX = x + (Math.random() - 0.5) * 100;
        const targetY = y + (Math.random() - 0.5) * 100;
        
        spark.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${targetX}px, ${targetY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });
        
        // إزالة الشرارة بعد الانتهاء
        setTimeout(() => {
            if (spark.parentNode) {
                spark.parentNode.removeChild(spark);
            }
        }, 2000);
    }
    
    increaseSparkEffect() {
        if (this.state.sparkInterval) {
            clearInterval(this.state.sparkInterval);
        }
        
        this.state.sparkInterval = setInterval(() => {
            this.createSpark('logoSparkContainer');
            this.createSpark('heroLogoContainer');
        }, 100); // شرارات أكثر عند hover
    }
    
    normalSparkEffect() {
        if (this.state.sparkInterval) {
            clearInterval(this.state.sparkInterval);
        }
        
        this.state.sparkInterval = setInterval(() => {
            this.createSpark('logoSparkContainer');
            this.createSpark('heroLogoContainer');
        }, 300); // سرعة عادية
    }
    
    handleScroll() {
        const header = document.getElementById('mainHeader');
        const scrollTopBtn = document.getElementById('scrollTop');
        const progressBar = document.getElementById('progressBar');
        const scrollY = window.scrollY;
        
        // تحديث الهيدر
        if (header) {
            header.classList.toggle('scrolled', scrollY > 100);
        }
        
        // زر العودة للأعلى
        if (scrollTopBtn) {
            scrollTopBtn.classList.toggle('visible', scrollY > 300);
        }
        
        // شريط التقدم
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        }
    }
    
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.getElementById('mainHeader').offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            this.updateActiveNavLink();
            
            // إغلاق قائمة الجوال إذا كانت مفتوحة
            const navLinks = document.getElementById('navLinks');
            if (navLinks && navLinks.classList.contains('active')) {
                this.toggleMobileMenu();
            }
        }
    }
    
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    toggleMobileMenu() {
        const navLinks = document.getElementById('navLinks');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        
        if (navLinks && mobileMenuBtn) {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            
            navLinks.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenuBtn.innerHTML = isExpanded ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
        }
    }
    
    toggleChatbot() {
        const chatbotWindow = document.getElementById('chatbotWindow');
        this.state.chatOpen = !this.state.chatOpen;
        
        if (chatbotWindow) {
            chatbotWindow.style.display = this.state.chatOpen ? 'block' : 'none';
            if (this.state.chatOpen) {
                setTimeout(() => {
                    document.getElementById('chatbotInput')?.focus();
                }, 100);
            }
        }
    }
    
    closeChatbot() {
        const chatbotWindow = document.getElementById('chatbotWindow');
        this.state.chatOpen = false;
        
        if (chatbotWindow) {
            chatbotWindow.style.display = 'none';
        }
    }
    
    async sendChatMessage() {
        const input = document.getElementById('chatbotInput');
        const messages = document.getElementById('chatbotMessages');
        
        if (!input || !messages || !input.value.trim()) return;
        
        const message = input.value.trim();
        input.value = '';
        
        // إضافة رسالة المستخدم
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.innerHTML = `<p><strong>أنت:</strong> ${message}</p>`;
        messages.appendChild(userMessage);
        
        // محاكاة رد المساعد
        setTimeout(() => {
            const response = this.getChatbotResponse(message);
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.innerHTML = `<p><strong>المساعد:</strong> ${response}</p>`;
            messages.appendChild(botMessage);
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
        
        messages.scrollTop = messages.scrollHeight;
    }
    
    getChatbotResponse(message) {
        message = message.toLowerCase();
        
        const responses = {
            'سعر': 'أسعار خدماتنا تبدأ من 150 جنيه وتختلف حسب نوع الخدمة. يمكنك الاطلاع على الأسعار في قسم الخدمات أو الاتصال بنا للاستفسار.',
            'سعر|اسعار': 'أسعار خدماتنا تبدأ من 150 جنيه وتختلف حسب نوع الخدمة. يمكنك الاطلاع على الأسعار في قسم الخدمات أو الاتصال بنا للاستفسار.',
            'موعد': 'يمكنك حجز موعد عبر نموذج الحجز الموجود في الموقع. سنتصل بك خلال 24 ساعة لتأكيد الموعد.',
            'موقع': 'نحن موجودون في الأقصر البغدادي - الطريق السياحي، بجوار مكتبة التميز.',
            'هاتف': 'رقم الهاتف: +201275817812 - يمكنك الاتصال بنا الآن.',
            'فيسبوك': 'يمكنك متابعتنا على فيسبوك عبر الرابط في قسم التواصل.',
            'ضمان': 'جميع خدماتنا مضمونة: 30 يومًا على الصيانة، 90 يومًا على البرمجة والتصميم، 60 يومًا على التحديثات.',
            'وقت': 'ساعات العمل: الأحد-الخميس 9 صباحًا - 10 مساءً، الجمعة 4 مساءً - 10 مساءً، السبت 10 صباحًا - 10 مساءً.',
            'أعمال': 'يمكنك مشاهدة أعمالنا في قسم "أعمالنا" في الموقع. نفتخر بما نقوم به لعملائنا.',
            'خدمات': 'نقدم خدمات صيانة كمبيوتر، بلايستيشن، موبايل، ريسيفر، تصميم جرافيك، وبرمجة مخصصة.',
            'ريسيفر': 'نقدم خدمات صيانة وتحديث ريسيفر بأسعار ممتازة مع تحديثات مجانية لمدة شهر.',
            'مرحبا|اهلا|السلام عليكم': 'مرحباً بك! كيف يمكنني مساعدتك اليوم؟',
            'شكرا|مشكور': 'شكراً لك! نحن دائماً هنا لخدمتك.',
            'وداعا|مع السلامة': 'مع السلامة! نتمنى لك يوماً سعيداً.'
        };
        
        for (const [keyword, response] of Object.entries(responses)) {
            if (keyword.includes('|')) {
                const keywords = keyword.split('|');
                if (keywords.some(k => message.includes(k))) {
                    return response;
                }
            } else if (message.includes(keyword)) {
                return response;
            }
        }
        
        return 'شكراً لرسالتك! كيف يمكنني مساعدتك؟ يمكنك الاستفسار عن: الأسعار، المواعيد، الموقع، الهاتف، فيسبوك، الضمان، أوقات العمل، أعمالنا، خدماتنا، أو الريسيفر.';
    }
    
    handleKeyboardShortcuts(event) {
        // Ctrl + B: الحجز
        if (event.ctrlKey && event.key === 'b') {
            event.preventDefault();
            this.scrollToSection('booking');
        }
        
        // Ctrl + H: الرئيسية
        if (event.ctrlKey && event.key === 'h') {
            event.preventDefault();
            this.scrollToSection('home');
        }
        
        // Ctrl + P: أعمالنا
        if (event.ctrlKey && event.key === 'p') {
            event.preventDefault();
            this.scrollToSection('portfolio');
        }
        
        // Escape: إغلاق القوائم
        if (event.key === 'Escape') {
            const navLinks = document.getElementById('navLinks');
            if (navLinks && navLinks.classList.contains('active')) {
                this.toggleMobileMenu();
            }
            
            if (this.state.chatOpen) {
                this.closeChatbot();
            }
            
            if (this.state.showRatingWidget) {
                this.closeRating();
            }
            
            this.closeLightbox();
        }
        
        // السهم الأيمن/الأيسر في Lightbox
        if (event.key === 'ArrowRight') {
            this.prevImage();
        } else if (event.key === 'ArrowLeft') {
            this.nextImage();
        }
    }
    
    handleResize() {
        if (window.innerWidth > 768) {
            const navLinks = document.getElementById('navLinks');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) {
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        }
    }
    
    async submitBooking(event) {
        event.preventDefault();
        
        if (!this.validateBookingForm()) {
            return;
        }
        
        this.showLoading();
        
        try {
            const formData = this.collectFormData();
            const response = await this.sendBookingRequest(formData);
            
            if (response.success) {
                this.saveBooking(formData);
                this.showSuccessMessage(formData);
                event.target.reset();
                this.loadOrderHistory();
                
                // إظهار widget التقييم بعد 5 ثواني
                setTimeout(() => {
                    if (!this.state.userRating) {
                        this.openRatingWidget();
                    }
                }, 5000);
            } else {
                throw new Error('فشل في إرسال الطلب');
            }
        } catch (error) {
            this.showError('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.');
            console.error('Booking error:', error);
        } finally {
            this.hideLoading();
        }
    }
    
    collectFormData() {
        return {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            email: document.getElementById('email').value.trim(),
            service: document.getElementById('service').value,
            device: document.getElementById('device').value.trim(),
            problem: document.getElementById('problem').value.trim(),
            date: document.getElementById('date').value,
            priority: document.getElementById('priority').value,
            timestamp: new Date().toISOString(),
            orderNumber: 'TS' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
            status: 'قيد المراجعة'
        };
    }
    
    validateBookingForm() {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const problem = document.getElementById('problem').value.trim();
        
        if (!name || name.length < 3) {
            this.showError('الرجاء إدخال اسم صحيح (3 أحرف على الأقل)');
            document.getElementById('name').focus();
            return false;
        }
        
        const phoneRegex = /^(05|5)([0-9]{8})$/;
        if (!phone || !phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
            this.showError('الرجاء إدخال رقم جوال صحيح (مثال: 0512345678)');
            document.getElementById('phone').focus();
            return false;
        }
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.showError('الرجاء إدخال بريد إلكتروني صحيح');
            document.getElementById('email').focus();
            return false;
        }
        
        if (!service) {
            this.showError('الرجاء اختيار نوع الخدمة');
            document.getElementById('service').focus();
            return false;
        }
        
        if (!problem || problem.length < 10) {
            this.showError('الرجاء وصف المشكلة بالتفصيل (10 أحرف على الأقل)');
            document.getElementById('problem').focus();
            return false;
        }
        
        return true;
    }
    
    async sendBookingRequest(formData) {
        // محاكاة إرسال البيانات إلى الخادم
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    orderNumber: formData.orderNumber,
                    message: 'تم استلام طلبك بنجاح'
                });
            }, 1500);
        });
    }
    
    saveBooking(formData) {
        try {
            if (!this.state.userData.name) {
                this.state.userData = {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    lastVisit: new Date().toISOString()
                };
                localStorage.setItem('tech_service_user', JSON.stringify(this.state.userData));
            }
            
            this.state.orders.unshift({
                ...formData,
                read: false
            });
            
            if (this.state.orders.length > 50) {
                this.state.orders = this.state.orders.slice(0, 50);
            }
            
            localStorage.setItem('tech_service_orders', JSON.stringify(this.state.orders));
            this.state.currentOrder = formData;
            
        } catch (error) {
            console.error('Error saving booking:', error);
        }
    }
    
    loadOrderHistory() {
        const ordersList = document.getElementById('ordersList');
        const orderHistory = document.getElementById('orderHistory');
        
        if (!ordersList) return;
        
        if (this.state.orders.length === 0) {
            ordersList.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--text-light);">
                    <i class="fas fa-clipboard-list" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>لا توجد طلبات سابقة</p>
                </div>
            `;
            if (orderHistory) orderHistory.style.display = 'none';
            return;
        }
        
        if (orderHistory) orderHistory.style.display = 'block';
        
        ordersList.innerHTML = this.state.orders.map(order => `
            <div style="background: white; border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <strong style="color: var(--secondary-color);">${order.orderNumber}</strong>
                        <span style="background: ${this.getStatusColor(order.status)}; color: white; padding: 0.25rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.875rem; margin-right: 1rem;">
                            ${order.status}
                        </span>
                    </div>
                    <span style="color: var(--text-light); font-size: 0.875rem;">${this.formatDate(order.timestamp)}</span>
                </div>
                <div style="color: var(--text-color); margin-bottom: 0.5rem;">
                    <strong>الخدمة:</strong> ${order.service}
                </div>
                <div style="color: var(--text-light); font-size: 0.875rem; margin-bottom: 1rem;">
                    ${order.problem.substring(0, 100)}${order.problem.length > 100 ? '...' : ''}
                </div>
                <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                    <button onclick="app.viewOrderDetails('${order.orderNumber}')" style="background: var(--light-bg); border: none; padding: 0.5rem 1rem; border-radius: var(--radius-sm); cursor: pointer; font-size: 0.875rem;">
                        التفاصيل
                    </button>
                    <button onclick="app.trackOrder('${order.orderNumber}')" style="background: var(--primary-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: var(--radius-sm); cursor: pointer; font-size: 0.875rem;">
                        متابعة
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    getStatusColor(status) {
        const colors = {
            'قيد المراجعة': '#F59E0B',
            'قيد التنفيذ': '#3B82F6',
            'مكتمل': '#10B981',
            'ملغي': '#EF4444'
        };
        return colors[status] || '#6B7280';
    }
    
    formatDate(isoString) {
        const date = new Date(isoString);
        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    showSuccessMessage(formData) {
        const message = `✅ تم إرسال طلبك بنجاح!

🎉 شكراً ${formData.name}!
📋 رقم طلبك: ${formData.orderNumber}
📞 سنتصل بك على ${formData.phone} خلال 24 ساعة
⏰ وقت الاستجابة المتوقع: ${this.getResponseTime(formData.priority)}

يمكنك متابعة حالة طلبك عبر صفحة "آخر طلباتك".`;

        alert(message);
        
        if (Notification.permission === 'granted') {
            new Notification('تم استلام طلبك!', {
                body: `سنقوم بالاتصال بك قريباً رقم الطلب: ${formData.orderNumber}`,
                icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%2310B981"/><path d="M40,60 L70,40 L40,70" fill="none" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            });
        }
    }
    
    getResponseTime(priority) {
        const times = {
            'urgent': '12-24 ساعة',
            'emergency': '4-12 ساعة',
            'normal': '24-48 ساعة'
        };
        return times[priority] || '24-48 ساعة';
    }
    
    showError(message) {
        alert(`❌ ${message}`);
    }
    
    showLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = 'block';
            document.body.style.cursor = 'wait';
        }
    }
    
    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = 'none';
            document.body.style.cursor = 'default';
        }
    }
    
    acceptCookies() {
        this.state.cookiesAccepted = true;
        localStorage.setItem('tech_service_cookies', 'true');
        
        const cookieConsent = document.getElementById('cookieConsent');
        if (cookieConsent) {
            cookieConsent.classList.remove('show');
        }
        
        this.setupAnalytics();
    }
    
    showCookieConsent() {
        setTimeout(() => {
            const cookieConsent = document.getElementById('cookieConsent');
            if (cookieConsent) {
                cookieConsent.classList.add('show');
            }
        }, 2000);
    }
    
    autosaveForm() {
        const form = document.getElementById('bookingForm');
        if (form) {
            const formData = {};
            ['name', 'phone', 'email', 'service', 'device', 'problem', 'date', 'priority'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    formData[id] = element.value;
                }
            });
            
            localStorage.setItem('tech_service_form_autosave', JSON.stringify(formData));
        }
    }
    
    bookService(service) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            serviceSelect.value = service;
            this.scrollToSection('booking');
            
            setTimeout(() => {
                const problemField = document.getElementById('problem');
                if (problemField) {
                    problemField.focus();
                    problemField.value = `أرغب في خدمة ${service}، المشكلة هي: `;
                }
            }, 500);
        }
    }
    
    callUs() {
        if (confirm(`هل تريد الاتصال بنا الآن على الرقم ${this.config.phone}؟`)) {
            window.location.href = `tel:${this.config.phone}`;
        }
    }
    
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    toggleFAQ(element) {
        const answer = element.nextElementSibling;
        const icon = element.querySelector('.faq-icon');
        const isExpanded = element.getAttribute('aria-expanded') === 'true';
        
        if (!isExpanded) {
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== element.parentElement) {
                    const otherAnswer = item.querySelector('.faq-answer');
                    const otherIcon = item.querySelector('.faq-icon');
                    otherAnswer.classList.remove('active');
                    otherIcon.textContent = '➕';
                    item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    item.classList.remove('active');
                }
            });
        }
        
        answer.classList.toggle('active');
        element.setAttribute('aria-expanded', !isExpanded);
        element.parentElement.classList.toggle('active');
        icon.textContent = isExpanded ? '➕' : '➖';
    }
    
    viewOrderDetails(orderNumber) {
        const order = this.state.orders.find(o => o.orderNumber === orderNumber);
        if (order) {
            alert(this.generateOrderDetails(order));
        }
    }
    
    generateOrderDetails(order) {
        return `
            فاتورة خدمة - مركز الصقر
            =======================
            رقم الطلب: ${order.orderNumber}
            التاريخ: ${this.formatDate(order.timestamp)}
            
            معلومات العميل:
            ---------------
            الاسم: ${order.name}
            الهاتف: ${order.phone}
            ${order.email ? `البريد: ${order.email}` : ''}
            
            تفاصيل الخدمة:
            --------------
            نوع الخدمة: ${order.service}
            الجهاز: ${order.device || 'غير محدد'}
            المشكلة: ${order.problem}
            
            معلومات إضافية:
            ----------------
            تاريخ الزيارة: ${order.date || 'غير محدد'}
            الأولوية: ${order.priority || 'عادية'}
            الحالة: ${order.status}
            
            شكراً لثقتك بنا
            مركز الصقر
            ${this.config.phone}
        `;
    }
    
    trackOrder(orderNumber) {
        alert(`متابعة الطلب ${orderNumber}\n\nالحالة: قيد المراجعة\nسنتواصل معك قريباً على رقم الهاتف المسجل.`);
    }
    
    showMoreTestimonials() {
        alert('سيتم تحميل المزيد من التقييمات قريباً...');
    }
    
    openRatingWidget() {
        const widget = document.getElementById('ratingWidget');
        if (widget) {
            widget.style.display = 'block';
            this.state.showRatingWidget = true;
        }
    }
    
    closeRating() {
        const widget = document.getElementById('ratingWidget');
        if (widget) {
            widget.style.display = 'none';
            this.state.showRatingWidget = false;
        }
    }
    
    handleStarClick(event) {
        const rating = parseInt(event.target.dataset.rating);
        this.state.userRating = rating;
        localStorage.setItem('tech_service_rating', JSON.stringify(rating));
        
        // تحديث النجوم
        document.querySelectorAll('.rating-star').forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
                star.style.color = '#F59E0B';
            } else {
                star.classList.remove('active');
                star.style.color = '#E5E7EB';
            }
        });
        
        alert(`شكراً لك على تقييمك ${rating} نجوم!`);
        this.closeRating();
    }
    
    handleStarHover(event) {
        const rating = parseInt(event.target.dataset.rating);
        
        document.querySelectorAll('.rating-star').forEach((star, index) => {
            if (index < rating) {
                star.style.color = '#F59E0B';
            } else {
                star.style.color = '#E5E7EB';
            }
        });
    }
    
    showPrivacyPolicy() {
        const policy = `
            سياسة الخصوصية
            ===============
            
            1. المعلومات التي نجمعها:
            - المعلومات الشخصية (الاسم، رقم الهاتف، البريد الإلكتروني)
            - معلومات الجهاز والمشكلة الفنية
            - معلومات الحجز والدفع
            
            2. كيفية استخدام المعلومات:
            - لتقديم الخدمات المطلوبة
            - للتواصل معك بشأن طلبك
            - لتحسين خدماتنا
            
            3. حماية المعلومات:
            - نستخدم تقنيات أمنية متقدمة
            - نقوم بتشفير البيانات الحساسة
            - نحافظ على سرية المعلومات
            
            4. حقوقك:
            - الحق في الوصول إلى بياناتك
            - الحق في تصحيح البيانات
            - الحق في طلب حذف البيانات
            
            للتعديل على بياناتك أو استفسارات أخرى، يرجى الاتصال بنا.
        `;
        
        alert(policy);
    }
    
    showTerms() {
        const terms = `
            شروط الخدمة
            ============
            
            1. القبول:
            باستخدامك لخدماتنا، فإنك توافق على هذه الشروط.
            
            2. الخدمات:
            - نقدم خدمات صيانة وتصميم وبرمجة
            - الأسعار قابلة للتغير حسب نوع الخدمة
            - نضمن الخدمات لمدة محددة حسب نوعها
            
            3. الدفع:
            - الدفع نقداً أو إلكترونياً
            - لا استرجاع للمبالغ بعد بدء الخدمة
            - في حالة الإلغاء، رسوم 20% من قيمة الخدمة
            
            4. الضمان:
            - 30 يوم على خدمات الصيانة
            - 90 يوم على خدمات البرمجة والتصميم
            - الضمان يشمل نفس العطل فقط
            
            5. المسؤولية:
            - نحن غير مسؤولين عن البيانات المفقودة قبل الصيانة
            - يوصى بعمل نسخة احتياطية قبل أي صيانة
        `;
        
        alert(terms);
    }
    
    showRefundPolicy() {
        const policy = `
            سياسة الاسترجاع
            ===============
            
            1. شروط الاسترجاع:
            - يمكنك طلب استرجاع المبلغ خلال 24 ساعة من الدفع إذا لم تبدأ الخدمة بعد
            - في حالة بدء الخدمة، يتم خصم تكاليف التشخيص والتقييم
            - لا يمكن استرجاع المبالغ بعد انتهاء الخدمة
            
            2. عملية الاسترجاع:
            - تقديم طلب عبر واتساب أو البريد الإلكتروني
            - إرفاق رقم الفاتورة وبيانات الحجز
            - معالجة الطلب خلال 3-5 أيام عمل
            - يتم التحويل إلى نفس وسيلة الدفع
            
            3. حالات عدم الاسترجاع:
            - بعد تنفيذ الخدمة بالكامل
            - خدمات التصميم والبرمجة بعد التسليم
            - المنتجات الرقمية والبرامج
            - الخدمات الموسمية والعروض الخاصة
        `;
        
        alert(policy);
    }
    
    showContactInfo() {
        const info = `
            معلومات الاتصال
            ===============
            
            📍 العنوان:
            ${this.config.address}
            
            📞 الهواتف:
            رئيسي: ${this.config.phone}
            واتساب: ${this.config.phone}
            الطوارئ: متاح 24/7
            
            📧 البريد الإلكتروني:
            ${this.config.email}
            
            📱 فيسبوك:
            ${this.config.facebook}
            
            🕒 ساعات العمل:
            الأحد - الخميس: 9:00 ص - 10:00 م
            الجمعة: 4:00 م - 10:00 م
            السبت: 10:00 ص - 10:00 م
        `;
        
        alert(info);
    }
    
    showFAQ() {
        this.scrollToSection('faq');
    }
    
    // ============ PORTFOLIO METHODS ============
    initPortfolio() {
        this.renderPortfolio();
        this.setupPortfolioEvents();
    }
    
    renderPortfolio() {
        const portfolioGrid = document.getElementById('portfolioGrid');
        if (!portfolioGrid) return;
        
        const filteredItems = this.state.currentFilter === 'all' 
            ? this.portfolioData 
            : this.portfolioData.filter(item => item.category === this.state.currentFilter);
        
        portfolioGrid.innerHTML = filteredItems.map(item => `
            <div class="portfolio-item" data-category="${item.category}" data-id="${item.id}" tabindex="0" role="button" aria-label="عرض ${item.title}">
                <div class="portfolio-image">
                    <img src="${item.image}" 
                         alt="${item.title}" 
                         loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-info">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    setupPortfolioEvents() {
        const portfolioGrid = document.getElementById('portfolioGrid');
        if (!portfolioGrid) return;
        
        portfolioGrid.addEventListener('click', (event) => {
            const portfolioItem = event.target.closest('.portfolio-item');
            if (portfolioItem) {
                const id = parseInt(portfolioItem.dataset.id);
                this.openLightbox(id);
            }
        });
        
        portfolioGrid.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                const portfolioItem = event.target.closest('.portfolio-item');
                if (portfolioItem) {
                    event.preventDefault();
                    const id = parseInt(portfolioItem.dataset.id);
                    this.openLightbox(id);
                }
            }
        });
    }
    
    filterPortfolio(category) {
        this.state.currentFilter = category;
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.textContent.trim() === 'الكل' && category === 'all') {
                btn.classList.add('active');
            } else if (btn.getAttribute('onclick')?.includes(`'${category}'`)) {
                btn.classList.add('active');
            }
        });
        
        this.renderPortfolio();
    }
    
    openLightbox(id) {
        const item = this.portfolioData.find(item => item.id === id);
        if (!item) return;
        
        this.state.currentImageIndex = this.portfolioData.findIndex(img => img.id === id);
        
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDescription = document.getElementById('lightboxDescription');
        
        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxDescription.textContent = item.description;
        
        lightbox.classList.add('show');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            document.querySelector('.lightbox-close').focus();
        }, 100);
    }
    
    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('show');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
    
    nextImage() {
        const filteredItems = this.state.currentFilter === 'all' 
            ? this.portfolioData 
            : this.portfolioData.filter(item => item.category === this.state.currentFilter);
        
        if (filteredItems.length === 0) return;
        
        this.state.currentImageIndex = (this.state.currentImageIndex + 1) % filteredItems.length;
        const item = filteredItems[this.state.currentImageIndex];
        
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDescription = document.getElementById('lightboxDescription');
        
        lightboxImage.style.opacity = '0';
        
        setTimeout(() => {
            lightboxImage.src = item.image;
            lightboxImage.alt = item.title;
            lightboxTitle.textContent = item.title;
            lightboxDescription.textContent = item.description;
            lightboxImage.style.opacity = '1';
        }, 200);
    }
    
    prevImage() {
        const filteredItems = this.state.currentFilter === 'all' 
            ? this.portfolioData 
            : this.portfolioData.filter(item => item.category === this.state.currentFilter);
        
        if (filteredItems.length === 0) return;
        
        this.state.currentImageIndex = (this.state.currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
        const item = filteredItems[this.state.currentImageIndex];
        
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDescription = document.getElementById('lightboxDescription');
        
        lightboxImage.style.opacity = '0';
        
        setTimeout(() => {
            lightboxImage.src = item.image;
            lightboxImage.alt = item.title;
            lightboxTitle.textContent = item.title;
            lightboxDescription.textContent = item.description;
            lightboxImage.style.opacity = '1';
        }, 200);
    }
    
    loadMorePortfolio() {
        const newItems = [
            {
                id: this.portfolioData.length + 1,
                category: 'receiver',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><rect x="200" y="150" width="400" height="350" rx="20" fill="%238B5CF6"/><rect x="250" y="200" width="300" height="250" fill="%230F172A"/><text x="400" y="350" font-family="Arial" font-size="48" fill="white" text-anchor="middle">IPTV</text><text x="400" y="550" font-family="Arial" font-size="24" fill="white" text-anchor="middle">تحديث قنوات ريسيفر</text></svg>',
                title: 'تحديث قنوات ريسيفر',
                description: 'تحديث جميع القنوات ورفع حظر التشفير'
            },
            {
                id: this.portfolioData.length + 2,
                category: 'computer',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><rect x="150" y="150" width="500" height="300" rx="20" fill="%2310B981"/><rect x="200" y="200" width="400" height="200" fill="%230F172A"/><text x="400" y="320" font-family="Arial" font-size="64" fill="white" text-anchor="middle">RAM</text><text x="400" y="500" font-family="Arial" font-size="24" fill="white" text-anchor="middle">ترقية ذاكرة RAM</text></svg>',
                title: 'ترقية ذاكرة RAM',
                description: 'ترقية ذاكرة الكمبيوتر لتحسين الأداء'
            },
            {
                id: this.portfolioData.length + 3,
                category: 'design',
                image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231F2937"/><rect x="100" y="100" width="600" height="400" rx="20" fill="%23F59E0B"/><rect x="150" y="150" width="500" height="300" fill="white"/><text x="400" y="300" font-family="Arial" font-size="48" fill="%231F2937" text-anchor="middle">كتاب</text><text x="400" y="500" font-family="Arial" font-size="24" fill="white" text-anchor="middle">تصميم أغلفة كتب</text></svg>',
                title: 'تصميم أغلفة كتب',
                description: 'تصميم احترافي لأغلفة كتب تقنية'
            }
        ];
        
        this.portfolioData.push(...newItems);
        this.renderPortfolio();
        this.setupPortfolioEvents();
        
        setTimeout(() => {
            alert('تم تحميل المزيد من الأعمال بنجاح!');
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new TechServiceApp();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.service-card, .testimonial-card, .form-container, .portfolio-item, .contact-method').forEach(el => {
        observer.observe(el);
    });
    
    if ('Notification' in window && Notification.permission === 'default') {
        setTimeout(() => {
            Notification.requestPermission();
        }, 5000);
    }
    
    console.log('🚀 مركز الصقر جاهز للعمل!');
});
