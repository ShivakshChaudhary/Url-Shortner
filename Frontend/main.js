const url = document.getElementById("url");
const input = document.querySelector('#input');
const api = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: input.value,
      }),
    });
    const data = await response.json();
    url.innerText = "http://localhost:3000/" + data.shortCode;
    document.getElementById("result").style.visibility = "visible";
  } catch (error) {
    alert("Failed To Create!")
  }
};


