<template>

</template>

<script>
export default {
  methods:{
    id_generator:function() {
      let result = '';
      const length = 10;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  }
}
</script>

<style scoped>

</style>

