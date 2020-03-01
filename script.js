//initialize the app
init()

function init() {
  //Submit a task and add it to the To Do list of tasks
  $('input').keypress(function (event) {
    if (event.which === 13) {
      addItem()
    }
  })

  $('button').click(addItem)

  $('ul').on('click','span',function(event){
    event.stopPropagation()
    $(this).parent().fadeOut(500,function(){
      $(this).remove()
    })
  })

  //clicking the items will mark them as 'done' and 
  // move them to 'done' list
  $('#todo').on('click', 'li', function () {
    // move to 'done' list. Style will be applied accordingly
    // capture the clicked item
    let item = $(this)
    console.log(item)
    // add clicked item to 'done' list
    let list = $('#finished')
    let newItem = '<li>' + item.html() + '</li>'
    list.html(list.html() + newItem)
    // remove clicked item from 'to do' list 
    item.remove()
  })

  
}

function addItem() {
  let input = $('input')
  //getting ul object
  const list = $('#todo')
  //creating a new item
  let newItem = '<li><span><i class="fas fa-trash-alt"></i></span>' + input.val() + '</li>'
  //concatting the new item to the list
  list.html(list.html() + newItem)
  //reset the input
  input.val('')
}







