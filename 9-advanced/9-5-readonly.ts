{
  type ToDo = {
    title: string;
    descript: string;
  };

  function display(todo: Readonly<ToDo>) {
    todo.title = "ajaj";
  }
}
