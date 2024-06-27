{
  // JavaScript
  // Primitive Type: number, string, boolean, bigint, symbol, null, undefined
  // Object Type: function, array, object...
  
  // number
  const num: number = 2;

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = true;

  // undefined
  // 이 타입을 단독으로 변수에 할당하지 않는다. 할당한다면 다음과 같을 것이다.
  let shit1: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  // 이 또한 단독으로 변수에 할당하지 않는다.
  let shit2: null; // 💩
  let name: string | null;
  name = 'hello';
  name = null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  // 함수에서 아무 값도 리턴하지 않을 때 사용한다.
  // 이는 생략 가능하다.
  function print(): void {
    console.log('hello')
    return;
  }
  
  // never
  function throwError(message: string): never {
    throw new Error(message);
  }

  function neverEnd(message: string): never {
    while(true){
      // ...
    }
  }

  // object 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie'});
  acceptSomeObject([1, 2, 3])
}