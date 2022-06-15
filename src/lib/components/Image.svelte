<script lang="ts">
	export let src: string //Required prop
	export let alt: string = 'Image' //Optional prop
</script>

<img {src} {alt} />

<style>
	img {
		max-width: 16rem;
	}
</style>
