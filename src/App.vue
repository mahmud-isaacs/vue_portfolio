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

.card-link-overlay {
    position: absolute;
    top: 0;
    bottom: 60px;
    left: 0;
    right: 0;
    background-color: #1A4E47;
    opacity: 0;
    transition: opacity 1.1s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
}

.custom-text {
    color: #003333;
}

.card-link-overlay:hover {
    opacity: 3;
  }

.card-link {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

.custom-card {
    background-color: #CDDC39;
    border-radius: 10%;
}

.custom-card img {
    border-radius: 10%;
}

#projectPage {
    padding-top: 70px;
}

.resumePad {
    padding-top: 5px;
}

.image-wrapper1 {
    background-color: #5073A4;
}

.image-wrapper2 {
    background-color: #5C88B8;
}

.image-wrapper3 {
    background-color: #3B5E8B;
}

.image-wrapper4 {
    background-color: #A569BD;
}

.image-wrapper5 {
    background-color: #FFC300;
}

.carousel-item img {
    max-width: 200px; 
    height: auto; 
    display: block;
    margin: 0 auto; 
}

#testHeading {
    text-align: center;
    font-size: 5rem;
    color: black;
    box-shadow: 2px 5px 8px black;
    max-width: 80%;
    padding: 10px;
    justify-content: center;

}

.card-title-test {
    text-align: center;
    font-size: 25px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.testPad {
    padding-top: 60px;
}

.testBox {
    align-content: center;
    justify-content: center;
    display: flex;
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
