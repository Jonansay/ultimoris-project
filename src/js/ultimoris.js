document.addEventListener("DOMContentLoaded", function () {
  const zip = document.querySelector("#zip-code"); //zip code
  const topic = document.querySelector("#topic");
  const open = document.querySelector('.nice-select');
 const buttonField = document.querySelector('.form__button-field');
 console.log(buttonField);

  //hidden div

  const press = document.querySelector("#press-search"); //div press search
  const convenience = document.querySelector("#convenience"); //div  ram
  const divResponse = document.querySelector("#response"); //div show-connect
  const spinner_show = document.querySelector("#spinner"); //el spinner
  const error_1 = document.querySelector("#error-1"); //error del iput
  const error_2 = document.querySelector("#error-2"); //error del select

  const divConnect = document.querySelector("#connect");

  //buttons
  const btn_search = document.querySelector("#search");
  const btn_restet = document.querySelector("#reset");

  //calling functions

  // btn_search.addEventListener("click", showError);
  btn_search.addEventListener("click", showArea);
  btn_search.addEventListener("click", hiddenArea);
  btn_search.addEventListener("click", zipEmpty);
  btn_search.addEventListener("click", topicEmpty);
  btn_restet.addEventListener("click", resetall);
  // open.addEventListener('click', openSelect)
  




  //bd
  const zipbd = ["Saab", "Volvo", "BMW"];
  // const zipbd = [];

  //funciones

  function zipEmpty() {
    if (zip.value.trim() === "") {
      error_1.style.display = "block";
    }
  }
  function topicEmpty() {
    const select = document.querySelector(".nice-select");

    const selectContent = select.querySelector(".current").innerHTML;

    if (selectContent === "Reason for contact") {
      error_2.style.display = "block";
    }
  }

  function hiddenArea() {
    if (zip.value.trim() !== "" && topic.value > "0" && zipbd.length > 0) {
      spinner_show.style.display = "block";
      press.style.display = "none";
      setTimeout(() => {
        spinner_show.style.display = "none";
        convenience.style.display = "block";
        btn_search.disabled = true;
      }, 3000);
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
      }, 3000);
    }
  }

  function openSelect(){
    if(open.classList.contains('open')){

      buttonField.style.marginTop = '190px';
    

    }
    else{
    
      buttonField.style.marginTop = '0';

    }
  }

  function resetall() {
    var instance = window.niceSelectForm;
    instance.clear();

    zip.value = "";

    press.style.display = "block";
    error_1.style.display = "none";
    error_2.style.display = "none";
    convenience.style.display = "none";
    divResponse.style.display = "none";
    btn_search.disabled = false;
  }
});
