{
  // login function practice for Discriminated Type
  type SuccessState = {
    result: true;
    response: {
      body: string;
    };
  };
  type FailState = {
    result: false;
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login2(): LoginState {
    return {
      result: true,
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginState2(state: LoginState) {
    if (state.result) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }

  printLoginState2({
    result: true,
    response: {
      body: "logged in!",
    },
  });
}
