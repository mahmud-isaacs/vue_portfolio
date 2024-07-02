<template>
  <body class="container-fluid">
  <main>
  <div class="row pad">
      <div class="col-4"><img src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/IMG_0310_Original.jpg" class="img-thumbnail" alt=""></div>
      <div class="col-8"> <div class="about-container">
          <h2 id="aboutMain">About Me: </h2>
          <p class="text-center">{{$store.state.aboutMe}}<br> <i><b>''Learning never exhausts the mind.'' - Leonardo da Vinci</b></i></p>
          </div>
      </div>
      </div>
</main>

  </body>
</template>

<script>
export default {
  computed :{
    getAboutMe(){
      return this.$store.dispatch('getAboutMe')
    }
  },
  mounted(){
    this.getAboutMe
  },
}
</script>

<style scoped>

body {
  background-color: rgba(40, 54, 24, 0.8);
}

main {
  margin-top: 20px;
  background-color: rgba(40, 54, 24, 0.8);
}

p {
  font-size: 1.2em;
  color: whitesmoke;
  font-family: 'Archivo Black', sans-serif;
}

.about-container {
  border-color: #C4C5BA;
}

b {
  color: rgb(90, 169, 90);
}

#aboutMain {
    background-color: #C4C5BA;
    color: rgb(90, 169, 90);
    text-align: center;
    font-family: 'Archivo Black', sans-serif;
    font-size: 5rem;
    box-shadow: 2px 5px 8px  #325353;
    animation: slideIn 4s forwards;
    opacity: 0; 
    animation-name: slipIn;
}

@keyframes slipIn {
    from {
        transform: translateX(-300px);
        opacity: 0;
      }
      to {
        transform: translateX(4px); 
        opacity: 1; 
      }
}

</style>