const buttonPlusElement = document.getElementById("button-plus") ;
const buttonMinusElement = document.getElementById("button-minus");

enum Buttons {
  Plus = "plus",
  Minus = "minus"
}

let port = 3005;

if (buttonPlusElement) {
  buttonPlusElement.addEventListener("click", ()=>{
    fetch(`http://localhost:${port}/${Buttons.Plus}`, {
      method: "GET"
    }).then((res) => res.json())
      .then((response: { plus?: number; minus?: number; error?: string }) => {
        if (response.error) {
          alert("Помилка");
        } else {
          alert(`Плюс: ${response.plus}\nМінус: ${response.minus}`);
        }
      })
      .catch((error) => {
        console.error("Помилка під час отримання даних:", error);
      });
  })
}

if(buttonMinusElement){
  buttonMinusElement.addEventListener("click", ()=>{
    fetch(`http://localhost:${port}/${Buttons.Minus}`, {
      method: "GET"
    }).then((res) => res.json())
      .then((response: { plus?: number; minus?: number; error?: string }) => {
        if (response.error) {
          alert("Помилка");
        } else {
          alert(`Плюс: ${response.plus}\nМінус: ${response.minus}`);
        }
      })
      .catch((error) => {
        console.error("Помилка під час отримання даних:", error);
      });
  })
}


