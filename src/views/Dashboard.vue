<template>
     <div class="main_content">
        <div class="header">
          <h2>{{currentRouteName}}</h2></div>
         <div class="info">
           <router-view name="dash"> </router-view>
          </div>
      </div>
</template>
<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
