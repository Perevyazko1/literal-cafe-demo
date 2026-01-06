# Literal Cafe

Проект на Next.js с применением архитектуры Feature-Sliced Design (FSD), Tailwind CSS и Framer Motion.

Дизайн вдохновлен [Caffè Gilli](https://www.caffegilli.com/en) - элегантным итальянским кафе с богатой историей.

## Структура проекта

Проект организован по методологии FSD:

```
src/
├── pages/          # Страницы приложения
├── widgets/        # Крупные блоки интерфейса
│   ├── hero/       # Главная секция
│   ├── patisserie/ # Секция кондитерских изделий
│   ├── chocolatier/# Секция шоколада
│   ├── bistrot/    # Секция бистро
│   ├── cocktail-bar/# Секция коктейль-бара
│   ├── institution/# Секция об истории
│   └── footer/      # Футер
├── features/       # Функциональные возможности
├── entities/       # Бизнес-сущности
└── shared/         # Переиспользуемые компоненты и утилиты
```

## Установка

```bash
npm install
```

Если возникают проблемы с правами доступа к кэшу npm, см. файл `TROUBLESHOOTING.md`.

## Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Технологии

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (для анимаций)
- Feature-Sliced Design

## Особенности

- Плавные анимации при скролле с использованием Framer Motion
- Элегантный минималистичный дизайн
- Адаптивная верстка
- Оптимизированная производительность

