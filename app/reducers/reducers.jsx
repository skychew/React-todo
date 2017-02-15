export var searchTextReducer = (state='',action) => {
  //action.something = 2; this will be detected by deepfreeze as pure functions should not edit this.
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };

};

export var showCompletedReducer = (state=false,action) =>{
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};
