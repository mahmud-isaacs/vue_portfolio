<template>
  <body class="container-fluid">
    <main>
      <div id="mainLanding">
        <div class="containerMain">
          <div class="content">
            <h1 id="mainHeading">Hi! I am <b>Mahmud Isaacs</b></h1>
            <h2 id="subHeading">Welcome to my Digital Portfolio</h2>
            <h3 id="smallHeading">An Aspiring <b>Full-stack Developer</b></h3>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:wght@400;700&display=swap');

body {
  background-color: rgba(40, 54, 24, 0.9);
}

.containerMain {
  background-image: linear-gradient(to bottom right, rgba(40, 54, 24, 0.6), rgba(40, 54, 24, 0.9)), url('https://mahmud-isaacs.github.io/portfolio_hostedImages/images/IMG_0306_Original.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #595f39;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
}

.content {
  text-align: center;
  max-width: 80%;
  width: 650px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

#mainHeading {
  font-size: 3.5rem;
  color: #99cc66;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

#mainHeading b {
  color: #8eac0a;
  animation: fadeIn 1.5s ease-out forwards;
  opacity: 0;
}

#subHeading {
  color: #CDDC39;
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

#smallHeading {
  color: #80B293;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
}

#smallHeading b {
  font-weight: 600;
  animation: pulse 2s infinite alternate;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { color: #DCE775; }
  100% { color: #80B293; }
}

.content:hover {
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  #mainHeading {
    font-size: 2.8rem;
  }
  #subHeading {
    font-size: 1.5rem;
  }
  #smallHeading {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  #mainHeading {
    font-size: 2.2rem;
  }
  #subHeading {
    font-size: 1.3rem;
  }
  #smallHeading {
    font-size: 0.9rem;
  }
}
</style>
