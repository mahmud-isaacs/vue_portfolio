<template>
  <main>
        <div id="mainLanding">
          <div class="containerMain">
              <div class="content">
                <h1 id="mainHeading">Hi! I am <b>Mahmud Isaacs</b></h1>
                <h2 id="subHeading">Welcome to my digital Portfolio!</h2>
                <h3 id="smallHeading">An aspiring <b>Full-stack Developer</b></h3>
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
}

#mainHeading {
    font-size: 5rem;
    color: #99cc66;
}

#mainHeading b {
    color: #8eac0a;
    animation: slide 3s forwards;
    opacity: 0;
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

#subHeading {
    color: #CDDC39;
}



.navbar-brand img {
    width: 30px;
    height: auto;
}

#smallHeading {
    color: #CDDC39;
}

@keyframes highlight {
    0% {color: #DCE775}
    25%{color: #325353}
    50% {color: #A5D6A7}
    75%{color: #A5D6A7}
    100% {color: #809393}

}
#smallHeading b {
    color: #80B293;
    animation-name: highlight;
    animation-duration: 2s; 
    animation-iteration-count: infinite;
}

#mainHeading, #subHeading , #smallHeading {
    animation: slideIn 2s forwards;
    opacity: 0; 
  }
  

  @keyframes slideIn {
    from {
      transform: translateY(-300px);
      opacity: 0;
    }
    to {
      transform: translateY(50px); 
      opacity: 1; 
    }
  }

</style>
