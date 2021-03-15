// initialState
export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// action creator - 사용자의 입력에 따라 동적으로 생성
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
