<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>
      For the ultimate at-home-theatre experience, check out our 7-day free
      trial.
    </h4>
    <br />
    <a href="#" class="btn btn-primary text-white" target="_blank">
      Sign-up / Login
    </a>
    <br />
    <br />
    <p>
      For a guide to showing times and scheduled viewings,<br />
      check out the
      <a href="www.fandango.com" class="text-info" target="_blank">
        film documentation </a
      >.
    </p>
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <i class="fas fa-film"></i>
            <h3 class="card-header">Comedy Movies</h3>
            <div class="card-body">
              <p>
                <img
                  src="../assets/comedy.png"
                  class="img-fluid move-img"
                  alt="comedy"
                />
              </p>
              <button class="btn btn-primary">view times</button>
            </div>
            <p class="card-footer">
              Locations: Dallas, Chicago, OKC, Austin
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <i class="fas fa-film"></i>
            <h3 class="card-header">Family Movies</h3>
            <div class="card-body">
              <p>
                <img src="../assets/Films.png" class="img-fluid" alt="film" />
              </p>
              <button class="btn btn-primary">view times</button>
            </div>
            <p class="card-footer">
              Locations: Dallas, Chicago, OKC, Austin
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <i class="fas fa-film"></i>
            <h3 class="card-header">Other Genre</h3>
            <div class="card-body">
              <p>
                <img src="../assets/genre.png" class="img-fluid" alt="film" />
              </p>
              <button class="btn btn-primary">view times</button>
            </div>
            <p class="card-footer">
              Locations: Dallas, Chicago, OKC, Austin
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.movie-img {
  width: 70% !important;
  max-height: 140px !important;
  padding-top: 10%;
}
</style>
