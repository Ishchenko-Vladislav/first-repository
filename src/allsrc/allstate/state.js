import { renderVirtualDOM } from "../../render";

let state = {
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
  },

  posts: {
    post: [{ message: "hello" }, { message: "hi" }, { message: "nee" }],
    newPostText: "введи текст",
  },
};
window.state = state;

export const addPosts = () => {
  let newPost = {
    message: state.posts.newPostText,
  };
  state.posts.post.push(newPost);
  state.posts.newPostText = "";
  renderVirtualDOM(state);
};
export const sendMessage = (m) => {
  let newMessage = {
    message: m,
  };
  state.dialogs.message.push(newMessage);
  // state.posts.newPostText = "";
  renderVirtualDOM(state);
};

export const updatePostsText = (value) => {
  state.posts.newPostText = value;
  // let text = newPostsText;
  renderVirtualDOM(state);
};
export default state;
