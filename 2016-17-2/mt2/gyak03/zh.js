// Seg�df�ggv�nyek
function $(selector) {
  return document.querySelector(selector);
}
// Esem�nykezel�k
let kepek = []
function clickButton(){
  let urlInput = $("#url").value;
  kepek.push(urlInput);
  $("#keplista").innerHTML=WholeList(kepek);
}

$('#btn').addEventListener('click', clickButton, false);

// HTML gener�torok
function ListItemImage(url) {
  return `<li><img src = "${url}"></li>`;
  
}

function WholeList(kepekLista){
  return kepekLista.map(url => ListItemImage(url)).join('');
}