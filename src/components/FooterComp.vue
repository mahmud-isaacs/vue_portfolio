<template>
  <footer class="fixed-footer">
    <div class="footer-content">
      <div style="justify-content: center;">
        <h6> &copy; Designed and Developed by <b>Mahmud Isaacs</b>|
        <span id="current-year"></span>  |All rights reserved</h6>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  }
}
</script>

<style scoped>
.fixed-footer {
  bottom: 0;
  width: 100%;
  background-color: #C4C5BA; 
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  height: 50px; 
}

.footer-content a img {
  width: 50px;
  height: auto;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#current-year {
  font-size: 1.2rem;
  color: #595f39;
}

h6 {
  font-size: 1rem;
  color: #595f39;
}
</style>