<template>
  <body class="container-fluid">
    <main>
      <div class="aboutMainContainer">
        <div id="projectPage">
          <h1 id="aboutMain">My Projects</h1>
          <div class="containerProject text-center">
            <div class="row justify-content-center">
              <div class="col-md-4 mb-3" v-for="project in $store.state.projects" :key="project.name">
                <div class="card custom-card position-relative">
                  <img :src="project.image" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h3 class="projHead">{{ project.name }}</h3>
                  </div>
                  <div class="card-link-overlay justify-content-around">
                    <p class="card-text custom-text">{{ project.description }}</p>
                    <div class="button-container">
                      <a class="btn btn-success" :href="project.github" target="_blank" role="button">GitHub</a>
                      <a class="btn btn-success" :href="project.vercel" target="_blank" role="button">Website</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

body {
  background-color: rgba(40, 54, 24, 0.8);
}

main {
  background-color: rgba(40, 54, 24, 0.8);
}

#projectPage {
  padding-top: 10px;
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

.card-link-overlay {
  position: absolute;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
  background-color: #1A4E47;
  opacity: 0;
  transition: opacity 1.1s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  padding: 1rem;
}

.card-link-overlay:hover {
  opacity: 1;
}

.card-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.custom-card {
  background-color: #C4C5BA;
  border-radius: 10%;
}

.custom-card img {
  border-radius: 10%;
}

.custom-text {
  color: #C4C5BA;
  font-family: 'Archivo Black', sans-serif;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.button-container .btn {
  margin: 0 5px;
}

.projHead{
  font-family: "Lilita One", sans-serif;
  color: rgb(90, 169, 90);
  text-shadow: 1px 1px 2px black;
}
</style>