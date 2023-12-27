document.querySelector("#btn").addEventListener("click", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#input").value;
  if (!email == "") {
    document.querySelector(
      ".result"
    ).innerHTML = `<img src="utilities/loading.svg" />`;

    let url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_h1yBqeKFwpEAt7wzYObBLu0V08Q4fGdZIPhAjvq4&email=${email}`;
    let response = await fetch(url);
    let result = await response.json();
    if (result.state == "deliverable") {
      document.querySelector(
        ".result"
      ).innerHTML = `${email} is a valid email ✅`;
      document.querySelector(".result").style.color = "green";
      let str = "";
      for (const key in result) {
        if (result[key]) {
          str += `<div>${key} : ${result[key]}`;
        }
      }
      document.querySelector(".additional").innerHTML = str;
    } else {
      document.querySelector(
        ".result"
      ).innerHTML = `${email} is an invalid email ❌`;
      document.querySelector(".result").style.color = "red";
    }
  } else {
    document.querySelector(".result").innerHTML = `Enter email first`;
    document.querySelector(".result").style.color = "black";
  }
});
document.querySelector("#input").addEventListener("focus", () => {
  document.querySelector(".result").innerHTML = "";
  document.querySelector(".additional").innerHTML = "";
});
