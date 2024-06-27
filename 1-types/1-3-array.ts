{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple
  // interface, type alias, class로 대체해서 사용하는 것이 좋다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
