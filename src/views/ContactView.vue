<template>
  <body class="container-fluid">
    <main id="contactPage">
      <div class="container">
        <h1 class="text-center contactMain">Let's get in touch!</h1>
        <form @submit.prevent="submitForm" class="row g-4" action="https://formspree.io/f/mblrjayb"
        method="POST">
          <!-- Image Section -->
          <div class="col-md-6 text-center">
            <img src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/20240422_120313.jpg" class="img-thumbnail cont-img" alt="Contact Image" width="400" height="auto">
          </div>
          <!-- Form Section -->
          <div class="col-md-6">
            <div class="form-group">
              <label for="inputEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail" name="Email" required placeholder="example@gmail.com">
            </div>
            <div class="form-group">
              <label for="inputName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="inputName" name="First Name" required>
            </div>
            <div class="form-group">
              <label for="inputLastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="inputLastName" name="Last Name" required>
            </div>
            <div class="form-group">
              <label for="inputMessage" class="form-label">Send Me A Message</label>
              <textarea class="form-control" name="message" placeholder="Type your message here..." required></textarea>
            </div>
            <div class="form-group text-center">
              <button class="btn submitBtn" type="submit">Submit</button>
            </div>
            <hr>
            <div id="infoSection">
              <h5 id="infoHeading">My Info:</h5>
              <p id="infoPara">Phone: 076 499 1374</p>
              <p id="infoPara">Email: <a href="mailto:Mahmud.isaacs03@gmail.com" class="emailLink">Mahmud.isaacs03@gmail.com</a></p>
              <p>
                <img class="locationLogo" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/locationIcon.png" alt="Location Icon">
                <span class="locationText">South Africa, Cape Town, Lotus River</span>
              </p>
              <hr>
              <div class="socialLinks text-center">
                <a href="https://github.com/mahmud-isaacs" target="_blank"><img class="gitHub" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/GitHubLogo.png" alt="GitHub Logo"></a>
                <a href="https://www.linkedin.com/in/mahmud-isaacs-b90799329/?trk=public-profile-join-page&original_referer=" target="_blank"><img class="linkedIn" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/LinkIN.png" alt="LinkedIn Logo"></a>
              </div>
            </div>
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
  font-family: 'Roboto', sans-serif;
}

#contactPage {
  background-color: rgba(40, 54, 24, 0.8);
  padding: 20px 0;
}

.contactMain {
  color: #99cc66;
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  background-color: rgba(90, 169, 90, 0.1);
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 2px solid #99cc66;
  text-align: center;
  animation: fadeIn 2s forwards;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  color: black;
  font-size: 18px;
  font-family: 'Archivo Black', sans-serif;
  background-color: #595f39;
  border-radius: 5px;
  padding: 5px;
}

.form-control {
  margin-bottom: 10px;
}

.submitBtn {
  background-color: #595f39;
  color: #ffffff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-family: 'Archivo Black', sans-serif;
}

.submitBtn:hover {
  background-color: #416542;
}

#infoSection {
  text-align: center;
}

#infoHeading {
  margin-top: 20px;
  color: #99cc66;
  font-family: 'Archivo Black', sans-serif;
  text-shadow: 2px 2px 2px #000000;
}

#infoPara {
  margin: 0;
  color: #99cc66;
  text-shadow: 2px 2px 2px #000000;
}

.locationLogo {
  width: 20px;
  height: 20px;
  mix-blend-mode: multiply;
}

.locationText {
  color: #ffffff; 
}

.gitHub {
  width: 25px;
  height: 25px;
  mix-blend-mode: multiply;
}

.linkedIn {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  mix-blend-mode: darken; 
}

.emailLink {
  color: #99cc66; 
  text-decoration: none; 
}

hr {
  border: 4px solid #595f39;
}

.cont-img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.socialLinks {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

@media screen and (min-width: 992px) {
  .contactMain {
    font-size: 3.5rem;
  }

  .submitBtn {
    font-size: 1.5rem;
  }

  .form-label {
    font-size: 20px;
  }

  .locationLogo,
  .gitHub,
  .linkedIn {
    width: 25px;
    height: 25px;
  }
}

@media screen and (max-width: 991px) and (min-width: 768px) {
  .contactMain {
    font-size: 2.75rem;
  }

  .submitBtn {
    font-size: 1.25rem;
  }

  .form-label {
    font-size: 18px;
  }

  .locationLogo,
  .gitHub,
  .linkedIn {
    width: 22px;
    height: 22px;
  }
}

/* For smaller screens */
@media screen and (max-width: 750px) {
  .contactMain {
    font-size: 2.5rem;
  }

  .submitBtn {
    font-size: 1.25rem;
  }

  .form-label {
    font-size: 16px;
  }

  .locationLogo,
  .gitHub,
  .linkedIn {
    width: 20px;
    height: 20px;
  }

  .row.g-4 {
    flex-direction: column;
  }
}

@media screen and (max-width: 576px) {
  .contactMain {
    font-size: 2rem;
  }

  .submitBtn {
    font-size: 1rem;
  }

  .form-label {
    font-size: 14px;
  }

  .locationLogo,
  .gitHub,
  .linkedIn {
    width: 18px;
    height: 18px;
  }
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
</style>
