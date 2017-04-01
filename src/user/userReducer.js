const initialState = {
  data: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        ...state,
        data: action.payload
      }
    case 'USER_LOGGED_OUT': 
      return {
        ...state,
        data: null,
      }
  }

  return state
}

export default userReducer
