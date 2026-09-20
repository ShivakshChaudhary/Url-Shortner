const url = document.getElementById("url");
const input = document.querySelector('#input');
const api = async () => {
  try {
    const response = await fetch("https://urlshortner-backend.shivakshchaudhary.qzz.io/api/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: input.value,
      }),
    });
    const data = await response.json();
    url.innerText = "https://urlshortner-backend.shivakshchaudhary.qzz.io/" + data.shortCode;
    document.getElementById("result").style.visibility = "visible";
  } catch (error) {
    alert("Failed To Create!")
  }
};


