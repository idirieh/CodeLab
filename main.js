// const btn = document.getElementById('btn')

// btn.addEventListener('click', function(){
//     const userInput = document.getElementById('txt')
//     console.log(userInput.value)
// })

const title = document.getElementById('main-heading')

// console.log(title.getAttribute('id'))


const ul = document.querySelector('ul')
// console.log(ul)

const li = document.createElement('li')
li.innerText = "X-man"
li.classList.add('list-item')

const a = document.createElement('a')
a.setAttribute('href', 'http://www.google.com')
a.setAttribute('target', '_blank')

li.append(a)
ul.append(li)
// console.log(title.getAttribute('id'))


// selecting star wars and remove it
const liAll = document.querySelectorAll('li')[1]
// console.log(liAll)
liAll.remove()


// parent nodes traversal

// console.log(ul.parentElement)
// console.log(ul.parentNode)
// console.log(ul.parentElement.parentElement)
// console.log(ul.parentNode.parentNode)

// child nodes traversal

// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

// sipling node traversal

// const div = document.querySelector('.title')
// console.log(div.childNodes)

console.log(ul.previousSibling)
console.log(ul.nextSibling)

console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)


