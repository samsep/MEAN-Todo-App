
todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api/todos';
  var urlElecs = '/api/todosElecs'
  var _todoService = {};
 
  _todoService.getTodos = function() {
    console.log('inside todosFactory')
    return $http.get(urlBase);
  };

  _todoService.getTodosElecs = function() {
    console.log('inside todosElecs')
    return $http.get(urlElecs);
  };

  // _todoService.saveTodo = function(todo) {
  //   return $http.post(urlBase, todo);
  // };

  _todoService.updateTodo = function(todo) {
    return $http.put(urlBase, todo);
  };

  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _todoService;
});

