import React from "react";
import auth from "../auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_user: "",
      login_password: "",
      errors: []
    };

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  //Add New Error Object to the array {elm: msg}
  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [
        ...prevState.errors,
        {
          elm,
          msg
        }
      ]
    }));
  }

  //Remove a specific element from the array
  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  // Detect any change of user login input
  onLoginChange(e) {
    this.setState({ login_user: e.target.value });
    this.clearValidationErr("login_user");
  }

  // Detect any change of user password input
  onPasswordChange(e) {
    this.setState({ login_password: e.target.value });
    this.clearValidationErr("login_password");
  }

  //Check for all input fields and show errors if empty (you can implement other cases!)
  submitLogin(e) {
    e.preventDefault();

    const { login_user, login_password } = this.state;

    if (this.state.login_user === "") {
      this.showValidationErr("login_user", "Введите логин!");
    }

    if (this.state.login_password === "") {
      this.showValidationErr("login_password", "Введите пароль!");
    }

    if (
      !(login_user === "mirsoft" && login_password === "mywordismypassword")
    ) {
      return this.showValidationErr(
        "data_error",
        "Неправильный логин или пароль!"
      );
    }

    // Login user
    auth.login();

    // Redirect to cabinet
    this.props.history.push("/cabinet");
  }

  render() {
    // Check if user is already logged in
    if (auth.isAthenticated()) {
      this.props.history.push("/cabinet");
    }

    // Errors types
    let loginError = null,
      passwordError = null,
      dataError = null;

    //Loop and find which ones has the error
    for (let err of this.state.errors) {
      //Assign the validation error message
      if (err.elm === "login_user") {
        loginError = err.msg;
      } else if (err.elm === "login_password") {
        passwordError = err.msg;
      } else {
        dataError = err.msg;
      }
    }

    return (
      <div className="box">
        <h1 className="uppercase">Авторизация</h1>
        <form onSubmit={this.submitLogin} noValidate>
          <p className="danger-error">{loginError ? loginError : ""}</p>
          <div className="inputBox">
            <input
              type="text"
              onChange={this.onLoginChange}
              className="loginUser"
              value={this.state.value}
              name="login_user"
              required
            />
            <label>Логин</label>
          </div>
          <p className="danger-error">{passwordError ? passwordError : ""}</p>
          <div className="inputBox">
            <input
              type="password"
              name="login_password"
              required
              value={this.state.hidden}
              onChange={this.onPasswordChange}
              className="loginPassword"
            />
            <label>Пароль</label>
          </div>
          <p className="danger-error">{dataError ? dataError : ""}</p>
          <input type="submit" name="sign-in" value="ВОЙТИ" />
        </form>
      </div>
    );
  }
}

export default Login;
