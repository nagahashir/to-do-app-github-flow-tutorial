// This is a simple Todo List application using jQuery
$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});

