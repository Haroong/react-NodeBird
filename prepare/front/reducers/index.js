import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

// 쪼개진 리듀서들을 합칠거라서 파일 불러옴
import user from './user';
import post from './post';

// (이전 상태, 액션) => 다음 상태
// initialState, action => return data
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state; // 이걸 빠뜨리면 Reducer 'user' returned undefiend error 발생
    }
  },
  user,
  post,
});

export default rootReducer;
