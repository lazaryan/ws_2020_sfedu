# Папка для написания React интерфейса

В папке **ui** находятся базовые ui компоненты для интерфейса (input, text, checkbox and etc.)

**template.pug** - простой шаблон для разработки

в папке **components** распологаются сами страницы. Формат:
- src - папка для самого компонента
- mock.js - файла для моканья работы бэкенда. Формат:

```js
module.exports = {
    get: { url: methodResponse },
    post: {},
    put: {},
    delete: {}
}
```
