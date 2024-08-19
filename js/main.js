var teammembers;

localStorage.getItem("teammembers")==null ? teammembers=[] : teammembers = JSON.parse(localStorage.getItem("teammembers")) ;
show(teammembers);

var num;
var savebtn = document.getElementById("savebtn");
var FuLLName=document.getElementById("FuLL-Name");
var PhoneNumber=document.getElementById("Phone-Number");
var Age=document.getElementById("Age");
var Email=document.getElementById("Email");

function updatelocalstorage(){
localStorage.setItem("teammembers" ,JSON.stringify(teammembers))
}
function addmembers(){

    var member= {
        name:FuLLName.value,
        Number:PhoneNumber.value,
        Age:Age.value,
        Email:Email.value,
    };

teammembers.push(member);
updatelocalstorage();
console.log(teammembers);
show(teammembers);
clear()
 }
function show(data){
  var  cartona=``;
    for(var i=0;i< data.length ;i++){
       cartona+=`  
         <tr>
               <td>${i+1}</td>
               <td>${data[i].name}</td>
               <td>${data[i].Number}</td>
               <td>${data[i].Age}</td>
               <td>${data[i].Email}</td>
               <td><button onclick="update(${i})" class=" btn btn-danger">update</button></td>
               <td><button onclick="deletemember(${i})" class=" btn btn-warning">delete</button></td>

        </tr>` }
     document.getElementById("data").innerHTML= cartona
}
function deletemember(index){
    teammembers.splice(index,1);
    updatelocalstorage();
    show(teammembers)
}
function clear(){
    FuLLName.value='';
    PhoneNumber.value='';
    Age.value='';
    Email.value='';
}
function update(index){
    FuLLName.value= teammembers[index].name;
    PhoneNumber.value=teammembers[index].Number;
    Age.value=teammembers[index].Age;
    Email.value=teammembers[index].Email;
    savebtn.classList.remove("d-none")
    num=index
}
function save(){
    teammembers[num].name = FuLLName.value;
    teammembers[num].Number =PhoneNumber.value;
    teammembers[num].Age =Age.value;
    teammembers[num].Email =Email.value;
    updatelocalstorage();
    show(teammembers);
    savebtn.classList.add("d-none")
    clear();
}
function search(data){
    console.log(data)
    var newmember = [];
    for(var i=0; i< teammembers.length ;i++){
        if (teammembers[i].name.toLowerCase().includes(data.toLowerCase())){
            newmember.push(teammembers[i])
            console.log(teammembers[i])
        }
show(newmember)
    }
}