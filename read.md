<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Serverless Hub — разработка без серверов </title>
  <meta name="description" content="Образовательный портал о бессерверной архитектуре (Serverless): принципы работы FaaS, BaaS, архитектура, облачные платформы, безопасность и практические руководства.">
  <meta name="author" content="Ананьин Ефим Вадимович">

  <!-- Шрифты Google Fonts: Inter и JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

  <!-- Favicon: официальная иконка Milligram CSS -->
  <link rel="icon" type="image/svg+xml" href="images/milligram-logo.svg">

  <!-- Нормализация стилей и Milligram CSS (основной CSS-фреймворк № 7) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css">

  <!-- Собственные стили проекта Serverless Hub -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- ==========================================================================
       Шапка сайта (Site Header)
       ========================================================================== -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <!-- Логотип и брендинг -->
        <a href="index.html" class="brand-wrapper" aria-label="Serverless Главная">
          <img src="images/logo.svg" alt="Логотип Serverless" class="brand-logo" width="38" height="38">
          <span class="brand-name">Serverless</span>
        </a>

        <!-- Основная горизонтальная навигация -->
        <nav class="site-nav" aria-label="Основная навигация">
          <ul>
            <li><a href="index.html" class="nav-link active">Главная</a></li>
            <li><a href="about.html" class="nav-link">О Serverless</a></li>
            <li><a href="architecture.html" class="nav-link">Архитектура</a></li>
            <li><a href="platforms.html" class="nav-link">Платформы</a></li>
            <li><a href="pros-cons.html" class="nav-link">Плюсы и минусы</a></li>
            <li><a href="use-cases.html" class="nav-link">Примеры</a></li>
            <li><a href="tutorial.html" class="nav-link">Практика</a></li>
            <li><a href="security.html" class="nav-link">Безопасность</a></li>
            <li><a href="comparison.html" class="nav-link">Сравнение</a></li>
            <li><a href="glossary.html" class="nav-link">Словарь</a></li>
          </ul>
        </nav>

        <!-- Действия шапки: переключатель темы и бургер-меню -->
                <div class="header-actions">
          <button id="theme-toggle" class="theme-toggle-btn" type="button" title="Переключить тему оформления" aria-label="Переключить тему">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <button id="burger-btn" class="burger-btn" type="button" title="Открыть меню навигации" aria-label="Открыть мобильное меню">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Мобильное выпадающее меню (Drawer) -->
  <div id="mobile-nav-overlay" class="mobile-nav-overlay" aria-hidden="true"></div>
  <aside id="mobile-nav-drawer" class="mobile-nav-drawer" aria-label="Мобильное меню">
    <div class="mobile-nav-header">
      <span class="brand-name">Serverless</span>
      <button id="mobile-nav-close" class="button-clear" type="button" aria-label="Закрыть меню" style="font-size: 2.4rem; padding: 0; height: auto; line-height: 1;">✕</button>
    </div>
    <ul class="mobile-nav-list">
      <li><a href="index.html" class="mobile-nav-link active">Главная страница</a></li>
      <li><a href="about.html" class="mobile-nav-link">Что такое Serverless</a></li>
      <li><a href="architecture.html" class="mobile-nav-link">Архитектура систем</a></li>
      <li><a href="platforms.html" class="mobile-nav-link">Облачные платформы</a></li>
      <li><a href="pros-cons.html" class="mobile-nav-link">Плюсы и минусы</a></li>
      <li><a href="use-cases.html" class="mobile-nav-link">Примеры использования</a></li>
      <li><a href="tutorial.html" class="mobile-nav-link">Практический урок</a></li>
      <li><a href="security.html" class="mobile-nav-link">Безопасность и IAM</a></li>
      <li><a href="comparison.html" class="mobile-nav-link">Сравнение архитектур</a></li>
      <li><a href="glossary.html" class="mobile-nav-link">Словарь и ресурсы</a></li>
    </ul>
  </aside>

  <!-- ==========================================================================
       Hero-секция (Главный баннер)
       ========================================================================== -->
  <section class="hero-section">
    <div class="container">
      <div class="row" style="align-items: center;">
        <div class="column column-60">
          <h1 class="hero-title">
            Serverless — <br>
            <span class="hero-highlight">разработка без серверов</span>
          </h1>
          <p class="hero-subtitle">
            Разработка без возни с серверами и сложной инфраструктурой. Пишите код функций, а запуск, железо и масштабирование берёт на себя облако.
          </p>
          <div class="hero-buttons">
            <a href="about.html" class="button">Начать с основ</a>
            <a href="architecture.html" class="button button-outline">Архитектура →</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-val">0</span>
              <span class="stat-lbl">серверов для настройки</span>
            </div>
            <div class="stat-item">
              <span class="stat-val">100%</span>
              <span class="stat-lbl">авто-масштабирование</span>
            </div>
            <div class="stat-item">
              <span class="stat-val">0 ₽</span>
              <span class="stat-lbl">оплата при простое</span>
            </div>
          </div>
        </div>
        <div class="column column-40" style="text-align: center;">
          <picture>
            <source srcset="images/hero-serverless.webp" type="image/webp">
            <img src="images/hero-serverless.png" alt="Иллюстрация бессерверной архитектуры" style="max-width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-lg);" width="800" height="520" loading="eager">
          </picture>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       Основной контент страницы + Сайдбар (Main & Aside)
       ========================================================================== -->
  <div class="container main-wrapper">
    <div class="row">
      <!-- Основной контент (Main) -->
      <main class="column column-75">
        
        <!-- Блок: Краткое объяснение Serverless -->
        <section id="intro" style="margin-bottom: 4rem;">
          <h2>Что такое Serverless?</h2>
          <p>
            Термин <strong>«Serverless» (бессерверные вычисления)</strong> не означает, что серверов физически не существует. Серверы по-прежнему работают в дата-центрах провайдера, однако вся ответственность за их конфигурацию, поддержание работоспособности, сетевую безопасность, балансировку нагрузки и автоматическое масштабирование полностью перенесена на облачного провайдера (Cloud Provider).
          </p>
          <p>
            Разработчик пишет компактные функции (FaaS — Function as a Service), реагирующие на внешние события: HTTP-запросы, появление файла в хранилище, отправку сообщения в очередь или изменение в базе данных. Выполнение функции начинается мгновенно по триггеру и оплачивается строго с точностью до миллисекунд фактического выполнения.
          </p>
        </section>

        <!-- Блок: Ключевые преимущества -->
        <section id="benefits" style="margin-bottom: 4rem;">
          <h2>Почему это удобно: главные плюсы</h2>
          <div class="row">
            <div class="column column-50">
              <div class="card">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 class="card-title">Оплата только за работу (Pay-as-you-go)</h3>
                <p>Вы платите исключительно за те миллисекунды, когда код реально выполнялся. Если сайт не посещают ночью — расходы составляют ровно 0 рублей.</p>
              </div>
            </div>
            <div class="column column-50">
              <div class="card">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3 class="card-title">Автоматическое масштабирование</h3>
                <p>При росте нагрузки с 1 до 50 000 параллельных запросов платформа автоматически создаёт нужное количество изолированных микро-экземпляров.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column column-50">
              <div class="card">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                </div>
                <h3 class="card-title">Не нужно настраивать серверы</h3>
                <p>Забудьте про SSH, обновление ядер Linux, настройку NGINX и установку патчей безопасности. Инфраструктура полностью абстрагирована.</p>
              </div>
            </div>
            <div class="column column-50">
              <div class="card">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 class="card-title">Быстрый запуск проектов (MVP)</h3>
                <p>Команды концентрируются на бизнес-логике и создают MVP за дни вместо месяцев, быстро поставляя ценность конечным пользователям.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Блок: Направления изучения на сайте -->
        <section id="tracks" style="margin-bottom: 4rem;">
          <h2>Разделы справочника</h2>
          <p>На сайте собрано 10 разделов с понятными объяснениями и примерами:</p>
          
          <div class="row">
            <div class="column column-33">
              <div class="card">
                <h4>1. Теория и истоки</h4>
                <p>Эволюция от физических серверов и IaaS к бессерверным парадигмам.</p>
                <a href="about.html" class="button button-outline" style="width: 100%;">Читать раздел →</a>
              </div>
            </div>
            <div class="column column-33">
              <div class="card">
                <h4>2. Архитектура</h4>
                <p>Компоненты FaaS, BaaS, API Gateway, очереди событий и шины данных.</p>
                <a href="architecture.html" class="button button-outline" style="width: 100%;">Схемы систем →</a>
              </div>
            </div>
            <div class="column column-33">
              <div class="card">
                <h4>3. Платформы</h4>
                <p>AWS Lambda, Azure Functions, Cloudflare Workers и Yandex Cloud.</p>
                <a href="platforms.html" class="button button-outline" style="width: 100%;">Обзор платформ →</a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column column-33">
              <div class="card">
                <h4>4. Плюсы и минусы</h4>
                <p>Честный разбор: холодный старт, вендор-лок и пути решения проблем.</p>
                <a href="pros-cons.html" class="button button-outline" style="width: 100%;">Анализ рисков →</a>
              </div>
            </div>
            <div class="column column-33">
              <div class="card">
                <h4>5. Практика</h4>
                <p>Пошаговое написание бессерверного микросервиса с симулятором в браузере.</p>
                <a href="tutorial.html" class="button button-outline" style="width: 100%;">Перейти к коду →</a>
              </div>
            </div>
            <div class="column column-33">
              <div class="card">
                <h4>6. Сравнение</h4>
                <p>Монолит vs Микросервисы vs Serverless — детальная таблица критериев.</p>
                <a href="comparison.html" class="button button-outline" style="width: 100%;">Сравнить решения →</a>
              </div>
            </div>
          </div>
        </section>

        <!-- Блок: Как работает Serverless (4 шага) -->
        <section id="how-it-works" style="margin-bottom: 4rem;">
          <h2>Как работает Serverless-приложение</h2>
          <div class="flow-grid">
            <div class="flow-step-card">
              <div class="flow-step-num">1</div>
              <h4>Событие (Event)</h4>
              <p>Пользователь нажимает кнопку в браузере, отправляя HTTP-запрос, или загружает файл в хранилище.</p>
            </div>
            <div class="flow-step-card">
              <div class="flow-step-num">2</div>
              <h4>Шлюз (API Gateway)</h4>
              <p>Облачный шлюз валидирует запрос, проверяет авторизационный токен и маршрутизирует вызов.</p>
            </div>
            <div class="flow-step-card">
              <div class="flow-step-num">3</div>
              <h4>Изолированный FaaS</h4>
              <p>Платформа за миллисекунды запускает MicroVM с кодом функции и передаёт ей полезную нагрузку.</p>
            </div>
            <div class="flow-step-card">
              <div class="flow-step-num">4</div>
              <h4>Результат &amp; Сон</h4>
              <p>Функция обращается к базе данных BaaS, возвращает ответ клиенту и переходит в режим ожидания.</p>
            </div>
          </div>
        </section>

        <!-- Блок с архитектурной схемой -->
        <section id="diagram-preview" style="margin-bottom: 4rem;">
          <h2>Архитектурная схема взаимодействия</h2>
          <p>В типовой бессерверной системе компоненты слабо связаны между собой и общаются через события:</p>
          <figure style="margin: 2rem 0;">
            <img src="images/architecture-diagram.svg" alt="Схема бессерверной архитектуры: Клиенты, Шлюз, FaaS и BaaS" style="border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
            <figcaption style="font-size: 1.3rem; color: var(--text-muted); margin-top: 0.8rem; text-align: center;">
              Рис. 1 — Поток взаимодействия компонентов в современной Serverless-архитектуре
            </figcaption>
          </figure>
          <p style="text-align: center;">
            <a href="architecture.html" class="button">Подробный разбор архитектуры →</a>
          </p>
        </section>

        <!-- Призыв к действию (CTA) -->
        <section class="card" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%); border-color: var(--accent-cyan); text-align: center; padding: 4rem 2rem;">
          <h2>Готовы погрузиться в бессерверный мир?</h2>
          <p style="max-width: 650px; margin: 0 auto 2.5rem auto;">
            Перейдите к фундаментальному разделу «Что такое Serverless», чтобы узнать историю развития технологии, понять устройство модели Pay-as-you-go и познакомиться с ключевыми концепциями.
          </p>
          <a href="about.html" class="button">Перейти к первому уроку</a>
        </section>

      </main>

      <!-- ==========================================================================
           Сайдбар (Aside)
           ========================================================================== -->
      <aside class="column column-25 site-aside">
        
        <!-- Виджет: Содержание раздела -->
        <div class="aside-widget">
          <h3 class="widget-title">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Обратная связь
          </h3>
          <p style="font-size: 1.35rem; margin-bottom: 1.2rem;">Есть вопрос или отзыв по учебному проекту? Напишите автору:</p>
          <form class="subscribe-form" novalidate>
            <input type="email" placeholder="Ваш email" required aria-label="Email для связи">
            <button type="submit" class="button" style="width: 100%;">Отправить</button>
            <div class="subscribe-feedback" role="alert"></div>
          </form>
        </div>

        <!-- Виджет: Полезные ссылки -->
        <div class="aside-widget">
          <h3 class="widget-title">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            Ресурсы
          </h3>
          <ul class="related-list">
            <li><a href="https://milligram.io/" target="_blank" rel="noopener">Документация Milligram CSS ↗</a></li>
            <li><a href="https://aws.amazon.com/lambda/" target="_blank" rel="noopener">Amazon AWS Lambda ↗</a></li>
            <li><a href="https://azure.microsoft.com/services/functions/" target="_blank" rel="noopener">Microsoft Azure Functions ↗</a></li>
            <li><a href="glossary.html">Словарь терминов Serverless</a></li>
          </ul>
        </div>

      </aside>
    </div>
  </div>

  <!-- Кнопка возврата наверх -->
  <button id="back-to-top" class="back-to-top" type="button" title="Вернуться к началу страницы" aria-label="Наверх">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  </button>

  <!-- ==========================================================================
       Подвал сайта (Site Footer)
       ========================================================================== -->
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <!-- Колонка 1: О проекте и студенте -->
        <div class="column column-40">
          <h4 class="footer-col-title">Serverless</h4>
          <p>
            Учебный проект по дисциплине «Использование CSS-фреймворков». Разработан с использованием минималистичного CSS-фреймворка <strong>Milligram</strong> и семантического HTML5.
          </p>
          <p style="font-size: 1.3rem;">
            <strong>Студент:</strong> Ананьин Ефим Вадимович<br>
            <strong>Тема № 34:</strong> Бессерверная архитектура (Serverless)<br>
            <span class="footer-framework-tag">
              <img src="images/milligram-logo.svg" alt="Milligram" width="16" height="16">
              <strong>CSS-фреймворк:</strong> <a href="https://milligram.io" target="_blank" rel="noopener">Milligram.io</a> (v1.4.1)
            </span>
          </p>
        </div>

        <!-- Колонка 2: Навигация -->
        <div class="column column-30">
          <h4 class="footer-col-title">Разделы портала</h4>
          <ul class="footer-links">
            <li><a href="about.html">Что такое Serverless</a></li>
            <li><a href="architecture.html">Архитектура и FaaS/BaaS</a></li>
            <li><a href="platforms.html">Облачные платформы</a></li>
            <li><a href="pros-cons.html">Преимущества и недостатки</a></li>
            <li><a href="use-cases.html">Практические примеры</a></li>
            <li><a href="tutorial.html">Пошаговый урок создания функции</a></li>
          </ul>
        </div>

        <!-- Колонка 3: Дополнительно -->
        <div class="column column-30">
          <h4 class="footer-col-title">Материалы и ссылки</h4>
          <ul class="footer-links">
            <li><a href="security.html">Безопасность и IAM</a></li>
            <li><a href="comparison.html">Сравнение: Монолит vs Serverless</a></li>
            <li><a href="glossary.html">Глоссарий терминов и видео</a></li>
            <li><a href="https://milligram.io/" target="_blank" rel="noopener">Официальный сайт Milligram CSS</a></li>
            <li><a href="README.md" target="_blank">Документация проекта README.md</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © 2026 Serverless. Образовательный проект. Все права защищены.
        </div>
        <div>
          Разработано на чистом HTML5, CSS3 (Milligram) и JavaScript
        </div>
      </div>
    </div>
  </footer>

  <!-- Скрипты -->
  <script src="js/script.js"></script>
</body>
</html>
