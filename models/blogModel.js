const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogSchema = new Schema({
  id: ObjectId,
  created_at: Date,
  state: { type: Number, default: 1 },
  title: {type:String, required:true, unique:true},
  description: {type:String},
  author: {type:String},
  read_count: {type:Number},
  read_time: {type:Date},
  tags: {type:String},
  body: {type:String, required:true},
  timeStamp: {type:Date},
    
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
