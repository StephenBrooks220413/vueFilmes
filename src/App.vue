<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">MOVIES</a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-white">menu</i>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/contact">Contact</router-link>
            </li>
          </ul>
          <router-link class="nabar-text text-white" to="/accounts">Accounts</router-link>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
@import '~mdb-ui-kit/css/mdb.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.white {
  color: white !important;
}
</style>
