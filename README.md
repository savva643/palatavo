# Общественная палата Владимирской области

Современный информационный сайт Общественной палаты Владимирской области, разработанный на базе Node.js (бэкенд) и React (фронтенд).

## Технологический стек

### Бэкенд
- **Node.js 18+** - среда выполнения
- **Strapi 4.25** - headless CMS
- **PostgreSQL** - база данных
- **Prisma** - ORM (используется внутри Strapi)
- **Nodemailer** - отправка email
- **node-cron** - планировщик задач для бэкапов

### Фронтенд
- **React 18** - библиотека UI
- **Next.js 14** - фреймворк (App Router)
- **Material-UI (MUI)** - компоненты UI
- **Tailwind CSS** - дополнительная стилизация
- **Emotion** - CSS-in-JS библиотека

### Контейнеризация
- **Docker** - контейнеризация
- **Docker Compose** - оркестрация контейнеров

## Структура проекта

```
palatavo/
├── backend/                 # Strapi сервер
│   ├── config/              # конфигурационные файлы
│   ├── src/                 # исходный код
│   │   ├── admin/           # кастомизация админки
│   │   ├── api/             # API endpoints и модели
│   │   │   ├── feedback/    # форма обратной связи
│   │   │   ├── news/        # новости
│   │   │   ├── announcements/ # анонсы
│   │   │   ├── documents/   # документы
│   │   │   ├── members/     # члены палаты
│   │   │   ├── council/     # совет палаты
│   │   │   ├── commissions/ # комиссии
│   │   │   ├── projects/    # проекты
│   │   │   ├── municipal-chambers/ # муниципальные палаты
│   │   │   └── contacts/    # контакты
│   │   └── index.js         # точка входа
│   ├── scripts/             # вспомогательные скрипты
│   │   └── backup.js        # скрипт бэкапа
│   ├── package.json
│   ├── Dockerfile
│   └── .env.example
├── frontend/                # Next.js приложение
│   ├── app/                 # App Router
│   │   ├── layout.js        # главный layout
│   │   ├── page.js          # главная страница
│   │   ├── [slug]/          # динамические страницы
│   │   ├── api/             # API routes
│   │   ├── globals.css      # глобальные стили
│   │   ├── sitemap.js       # карта сайта
│   │   └── robots.js        # правила для поисковиков
│   ├── components/          # React компоненты
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── VisionImpairedToggle.jsx
│   │   ├── VisionImpairedProvider.jsx
│   │   ├── NewsList.jsx
│   │   ├── Pagination.jsx
│   │   ├── Gallery.jsx
│   │   ├── DocumentList.jsx
│   │   └── FeedbackForm.jsx
│   ├── lib/                 # утилиты
│   │   ├── strapi.js        # запросы к Strapi
│   │   └── theme.js         # тема MUI
│   ├── public/              # статика
│   ├── Dockerfile
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .env.example
├── docker-compose.yml       # разработка
├── docker-compose.prod.yml  # продакшен
├── .env.example
├── README.md
└── checklist.md
```

## Установка и запуск

### Требования
- Docker и Docker Compose
- Node.js 18+ (для локальной разработки без Docker)

### Запуск через Docker Compose (рекомендуется)

1. Клонируйте репозиторий:
```bash
git clone <repository-url>
cd palatavo
```

2. Скопируйте файл примера переменных окружения:
```bash
cp .env.example .env
```

