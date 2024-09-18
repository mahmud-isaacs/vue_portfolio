<template>
  <body class="container-fluid">
    <div>
      <main>
        <div class="resumePad">
          <div class="aboutMainContainer">
            <h2 id="aboutMain"><b>Education:</b></h2>
          </div>
          <div class="row">
            <div class="col-md-12" v-for="education in $store.state.education" :key="education.placeOfInstitution">
              <div class="education-card">
                <img :src="education.image" alt="" class="img-thumbnailRow">
                <div class="education-details">
                  <h3 id="educationHeading">{{ education.year }}</h3>
                  <h4 id="aboutHeading"><b>{{ education.placeOfInstitution }}</b></h4>
                  <p>{{ education.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>

<script>
export default {
  computed: {
    getEducation() {
      return this.$store.dispatch('getEducation');
    }
  },
  mounted() {
    this.getEducation;
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
  font-size: 1.1em;
  color: whitesmoke;
  margin: 0; /* Remove default margin */
}

.aboutMainContainer {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
}

#aboutMain {
  color: #99cc66;
  font-size: 3rem;
  background-color: rgba(90, 169, 90, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #99cc66;
  animation: fadeIn 2s forwards;
  opacity: 0;
  text-align: center;
  width: 100%; /* Full width for responsiveness */
  max-width: 80rem; /* Increased max-width for larger screens */
}

#educationHeading {
  color: #C4C5BA;
  font-size: 1.8rem;
  margin-top: 10px;
}

#aboutHeading {
  color: #5AA95A;
  font-size: 1.6rem;
  margin-bottom: 10px; /* Adjusted margin */
}

.education-card {
  border: 2px solid #C4C5BA;
  padding: 20px;
  background-color: rgba(90, 169, 90, 0.1);
  width: 100%;
  max-width: 1000px; /* Wider cards */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto; /* Center align card and add vertical spacing */
  text-align: center;
}

.img-thumbnailRow {
  width: 100%;
  max-width: 200px; /* Increased max-width for wider cards */
  border-radius: 10%;
  border: 2px solid #99cc66;
  box-shadow: 2px 4px 6px green;
  transition: transform 0.6s ease-in-out;
  margin-bottom: 15px;
}

.img-thumbnailRow:hover {
  transform: rotate(360deg);
  border-radius: 50%;
}

.education-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Ensure the row aligns items properly and maintains spacing */
.row {
  display: flex;
  flex-direction: column; /* Stack cards vertically */
  align-items: center; /* Center align cards horizontally */
  gap: 20px; /* Spacing between cards */
  margin: 0 auto; /* Center the row horizontally */
}

/* Fade-in animation for the header */
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

/* Responsive styling for medium screens */
@media screen and (max-width: 768px) {
  #aboutMain {
    font-size: 2.5rem;
  }

  .img-thumbnailRow {
    max-width: 150px; /* Adjusted max-width */
  }

  .education-card {
    max-width: 700px; /* Adjust for medium screens */
  }

  p {
    font-size: 1rem;
  }
}

/* Responsive styling for smaller screens */
@media screen and (max-width: 550px) {
  #aboutMain {
    font-size: 2rem;
  }

  .img-thumbnailRow {
    max-width: 120px; /* Adjusted max-width */
  }

  .education-card {
    max-width: 90%; /* Adjust for small screens */
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
