const text = [
  `😀The querySelector() method returns the first element that matches a CSS selector. To return all matches (not only the first), use the querySelectorAll() instead. Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.`,
  `😁The getElementById() method returns an element with a specified value.The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.`,
  `😂The setAttribute() method sets a new value to an attribute. If the attribute does not exist, it is created first.`,
  `🤣The appendChild() method appends a node (element) as the last child of an element.`,
  `😃The addEventListener() method attaches an event handler to an element.`,
  `😃The removeEventListener() method removes an event handler from an element.`,
  `😄The innerText property sets or returns the text content of an element.`,
  `😅3The innerHTML property sets or returns the HTML content (inner HTML) of an element.`,
];

//pseudocode: inputa sayı girilip butona tıkladığımızda textarrayinden sıra ile o sayıda paragraf döndür.

const btn = document.querySelector(".btn");
const input = document.querySelector("#amount");
const result = document.querySelector(".lorem-text");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('click');
    let vl = input.value;
    if(vl < 0 || vl > text.length || isNaN(vl)){
        alert('Enter value between 1-8')
    }else{ 
        let temp = text.slice(0,vl);
        temp = temp
          .map((par) => {
            return `<p>${par}</p>`;
          }).join("");
        result.innerHTML =temp;

    }
});
window.onload = ()=>{
  input.focus();
}