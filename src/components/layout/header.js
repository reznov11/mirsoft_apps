import React from "react";
import auth from "../auth";
import { Link } from "react-router-dom";

class HeaderLayout extends React.Component {
  constructor(props) {
    super(props);
    this.onLogOut = this.onLogOut.bind(this);
  }

  onLogOut(e) {
    auth.logout();
  }

  render() {
    return (
      <div className="headerContent">
        <input type="checkbox" id="menu" />

        <label htmlFor="menu" className="menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/cabinet">Кабинет</Link>
            </li>
            <li>
              <Link to="/test1">Тест 1</Link>
            </li>
            <li>
              <a href="#" onClick={this.onLogOut}>
                Выйти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderLayout;
