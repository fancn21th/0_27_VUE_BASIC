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
    },
    deleteItem: function (index) {
      this.items.splice(index, 1)
    }
  },
  filters: {
    capitalize: function (value) {
      if(!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    total: function () {
      return this.items.length
    }
  }
})
