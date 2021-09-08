<template>
	<div>
		<div>Halaman Satu</div>
		<!-- Set 'theId' key dengan value dari data 'theValue' -->
		<button @click="$router.push(`/halaman-dua?theId=${theValue}`)">Next</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			theValue: "valuenya",
		};
	},
};
</script>

<style>
/**/
</style>
