// let title = document.getElementsByTagName('title')
// let value
// title.innerText = value

    
//     var el = document.getElementsByTagName('html');
//     var button = document.createElement("button");
//     // button.innerHTML = "rename"
//     el.appendChild(button);
//     // document.createElement('button').appendChild( document'''''''.title );

var button = document.querySelector('.clicker');
button.addEventListener('click', changeTitle)

function changeTitle() {
    let text = document.querySelector('input').value
    let header = document.getElementsByTagName('title')
    // console.log(header)
    // console.log(header[0])
    // alert(header[0])
    // alert(header)
    // header[0].innerHTML = `${text}`;
    header[0].innerText = text

    // document.getElementsByTagName('title') =  header[0].innerHTML = `${text}`

//    if (text) header = text;
}
let header = document.getElementsByTagName('title')
console.log(header)
