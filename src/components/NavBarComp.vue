<template>
  <nav class="navbar navbar-expand-lg custom-bg-green">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/">
          <img class="imageLogo" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/MI%20logo.jpg" alt="Logo">
        </a>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Open+Sans:wght@400;600&display=swap');

.custom-bg-green {
  background-color: #C4C5BA; /* Soft neutral background */
}

.navbar-brand {
  margin-right: 2rem;
}

.nav-link {
  color: #595f39;
  font-family: "Open Sans", sans-serif; /* Updated to Open Sans for better readability */
  font-size: 1.1rem;
  margin-left: 1.5rem;
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

</style>
