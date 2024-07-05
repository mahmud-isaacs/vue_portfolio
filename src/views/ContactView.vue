<template>
  <body class="container-fluid">
    <main id="contactPage">
      <div class="container">
        <h1 class="text-center contactMain">Let's get in touch!</h1>
        <form @submit.prevent="submitForm" class="row g-3">
          <div class="col-md-6 order-md-1 text-center">
            <img src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/20240422_120313.jpg" class="img-thumbnail cont-img" alt="Contact Image" width="400" height="800">
          </div>
          <div class="col-md-6 order-md-2">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" name="Email" required placeholder="example@gmail.com">
            <label for="inputName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="inputName" name="First Name" required>
            <label for="inputLastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="inputLastName" name="Last Name" required>
            <label for="inputMessage" class="form-label">Send Us A Message</label>
            <textarea class="form-control" name="message" placeholder="Type message here..." required></textarea>
            <br>
            <button class="form-control submitBtn">Submit</button>
            <br><hr>
            <h5 id="infoHeading">My Info:</h5>
            <p id="infoPara">Phone: 076 499 1374</p>
            <p id="infoPara">Email: Mahmud.isaacs03@gmail.com</p>
            <p>
            <img class="locationLogo" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/locationIcon.png" alt="">
            South Africa, Cape Town, Lotus River
            </p>
            <hr>
            <a href="https://github.com/mahmud-isaacs"><img class="gitHub" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/GitHubLogo.png" alt=""></a>
          </div>
        </form>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  methods: {
    submitForm() {
      const form = document.querySelector('form');
      const formData = new FormData(form);

      fetch('https://formspree.io/f/mblrjayb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert('Your message was submitted. Thank you!');
          form.reset();
        } else {
          alert('Oops! There was a problem submitting your form');
        }
      }).catch(() => {
        alert('Oops! There was a problem submitting your form');
      });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

body {
  background-color: rgba(40, 54, 24, 0.8);
}

#contactPage {
  background-color: rgba(40, 54, 24, 0.8);
}

.contactMain {
  margin-bottom: 30px;
}

h1 {
  font-size: 5rem;
  color: #99cc66;
  font-family: 'Archivo Black', sans-serif;
  text-shadow: 2px 2px 2px #000000;
  animation: slide 3s forwards;
}

h5 {
  font-family: 'Archivo Black', sans-serif;
  color: #99cc66;
  text-shadow: 2px 2px 2px #000000;
}

p {
  font-family: 'Archivo Black', sans-serif;
  color: #99cc66;
  text-shadow: 2px 2px 2px #000000;
}

@keyframes slide {
  from {
    transform: translateX(800px);
    opacity: 0;
  }
  to {
    transform: translateX(50px);
    opacity: 1;
  }
}

.cont-img {
  max-width: 100%;
  height: auto;
}

.submitBtn {
  background-color: #595f39;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-family: 'Archivo Black', sans-serif;
}

.submitBtn:hover {
  background-color: #416542;
}

#infoHeading {
  margin-top: 20px;
  text-align: center;
}

#infoPara {
  margin: 0;
}

.socialLinks a {
  display: inline-block;
  margin: 5px 0;
  color: #007bff;
  text-decoration: none;
}

.socialLinks a img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

.socialLinks a:hover {
  text-decoration: underline;
}

.form-label {
  color: black;
  font-size: 18px;
  font-family: "Archivo Black", sans-serif;
  background-color: #595f39;
  border-radius: 5px;
  border-width: 20%;
  padding-left: 5px;
  padding-right: 5px;
}

.form-control {
  margin-bottom: 10px;
}

.img-thumbnail {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.);
  border-radius: 10px;
  opacity: 0.9;
}

.locationLogo {
  width: 20px;
  height: 20px;
  mix-blend-mode: multiply;
}

.gitHub {
  width: 25px;
  height: 25px;
  mix-blend-mode: inherit;
}

hr {
  border: 4px solid #595f39;
}

@media screen and (max-width: 750px) {
  h1 {
    font-size: 4rem;
    text-align: center;
  }

  .contactMain {
    font-size: 2rem;
  }

  .submitBtn {
    font-size: 1.25rem;
  }

  .form-label {
    font-size: 16px;
  }

  .locationLogo,
  .gitHub {
    width: 20px;
    height: 20px;
  }

  .row.g-3 {
    flex-direction: column;
  }

  .col-md-6.order-md-1.text-center,
  .col-md-6.order-md-2 {
    order: initial;
    width: 100%;
  }
}

@media screen and (max-width: 576px) {
  h1 {
    font-size: 3.5rem;
    text-align: center;
  }

  .contactMain {
    font-size: 1.75rem;
  }

  .submitBtn {
    font-size: 1rem;
  }

  .form-label {
    font-size: 14px;
  }

  .locationLogo,
  .gitHub {
    width: 18px;
    height: 18px;
  }
}

</style>