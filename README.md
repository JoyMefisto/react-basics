# react react-dom

Реализован todo-list для изучения и понимания работы с react и react-dom. В нём можно добавлять, редактировать и удалять задачи. Есть секундомер, который запускается, ставится на паузу и сбрасывается. Так же добавлен подсчёт задач: всего, выполнено и осталось.

Для работы со списком задач как в реальном приложении, я написал простой сервер на Node.js, который по средствам своего API работает с этим списком задач.


В работе я познакомился со следующими прелестями react и react-dom:
* JSX
* Виртуальный DOM
* Валидация свойств
* Композиция
* Состояния
* Поток данных
* Взаимодействие компонентов
* Форма
* События
* Анимация


### Install

1. `cd react-basics`
2. `npm i`

### Use
- Для запуска todo:
1. `npm run start` запуск webpack сервера + watch (localhost:8080)
2. `npm run build` создание build.js
- Для запуска сервера:
1. `node server.js`