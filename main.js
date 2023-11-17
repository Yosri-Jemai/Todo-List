const input = document.querySelector("#inputBox")
const result = document.querySelector("#list")

// function addTask(){***}
const addTask = () =>{
  if(!(input.value)){
    alert("Please Enter A Valid Task !")
  }else{
    var li = document.createElement("li")
    li.innerHTML = input.value
    result.appendChild(li)
    var span = document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
  }
  input.value=""
  listData()
}

result.addEventListener("click",(e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    listData()
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    listData()
  }
},false)

const listData = () =>{
  localStorage.setItem("data",result.innerHTML)
}
//Display data when we re-open the website
const showTask = () =>{
  result.innerHTML = localStorage.getItem("data")
}
showTask()