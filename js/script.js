/**
 * Serverless Hub — Главный скрипт интерактивности
 * Дисциплина: Использование CSS-фреймворков
 * Студент: Ананьин Ефим Вадимович | Тема № 34
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initBackToTop();
  initActiveNav();
  initAccordions();
  initSubscribeForms();
  initGlossarySearch();
  initPlatformTabs();
  initCodeCopy();
  initServerlessSimulator();
});

/* ==========================================================================
   1. Переключатель светлой и тёмной темы (с сохранением в LocalStorage)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('serverless_theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(activeTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('serverless_theme', theme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    if (theme === 'dark') {
      toggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
      toggleBtn.setAttribute('title', 'Включить светлую тему');
      toggleBtn.setAttribute('aria-label', 'Включить светлую тему');
    } else {
      toggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
      toggleBtn.setAttribute('title', 'Включить тёмную тему');
      toggleBtn.setAttribute('aria-label', 'Включить тёмную тему');
    }
  }
}

/* ==========================================================================
   2. Мобильное бургер-меню (Drawer & Overlay)
   ========================================================================== */
function initMobileMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const closeBtn = document.getElementById('mobile-nav-close');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');

  if (!burgerBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  burgerBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   3. Кнопка возврата наверх (Back to Top)
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   4. Подсветка активной страницы в навигации
   ========================================================================== */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   5. Раскрывающиеся списки / Аккордеон (FAQ)
   ========================================================================== */
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Закрываем другие элементы внутри той же группы (опционально)
      const parentGroup = item.closest('.accordion-group');
      if (parentGroup) {
        parentGroup.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) sibling.classList.remove('active');
        });
      }

      item.classList.toggle('active', !isActive);
    });
  });
}

/* ==========================================================================
   6. Форма подписки с клиентской валидацией
   ========================================================================== */
function initSubscribeForms() {
  const forms = document.querySelectorAll('.subscribe-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const feedback = form.querySelector('.subscribe-feedback');
      if (!emailInput || !feedback) return;

      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailVal)) {
        feedback.className = 'subscribe-feedback error';
        feedback.textContent = 'Пожалуйста, введите корректный email адрес.';
        emailInput.focus();
      } else {
        feedback.className = 'subscribe-feedback success';
        feedback.textContent = '✓ Спасибо за подписку! Дайджест отправлен.';
        emailInput.value = '';
        setTimeout(() => {
          feedback.style.display = 'none';
          feedback.className = 'subscribe-feedback';
        }, 5000);
      }
    });
  });
}

/* ==========================================================================
   7. Поиск по словарю терминов (Live Search)
   ========================================================================== */
function initGlossarySearch() {
  const searchInput = document.getElementById('glossary-search');
  const countDisplay = document.getElementById('glossary-count');
  const emptyState = document.getElementById('glossary-empty');
  const items = document.querySelectorAll('.glossary-item');

  if (!searchInput || !items.length) return;

  function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    items.forEach(item => {
      const term = item.querySelector('.glossary-term')?.textContent.toLowerCase() || '';
      const desc = item.querySelector('.glossary-desc')?.textContent.toLowerCase() || '';
      const match = term.includes(query) || desc.includes(query);

      if (match) {
        item.style.display = 'block';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (countDisplay) {
      countDisplay.textContent = `Показано терминов: ${visibleCount} из ${items.length}`;
    }

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  searchInput.addEventListener('input', performSearch);
}

/* ==========================================================================
   8. Интерактивные вкладки на странице платформ (Tabs)
   ========================================================================== */
function initPlatformTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* ==========================================================================
   9. Кнопки копирования кода
   ========================================================================== */
function initCodeCopy() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBox = btn.closest('.code-box');
      if (!codeBox) return;

      const codeElem = codeBox.querySelector('code');
      if (!codeElem) return;

      const text = codeElem.innerText;

      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Скопировано! ✓';
        btn.classList.add('copied');

        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2200);
      }).catch(err => {
        console.error('Не удалось скопировать текст:', err);
      });
    });
  });
}

/* ==========================================================================
   10. Интерактивный эмулятор Serverless Handler (на tutorial.html)
   ========================================================================== */
function initServerlessSimulator() {
  const runBtn = document.getElementById('run-simulator-btn');
  const methodSelect = document.getElementById('sim-method');
  const pathSelect = document.getElementById('sim-path');
  const outputBox = document.getElementById('simulator-output');

  if (!runBtn || !outputBox) return;

  runBtn.addEventListener('click', () => {
    const method = methodSelect.value;
    const path = pathSelect.value;
    const executionId = 'req-' + Math.random().toString(36).substring(2, 9);
    const timestamp = new Date().toISOString();

    // Симуляция объекта Event из API Gateway
    const mockEvent = {
      version: "2.0",
      routeKey: `${method} ${path}`,
      rawPath: path,
      headers: {
        "content-type": "application/json",
        "user-agent": "ServerlessHubBrowserClient/1.0"
      },
      requestContext: {
        http: {
          method: method,
          path: path,
          protocol: "HTTP/1.1",
          sourceIp: "127.0.0.1"
        },
        requestId: executionId,
        timeEpoch: Date.now()
      }
    };

    // Запуск имитированного хендлера
    let statusCode = 200;
    let body = {};

    if (path === '/api/items' && method === 'GET') {
      statusCode = 200;
      body = {
        success: true,
        message: "Список элементов успешно получен",
        count: 3,
        items: [
          { id: 1, name: "Бессерверная функция A", status: "active" },
          { id: 2, name: "Очередь сообщений SQS", status: "idle" },
          { id: 3, name: "Хранилище S3 Bucket", status: "ready" }
        ],
        requestId: executionId
      };
    } else if (path === '/api/items' && method === 'POST') {
      statusCode = 201;
      body = {
        success: true,
        message: "Новая запись успешно создана в базе данных BaaS",
        recordId: "item-" + Math.floor(Math.random() * 10000),
        createdAt: timestamp,
        requestId: executionId
      };
    } else {
      statusCode = 404;
      body = {
        success: false,
        error: "RouteNotFound",
        message: `Маршрут ${method} ${path} не сконфигурирован в API Gateway`,
        requestId: executionId
      };
    }

    const duration = Math.floor(Math.random() * 25) + 8; // 8-33ms warm execution time

    const simulatedResponse = {
      statusCode: statusCode,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Execution-Duration-Ms": duration,
        "X-Serverless-Engine": "V8-MicroVM"
      },
      body: body
    };

    outputBox.textContent = `// [INFO] Запуск функции ${executionId}...\n` +
      `// [INFO] Время холодного старта: 0 мс (Warm instance reused)\n` +
      `// [INFO] Время выполнения хендлера: ${duration} мс\n` +
      `// [STATUS] HTTP ${statusCode}\n\n` +
      JSON.stringify(simulatedResponse, null, 2);
  });
}
