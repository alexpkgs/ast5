<template>
    <nav class="navbar">
      <img src="/face.svg" alt="Face Icon" class="icon" />
      <div class="links">
        <router-link to="/about">/about</router-link>
        <router-link to="/blog">/blog</router-link>
        <router-link to="/">/</router-link>
        <router-link to="/">/</router-link>
      </div>
      <a href="https://codeberg.org/xpr" class="icon-link">
        <img src="/code.svg" alt="Codeberg" class="icon" />
      </a>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'FloatingNavbar',
  };
  </script>
  
  <style scoped>
  body {
    background-color: #000;
    color: white;
    font-family: "Google Sans", sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .navbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #111;
    padding: 10px 20px;
    border-radius: 10px;
    width: 600px;
  }
  
  .icon {
    width: 30px;
    height: 30px;
  }
  
  .links a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 18px;
    transition: color 0.3s;
  }
  
  .links a:hover {
    color: #ffffff;
  }
  
  .icon-link img {
    width: 30px;
    height: 30px;
  }
  </style>
  