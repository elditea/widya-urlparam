<template>
	<div>
		<div>Halaman Dua</div>
		<!-- URL paramater dapat diakses menggunakan $route.query  -->
		<div>theId = "{{ $route.query.theId }}"</div>
		<button @click="$router.push('/')">Previous</button>
		<!-- URL paramater di-pass ke halaman selanjutnya  -->
		<button @click="$router.push(`/halaman-tiga?theId=${$route.query.theId}`)">Next</button>
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
