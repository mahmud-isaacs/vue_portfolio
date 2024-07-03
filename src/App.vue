<template>
  <NavBarComp/>
  <router-view />
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue'
import FooterComp from './components/FooterComp.vue'
export default {
  components: {
  NavBarComp,
  FooterComp
  }
}
</script>

<style>
body {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #C4C5BA;
}




footer {
    grid-row: 3;
    background-color: #003333;
    color: #FFC300;
    text-align: center;
    padding: 2px ;
  }

.footer-content  {
    gap: 8px;
    padding: 8px;
    justify-content: center;
    align-items: center;
}



.card-image {
    width: 300px;
    height: 400px;
}

.about-container {
    text-align: center;
    border: 10px solid #1A4E47; 
    padding: 10px; 
    border-radius: 10px; 

}

.text-center {
    text-align: center;
}





p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
}


.card-title {
    color: #325353;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}




.row {
    display: flex;
    justify-content: center;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
}



.pad {
    padding-top: 70px;
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









.resumePad {
    padding-top: 5px;
}



main {
    flex: 1;
}

.contactPad {
    padding-top: 60px;
}

.formTable {
    text-align: center;
}

.solid-line {
    border: none;
    border-top: 20px solid #031e1a;
}

.contactBtn {
    background-color: #1A4E47;
    color: #FFC300;
    width: 20%;
    border-radius: 20%;
    box-shadow: 2px 5px 8px #FFC300;
}

#contactNumber {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #5073A4;
}

#contactMail {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #5073A4;
}


</style>
