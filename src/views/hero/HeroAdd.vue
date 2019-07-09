<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input
          type="text"
          class="form-control"
          v-model="formData.name"
          id="txtName"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <input
          type="txt"
          v-model="formData.gender"
          class="form-control"
          id="gender"
          placeholder="性别"
        />
      </div>
      <!-- 注意button是提交按钮会进行跳转，要阻止默认行为 -->
      <button @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
//1.绑定文本框
//2.点击按钮发送请求，添加
export default {
  data() {
    return {
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    add() {
      this.axios
        .post("heroes", this.formData)
        .then(response => {
          const status = response.status;
          if (status == 201) {
             //3.添加成功，跳转回列表
            this.$router.push("/hero");
          } else {
              console.log('添加失败')
          }
        });
    }
  }
};
</script>

<style>
</style>
