{
  // Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS = 10;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday";
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
  }
  console.log(Days.Tuesday);
  let day = Days.Wednesday;
  console.log(day);
  day = 10;

  enum Color {
    A = "red",
    B = "green",
    C = "blue",
  }
  console.log(Color.A);
  let choose = Color.C;
  console.log(choose);
}
