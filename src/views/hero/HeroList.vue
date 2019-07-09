<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <a class="btn btn-success" href="add.html">添加</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 1.英雄列表
// 1.1发送请求，获取数据
import axios from "axios";
// 1.2渲染列表
export default {
  data() {
    return {
      //存取数据
      list: []
    };
  },
  mounted() {
    //组建加载完毕发送请求
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:3000/heroes")
        .then(response => {
          const { status, data } = response;
          if (status == 200) {
            //获取成功
            this.list = data;
          } else {
            console.log("获取失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="">
</style>
