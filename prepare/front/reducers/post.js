export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'snape',
      },
      content: '첫 번째 게시글 #흐린날 #졸리다 #피자먹고싶다',
      Images: [
        {
          src: 'https://unsplash.com/photos/SU1LFoeEUkk',
        },
        {
          src: 'https://unsplash.com/photos/ljvm17bH-e0',
        },
        {
          src: 'https://unsplash.com/photos/jvWZYnxBDlQ',
        },
        {
          src: 'https://unsplash.com/photos/aXf3mG4zjlU',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'slime',
          },
          content: '파파존스 피자 ㅇㅈ',
        },
        {
          User: {
            nickname: 'black',
          },
          content: '먹으면 나도 한입만ㅋㅋ',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPostAction = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다',
  User: {
    id: 1,
    nickname: 'zero',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
