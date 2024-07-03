<template>
  <main>
    <div class="aboutMainContainer">
    <div class="testPad">
      <h2 id="aboutMain">Testimonials</h2>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner justify-content-center">
          <div class="carousel-item" :class="{ active: index === 0 }" v-for="(testimonial, index) in $store.state.testimonials" :key="testimonial.name">
            <div class="image-wrapper1">
              <img :src="testimonial.image" class="d-block w-100" alt="...">
              <div class="testBox">
                <h2 id="testHeading">{{ testimonial.name }}</h2>
              </div>
            </div>
            <div class="card w-75 mb-3 mx-auto">
              <div class="card-body">
                <h3 class="positionTest">{{ testimonial.position }}</h3>
                <h5 class="card-title-test">{{ testimonial.message }}</h5>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    getAboutMe() {
      return this.$store.dispatch('getAboutMe');
    }
  },
  mounted() {
    this.getAboutMe;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

body {
  background-color: rgba(40, 54, 24, 0.8);
}

main {
  background-color: rgba(40, 54, 24, 0.8);
}

#aboutMain {
  background-color: #C4C5BA;
  color: rgb(90, 169, 90);
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 5rem;
  box-shadow: 2px 5px 8px #325353;
  animation: slideIn 4s forwards;
  opacity: 0;
  animation-name: slipIn;
  width: auto;
  display: inline-block;
  padding: 0.5rem 1rem;
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

.aboutMainContainer {
  display: flex;
  justify-content: center;
  text-align: center;
}



.carousel-item img {
  max-width: 250px; 
  height: auto; 
  display: block;
  margin: 0 auto; 
}

#testHeading {
  text-align: center;
  font-size: 5rem;
  color: rgb(90, 169, 90);
  box-shadow: 2px 5px 8px black;
  max-width: 80%;
  padding: 10px;
  background-color: #C4C5BA;
  font-family: "Bebas Neue", sans-serif;
  text-shadow: 2px 2px 2px  black;
}

.card-title-test {
  text-align: center;
  font-size: 25px;
  font-family: "Bebas Neue", sans-serif;
}

.testPad {
  padding-top: 10px;
}

.testBox {
  align-content: center;
  justify-content: center;
  display: flex;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.positionTest {
  color: #325353;
  font-family: 'Archivo Black', sans-serif;
}
</style>