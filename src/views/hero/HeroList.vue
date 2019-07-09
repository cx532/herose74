<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" :to="{name:'heroadd'}">添加</router-link>
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
              <!-- <router-link :to="'hero/edit/'+item.id">编辑</router-link> -->
              <router-link :to="{name:'heroedit',params:{id:item.id}}">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:;" @click.prevent="del(item.id)">删除</a>
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
      this.axios
        .get("heroes")
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
    },
    del(id) {
      //1.弹出确认对话框
      if (!confirm("确认删除吗？")) {
        return false;
      }
      //2.发送请求删除
      this.axios
        .delete(`heroes/${id}`)
        .then(response => {
          const status = response.status;
          if (status == 200) {
            this.loadData();
          } else {
            console.log("删除失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
      //3.重新渲染列表
    }
  }
};
</script>
<style lang="">
</style>
