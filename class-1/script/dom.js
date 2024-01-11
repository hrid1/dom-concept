// //---------------by tag name-------------------

// const taglist = document.getElementsByTagName('h1');
// for (const tag of taglist) {
//     console.log(tag);
//     tag.style.color = 'red';
 
// }

// //---------------by class name-------------------

// const classlist = document.getElementsByClassName('test');
// console.log(classlist);

// for (let item of classlist){
//    // console.log(item.innerText);
//    item.style.color = 'blue';
// }

// // ------------------by id name----------------------

// const idItem = document.getElementById('first-section');
// console.log(idItem.innerText);
// idItem.style.backgroundColor = 'yellow'

// const idHead = document.getElementById('heading');
// idHead.style.color = 'blue';
   
// document.getElementById('heading').style.color = 'hotpink'  //another way

// // ------------------by id query----------------------

// const myElement = document.querySelectorAll('.test');
// for (const item of myElement){
//     item.style.color = 'green';
// }
// console.log(myElement);

// const myElement2 = document.querySelector('#heading');
// myElement2.style.color = 'red';
// console.log(myElement2);

// // ------------------ To Add class ---------------------

// const myElement = document.getElementById('heading-2');
// console.log(myElement.textContent);
// myElement.className = 'myclass';

// //another way
// myElement.classList.add('hello');
// myElement.classList.remove('myclass');


// //-------------------Create a new element & Add -----------------

// const parentContainer = document.getElementById('mylist');

// const myLi = document.createElement("li");
// myLi.innerText = "four";

// parentContainer.appendChild(myLi);

// // another one

// const parentContainer2 = document.getElementById('first-section');

// const myPara = document.createElement("p");
// myPara.innerText = 'This is a paragraph, Here we are talking about DOM';
// const title = document.createElement("h2");
// title.innerText = "About DOM";

// const newDiv = document.createElement("div");
// newDiv.appendChild(title)
// newDiv.appendChild(myPara)

// parentContainer2.appendChild(newDiv);

//--------------------Set Attribute----And----Get Attribute---------------

// document.getElementById('att-container').setAttribute('class', 'myclass');
// document.getElementById('att-container').setAttribute('value', 'myvalue')

// const  myAttribute = document.getElementById("att-container").getAttribute('class');
// console.log(myAttribute);


// -----------------------innter text vs. inner html------------------
