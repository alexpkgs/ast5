<template>
    <div class="bg-bg text-fg font-sans min-h-screen flex flex-col items-center p-4 sm:p-8">
      <!-- Top Navigation Bar -->
      <div class="w-full max-w-4xl flex items-center justify-between p-3 sm:p-4 bg-bg3 text-fg rounded-lg shadow-md mb-6">
        <div class="flex items-center gap-2">
          <img src="/face.svg" alt="Profile Icon" class="w-10 h-10 rounded-full" />
          <span class="text-lg font-semibold">xpr</span>
        </div>
        <div class="flex items-center gap-4">
          <a href="/about" class="p-2 rounded-full bg-mbg hover:bg-bright transition duration-200 flex items-center justify-center">
            <img src="/people.svg" alt="About" class="w-6 h-6" />
          </a>
          <a href="https://codeberg.org/xpr/website" class="p-2 rounded-full bg-mbg hover:bg-bright transition duration-200 flex items-center justify-center">
            <img src="/code.svg" alt="Source Code" class="w-6 h-6" />
          </a>
        </div>
      </div>
  
      <!-- Divider -->
      <hr class="border-darker my-4 w-full max-w-4xl" />
  
      <!-- Diagram at the top -->
      <div class="w-full max-w-4xl flex justify-center mb-6">
        <img src="/ping.svg" alt="Ping Pong (Python)" class="max-w-[45%] h-50 rounded-lg shadow-lg" />
      </div>
  
      <!-- Heading and Introduction -->
      <div class="text-center w-full max-w-4xl mb-6">
        <h2 class="text-3xl font-bold text-foreground">Ping Pong</h2>
        <h3 class="text-xl text-muted mt-2">Ping Pong (Lua)</h3>
      </div>
  
      <!-- Content Section -->
      <div class="w-full max-w-3xl text-bright">
        <p class="mb-4">
          I call this Ping Pong. Basically, this will loop over and over again. and it will spam ping (please never ever spam ping tyvm)
        </p>
        <br />
        <p class="mb-4">
          This Lua script continuously sends ping requests (spams pings) to a specified DNS address (defaulting to 1.1.1.1) at a specified interval (defaulting to 1 second). It logs the output of each ping along with a timestamp to a file named ping_log.txt. The script runs indefinitely until it is manually stopped, creating a record of the ping results over time.
        </p>
        <br />
        <p class="mb-4">Okay, so in this Lua script below:</p>
        <br />
        <!-- Code Block -->
        <div class="bg-surface-2 text-bright p-4 rounded-lg mb-6 overflow-x-auto shadow-lg">
          <pre><code class="language-lua">
            local function getCurrentTimestamp()
            return os.date("%Y-%m-%d %H:%M:%S")
        end
  
        local target = arg[1] or "1.1.1.1"
        local interval = tonumber(arg[2]) or 1.0
  
        local logFile = io.open("ping_log.txt", "a")
  
        while true do
            local handle = io.popen("ping -c 1 " .. target)
            local result = handle:read("*a")
            handle:close()
  
            local timestamp = getCurrentTimestamp()
            logFile:write(string.format("%s: %s\n", timestamp, result))
            logFile:flush()
  
            os.execute("sleep " .. interval)
        end
  
        logFile:close()
          </code></pre>
        </div>
        <br />
        <p class="text-muted">
          <!-- You can add additional text here if needed -->
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PingPong",
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Google+Sans:wght@400&display=swap");
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Google Sans", sans-serif; /* Set default font to Google Sans with a fallback */
  }
  
  /* Add other custom styles below */
  .bg-bg {
    background-color: #f0f0f0;
  }
  
  .text-fg {
    color: #333;
  }
  
  .bg-mbg {
    background-color: #1a1a1a;
  }
  
  .bg-bg3 {
    background-color: #e5e5e5;
  }
  
  .text-foreground {
    color: #000;
  }
  
  .text-muted {
    color: #888;
  }
  
  .border-darker {
    border-color: #444;
  }
  
  .bg-surface-2 {
    background-color: #d4d4d4;
  }
  
  .text-bright {
    color: #fff;
  }
  
  .hover\:bg-bright:hover {
    background-color: #f0f0f0;
  }
  
  .max-w-[45%] {
    max-width: 45%;
  }
  
  .h-50 {
    height: 50px;
  }
  
  .rounded-lg {
    border-radius: 8px;
  }
  
  .shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .overflow-x-auto {
    overflow-x: auto;
  }
  
  .w-full {
    width: 100%;
  }
  
  .max-w-4xl {
    max-width: 1200px;
  }
  
  .sm\:p-8 {
    padding: 2rem;
  }
  
  .p-2 {
    padding: 0.5rem;
  }
  
  .flex {
    display: flex;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .gap-2 {
    gap: 0.5rem;
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  .w-10 {
    width: 2.5rem;
  }
  
  .h-10 {
    height: 2.5rem;
  }
  
  .w-6 {
    width: 1.5rem;
  }
  
  .h-6 {
    height: 1.5rem;
  }
  
  .rounded-full {
    border-radius: 50%;
  }
  
  .font-semibold {
    font-weight: 600;
  }
  
  .text-lg {
    font-size: 1.125rem;
  }
  
  .text-xl {
    font-size: 1.25rem;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  .my-2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .mt-2 {
    margin-top: 0.5rem;
  }
  
  .mt-6 {
    margin-top: 1.5rem;
  }
  </style>
  