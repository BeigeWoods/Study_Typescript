{
  // Type Assertions 💩
  // 타입을 장담할 때 사용한다.
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱

  const numbers2 = findNumbers()!;
  numbers2.push(2); // 😱

  const button = document.querySelector("class");
  if (button) {
    button.nodeValue;
  }
}
