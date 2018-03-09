const initialState = {
  numCode: [],
  id: 0,
  text: '',
  enterAccess: false
};

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_NUMBER') {
    if (state.numCode.length < 4) {
      let newNumCode = [...state.numCode];
      newNumCode.push(action.num);
      return {numCode: newNumCode}
    }
  }
  
  if (action.type === 'DELETE_NUMBER') {
    let deleteNum = [...state.numCode];
    deleteNum.pop();
    return {numCode: deleteNum}
  }
  
  if (action.type === 'VALID_NUMBER') {
    if (state.numCode.join('') === '1001') {
      let message = 'Access Granted';
      return {...state, text: message, enterAccess: true};
    }
    
    
  }
  
  return state;
};

export default reducer;