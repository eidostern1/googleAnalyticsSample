// מעבר לעמוד הרשמה
function goToSignup() {
  gtag('event', 'click_start_signup', {
    location: 'homepage'
  });

  window.location.href = "signup.html";
}


// submit של הטופס
const form = document.getElementById("signupForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    gtag('event', 'signup_submit', {
      method: 'email_form'
    });

    setTimeout(() => {
      window.location.href = "thankyou.html";
    }, 500);
  });
}


// scroll tracking
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    gtag('event', 'scroll_300px');
  }
});