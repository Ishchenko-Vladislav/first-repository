import messageReducer from "./message-reducer";
import postsReducer from "./posts-reducer";

const store = {
  _state: {
    dialogs: {
      dialog: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "Lera" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Maks" },
        { id: 4, name: "Maks" },
        { id: 4, name: "Maks" },
      ],
      message: [{ message: "hello" }, { message: "my name Oleg" }],
      messageText: "Напишите сообщение",
    },

    posts: {
      post: [{ message: "hello" }, { message: "hi" }, { message: "nee" }],
      newPostText: "введи текст",
    },
  },
  _renderVirtualDOM() {},
  newRenderDOM(observe) {
    this._renderVirtualDOM = observe;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.posts = postsReducer(this._state.posts, action);
    this._state.dialogs = messageReducer(this._state.dialogs, action);
    this._renderVirtualDOM(this._state);

    /*
    if (action.type === addPost) {
      let newPost = {
        message: this._state.posts.newPostText,
      };
      this._state.posts.post.push(newPost);
      this._state.posts.newPostText = "";
      this._renderVirtualDOM(this._state);
    } else if (action.type === updatePostsText) {
      this._state.posts.newPostText = action.value;
      this._renderVirtualDOM(this._state);
    } else if (action.type === sendMessage) {
      let newMessage = {
        message: action.m,
      };
      this._state.dialogs.message.push(newMessage);
      this._state.dialogs.messageText = "";
      this._renderVirtualDOM(this._state);
    } else if (action.type === updateMessageText) {
      this._state.dialogs.messageText = action.m;

    }
		*/
  },
};

window.store = store;

export default store;
