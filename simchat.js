let mychat = new FakeChat('#getMessages', {
  messages: [
    {
        text: 'Добро пожаловать на главную страницу сайта!✌',
        timer: 1000,
    },
    {
        text: 'Чтобы начать проходить новеллу нажмите начать историю в меню сверху',
        timer: 3000,
    },
    {
        text: 'А это иммитация чата с использованием js</b>',
        timer: 5000,
    },
],
visible: false,
adding: 'beforeend',
theme: {
    theme: 'timber',
    angle: 'square',
},
animation: {
    class: 'animation_class',
    function: 'animation_func',
}
  })