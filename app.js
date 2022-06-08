const output = document.querySelector(".output-show");
let left = "0";
let right = "0";
let l_or_r = "";
const numb = "1 2 3 4 5 6 7 8 9 0";
const oper = "÷ + - X";
const other = "C &#8592 =";

document
  .querySelector(".second")
  .addEventListener("click", function (event) {
  const ftr = `${event.target.innerText}`;
  if (numb.includes(ftr)){
    if (l_or_r){
    right += ftr;
    output.innerText = parseInt(right);
    } else{
      left += ftr;
      output.innerText = parseInt(left);
    }
  } else if (oper.includes(ftr)){
    if (l_or_r === "X") {
      res = parseInt(left) * parseInt(right);
    } else {
      l_or_r = ftr;
      output.innerText = "";
    }
  }
});

document
  .querySelector(".first")
  .addEventListener("click", function (event) {
  const ftr = `${event.target.innerText}`;
  if (other.includes(ftr)){
    if (ftr === "C"){
      output.innerText = "";
      left = "0";
      right = "0";
      l_or_r = "";
    }
  } else if (oper.includes(ftr)){
      if (l_or_r === "÷"){
        res = parseInt(left) / parseInt(right);
        output.innerText = res.toString();
        left = res.toString();
        right = "0";
        l_or_r = "";
      }else {
        l_or_r = ftr;
        output.innerText = "";
      }
  } else {
    if (!l_or_r && left.length > 1){
      left = left.slice(0, -1);
      output.innerText = parseInt(left);
    } else if (right.length > 1) {
      right = right.slice(0, -1);
      output.innerText = parseInt(right);
    }
  }
});

document
  .querySelector(".third")
  .addEventListener("click", function (event) {
  const ftr = `${event.target.innerText}`;
  if (numb.includes(ftr)){
    if (l_or_r){
    right += ftr;
    output.innerText = parseInt(right);
    } else{
      left += ftr;
      output.innerText = parseInt(left);
    }
  } else if (oper.includes(ftr)){
  if (l_or_r === "-") {
    res = parseInt(left) - parseInt(right);
    output.innerText = res.toString();
    left = res.toString();
    right = "0";
    l_or_r = "";
  }else {
    l_or_r = ftr;
    output.innerText = "";
  }
  }
});

document
  .querySelector(".fourth")
  .addEventListener("click", function (event) {
  const ftr = `${event.target.innerText}`;
  if (numb.includes(ftr)){
    if (l_or_r){
    right += ftr;
    output.innerText = parseInt(right);
    } else{
      left += ftr;
      output.innerText = parseInt(left);
    }
  } else if (oper.includes(ftr)){
    if (l_or_r === "+") {
      res = parseInt(left) + parseInt(right);
    } else {
      l_or_r = ftr;
      output.innerText = "";
    }
  }
});

document
  .querySelector(".fifth")
  .addEventListener("click", function (event) {
  const ftr = `${event.target.innerText}`;
  if (numb.includes(ftr)){
    if (l_or_r){
    right += ftr;
    output.innerText = parseInt(right);
    } else{
      left += ftr;
      output.innerText = parseInt(left);
    }
  } else {
    let res;
    if (l_or_r === "+") {
      res = parseInt(left) + parseInt(right);
    }else if (l_or_r === "-") {
      res = parseInt(left) - parseInt(right);
    } else if (l_or_r === "X") {
      res = parseInt(left) * parseInt(right);
    } else{
      res = parseInt(left) / parseInt(right);
    }
    output.innerText = res.toString();
    left = res.toString();
    right = "0";
    l_or_r = "";
  }
});