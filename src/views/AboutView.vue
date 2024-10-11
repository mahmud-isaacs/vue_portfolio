<template>
  <body class="container-fluid">
    <main>
      <div class="row pad about-section align-items-center">
        <div class="col-md-4">
          <img
            src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/20240422_120248.jpg"
            loading="lazy"
            class="img-fluid about-img"
            alt="About Me Image"
          />
        </div>
        <div class="col-md-8">
          <div class="about-container">
            <h2 id="aboutMain">About Me:</h2>
            <p class="text-center">
              {{$store.state.aboutMe}}<br />
              <i><b class="quote-text">"Learning never exhausts the mind." - Leonardo da Vinci</b></i>
            </p>
            <a
              href="https://drive.google.com/file/d/1ftMgauOk3jn6ANWogP_VwbSPaktvUSrF/view?usp=sharing"
              target="_blank"
              class="btn about-btn"
              download
              >View My CV</a
            >
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
              <img :src="skill.image" class="card-img-top skill-img" alt="Skill Image" />
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
              <img :src="softSkill.image" class="card-img-top soft-skill-img" alt="Soft Skill Image" />
              <div class="card-body">
                <h5 class="card-title">{{softSkill.name}}</h5>
                <p class="card-text">{{softSkill.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="certificates-section" data-aos="fade-up">
        <div class="aboutMainContainer">
          <h2 id="certificatesHeading">Certificates and Badges:</h2>
          <div class="row justify-content-center">
            <div class="col-md-4 mb-4">
              <div class="card certificate-card">
                <img src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/cisco.png" class="card-img-top certificate-img" alt="Cisco Certificate" />
                <div class="card-body text-center">
                  <h5 class="card-title">Cisco</h5>
                  <p class="card-text">Cisco certificates and badges</p>
                  <a href="https://drive.google.com/file/d/1KWAR9DBQt1FXs2lLesWsiz7F98LOyHfi/view?usp=sharing" target="_blank" class="btn btn-primary cert">View</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card certificate-card">
                <img src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/AWS.png" class="card-img-top certificate-img" alt="AWS Certificate" />
                <div class="card-body text-center">
                  <h5 class="card-title">AWS</h5>
                  <p class="card-text">AWS certificates acknowledging my completion of the AWS training.</p>
                  <a href="https://drive.google.com/file/d/1eqlG8D5UP74X-KyDemxm_JBapFp2Zdfx/view?usp=sharing" target="_blank" class="btn btn-primary cert">View</a>
                </div>
              </div>
            </div>
            <!-- Add more certificates as needed -->
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
      return this.$store.dispatch('getAboutMe');
    }
  },
  mounted() {
    this.getAboutMe;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

body {
  background-color: rgba(40, 54, 24, 0.8);
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

main {
  background-color: rgba(40, 54, 24, 0.8);
  padding: 20px;
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
  text-align: center;
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

#aboutMain,
#aboutSub,
#certificatesHeading {
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
  max-width: 60rem;
  margin: 0 auto;
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
  margin: 20px auto;
}

.skill-card {
  background-color: #f9f9f9;
}

.soft-skill-card {
  background-color: #ffffff;
}

.certificate-card {
  background-color: #f9f9f9;
}

.card-img-top {
  border-bottom: 2px solid #99cc66;
  height: 250px; /* Adjusted height */
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.skill-card:hover .card-img-top,
.certificate-card:hover .card-img-top {
  filter: grayscale(0%);
}

.soft-skill-img,
.certificate-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 100%; /* Limit maximum width for large screens */
  border-bottom: 2px solid #99cc66;
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

.about-btn {
  background-color: #759d4c;
  color: whitesmoke;
  font-weight: bold;
  border: none;
}

.about-btn:hover {
  background-color: #88b354;
  transition: 0.3s;
}

.cert {
  background-color: #759d4c;
  color: white;
  font-weight: bold;
  border: none;
}

.cert:hover {
  background-color: #88b354;
  transition: 0.3s;
}


/* Animation keyframes */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  #aboutMain,
  #aboutSub,
  #certificatesHeading {
    font-size: 2.5rem;
  }
  .card-img-top {
    height: 200px; /* Smaller height for mobile */
  }
}

@media (min-width: 769px) {
  .card-img-top {
    height: 300px; /* Larger height for desktop */
  }
}

@media (min-width: 1200px) {
  #aboutMain,
  #aboutSub,
  #certificatesHeading {
    font-size: 4rem; /* Larger font size for larger screens */
  }
}
</style>
