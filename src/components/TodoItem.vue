<template>
    <div>
        <span id="todocontent"  :class="{ completed: this.todoState === 'completed' }">
            {{ this.content }}
        </span>
        <button id="completeBtn" @click="completeOne"> √ </button>
        <button id="removeBtn" @click="removeOne"> X </button>
    </div>
</template>

<script>
export default {
    emits: ['removeOne', 'completeOne'],
    props: {
        state: {
            type: String,
            require: true,

        },
        id: {
            type: Number,
            require: true
        },
        content: {
            type: String,
            require: true
        }

    },
    data() {
        return {

            todoState: this.state
        }
    },
    methods: {
        removeOne() {
            this.$emit("removeOne", this.id)
        },
        completeOne() {
            if (this.todoState == 'activate') {
                this.todoState = 'completed'
            }
            this.$emit('completeOne')
        },


    }
}
</script>

<style>
.completed {
    text-decoration: line-through;
}
</style>