3. Отредактируйте `.env` файл, указав реальные значения:
```env
POSTGRES_USER=strapi
POSTGRES_PASSWORD=strapi
POSTGRES_DB=palatavo
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-admin-secret
JWT_SECRET=your-secret
SMTP_HOST=smtp.mail.ru
SMTP_PORT=465
SMTP_USER=opvo_33@mail.ru
SMTP_PASS=your-password
NEXT_PUBLIC_API_URL=http://localhost:1337/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Запустите контейнеры:
```bash
docker-compose up -d
```

5. Доступ к приложениям:
- Frontend: http://localhost:3000
- Backend (Strapi Admin): http://localhost:1337/admin

### Локальная разработка

#### Бэкенд
```bash
cd backend
npm install
cp .env.example .env
npm run develop
```

#### Фронтенд
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## Модели контента Strapi

### Новости (News)
- title (string) - заголовок
- description (text) - описание
- content (richtext) - содержание
- image (media) - изображение
- date (datetime) - дата публикации
- slug (uid) - URL-идентификатор
- tags (json) - теги

### Анонсы (Announcements)
- title (string) - заголовок
- description (text) - описание
- content (richtext) - содержание
- image (media) - изображение
- date (datetime) - дата публикации
- eventDate (datetime) - дата мероприятия
- slug (uid) - URL-идентификатор
- location (string) - место проведения

### Документы (Documents)
- title (string) - название
- description (text) - описание
- file (media) - файл
- category (enum) - категория (reports, regulations, materials, other)
- date (datetime) - дата
- slug (uid) - URL-идентификатор

### Члены палаты (Members)
- name (string) - ФИО
- position (string) - должность
- bio (richtext) - биография
- photo (media) - фото
- commission (relation) - комиссия
- email (email) - email
- phone (string) - телефон

### Совет палаты (Council)
- name (string) - ФИО
- position (string) - должность
- bio (richtext) - биография
- photo (media) - фото
- order (integer) - порядок сортировки
- email (email) - email
- phone (string) - телефон

### Комиссии (Commissions)
- name (string) - название
- description (richtext) - описание
- chairman (string) - председатель
- members (relation) - члены комиссии
- order (integer) - порядок сортировки

### Проекты (Projects)
- title (string) - название
- description (text) - описание
- content (richtext) - содержание
- image (media) - изображение
- status (enum) - статус (active, completed, planned)
- startDate (datetime) - дата начала
- endDate (datetime) - дата окончания
- slug (uid) - URL-идентификатор

### Муниципальные палаты (Municipal Chambers)
- name (string) - название
- district (string) - район
- description (richtext) - описание
- address (string) - адрес
- phone (string) - телефон
- email (email) - email
- chairman (string) - председатель
- membersCount (integer) - количество членов

### Контакты (Contacts)
- title (string) - название
- address (text) - адрес
- phone (string) - телефон
- email (email) - email
- workingHours (text) - часы работы
- mapLink (string) - ссылка на карту
- socialLinks (json) - ссылки на соцсети

## Функциональность

### Версия для слабовидящих
- Переключатель версии на всех страницах
- Увеличенный размер шрифта
- Высокая контрастность
- Возможность скрытия изображений
- Поддержка навигации с клавиатуры
- Соответствие ГОСТ Р 52872-2012

### SEO оптимизация
- Генерация sitemap.xml
- Файл robots.txt
- Meta теги на всех страницах
- Open Graph разметка
- Семантическая HTML разметка

### Резервное копирование
- Автоматический бэкап базы данных каждый день в 2:00
- Сохранение дампов в папку `backend/backups/`
- Использование pg_dump для создания бэкапов

### Форма обратной связи
- Валидация полей
- Отправка уведомлений на email
- Согласие на обработку персональных данных
- Защита от спама

## Развертывание в продакшене

1. Подготовьте файл `.env` с продакшн настройками
2. Используйте `docker-compose.prod.yml`:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

3. Настройте обратный прокси (nginx) для:
   - HTTPS
   - Статических файлов
   - Правильной маршрутизации

## Администрирование

### Работа с Strapi CMS
1. Перейдите в админку: http://your-domain.com/admin
2. Создайте администратора при первом запуске
3. Настройте роли и права доступа
4. Создайте контент через удобный интерфейс

### Роли пользователей
- **Администратор** - полный доступ ко всем функциям
- **Контент-менеджер** - создание и редактирование контента

### Мониторинг
- Проверьте работоспособность через `http://your-domain.com/health`
- Следите за логами контейнеров: `docker-compose logs -f`

## Исправления и улучшения

### Решение проблем со сборкой
- Исправлены конфликты имен в API Strapi (изменены на уникальные названия: news-items, announcement-items и т.д.)
- Добавлена поддержка клиентских компонентов для Next.js 14
- Настроены переменные окружения для Docker сборки
- Исправлены ошибки навигации в App Router
- Создан компонент Loading для улучшения UX

### Адаптивность для мобильных устройств
- Полностью переработан Header компонент с использованием Drawer
- Адаптивный логотип с разным текстом для мобильных и десктоп
- Адаптивная навигация с правильными отступами и размерами
- Поиск скрыт на мобильных, доступен в боковом меню
- Адаптивные шрифты и отступы во всем приложении
- Footer оптимизирован для мобильных устройств
- Адаптивные медиа-запросы в globals.css

### Улучшения UX
- Компонент Loading с индикатором прогресса для всех страниц
- Заменен useRouter на window.location для совместимости
- Добавлена плавная прокрутка и улучшенное отображение текста
- VisionImpairedToggle доступен на всех устройствах
- Оптимизированы размеры компонентов для средних экранов

## Поддержка

Для технической поддержки обращайтесь:
- Email: support@palatavo.ru
- Телефон: (4922) 32-12-34

## Лицензия

© 2024 Общественная палата Владимирской области. Все права защищены.
