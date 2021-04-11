<template>
  <div id="nav" class="nav">
    <div class="nav__routes">
      <router-link to="/" class="nav__routes_link">Hero's</router-link>
      <router-link to="/simple-grids" class="nav__routes_link">Grids</router-link>
    </div>
    <div class="logo">
      <img :src="require('@/assets/logo.svg')" alt="Arhictect framework logo" class="logo_img">
    </div>
  </div>
  <router-view/>
</template>

<style>
  body {
    margin: 0;
  }

  .nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .nav__routes {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    margin: 0 auto;
  }

  .logo {
    max-width: 125px;
  }

  .nav__routes_link {
    margin-right: 20px;
    padding: 15px 45px;
    border-radius: 25px;
    color: #fff;
    background-color: #00b7ff;
    text-decoration: none;
  }
</style>
