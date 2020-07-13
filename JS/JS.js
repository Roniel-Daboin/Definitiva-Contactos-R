const addButton = document.querySelector('.btn-primary');
var inputValueName = document.getElementById('NameValue');
const container = document.querySelector('.container');
var inputValueNumber = document.getElementById('NumberValue');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    
    createDiv(itemName){
        var inputValueName = document.getElementById('NameValue').value;
        var inputValueNumber = document.getElementById('NumberValue').value;
        itemName = inputValueName + " " + inputValueNumber;
    
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";
        

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.classList.add('editButton');
        editButton.innerHTML = "Editar";
        

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.innerHTML = "Eliminar"

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        
        editButton.addEventListener('click', () => this.edit(input,editButton));

        removeButton.addEventListener('click',() => this.remove(itemBox));
    }
        edit(input, editButton){
             input.disabled = !input.disabled;
             if (editButton.innerHTML=="Editar") editButton.innerHTML = "Guardar";
             else editButton.innerHTML = "Editar";
    }

        remove(item){
            container.removeChild(item);
        }
}

function change() {
    var changeValue = document.getElementsByClassName("editButton");
    if (changeValue.value=="Editar") changeValue.value = "Guardar";
    else changeValue.value = "Editar";
}

function checkValueName(){
    document.getElementById("NumberValue").value != "";

    if (NameValue.value, NumberValue !=""){
        new item(NameValue.value + NumberValue.value);
        NameValue.value = "";
        NumberValue.value = "";
    }
}

   

    



addButton.addEventListener('click', checkValueName,);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})













































// function contactos () {
//     const nombre = [document.getElementById("input1").value];
//     const telefono = [document.getElementById("input2").value];
//     let contacto = nombre + " " + telefono;
//     // document.getElementById("contactos").innerHTML = contacto;
//     //  if (contacto) {
//     //      console.log (contacto)    
//     //     } else {
//     //         console.log("No hay contactos")
//     //     }
// var ul = document.getElementById("contactos");
//     var li = document.createElement("li");
//     var children = ul.children.length + 1
//     li.setAttribute("id", "element"+children)
//     li.appendChild(document.createTextNode(contacto));
//     ul.appendChild(li)

  
// };




// var fileId = 0; // used by the addFile() function to keep track of IDs
// function addFile(element) {
//     fileId++; // increment fileId to get a unique ID for the new element
//     var html = '<input type="file" name="uploaded_files[]" /> ' +
//                '<a href="" onclick="javascript:removeElement('file-' + fileId + ''); return false;">Remove</a>';
//     addElement('files', 'p', 'file-' + fileId, html);
// }

//


// onSubmit="window.location.reload();"

// function contactos(){

//     let inputNombres = document.getElementById("input1").value;
//     let inputNumeros = document.getElementById("input2").value;

//         let result = inputNombres + " " + inputNumeros;
//     document.getElementById("contactos").innerHTML = result;

//     if (contactos) {
//         document.createElement("contactos");
//     } else {
//         console.log ("no hay contactos");
//     }


// }


// var inputnames=[];
//   for (var i = 0; i < document.getElementsByTagName('input').length; i++)
//   {
//   inputnames.push(document.getElementsByTagName("input")[i].name);

//   };
//   alert(inputnames);











// let inputInfoArrayNames = [];
//     let  names = document.getElementById("input1");
    
//     for (var i = 0; i < names.length; i++) {
//      inputInfoArrayNames.push(names[i].name);
  

//            document.getElementById("contactos").innerHTML = inputInfoArrayNames;
       
// };
// console.log(inputInfoArrayNames);
 
// let inputInfoArrayNumbers = [];
//     let  numbers = document.getElementById("input2");  

//     for (var i = 0; i < numbers.length; i++) {
//         inputInfoArrayNumbers.push(numbers[i].numbers);

        
//         document.getElementById("contactos").innerHTML = inputInfoArrayNumbers;
//     };

//     console.log(inputInfoArrayNumbers);







// function vierwsArrayInput(){
//     var arrayInput = new Array();
//     var inputsValues = document.getElementsByClassName('input'),
//     namesValues = [].map.call(inputsValues,function(input){
//         arrayInput.push(input.value);
//     });
//     arrayInput.forEach(function(inputsValuesData){
//         console.log("EL DATO ES :"+ inputsValuesData);
//     });
//     document.getElementById("contactos").innerHTML = arrayInput;
// }

