const addPost = "ADD-POST";
const updatePostsText = "UPDATE-POSTS-TEXT";

let initialState = {
  posts: {
    post: [{ message: "hello" }, { message: "hi" }, { message: "nee" }],
    newPostText: "введи текст",
  },
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost:
      let newPost = {
        message: state.posts.newPostText,
      };
      state.posts.post.push(newPost);
      state.posts.newPostText = "";
      // this._renderVirtualDOM(this._state);
      return state;
    case updatePostsText:
      state.posts.newPostText = action.value;
      // this._renderVirtualDOM(this._state);
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: addPost });
export const updatePostsTextActionCreator = (text) => ({
  type: updatePostsText,
  value: text,
});

export default postsReducer;
