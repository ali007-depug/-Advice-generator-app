const dice_icon = document.querySelector(".advice__dice");
const advice_text = document.querySelector(".advice__text");
const idHolder = document.querySelector("span");


dice_icon.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice", {
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response is not ok");
        }
        return response.json();
      })
      .then((data) => {
        advice_text.innerHTML = `${data.slip.advice}`;
        idHolder.innerHTML = `${data.slip.id}`;
      })
      .catch((error) => {
        console.log("Error:", error);
        idHolder.innerHTML = "NaN";
        advice_text.innerHTML = "Error while fetching";
      });


});

