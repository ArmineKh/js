Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
})
new Vue({
  el: '#app',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
    seen: true,
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ],
    firstName: 'Foo',
    lastName: 'Bar',
    // fullName: 'Foo Bar'

    question: '',
   answer: 'Пока вы не зададите вопрос, я не могу ответить!',
   count: 0
  },

  watch: {
   firstName: function (val) {
     this.fullName = val + ' ' + this.lastName
   },
   lastName: function (val) {
     this.fullName = this.firstName + ' ' + val
   },

   question: function (newQuestion, oldQuestion) {
      this.answer = 'Ожидаю, когда вы закончите печатать...'
      this.debouncedGetAnswer()
    }
 },

 computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },

  created: function () {
    // _.debounce — это функция lodash, позволяющая ограничить то,
    // насколько часто может выполняться определённая операция.
    // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
    // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
    // Узнать больше о функции _.debounce (и её родственнице _.throttle),
    // можно в документации: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },

  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
        return
      }
      this.answer = 'Думаю...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Ошибка! Не могу связаться с API. ' + error
        })
    }
}

})
