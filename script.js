AOS.init({
        duration: 800,
        once: true,
      });

      (function () {
        emailjs.init("YHhA4gEStV7wFBtyJ");
      })();

      const input = document.querySelector("#phone");
      window.intlTelInput(input, {
        initialCountry: "in",
        separateDialCode: true,
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      document.getElementById("enquiryForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const params = {
            from_name: document.getElementById("name").value,
            from_mobile: document.getElementById("phone").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value,
          };

          emailjs
            .send("service_0szvh8b", "template_i0v0o4b", params,"YHhA4gEStV7wFBtyJ")
            .then(() => {
              alert("Message sent successfully!");
              document.getElementById("enquiryForm").reset();
              var modal = bootstrap.Modal.getInstance(
                document.getElementById("contactModal")
              );
              modal.hide();
            })
            .catch((error) => {
              alert("Failed to send message. Please try again.");
              console.error("EmailJS Error:", error);
            });
        });