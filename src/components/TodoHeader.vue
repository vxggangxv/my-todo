<template>
    <header>
        <h1>Hello<br/>Harry!</h1>
        <p class="cmt">You have <span class="fg-blue">{{ this.storedTodoItems.length }} new task</span> today</p>
    </header>
</template>

<script>
export default {
    computed: {
        storedTodoItems() {
            return this.$store.getters.getTodoItems;
        }
    },
}
</script>

<style scoped>
header {
    width: 100%;
    box-sizing: border-box;
    padding: 2.8rem 10px 1.5rem 40px;
    font-family: "Roboto", sans-serif;
    font-family: "Open Sans", sans-serif;
    /* font-family: "Noto Sans KR", sans-serif; */
    /* background: #000; */
}
h1 {
    color: #2f3b52;
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
    letter-spacing: 1px;
}
.cmt {
    font-weight: 400;
    font-size: 13px;
    margin-top: 10px;
    padding-left: 2px;
}
</style>
