<script>
    export let name = "Your Name"; // Default name
    export let bio = "Your bio here..."; // Default bio
    export let imageUrl = "/public/face.svg"; // Path to your profile image
</script>

<div class="card">
    <img src={imageUrl} alt="Profile Image" class="profile-image" />
    <div class="card-content">
        <h1>{name} <span>(he/him)</span></h1>
        <p>{bio}</p>

        <!-- Programming Languages Section -->
        <div class="programming-languages">
            <h2>Programming Languages:</h2>
            <div class="buttons">
                <button class="lang-button">C</button>
                <button class="lang-button">C++</button>
                <button class="lang-button">Python</button>
                <button class="lang-button">Shell</button>
                <button class="lang-button">Lua</button>
                <button class="lang-button">Go</button>
            </div>
        </div>

        <!-- Web Development Section -->
        <div class="webdev">
            <h2>Web Development:</h2>
            <div class="buttons">
                <button class="dev-button">Astro</button>
                <button class="dev-button">TailwindCSS</button>
                <button class="dev-button">Svelte</button>
                <button class="dev-button">MDX</button>
                <button class="dev-button">TypeScript</button>
                <button class="dev-button">Vue</button>
                <button class="dev-button">JavaScript</button>
                <button class="dev-button">HTML</button>
                <button class="dev-button">CSS</button>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        background-color: #222;
        border-radius: 15px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 400px; /* Adjust width as needed */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
    }

    .card:hover {
        transform: scale(1.05); /* Slightly scale up on hover */
    }

    .profile-image {
        width: 60px; /* Set a fixed size for the profile image */
        height: 60px; /* Set a fixed size for the profile image */
        border-radius: 50%; /* Make it circular */
        margin-right: 15px; /* Space between the image and text */
    }

    .card-content {
        color: white;
    }

    .card-content h1 {
        font-size: 1.5em;
        margin: 0;
    }

    .card-content span {
        font-size: 0.8em;
        color: #ccc; /* Lighter color for extra info */
    }

    .card-content p {
        margin: 10px 0 0; /* Add some margin for the paragraph */
    }

    /* Section Styles for Programming Languages and Web Development */
    .programming-languages, .webdev {
        margin-top: 15px;
    }

    .programming-languages h2, .webdev h2 {
        font-size: 1.2em;
        margin-bottom: 5px;
        color: #bbb;
    }

    /* Horizontal buttons styling */
    .buttons {
        display: flex;
        flex-wrap: wrap; /* Allow buttons to wrap in smaller spaces */
        gap: 10px;
    }

    /* Common button styles */
    .lang-button, .dev-button {
        background-color: #444;
        color: #fff;
        border: none;
        border-radius: 25px; /* Rounded corners */
        padding: 8px 16px;
        font-size: 0.9em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .lang-button:hover, .dev-button:hover {
        background-color: #666; /* Slight color change on hover */
    }
</style>
