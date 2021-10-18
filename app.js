const vm = new Vue({
    el: "#app",
    data(){
        return{
            message: "Hello world",
            newtodo: "",
            todos: []
            
        }
    },
    methods: {
        addTodo(){
            this.todos.push({
                title: this.newtodo,
            done: false,
        })
        this.newtodo=""
        },
        removeTodo(todo){
            const todoIndex = this.todos.indexOf(this.todo)
            this.todos.splice(todoIndex, 1)
        },
        allDone(){
        this.todos.forEach((todo) => {
            todo.done = true
        } )
        },
        removeAll(todo){
            const todoIndex = this.todos.indexOf(this.todo)
            const lastTodoIndex = this.todos.length - 1
            console.log(lastTodoIndex)
            this.todos.forEach((todo)=>{
                this.todos.splice(todoIndex, 9)
            })
        }

        
    }
})