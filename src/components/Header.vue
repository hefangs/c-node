<template>
  <div class="header">
    <router-link :to="{name:'root'}">
      <img src="../assets/cnodejs_light.svg" alt />
    </router-link>
    <ul>
      <li>
        <router-link :to="{name:'root'}">首页</router-link>
      </li>
      <li>
        <router-link :to="{name:'getstart'}">新手入门</router-link>
      </li>
      <li>
        <router-link :to="{name:'api'}">API</router-link>
      </li>
      <li>
        <router-link :to="{name:'about'}">关于</router-link>
      </li>
      <li>
        <router-link :to="{name:'signin'}">登录</router-link>
      </li>
      <li>
        <a href="#">注册</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background-color: #277BC0;
  height: 50px;
}
img {
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}
ul {
  list-style: none;
  float: right;
  margin: 4px;
}
li {
  display: inline-block;
  padding: 10px 15px;
}
a {
  text-decoration: none;
  color: #8FE3CF;
  font-size: 14px;
  text-shadow: nonr;
}
</style>
