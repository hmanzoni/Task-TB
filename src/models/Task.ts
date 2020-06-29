import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  state: {
    type: String,
    enum: ['inserito', 'in elaborazione', 'completato'],
    required: true,
    lowercase: true
  },
  icon: {
    type: String,
    enum: ['fas fa-plus-circle', 'fab fa-whmcs', 'fas fa-upload'],
    required: true,
    default:'fab fa-whmcs',
    lowercase: true
  },
  date: {
    type: Date,
    required: true
  },
  todayDateFormatted: {
    type: String,
    required: true
  }
});

export default model('Task', TaskSchema);