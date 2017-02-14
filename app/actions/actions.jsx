export var setSearchText = (searchText)=>{
  return{
    type:'SET_SEARCH_TEXT',
    searchText
  };
};
// text:text can be replaced with just text
export var toggleShowCompleted = () => {
  return{
    type:'TOGGLE_SHOW_COMPLETED',
  };
};

export var addTodo = (text) => {
  return{
    type:'ADD_TODO',
    text
  }
}

export var toggleTodo = (id) => {
  return{
    type: 'TOGGLE_TODO',
    id
  };
};
