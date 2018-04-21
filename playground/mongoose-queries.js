const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
var { User } = require('./../server/models/user');
const { ObjectId } = require('mongodb');

var id = '5ad364ab82ff4b355c703643';

if (!ObjectId.isValid(id)) {
  console.log('ID not valid!');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
});

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
})