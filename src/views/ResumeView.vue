<template>
  <body class="container-fluid"> 
    <main>
      <div class="resumePad">
        <div class="aboutMainContainer">
          <h2 id="aboutMain"><b>My Skills:</b></h2>
        </div>
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
        </div>

        <div class="aboutMainContainer">
          <h2 id="aboutMain">My Soft Skills:</h2>
        </div>
        <div class="row justify-content-center">
          <div v-for="softSkill in $store.state.softSkills" id="skill-border" class="card-group card border-9 mb-3" style="max-width: 70rem;" :key="softSkill.name">
            <div class="card">
              <img :src="softSkill.image" class="card-img-top" alt="" id="skillCards">
              <div class="card-body">
                <h5 class="card-title">{{softSkill.name}}</h5>
                <p class="card-text">{{softSkill.description}}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="aboutMainContainer">
          <h2 id="aboutMain"><b>Education:</b></h2>
        </div>
        <div class="row">
          <div class="col-8-1" v-for="education in $store.state.education" :key="education.placeOfInstitution">
            <img :src="education.image" alt="" class="img-thumbnailRow">
            <h3 id="educationHeading">{{ education.year }}</h3>
            <h4 id="aboutHeading"><b>{{ education.placeOfInstitution }}</b></h4>
            <p>{{education.description}}</p>
          </div>
        </div>
      </div>
    </main>
  </body>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
body {
  background-color: rgba(40, 54, 24, 0.8);
}

main {
  background-color: rgba(40, 54, 24, 0.8);
}

p {
  font-size: 1.2em;
  color: whitesmoke;
  font-family: 'Archivo Black', sans-serif;
}



#skillCards {
  width: 20rem;
  align-self: center;

}

.img-thumbnailRow {
    max-width: 10%;
    border-radius: 30%;
    border-color: #031e1a;
    box-shadow: 2px 5px 6px  green;
    transition: transform 1500ms;
}

.img-thumbnailRow:hover {
    transform: rotate(360deg);
    border-radius: 50%;
}


#skill-border {
    border: 20px solid #C4C5BA;
    padding: 20px;
}

.card-title {
    color: #99cc66;
    font-family: 'Archivo Black', sans-serif;
    font-size: 2rem;
    text-align: center;
    background-color: #1A4E47;
    text-shadow: 1px 1px 2px black;
}

.card-text {
    font-family: 'Archivo Black', sans-serif;
    color: black;
}

.row {
    display: flex;
    justify-content: center;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
}

.col-8-1 {
    border: 10px solid #1A4E47;
    padding: 10px;
    text-align: center;
}

.col-8-2{
    border: 10px solid #1A4E47;
    padding: 10px;
    text-align: center;
}

.pad {
    padding-top: 20px;
}

.aboutMainContainer {
  display: flex;
  justify-content: center;
  text-align: center;
}

#aboutMain {
    background-color: #C4C5BA;
    color: rgb(90, 169, 90);
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    font-size: 5rem;
    box-shadow: 2px 5px 8px  #325353;
    animation: slideIn 4s forwards;
    opacity: 0; 
    animation-name: slipIn;
    width: auto;
    display: inline-block;
    padding: 0.5rem 1rem;
}

@keyframes slipIn {
    from {
        transform: translateX(-300px);
        opacity: 0;
      }
      to {
        transform: translateX(4px); 
        opacity: 1; 
      }
}

#educationHeading {
    color: #C4C5BA;
    font-family: 'Archivo Black', sans-serif;
}

#aboutHeading {
    color: rgb(90, 169, 90);
    font-family: 'Times New Roman', Times, serif;
    font-size: 2rem;
}

.col-8-1 {
    border: 10px solid #C4C5BA;
    padding: 10px;
    text-align: center;
}

.col-8-2{
    border: 10px solid #C4C5BA;
    padding: 10px;
    text-align: center;
}
</style>