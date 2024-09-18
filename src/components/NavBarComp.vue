<template>
  <nav class="navbar navbar-expand-lg custom-bg-green">
    <div class="container-fluid justify-content-center">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/">
          <img class="imageLogo" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/MI%20logo.jpg" alt="Logo">
        </a>
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" active-class="active-link">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/education" active-class="active-link">Education & Experience</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects" active-class="active-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" active-class="active-link">Contact Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.custom-bg-green {
  background-color: #C4C5BA;
}

.navbar-brand {
  margin-right: 1rem;
}

.nav-link {
  color: #595f39;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-left: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover, .active-link {
  color: #ffffff;
}

.imageLogo {
  width: 40px;
  height: auto;
}

.navbar-toggler {
  border-color: #595f39;
}

.navbar-toggler-icon {
  background-color: #595f39;
}

@media (max-width: 1200px) {
  .navbar-nav {
    flex-direction: row;
    gap: 10px;
  }
}

@media (max-width: 992px) {
  .navbar-nav {
    font-size: 0.9rem;
  }

  .navbar-toggler {
    border-width: 2px;
  }
}

@media (max-width: 768px) {
  .navbar-nav {
    flex-direction: column;
    text-align: center;
  }

  .nav-link {
    margin-left: 0; 
    margin-bottom: 10px; 
  }

  .imageLogo {
    width: 30px; 
  }
}

@media (max-width: 576px) {
  .navbar-nav {
    font-size: 0.8rem; 
  }

  .imageLogo {
    width: 25px; 
  }
}
</style>
