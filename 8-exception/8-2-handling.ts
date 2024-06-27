class NetworkClinet {
  tryConnect(): void {
    throw new Error("no network!");
  }
}

class UserService {
  constructor(private client: NetworkClinet) {}

  login() {
    this.client.tryConnect();
  }
}

class App {
  constructor(private userService: UserService) {}

  run() {
    this.userService.login();
  }
}

const client = new NetworkClinet();
const service = new UserService(client);
const app = new App(service);
app.run();
