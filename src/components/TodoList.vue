<template>
    <div>
        <h2>Todos</h2>
        <input id='todoinput' v-model="newTodo" @keyup.enter="addItem">
        <h3>{{ newTodo }}</h3>
        <ul>
            <li v-for="item in listArray" :key="item.id">
                <TodoItem v-bind="item" @removeOne="removeItem(item.id)"></TodoItem>
            </li>
        </ul>




    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
    data() {
        return {
            newTodo: "",
            listArray: [],
        };
    },
    components: { TodoItem },
    methods: {
        getID() {
            return new Date().getTime()
        },
        addItem() {
            this.listArray.push({
                id: this.getID(),
                content: this.newTodo,
                state: 'activate'
            })
            this.newTodo = ''
        },
        removeItem(id) {
            this.listArray = this.listArray.filter(item => item.id !== id)


        }
    }
}
</script>

<style scoped>
</style>