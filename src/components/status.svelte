<script>
    export let title = "xprsh ─ status";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<!-- Combined Layout and Status widget structure -->
<div class="layout">
    <div class="flex flex-grow min-h-screen pt-16 pb-12">
        <div class="flex-grow flex flex-col justify-center max-w-sm sm:max-w-lg w-full mx-auto px-0 sm:px-16">
            <!-- Status Widget Content -->
            <div class="status-widget">
                <!-- Add any dynamic or static status-related content here -->
                <p>Status Information Here</p>
            </div>
        </div>
    </div>
</div>

<style>
    /* Layout styles */
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: #f0f0f0;
    }

    /* Status widget styling */
    .status-widget {
        padding: 20px;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
</style>
