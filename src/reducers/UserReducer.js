
export const userReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return [
          ...state, 
          Object.assign({id: Date.now()}, action.user)
        ]
      case 'EDIT_USER':
        return state.map(user => user.id !== action.user.id ? user : action.user);
      default:
        return state;
    }
  } 