
var button = document.querySelector('.clicker');
button.addEventListener('click', changeTitle)

function changeTitle() {
    // chrome.tabs.executeScript {
    let text = document.querySelector('input').value
    let header = document.getElementsByTagName('title')
    console.log(text)
    console.log(header)
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


// let text = document.querySelector('input').value
// let header = document.getElementsByTagName('title')

