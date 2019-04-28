<template>
    <div class="inputBox shadow">
        <input type="text">
        <span class="addContainer">
            <i class="addBtn fas fa-plus"></i>
        </span>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
input:focus {
  outline: none;
}
.inputBox {
  margin: 0 50px;
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  text-align: center;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
// 모달용
.closeModalBtn {
  color: #42b983;
}
</style>
