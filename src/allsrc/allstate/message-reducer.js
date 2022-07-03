const sendMessage = "SEND-MESSAGE";
const updateMessageText = "UPDATE-MESSAGE-TEXT";

let initialState = {
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
};
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case sendMessage:
      let newMessage = {
        message: action.m,
      };
      state.dialogs.message.push(newMessage);
      state.dialogs.messageText = "";
      return state;
    // this._renderVirtualDOM(this._state);
    case updateMessageText:
      state.dialogs.messageText = action.m;
      // this._renderVirtualDOM(this._state);
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = (text) => ({
  type: sendMessage,
  m: text,
});
export const updateMessageTextActionCreator = (text) => ({
  type: updateMessageText,
  m: text,
});

export default messageReducer;
