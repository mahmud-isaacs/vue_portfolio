<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-text">
        <p>&copy; <b>Mahmud Isaacs</b> - All rights reserved | <span id="current-year"></span></p>
      </div>
      <div class="footer-links">
        <a href="https://github.com/mahmud-isaacs" class="footer-link" target="_blank" aria-label="GitHub">
          <img class="footer-icon" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/GitHubLogo.png" alt="GitHub Logo">
        </a>
        <a href="https://www.linkedin.com/in/mahmud-isaacs-b90799329" class="footer-link" target="_blank" aria-label="LinkedIn">
          <img class="footer-icon" src="https://mahmud-isaacs.github.io/portfolio_hostedImages/images/LinkIN.png" alt="LinkedIn Logo">
        </a>
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
.footer {
  background-color: #C4C5BA; /* Light background for a professional look */
  color: #343a40; /* Dark color for text */
  padding: 20px 0;
  text-align: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  position: relative; /* Ensure it's at the bottom */
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-text {
  flex: 1;
  font-size: 1rem; /* Slightly larger font for readability */
}

.footer-links {
  display: flex;
  gap: 20px; /* Increased gap for better spacing */
}

.footer-icon {
  width: 40px; /* Adjusted size for better visibility */
  height: auto;
  transition: transform 0.3s, opacity 0.3s;
}

.footer-icon:hover {
  transform: scale(1.15); /* Increased scale for more noticeable hover effect */
  opacity: 0.8;
}

.footer-link {
  color: inherit; /* Ensure no underline or color changes */
  text-decoration: none;
}

@media (max-width: 1200px) {
  .footer-container {
    padding: 0 15px; /* Reduced padding for medium screens */
  }

  .footer-links {
    gap: 15px; /* Adjusted gap for medium screens */
  }
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-links {
    margin-top: 15px; /* Adjusted margin for mobile screens */
    gap: 20px; /* Increased gap for mobile screens */
  }

  .footer-icon {
    width: 35px; /* Slightly smaller icons for mobile */
  }

  .footer-text {
    font-size: 0.9rem; /* Slightly smaller font for mobile */
  }
}

@media (max-width: 576px) {
  .footer-icon {
    width: 30px; /* Further reduced icon size for very small screens */
  }

  .footer-text {
    font-size: 0.8rem; /* Further reduced font size for very small screens */
  }
}
</style>
