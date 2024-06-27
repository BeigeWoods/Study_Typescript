{
  function checkNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid value!");
    }
    return arg;
  }
  const result = checkNull(123);
  console.log(result);
  checkNull(null);
}
