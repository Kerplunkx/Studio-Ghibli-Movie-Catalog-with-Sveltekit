<script>
    import "../app.css"
    import Navbar from "$lib/Navbar.svelte";
</script>

<div class="p-8 max-w-6xl mx-auto">
    <Navbar />
    <slot></slot>
</div>