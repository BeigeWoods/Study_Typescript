{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const toDo: ToDo = {
    title: "abc",
    description: "hello",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(toDo, { priority: "low" });
  console.log(updated);
}
