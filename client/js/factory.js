
todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api/todos';
  var _todoService = {};
 
  _todoService.getTodos = function() {
    console.log('inside todosFactory')
    return $http.get(urlBase);
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
  console.log(_todoService)
  return _todoService;
});
