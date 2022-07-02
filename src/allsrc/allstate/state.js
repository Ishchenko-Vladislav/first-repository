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
  getState() {
    return this._state;
  },
  _renderVirtualDOM() {},
  newRenderDOM(observe) {
    this._renderVirtualDOM = observe;
  },
  addPosts() {
    let newPost = {
      message: this._state.posts.newPostText,
    };
    this._state.posts.post.push(newPost);
    this._state.posts.newPostText = "";
    this._renderVirtualDOM(this._state);
  },
  updatePostsText(value) {
    this._state.posts.newPostText = value;
    // let text = newPostsText;
    this._renderVirtualDOM(this._state);
  },
  sendMessage(m) {
    let newMessage = {
      message: m,
    };
    this._state.dialogs.message.push(newMessage);
    this._state.dialogs.messageText = "";

    // state.posts.newPostText = "";
    this._renderVirtualDOM(this._state);
  },
  sendMessageText(m) {
    this._state.dialogs.messageText = m;
    // state.posts.newPostText = "";
    this._renderVirtualDOM(this._state);
  },
};

window.store = store;

export default store;
