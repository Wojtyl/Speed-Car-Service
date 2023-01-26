const sendBTN = document.querySelector(".btn--submit-contact");

sendBTN.addEventListener("click", function (e) {
  e.preventDefault();

  // const serviceID = "service_zgkkmqa";
  const serviceID = "service_6hd5hth";
  // const templateID = "template_mpdwi9q";
  const templateID = "template_9hxgi1e";

  //sendBTN.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const message = document.getElementById("message").value;

  const params = { name, email, tel, message };

  if (name && email && message && tel) {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("message").value = "";

        const popup = document.querySelector(".message");
        popup.innerHTML = "Wiadomość wysłana pomyślnie!";
        popup.classList.remove("message-hidden");

        setTimeout(function () {
          popup.classList.add("message-hidden");
        }, 3500);
      })
      .catch((err) => {
        console.error(err);
        const popup = document.querySelector(".message");
        popup.innerHTML = "Błąd w wysyłaniu wiadomości!";
        popup.classList.add("error");
        popup.classList.remove("message-hidden");
        setTimeout(function () {
          popup.classList.add("message-hidden");
          setTimeout(function () {
            popup.classList.remove("error");
          }, 1000);
        }, 3500);
      });
  } else {
    const popup = document.querySelector(".message");
    popup.innerHTML = "Uzupełnij poprawnie formularz!";
    popup.classList.add("error");
    popup.classList.remove("message-hidden");
    setTimeout(function () {
      popup.classList.add("message-hidden");
      setTimeout(function () {
        popup.classList.remove("error");
      }, 1000);
    }, 3500);
  }
});
