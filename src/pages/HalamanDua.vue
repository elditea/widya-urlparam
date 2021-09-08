<template>
  <div>
    <div>Halaman Dua</div>
    <div>theId = "{{ $route.query.theId }}"</div>
    <button @click="$router.push('/')">Previous</button>
    <button @click="$router.push(`/halaman-tiga?theId=${$route.query.theId}`)">
      Next
    </button>
  </div>
</template>

<script>
export default {
  //..
};
</script>

<style>
/**/
</style>