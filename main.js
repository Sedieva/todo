// let textIn = document.querySelector('.textIn')
// let addBtn = document.getElementById('addBtn')
// let list = document.querySelector('ul')

let todosArray = localStorage.getItem('todos') == null
? []
: [...JSON.parse(localStorage.getItem('todos'))]


addBtn.addEventListener('click', addTodo)
const createltem = (todo,id) =>{
   let items = `
   <li key="${id}" class="${todo.checked ? 'taskItem done' : 'taskItem'}">
   ${todo.text} ${todo.date ? todo.date : ''}
   <img class="btn" src="img.jpg/yesr.png" onClick="doneTodo(event)"/>
   <img class="btn" src="img.jpg/del.png" onClick="deleteTodo(event)"/>
   `
   return items 
}
const renderItem = () => {              //renderitem да беккенттен келген данныйлар бар
    list.innerHTML = ''
    let items =[]
    todosArray.length ?
todosArray.map((todo, id) => {
        items.unshift(createltem(todo,id))
        list.innerHTML = items.join('')
    })
    :list.prepend(' no tasks')
    // todosArray.map((todo,id) => {
    //     let li = document.createElement('li')
    //     li.className = 'taskItem'
    //     li.id = id

    //     let addbtn = document.createElement('img')
    //     addbtn.src = 'img.jpg/yesr.png'
    //     addbtn.className = 'btn'
    //     addbtn.addEventListener('click', doneTodo)

    //     let deleteBtn = document.createElement('img')
    //     deleteBtn.src = 'img.jpg/del.png'
    //     deleteBtn.className = 'btn'
    //     deleteBtn.addEventListener('click', deleteTodo)

    //     li.append(todo.text)
    //     li.append(addbtn)
    //     li.append(deleteBtn)
    //     list.prepend(li)
    // })
}
renderItem()
