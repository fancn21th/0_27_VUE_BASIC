Vue.component('friend-component', {
  props: ['friend'],
  filters: {
    fullName(value) {
      return `${value.first} ${value.last}`
    }
  },
  methods: {
    incrementAge(friend){
      friend.age = friend.age + 1
    },
    decrementAge(friend){
      friend.age = friend.age - 1
    },
  },
  template: `
    <div>
      <h2>{{friend | fullName}}</h2>
        <input v-model="friend.first"/>
      <h2>
        <button v-on:click="decrementAge(friend)">-</button>
        Age: {{friend.age}}
        <button v-on:click="incrementAge(friend)">+</button>
      </h2>
    </div>
  `
})

const app = new Vue({
  el: "#app",
  data: {
    friends: [
      {
        first: 'Alex',
        last: 'Fan',
        age: 37
      },
      {
        first: 'Sky',
        last: 'Fan',
        age: 7
      }
    ],
  },
  template: `
    <div>
      <friend-component v-for="item in friends" v-bind:friend="item"/>
    </div>
  `
})
