function TeacherCtrl($scope) {
 
  $scope.needs = [
    {name:'Pizza Party', need: 'Soda and Chips', date: '05/05/14-05/22/14', description: 'This is a party to reward the good work of students in the Math class', vname: 'Mr. Gonzo', vimg: 'images/gonzo.png'},
    {name:'Independence Day', need: 'Patriotic Hats', date: '07/04/14', description: 'This is a party to celebrate the independence of USA', vname: 'Miss Piggy', vimg: 'images/piggy.png'}
  ];

  // $scope.addNeed = function() {
  //   $scope.todos.push({text:$scope.todoText, done:false});
  //   $scope.todoText = '';
  // };
 
  // $scope.remaining = function() {
  //   var count = 0;
  //   angular.forEach($scope.todos, function(todo) {
  //     count += todo.done ? 0 : 1;
  //   });
  //   return count;
  // };
 
  // $scope.archive = function() {
  //   var oldTodos = $scope.todos;
  //   $scope.todos = [];
  //   angular.forEach(oldTodos, function(todo) {
  //     if (!todo.done) $scope.todos.push(todo);
  //   });
  // };
}

