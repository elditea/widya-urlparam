<template>
	<div>
		<div>Halaman Tiga</div>
		<div>theId = "{{ $route.query.theId }}"</div>
		<!-- URL paramater di-pass ke halaman sebelumnya  -->
		<button @click="$router.push(`/halaman-dua?theId=${$route.query.theId}`)">Previous</button>
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
