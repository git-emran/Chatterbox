import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },

    recieverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: True,
    },

    text: {
      type: String,
    },
    image: {
      String,
    },
  },
  { timestamps },
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
