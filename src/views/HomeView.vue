<template>
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
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:wght@400;700&display=swap');
  
  .containerMain {
    background-image: linear-gradient(to bottom right, rgba(40, 54, 24, 0.5), rgba(40, 54, 24, 0.8)), url('https://mahmud-isaacs.github.io/portfolio_hostedImages/images/IMG_0306_Original.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #595f39;
  }
  
  .content {
    text-align: center;
    max-width: 600px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  
  #mainHeading {
    font-size: 4rem;
    color: #99cc66;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  #mainHeading b {
    color: #8eac0a;
    animation: slideIn 1.5s ease-out forwards;
    opacity: 0;
  }
  
  #subHeading {
    color: #CDDC39;
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  #smallHeading {
    color: #CDDC39;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
  }
  
  #smallHeading b {
    color: #80B293;
    font-weight: 600;
    animation: highlight 2s infinite alternate;
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes highlight {
    0% {color: #DCE775}
    100% {color: #80B293}
  }
  
  </style>
  