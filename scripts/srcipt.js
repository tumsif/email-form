function sendMail() {
  var params = {
    from_name: "Noxyt Software Solutions",
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_m183b8b", "contact_form", params).then(
    (response) => {
      document.getElementById("user_name").value = "";
      document.getElementById("user_email").value = "";
      document.getElementById("message").value = "";
      console.log("SUCCESS!", response.status, response.text);
      alert("Form submmitted successfully");
    },
    (error) => {
      console.log("FAILED", error);
    }
  );
}
