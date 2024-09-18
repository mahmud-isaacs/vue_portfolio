<template>
  <body class="container-fluid">
    <main>
      <div class="row pad">
        <div class="projects-container">
          <h2 id="projectsHeader">My Projects</h2>
          <div class="container text-center">
            <div class="row justify-content-center">
              <div class="col-md-4 mb-4" v-for="project in $store.state.projects" :key="project.name">
                <div class="card project-card">
                  <div class="card-image-wrapper">
                    <img :src="project.image" class="card-img-top" alt="Project Image">
                  </div>
                  <div class="card-body">
                    <h3 class="project-title">{{ project.name }}</h3>
                    <p class="project-description">{{ project.description }}</p>
                  </div>
                  <div class="card-footer">
                    <a class="btn btn-primary" :href="project.github" target="_blank" role="button">GitHub</a>
                    <a class="btn btn-secondary" :href="project.vercel" target="_blank" role="button">Website</a>
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
  computed: {
    getProjects() {
      return this.$store.dispatch('getProjects')
    }
  },
  mounted() {
    this.getProjects
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

.row.pad {
  margin-top: 10px; /* Move the row up */
  padding: 0; /* Adjust padding if needed */
}

.projects-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 15px; /* Add horizontal padding for responsiveness */
}

#projectsHeader {
  color: #99cc66;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  background-color: rgba(90, 169, 90, 0.1);
  padding: 20px;
  margin-bottom: 10px; /* Reduced margin-bottom */
  margin-top: 0; /* Removed extra space above the heading */
  border-radius: 10px;
  border: 2px solid #99cc66;
  animation: fadeIn 2s forwards;
  opacity: 0;
  text-align: center;
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

.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #e3e3e3;
  height: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
}

.card-img-top {
  border-bottom: 2px solid #99cc66;
  height: 200px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.card-img-top:hover {
  transform: scale(1.1);
}

.card-body {
  text-align: center;
  padding: 20px;
  min-height: 150px;
}

.project-title {
  color: #2a5d2a;
  font-size: 1.75rem;
  margin-bottom: 10px;
}

.project-description {
  color: #595f39;
  font-size: 1rem;
}

.card-footer {
  padding: 15px;
  background-color: #d0d0d0;
  border-top: 2px solid #C4C5BA;
  text-align: center;
}

.btn-primary {
  background-color: rgb(90, 169, 90);
  border: none;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.btn-secondary {
  background-color: #C4C5BA;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: rgb(70, 149, 70);
}

.btn-secondary:hover {
  background-color: #a6a7a1;
}

/* Responsive styling */
@media screen and (max-width: 992px) {
  #projectsHeader {
    font-size: 2.8rem; /* Slightly smaller for medium screens */
  }
  
  .card-img-top {
    height: 180px; /* Slightly smaller image height */
  }

  .card-body {
    padding: 15px;
  }

  .project-title {
    font-size: 1.6rem;
  }

  .card-footer {
    padding: 10px;
  }
}

@media screen and (max-width: 768px) {
  #projectsHeader {
    font-size: 2.5rem; /* Adjusted font size for small screens */
  }

  .card-img-top {
    height: 160px; /* Further reduced image height */
  }

  .card-body {
    padding: 10px;
  }

  .project-title {
    font-size: 1.4rem;
  }

  .card-footer {
    padding: 8px;
  }
}

@media screen and (max-width: 576px) {
  #projectsHeader {
    font-size: 2rem; /* Font size for very small screens */
  }

  .card-img-top {
    height: 140px; /* Reduced image height for very small screens */
  }

  .card-body {
    padding: 5px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .card-footer {
    padding: 5px;
  }
}
</style>

