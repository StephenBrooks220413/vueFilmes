<template>
  <div class="home">
    <div class="bg-image">
      <img
        src="../assets/moveReel.png"
        class="img-fluid intro-img"
        alt="Sample"
      />
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
        <div class="d-flex justify-content-center align-items-center h-100">
          <h1 class="text-white display-3">Movie Cinema</h1>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <HelloWorld msg="Welcome to the Cinemas" />
    <br />
    <div class="left-side-bar-wrapper"></div>
    <div class="right-side-bar-wrapper"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.intro-img {
  width: 100%;
  max-height: 120vh;
  margin-top: 30px;
}
/*.left-side-bar-wrapper {
  width: 90px;
  height: 300px;
  display: block;
  float: left;
  color: goldenrod;
  background: url(https://th.bing.com/th/id/Rf6961749705522d533d98b1dfa4d94c7?rik=w8%2f%2baUTotQeTcA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_JLZsQZ8vLl0%2fS7kfMFXQ7yI%2fAAAAAAAAACA%2f00UDRN7O-pM%2fS1600-R%2ffilm_strip_gif.gif&ehk=3Hfax8l6UZduzRG3yCqfr61z1R8nRJpmKeuFNRZoxzg%3d&risl=&pid=ImgRaw) 
    no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}*/
</style>
