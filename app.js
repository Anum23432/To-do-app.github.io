// first we are setting  countdown in heading..
$ = function(val){
    result = document.querySelector(val); 
    return result;
 };
all =function( val ){
    result = document.querySelectorAll(val); 
    return result;
};
function countList(){
    let count = 0;
    count   =  all("#box li").length;
   console.log(count);
   return count;
   }

function addMore() {

// accessing elements in html
    let name = document.getElementById('name').value;
    if (name == ""){
        alert("Please enter value first."); /*if the input is empty*/
    }else{
        let box = document.getElementById('box'); /*accessing ul in html*/
        let li = document.createElement('li'); /*creating li element value passed by user*/
        li.textContent = name;

        let a = document.createElement('a'); /*creating anchortag for closing button for li items*/
        a.textContent = "x"; /*giving the close button a value of cross like x*/
        a.href = "javascript:void(O)";
        a.className = "remove"; /*giving it class for use of css*/
        li.appendChild(a); /*appending li items to close button*/
    
         let pos = box.firstElementChild; /*positioning the items added in list one after other*/
        if(pos == null){
            box.appendChild(li); 
        }else{
        box.insertBefore(li,pos); /*insertion of li item on the position*/
        document.querySelector('span').innerHTML= countList();
    }

    }
    document.getElementById("name").value = ""; 
}
// giving close button to perform removing function on the list items
let btn = document.querySelector('ul');
btn.addEventListener("click",function(e){
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
    if(countList()>=1){
        $("#count").innerHTML = countList();
    }
    else {
        $("#count").innerHTML = ""; 
    }
})


