import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
    projects:null,
    education:null,
    skills:null,
    softSkills:null,
    testimonials:null
  },
  mutations: {
    setAboutMe(state,payload){
    state.aboutMe = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
    setEducation(state, payload){
     state.education = payload
   },
    setSkills(state, payload){
    state.skills = payload
    },
    setSoftSkills(state, payload){
      state.softSkills = payload
    },
     setTestimonials(state, payload){
       state.testimonials = payload
    }
  },
  actions: {
    async getAboutMe ({commit}){
    try {
        let fetchInfo = await fetch('https://mahmud-isaacs.github.io/first_API/data/data.json')
        let data = await fetchInfo.json()
        let {aboutMe,projects,education,skills,softSkills,testimonials} = data
        console.log(data);
        commit('setAboutMe', aboutMe)
        commit('setProjects', projects)
        commit('setEducation', education)
        commit('setSkills', skills)
        commit('setSoftSkills', softSkills)
        commit('setTestimonials', testimonials)
      }
  catch (error) {
    console.log(error);
  }}
},
  modules: {
  }
})