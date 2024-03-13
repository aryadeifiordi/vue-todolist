console.log('works');

const { createApp } = Vue 
createApp({
    data() {
        return {
            newTodo:'',
            todos:[
                { text: 'fare la spesa', done: false },
                { text: 'studiare Vue.js', done: true },
                { text: 'fare esercizi', done: false }
            ]
            
        }
    }
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, done: false });
                this.newTodo = '';
            }
        }
    }

}).mount('#app')