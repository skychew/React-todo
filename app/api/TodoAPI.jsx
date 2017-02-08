var $ = require('jquery');
module.exports = {
  setTodos: function (todos){
    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));//local storage cannot store array or object
      return todos;
    }
  },
  getTodos: function (){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    } catch (e){

    }

    return $.isArray(todos) ? todos : [];
    /* similar to the single line return above
    if($.isArray(todos)){
      return todos;
    }else{
      return [];
    }
    */
  }
};
