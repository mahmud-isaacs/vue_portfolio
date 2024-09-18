<template>
  <body class="container-fluid">
    <main>
      <div class="row pad about-section align-items-center">
        <div class="col-md-4">
          <img src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/20240422_120248.jpg" loading="lazy" class="img-fluid about-img" alt="About Me Image">
        </div>
        <div class="col-md-8"> 
          <div class="about-container">
            <h2 id="aboutMain">About Me:</h2>
            <p class="text-center">
              {{$store.state.aboutMe}}<br>
              <i><b class="quote-text">"Learning never exhausts the mind." - Leonardo da Vinci</b></i>
            </p>
          </div>
        </div>
      </div>
      
      <section class="skills-section" data-aos="fade-up">
        <div class="aboutMainContainer">
          <h2 id="aboutSub">My Skills:</h2>
        </div>
        <div class="row justify-content-center">
          <div v-for="skill in $store.state.skills" class="col-md-4 mb-4" :key="skill.name">
            <div class="card skill-card">
              <img :src="skill.image" class="card-img-top skill-img" alt="Skill Image">
              <div class="card-body">
                <h5 class="card-title">{{skill.name}}</h5>
                <p class="card-text">{{skill.level}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="soft-skills-section" data-aos="fade-up">
        <div class="aboutMainContainer">
          <h2 id="aboutSub">My Soft Skills:</h2>
        </div>
        <div class="row justify-content-center">
          <div v-for="softSkill in $store.state.softSkills" class="col-md-4 mb-4" :key="softSkill.name">
            <div class="card soft-skill-card">
              <img :src="softSkill.image" class="card-img-top soft-skill-img" alt="Soft Skill Image">
              <div class="card-body">
                <h5 class="card-title">{{softSkill.name}}</h5>
                <p class="card-text">{{softSkill.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
export default {
  computed: {
    getAboutMe() {
      return this.$store.dispatch('getAboutMe')
    }
  },
  mounted() {
    this.getAboutMe
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

body {
  background-color: rgba(40, 54, 24, 0.8);
  font-family: 'Roboto', sans-serif;
}

main {
  background-color: rgba(40, 54, 24, 0.8);
}

p {
  font-size: 1.2em;
  color: whitesmoke;
  text-align: center;
}

.about-container {
  border: 1px solid #C4C5BA;
  padding: 20px;
  margin-bottom: 20px;
}

.about-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  margin-top: -20px;
}

.about-img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#aboutMain {
  color: #99cc66;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  background-color: rgba(90, 169, 90, 0.1);
  padding: 20px;
  margin-bottom: 60px;
  border-radius: 10px;
  border: 2px solid #99cc66;
  animation: fadeIn 2s forwards;
  opacity: 0;
  text-align: center;
  width: 100%;
  max-width: 60rem;
}

#aboutSub {
  color: #99cc66;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  background-color: rgba(90, 169, 90, 0.1);
  padding: 20px;
  margin-bottom: 60px;
  border-radius: 10px;
  border: 2px solid #99cc66;
  animation: fadeIn 2s forwards;
  opacity: 0;
  text-align: center;
  width: 100%;
  max-width: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
}

.quote-text {
  color: #99cc66;
}

.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  position: relative;
  max-width: 90%;
  margin: auto;
  margin-top: 20px;
}

.skill-card {
  background-color: #f9f9f9;
}

.soft-skill-card {
  background-color: #ffffff;
}

.card-img-top {
  border-bottom: 2px solid #99cc66;
  height: 250px;
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.skill-card:hover .card-img-top {
  filter: grayscale(0%);
}

.soft-skill-img {
  height: 300px; 
  width: 25rem;
  object-fit: initial;
}

.card-body {
  text-align: center;
  flex: 1;
}

.card-title {
  color: #2a5d2a;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.card-text {
  color: #595f39;
  font-size: 1rem;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#aboutMain {
  animation: fadeIn 2s forwards;
}

@media screen and (max-width: 768px) {
  #aboutMain, #aboutSub {
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
  }

  .about-section {
    flex-direction: column;
  }

  .about-img {
    max-width: 80%;
  }

  .card-img-top {
    height: auto;
  }
}

@media screen and (max-width: 576px) {
  #aboutMain, #aboutSub {
    font-size: 2rem;
  }

  p {
    font-size: 0.9rem;
  }

  .about-img {
    max-width: 100%;
  }

  .card-img-top {
    height: 120px;
  }
}
</style>