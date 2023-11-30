let container = document.createElement('div')
container.classList = 'container'
document.body.prepend(container)

let tagName = document.createElement('h1')
tagName.innerHTML = 'todo-list'
container.append(tagName)

let mainBlock = document.createElement('div')
mainBlock.classList = 'mainBlock'
container.append(mainBlock)

let div1 = document.createElement('div')
mainBlock.append(div1)

let textIn = document.createElement('input')
textIn.classList = 'textIn'
textIn.setAttribute('placeholder', 'gonna do...')
div1.append(textIn)

let dateBtn = document.createElement('input')
dateBtn.setAttribute('type' , 'date')
dateBtn.style.border = 'none';
dateBtn.style.outline = 'none';
div1.append(dateBtn)

let addBtn = document.createElement('button')
addBtn.id = 'addBtn'
addBtn.innerHTML = 'add'
div1.append(addBtn)

let list = document.createElement('ul')
mainBlock.append(list)  

