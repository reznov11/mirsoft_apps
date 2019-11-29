import React from "react";

function Login() {
  return (
    <div class="box">
      <h1 class="uppercase">Авторизация</h1>
      <form>
        <div class="inputBox">
          <input
            type="email"
            name="email"
            required
            onkeyup="this.setAttribute('value', this.value);"
            value=""
          />
          <label>Логин</label>
        </div>
        <div class="inputBox">
          <input
            type="password"
            name="password"
            required
            value=""
            onkeyup="this.setAttribute('value', this.value);"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
          <label>Пароль</label>
        </div>
        <input type="submit" name="sign-in" value="ВОЙТИ" />
      </form>
    </div>
  );
}

export default Login;
