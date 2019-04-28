<template>
    <header>
        <h1>Hello<br/>Harry!</h1>
        <p class="cmt">You have <span class="c-blue">3 new task</span> today</p>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    width: 100%;
    padding: 2.8rem 10px 1.5rem 50px;
    line-height: 1.5;
    font-family: "Roboto", "Ubuntu", sans-serif;
    /* background: #000; */
}
h1 {
    color: #2f3b52;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.1;
    letter-spacing: 1px;
}
.cmt {
    font-size: 13px;
}
</style>
