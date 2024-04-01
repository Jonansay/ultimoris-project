document.addEventListener("DOMContentLoaded", function () {
  const zip = document.querySelector("#zip-code"); //zip code
  const topic = document.querySelector("#topic"); // el select

  //div escondidos

  const press = document.querySelector("#press-search"); //div press search
  const convenience = document.querySelector("#convenience"); //div  ram
  const divResponse = document.querySelector("#response"); //div show-connect
  const spinner_show = document.querySelector("#spinner"); //el spinner
  const error_1 = document.querySelector("#error-1"); //error del iput
  const error_2 = document.querySelector("#error-2"); //error del select

  const divConnect = document.querySelector("#connect");
  console.log(divConnect);

  //botones
  const btn_search = document.querySelector("#search");
  const btn_restet = document.querySelector("#reset");

  ////llamando funciones

  btn_search.addEventListener("click", showError);
  btn_search.addEventListener("click", showArea);
  btn_search.addEventListener("click", hiddenArea);
  btn_restet.addEventListener("click", resetall);

  // btn_search.addEventListener("click", () =>{
  //   showError;
  //   showArea;
  //   hiddenArea;
  // });

  //funcion para mostrar errores

  //base de datos
  const zipbd = ["Saab", "Volvo", "BMW"];
  // const zipbd = [];

  //funciones

  function showError() {
    if (zip.value.trim() === "" || topic.value === "0") {
      // span_mesage.style.display = "block";
      error_1.style.display = "block";
      error_2.style.display = "block";
      // divConnect.style.display = "none";
      spinner_show.style.display = "none";
      divResponse.style.display = "none";
    }
    return false;
  }

  function hiddenArea() {
    if (zip.value.trim() !== "" && topic.value > "0" && zipbd.length > 0) {
      spinner_show.style.display = "block";
      press.style.display = "none";
      setTimeout(() => {
        spinner_show.style.display = "none";
        convenience.style.display = "block";
        btn_search.disabled = true;
      }, 4000);
    }
  }

  function showArea() {
    if (zip.value.trim() !== "" && topic.value > "0" && zipbd.length <= 0) {
      spinner_show.style.display = "block";
      press.style.display = "none";
      setTimeout(() => {
        spinner_show.style.display = "none";
        divResponse.style.display = "block";
        btn_search.disabled = true;
      }, 4000);
    }
  }

  function resetall() {
    zip.value = "";
    topic.value = 0;
    press.style.display = "block";
    error_1.style.display = "none";
    error_2.style.display = "none";
    convenience.style.display = "none";
    divResponse.style.display = "none";
    btn_search.disabled = false;
  }
});
