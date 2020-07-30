function hello() {
  if (document.getElementById("textbox").value === "hello") {
    window.location.href = "pages/welcome.html";
  } else {
    alert("Please say 'hello' to me :)");
  }
}
