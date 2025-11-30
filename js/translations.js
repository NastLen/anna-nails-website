// Translations object
const translations = {
    ru: {
        // Navigation
        'logo': 'Anna',
        'nav-home': 'Главная',
        'nav-about': 'О мастере',
        'nav-gallery': 'Работы',
        'nav-services': 'Услуги',
        'nav-booking': 'Запись',
        'nav-contact': 'Контакты',
        
        // Hero Section
        'hero-title': 'Искусство маникюра от Анны',
        'hero-subtitle': 'Создаю красоту ваших ногтей с любовью и профессионализмом',
        'hero-btn': 'Записаться на процедуру',
        
        // About Section
        'about-title': 'О мастере',
        'about-description': 'Привет! Меня зовут Анна, и я создаю красоту ваших ногтей уже более 5 лет. Каждая процедура для меня — это возможность подчеркнуть вашу индивидуальность и создать что-то особенное.',
        'feature-1': 'Сертифицированный мастер',
        'feature-2': 'Индивидуальный подход',
        'feature-3': 'Качественные материалы',
        
        // Gallery Section
        'gallery-title': 'Мои работы',
        'filter-all': 'Все работы',
        'filter-classic': 'Классический',
        'filter-design': 'Дизайн',
        'filter-extension': 'Наращивание',
        'work-1': 'Классический маникюр',
        'work-1-desc': 'Французский маникюр с нежным дизайном',
        'work-2': 'Авторский дизайн',
        'work-2-desc': 'Уникальный дизайн с золотыми элементами',
        'work-3': 'Наращивание',
        'work-3-desc': 'Наращивание гелем с естественным покрытием',
        'work-4': 'Художественный дизайн',
        'work-4-desc': 'Роспись вручную с акварельным эффектом',
        'work-5': 'Нюдовое покрытие',
        'work-5-desc': 'Естественный маникюр для повседневного образа',
        'work-6': 'Сезонный дизайн',
        'work-6-desc': 'Тематический дизайн к празднику',
        
        // Services Section
        'services-title': 'Услуги и цены',
        'service-manicure': 'Классический маникюр',
        'service-manicure-desc': 'Обработка кутикулы, придание формы, покрытие лаком',
        'service-gel': 'Гель-лак',
        'service-gel-desc': 'Стойкое покрытие гель-лаком с глянцевым финишем',
        'service-design': 'Дизайн ногтей',
        'service-design-desc': 'Художественный дизайн, роспись, декор стразами',
        'service-extension': 'Наращивание',
        'service-extension-desc': 'Наращивание ногтей гелем или акрилом',
        'service-spa': 'SPA-маникюр',
        'service-spa-desc': 'Увлажняющие процедуры, массаж рук, уход за кожей',
        'service-correction': 'Коррекция',
        'service-correction-desc': 'Коррекция наращенных ногтей',
        'duration-60': '60 мин',
        'duration-75': '75 мин',
        'duration-90': '90 мин',
        'duration-120': '120 мин',
        'duration-150': '150 мин',
        
        // Booking Section
        'booking-title': 'Запись на процедуру',
        'booking-info-title': 'Как записаться',
        'whatsapp-desc': 'Быстрая запись через мессенджер',
        'phone-title': 'Телефон',
        'phone-desc': 'Звоните с 9:00 до 19:00',
        'instagram-desc': 'Пишите в Direct Messages',
        'form-title': 'Или оставьте заявку',
        'form-subtitle': 'Я свяжусь с вами в течение 2 часов',
        'form-name': 'Имя *',
        'form-phone': 'Телефон *',
        'form-service': 'Услуга',
        'form-service-select': 'Выберите услугу',
        'form-service-classic': 'Классический маникюр',
        'form-service-gel': 'Гель-лак',
        'form-service-design': 'Дизайн ногтей',
        'form-service-extension': 'Наращивание',
        'form-service-spa': 'SPA-маникюр',
        'form-service-correction': 'Коррекция',
        'form-date': 'Предпочитаемая дата',
        'form-message': 'Комментарий',
        'form-submit': 'Отправить заявку',
        'form-note': 'Отправляя заявку, вы соглашаетесь на обработку персональных данных',
        
        // Contact Section
        'contact-title': 'Контакты',
        'contact-address-title': 'Адрес',
        'contact-address': 'Musterstraße 123<br>10115 Berlin, Deutschland',
        'contact-hours-title': 'Часы работы',
        'contact-hours': 'Пн-Пт: 9:00 - 19:00<br>Сб: 10:00 - 17:00<br>Вс: Выходной',
        'contact-phone-title': 'Телефон',
        'map-placeholder': 'Карта будет добавлена',
        
        // Footer
        'footer-text': '© 2025 Anna. Все права защищены.'
    },
    
    en: {
        // Navigation
        'logo': 'Anna',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-gallery': 'Gallery',
        'nav-services': 'Services',
        'nav-booking': 'Booking',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'The Art of Manicure by Anna',
        'hero-subtitle': 'Creating beautiful nails with love and professionalism',
        'hero-btn': 'Book an appointment',
        
        // About Section
        'about-title': 'About the Master',
        'about-description': 'Hi! My name is Anna, and I have been creating beautiful nails for over 5 years. Each treatment for me is an opportunity to emphasize your individuality and create something special.',
        'feature-1': 'Certified master',
        'feature-2': 'Individual approach',
        'feature-3': 'Quality materials',
        
        // Gallery Section
        'gallery-title': 'My Work',
        'filter-all': 'All works',
        'filter-classic': 'Classic',
        'filter-design': 'Design',
        'filter-extension': 'Extension',
        'work-1': 'Classic Manicure',
        'work-1-desc': 'French manicure with delicate design',
        'work-2': 'Signature Design',
        'work-2-desc': 'Unique design with gold elements',
        'work-3': 'Nail Extension',
        'work-3-desc': 'Gel extension with natural coating',
        'work-4': 'Artistic Design',
        'work-4-desc': 'Hand-painted with watercolor effect',
        'work-5': 'Nude Coating',
        'work-5-desc': 'Natural manicure for everyday look',
        'work-6': 'Seasonal Design',
        'work-6-desc': 'Themed design for holidays',
        
        // Services Section
        'services-title': 'Services & Prices',
        'service-manicure': 'Classic Manicure',
        'service-manicure-desc': 'Cuticle care, shaping, nail polish application',
        'service-gel': 'Gel Polish',
        'service-gel-desc': 'Long-lasting gel polish with glossy finish',
        'service-design': 'Nail Design',
        'service-design-desc': 'Artistic design, painting, rhinestone decoration',
        'service-extension': 'Nail Extension',
        'service-extension-desc': 'Nail extension with gel or acrylic',
        'service-spa': 'SPA Manicure',
        'service-spa-desc': 'Moisturizing treatments, hand massage, skin care',
        'service-correction': 'Correction',
        'service-correction-desc': 'Correction of extended nails',
        'duration-60': '60 min',
        'duration-75': '75 min',
        'duration-90': '90 min',
        'duration-120': '120 min',
        'duration-150': '150 min',
        
        // Booking Section
        'booking-title': 'Book an Appointment',
        'booking-info-title': 'How to book',
        'whatsapp-desc': 'Quick booking via messenger',
        'phone-title': 'Phone',
        'phone-desc': 'Call from 9:00 to 19:00',
        'instagram-desc': 'Message in Direct Messages',
        'form-title': 'Or leave a request',
        'form-subtitle': 'I will contact you within 2 hours',
        'form-name': 'Name *',
        'form-phone': 'Phone *',
        'form-service': 'Service',
        'form-service-select': 'Choose service',
        'form-service-classic': 'Classic Manicure',
        'form-service-gel': 'Gel Polish',
        'form-service-design': 'Nail Design',
        'form-service-extension': 'Nail Extension',
        'form-service-spa': 'SPA Manicure',
        'form-service-correction': 'Correction',
        'form-date': 'Preferred date',
        'form-message': 'Comment',
        'form-submit': 'Send request',
        'form-note': 'By submitting the form, you agree to the processing of personal data',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-address-title': 'Address',
        'contact-address': 'Musterstraße 123<br>10115 Berlin, Germany',
        'contact-hours-title': 'Working hours',
        'contact-hours': 'Mon-Fri: 9:00 - 19:00<br>Sat: 10:00 - 17:00<br>Sun: Closed',
        'contact-phone-title': 'Phone',
        'map-placeholder': 'Map will be added',
        
        // Footer
        'footer-text': '© 2025 Anna. All rights reserved.'
    },
    
    de: {
        // Navigation
        'logo': 'Anna',
        'nav-home': 'Startseite',
        'nav-about': 'Über mich',
        'nav-gallery': 'Galerie',
        'nav-services': 'Leistungen',
        'nav-booking': 'Termin',
        'nav-contact': 'Kontakt',
        
        // Hero Section
        'hero-title': 'Die Kunst der Maniküre von Anna',
        'hero-subtitle': 'Ich kreiere schöne Nägel mit Liebe und Professionalität',
        'hero-btn': 'Termin vereinbaren',
        
        // About Section
        'about-title': 'Über die Meisterin',
        'about-description': 'Hallo! Ich heiße Anna und kreiere seit über 5 Jahren schöne Nägel. Jede Behandlung ist für mich eine Gelegenheit, Ihre Individualität zu betonen und etwas Besonderes zu schaffen.',
        'feature-1': 'Zertifizierte Meisterin',
        'feature-2': 'Individueller Ansatz',
        'feature-3': 'Hochwertige Materialien',
        
        // Gallery Section
        'gallery-title': 'Meine Arbeiten',
        'filter-all': 'Alle Arbeiten',
        'filter-classic': 'Klassisch',
        'filter-design': 'Design',
        'filter-extension': 'Verlängerung',
        'work-1': 'Klassische Maniküre',
        'work-1-desc': 'French Maniküre mit zartem Design',
        'work-2': 'Signature Design',
        'work-2-desc': 'Einzigartiges Design mit goldenen Elementen',
        'work-3': 'Nagelverlängerung',
        'work-3-desc': 'Gelverlängerung mit natürlicher Beschichtung',
        'work-4': 'Künstlerisches Design',
        'work-4-desc': 'Handgemalt mit Aquarell-Effekt',
        'work-5': 'Nude-Beschichtung',
        'work-5-desc': 'Natürliche Maniküre für den Alltag',
        'work-6': 'Saisonales Design',
        'work-6-desc': 'Thematisches Design für Feiertage',
        
        // Services Section
        'services-title': 'Leistungen & Preise',
        'service-manicure': 'Klassische Maniküre',
        'service-manicure-desc': 'Nagelhautpflege, Formgebung, Nagellack-Auftrag',
        'service-gel': 'Gel-Lack',
        'service-gel-desc': 'Langanhaltender Gel-Lack mit Hochglanz-Finish',
        'service-design': 'Nageldesign',
        'service-design-desc': 'Künstlerisches Design, Bemalung, Strass-Dekoration',
        'service-extension': 'Nagelverlängerung',
        'service-extension-desc': 'Nagelverlängerung mit Gel oder Acryl',
        'service-spa': 'SPA-Maniküre',
        'service-spa-desc': 'Feuchtigkeitsbehandlungen, Handmassage, Hautpflege',
        'service-correction': 'Korrektur',
        'service-correction-desc': 'Korrektur von verlängerten Nägeln',
        'duration-60': '60 Min',
        'duration-75': '75 Min',
        'duration-90': '90 Min',
        'duration-120': '120 Min',
        'duration-150': '150 Min',
        
        // Booking Section
        'booking-title': 'Termin vereinbaren',
        'booking-info-title': 'So buchen Sie',
        'whatsapp-desc': 'Schnelle Buchung über Messenger',
        'phone-title': 'Telefon',
        'phone-desc': 'Anrufe von 9:00 bis 19:00',
        'instagram-desc': 'Nachricht in Direct Messages',
        'form-title': 'Oder hinterlassen Sie eine Anfrage',
        'form-subtitle': 'Ich kontaktiere Sie innerhalb von 2 Stunden',
        'form-name': 'Name *',
        'form-phone': 'Telefon *',
        'form-service': 'Leistung',
        'form-service-select': 'Leistung wählen',
        'form-service-classic': 'Klassische Maniküre',
        'form-service-gel': 'Gel-Lack',
        'form-service-design': 'Nageldesign',
        'form-service-extension': 'Nagelverlängerung',
        'form-service-spa': 'SPA-Maniküre',
        'form-service-correction': 'Korrektur',
        'form-date': 'Wunschtermin',
        'form-message': 'Kommentar',
        'form-submit': 'Anfrage senden',
        'form-note': 'Mit dem Absenden stimmen Sie der Verarbeitung personenbezogener Daten zu',
        
        // Contact Section
        'contact-title': 'Kontakt',
        'contact-address-title': 'Adresse',
        'contact-address': 'Musterstraße 123<br>10115 Berlin, Deutschland',
        'contact-hours-title': 'Öffnungszeiten',
        'contact-hours': 'Mo-Fr: 9:00 - 19:00<br>Sa: 10:00 - 17:00<br>So: Geschlossen',
        'contact-phone-title': 'Telefon',
        'map-placeholder': 'Karte wird hinzugefügt',
        
        // Footer
        'footer-text': '© 2025 Anna. Alle Rechte vorbehalten.'
    }
};

// Export for use in other scripts
window.translations = translations;