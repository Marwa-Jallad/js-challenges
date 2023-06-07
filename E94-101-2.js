let add = document.getElementsByClassName("classes-to-add")[0];
let remove = document.getElementsByClassName("classes-to-remove")[0];
let curCla = document.querySelector("[title='Current']");
let fList = document.querySelector(".classes-list div");

function addRem() {
  document.querySelectorAll("span").forEach((el) => el.remove());
  for (i = 0; i < this.value.trim().split(" ").length; i++) {
    if (add.value)
      curCla.classlist.add(add.value.tolowerCase().trim().split(" ")[i]);
    if (remove.value)
      curCla.classlist.remove(remove.value.tolowerCase().trim().split(" ")[i]);
  }
  this.value = "";
  if (curCla.classlist.length) {
    [...curCla.classList.length].sort().forEach((el) => {
      let clspan = document.createElement("span");
      clspan.textContent = el;
      fList.append(clspan);
    });
  } else fList.textContent = "no classes to show";
}
add.onblur = addRem;
remove.onblur = addRem;
