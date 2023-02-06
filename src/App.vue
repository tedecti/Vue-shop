<template>
  


  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ViewStore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link">Catalog</router-link>
        <router-link to="/cart" class="nav-link">Cart</router-link>
        <router-link to="/add" class="nav-link">Add Card</router-link>
      </div>
    </div>
  </div>
</nav>
<div class="container">
  <router-view/>
</div>
  
</template>
