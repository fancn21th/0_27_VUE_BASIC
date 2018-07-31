var card = new Vue({
  el: "#card",
  data: {
    title: "foo",
    content: "<h1>bar</h1>",
    items: [
      {
        text: 'foo1'
      },
      {
        text: 'foo2'
      },
      {
        text: 'foo3'
      }
    ]
  },
  methods: {
    addItem: function () {
      var input = document.getElementById('itemForm')
      if(input.value) {
        this.items.push({
          text: input.value
        })
        input.value = ''
      }
    }
  }
})
