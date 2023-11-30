const addTodo = () => {
    // console.log('hello')
    let newTask = textIn.value
    //console.log(newTask)
    let date = dateBtn.value

    if (newTask != '') {
        todosArray.push({
            text: newTask,
            checked: false,
            date
        })

        localStorage.setItem('todos', JSON.stringify(todosArray))
        renderItem()
        textIn.value = ''
        dateBtn.value = ''
      
    }
}
const deleteTodo = (e) => {
    e.target.parentNode.remove(e.parentNode)
    let index = e.target.parentNode.getAttribute('key')
    todosArray.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todosArray))
}
const doneTodo = (e) => {
    let index = Number(e.target.parentNode.getAttribute('key')) //маанини айдиси бар
    let newTodo = [...todosArray]   
    let elem = newTodo[index].checked           //false
    newTodo[index].checked = !elem
    console.log(elem)
    localStorage.setItem('todos',JSON.stringify(newTodo))
  
    let isDone = e.target.parentNode.classList.contains('done')       //содержит ли

    isDone
        ? e.target.parentNode.classList.remove('done')
        : e.target.parentNode.classList.add('done')
}