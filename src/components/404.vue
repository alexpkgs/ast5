<script>
    export let title = "404 Page Not Found";
    export let description = "Sorry, this page doesn't exist.";
  </script>
  <main class="container">
    <h1 class="title">{title}</h1>
    <p class="description">{description}</p>
    <a href="/" class="back-link">Go Back Home</a>
 </main>
  
  <style>
    /* Container styling to center content vertically and horizontally */
    .container {
      height: 75vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }
  
    /* Title styling */
    .title {
      font-size: 3rem;
      font-weight: bold;
      color: var(--text-color, #000);
    }
  
    /* Description styling */
    .description {
      font-size: 1.25rem;
      color: var(--text-secondary-color, #666);
    }
  
    /* Back link styling */
    .back-link {
      margin-top: 2rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--primary-color, #0070f3);
      text-decoration: underline;
      cursor: pointer;
    }
  </style>
  