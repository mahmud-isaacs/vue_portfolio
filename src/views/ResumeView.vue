<template>
  <main>
  
  <div class="resumePad">
      <h2 id="aboutMain"><b>My Skills:</b></h2>
      <div class="container">
        <div class="row justify-content-center">
          <div v-for="skill in $store.state.skills" id="skill-border" class="card-group card border-9 mb-3" style="max-width: 70rem;" :key="skill.name">
            <div class="card">
              <img :src="skill.image" class="card-img-top" alt="" id="skillCards">
              <div class="card-body">
                <h5 class="card-title">{{skill.name}}</h5>
                <p class="card-text">{{skill.level}}</p>
              </div>
          </div>
        </div>
      </div>
    
      
      <div class="row">
        <div class="col-8-1"><h2 id="aboutMain"><b>Education</b></h2>
          <img src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/LifeChoices.jpg" alt="" class="img-thumbnailRow">
          <h3 id="educationHeading">April 2024 - Present</h3>
          <h4 id="aboutHeading"><b>Life Choices Academy</b></h4>
          <p>I am currently a student at Life Choices Academy, and in the process of becoming a Full-stack Developer. Thus far; my skills inlcude the adaptation to the workplace environment with the opportunity to learn multiple programming skills.</p>
       </div>
      </div>
  </div>
  </div>

 

</main>
</template>

<script>
export default {
  computed :{
    getAboutMe(){
      return this.$store.dispatch('getAboutMe')
    }
  },
  mounted(){
    this.getAboutMe
  },
}
</script>

<style>
#skillCards {
  width: 20rem;
  align-self: center;

}

</style>