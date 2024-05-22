new Vue({
    // Collegamento all'elemento HTML con id "app"
    el: '#app', 

    // Dati dell'applicazione
    data: {

        // Array di to-do
        todos: [
            { text: 'Fare la spesa', done: false }, // To-do 1
            { text: 'Pulire la casa', done: true }, // To-do 2
            { text: 'Preparare la cena', done: false } // To-do 3
        ],

        // Testo del nuovo to-do inserito dall'utente
        newTodoText: ''
    },

    // Metodi dell'applicazione
    methods: {

        toggleDone: function(todo) {
            todo.done = !todo.done; 
        },

        removeTodo: function(index) {
            this.todos.splice(index, 1); 
        },
        
        addTodo: function() {    
            if (this.newTodoText.trim() !== '') {         
                this.todos.push({ text: this.newTodoText, done: false });
                this.newTodoText = '';
            }
        }
    }
});
