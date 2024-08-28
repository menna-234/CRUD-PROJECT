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
if (validdataname()&validdataphone()&validdataage()&validdataemail()){
        var member= {
            name:FuLLName.value,
            Number:PhoneNumber.value,
            Age:Age.value,
            Email:Email.value,
        };
    teammembers.push(member);
    updatelocalstorage();
    validdataname()
    show(teammembers);
    clear()
}
}
function show(data){
  var  cartona=``;
    for(var i=0;i< data.length ;i++){
       cartona+=`  
         <tr>
               <td>${i+1}</td>
               <td>${data[i].newname ? data[i].newname : data[i].name}</td>
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
var newmember = [];
for(var i=0; i< teammembers.length ;i++){
var newdata=data.toLowerCase();
if (teammembers[i].name.toLowerCase().includes(newdata)){
teammembers[i].newname= teammembers[i].name.toLowerCase().replaceAll(newdata,`<span class="text-warning">${newdata}</span>`)
newmember.push(teammembers[i])
}
show(newmember)
    }
}
function validdataname(){
var regex = /^[a-zA-Z]*$/
if (regex.test(FuLLName.value)){
    FuLLName.style.border="none";
    document.getElementById("valid").classList.add("d-none");
    return true ;
}
else{
    FuLLName.style.border="solid  5px red";
    document.getElementById("valid").classList.remove("d-none");
    return false;
}
}
function validdataphone(){
    var regex = /^01(2|5|0|1)[0-9]{8}$/
    if (regex.test(PhoneNumber.value)){
        PhoneNumber.style.border="none";
        document.getElementById("validnumber").classList.add("d-none");
        return true ;
    }
    else{
        PhoneNumber.style.border="solid  5px red";
        document.getElementById("validnumber").classList.remove("d-none");
        return false;
    }
}
function validdataage(){
    var regex = /^([1-2][0-9]|30)$/
    if (regex.test(Age.value)){
        Age.style.border="none";
        document.getElementById("validage").classList.add("d-none");
        return true ;
    }
    else{
        Age.style.border="solid  5px red";
        document.getElementById("validage").classList.remove("d-none");
        return false;
    }
}
function validdataemail(){
    var regex = /^\w*@(gmail|yahoo)\.com$/
    if (regex.test(Email.value)){
        Email.style.border="none";
        document.getElementById("validemail").classList.add("d-none");
        return true ;
    }
    else{
        Email.style.border="solid  5px red";
        document.getElementById("validemail").classList.remove("d-none");
        return false;
    }
}