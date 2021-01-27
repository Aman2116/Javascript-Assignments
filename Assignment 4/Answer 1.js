/* The easiest way to access a single element in the DOM is by its 
unique ID. We can grab an element by ID with the getElementById() 
method of the document object. For example*/
var ele = document.getElementById('demo');
console.log(ele);
/* We can be sure we’re accessing the correct element by 
changing the border property to purple. */
ele.style.border = '1px solid purple';
/* The class attribute is used to access one or more
specific elements in the DOM. We can get all the elements
with a given class name with the getElementsByClassName() method. */
var demoClass = document.getElementsByClassName('demo');
console.log(demoClass);
/* Generally when accessing elements by class, we want to apply 
a change to all the elements in the document with that particular
class, not just one. We can do this by creating a for loop, and 
looping through every item in the array. */
for (var i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '1px solid orange';
  }
/* A less specific way to access multiple elements on the page 
would be by its HTML tag name. We access an element by tag with the
getElementsByTagName() method. */  
var demoTag = document.getElementsByTagName('article');
console.log(demoTag)
/* Just like accessing an element by its class, 
getElementsByTagName() will return an array-like object of elements, 
and we can modify every tag in the document with a for loop. */
for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = '1px solid blue';
  }
/* To access a single element, we will use the querySelector()
method. In our HTML file, we have a demo-query element 
The selector for an id attribute is the hash symbol (#). 
We can assign the element with the demo-query id to the demoQuery variable.*/
var demoQuery = document.querySelector('#demo-query');
console.log(demoQuery);
/* In the case of a selector with multiple elements, such as a 
class or a tag, querySelector() will return the first element
that matches the query. We can use the querySelectorAll() 
method to collect all the elements that match a specific query. */
var demoQueryAll = document.querySelectorAll('.demo-query-all');
console.log(demoQueryAll);
/* Using the forEach() method, we can apply the color green to 
the border property of all matching elements. */
demoQueryAll.forEach(query => {
    query.style.border = '1px solid green';
  });
  
