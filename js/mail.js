const sendMail = function () {
  const serviceID = "service_zgkkmqa";
  const templateID = "template_mpdwi9q";

  const sendBTN = document.querySelector(".btn--submit-contact");

  //sendBTN.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const message = document.getElementById("message").value;

  const params = { name, email, tel, message };

  // console.log(params);

  // emailjs.send(serviceID, templateID, params).then((res) => {
  //   document.getElementById("name").value = "";
  //   document.getElementById("email").value = "";
  //   document.getElementById("tel").value = "";
  //   document.getElementById("message").value = "";
  // });

  if (name && email && tel && message) {
    // email.checkValidity();
    alert("Wiadomość wysłana");
    // alert(email.checkValidity());

    setTimeout(() => {
      window.location.href = "./index.html";
    }, 1000);
  }

  //});
};
