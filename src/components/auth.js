import store from "store";

class Auth {
  login() {
    store.set("userLoggedIn", true);
    console.log("Вы успешно авторизовались");
  }

  logout() {
    store.remove("userLoggedIn");
  }

  isAthenticated() {
    return true ? store.get("userLoggedIn") : false;
  }
}

export default new Auth();
