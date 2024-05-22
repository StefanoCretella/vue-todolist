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
        ]
    },

    // Metodi dell'applicazione
    methods: {

        // Metodo per cambiare lo stato "done" di un to-do quando viene cliccato
        toggleDone: function(todo) {
            todo.done = !todo.done; // Inverte lo stato di "done"
        },

        // Metodo per rimuovere un to-do dalla lista
        removeTodo: function(index) {
            this.todos.splice(index, 1); // Rimuove il to-do dall'array 
        }
    }
});
