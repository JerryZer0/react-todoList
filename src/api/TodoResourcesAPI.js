import Todo from '../models/Todo';

const todosAPI = {
  todos: [],
  add(item) {
    this.todos.push(item);
  },
  filerByStatus(status) {
    //  console.log("status="+status)
    //  console.log("Todo.ALL="+Todo.ALL)
    if (status === Todo.ALL) {
      //console.log("API"+this.todos)
      return this.todos;
    }
    //console.log("API"+this.todos)
    return this.todos.filter(item => item.status === status);
  },
  toggleActive(viewId) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.toggleActive();
    }
  },
  updateItemContent(viewId, content) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.content = content;
    }
  }
};
export default todosAPI;
