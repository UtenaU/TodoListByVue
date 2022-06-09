<template>
    <div>
        <h2>Todos</h2>
        <input id='todoinput' v-model="newTodo">
        <h3>{{newTodo}}</h3>
        <TodoItem :id="idNum" content="sdaf" state="activate"></TodoItem>




    </div>
</template>

<script>
    import TodoItem from "./TodoItem.vue";
    export default {
    data() {
        return {
            newTodo: "",
            idNum: 123123
        };
    },
    components: { TodoItem }
}
</script>

<style scoped>

</style>