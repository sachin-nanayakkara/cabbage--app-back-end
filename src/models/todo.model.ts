import mongoose, { Schema, model } from 'mongoose';

export interface Todo extends mongoose.Document {
  title: string;
  createDate: string;
  activeStatus: boolean;
};

const TodoSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    createDate: {
      type: Schema.Types.String,
      required: true,
    },
    activeStatus: {
      type: Schema.Types.Boolean,
      required: true,
    },
  },
  {
    collection: 'Todo',
    timestamps: true,
  },
);

// TodoSchema.methods = {
//   toJSON() {
//       return {
//           id: this._id,
//       }
//   }
// }

export default model<Todo>('Todo', TodoSchema);