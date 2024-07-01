<template>
    <footer class="fixed-footer">
      <div class="footer-content">
        <div style="justify-content: center;">
          <a href="https://github.com/mahmud-isaacs" target="_blank">
            <img src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/GitHubLogo.png" alt="GitHub Logo" style="width: 50px; height: auto;">
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>

  </script>
  
  <style scoped>
  .fixed-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #003333; 
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
  </style>