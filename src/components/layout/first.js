import React from "react";
import HeaderLayout from "./header";
import ApiData from "../../env/users.js";

class FirstLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ApiData
    };
  }

  render() {
    return (
      <div className="pageContent">
        <main>
          <header>
            <h1>Тест 1</h1>
          </header>
          <section>
            <div className="container">
              <p>
                Busey ipsum dolor sit amet. You ever roasted doughnuts?I
                wrestled a bear once. A 750lbs black bear.The best way to
                communicate is compatible. Compatible communication is listening
                with open ears and an open mind, and not being fearful or
                judgemental about what you're hearing. It's OK to get Rib-grease
                on your face, because you're allowing people to see that you're
                proud of these ribs. Have you urinated? Have you drained your
                bladder? Are you free? Because if you haven't it will only come
                out later. I'm giving you some information that your bodily
                fluids may penetrate your clothing fibre's without warning. Did
                you feel that? Look at me - I'm not out of breath anymore!
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Адрес</th>
                    <th>Страна</th>
                    <th>Код страны</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.slice(0, 30 + 1).map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>{user.city}</td>
                      <td>{user.zip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
        <HeaderLayout />
      </div>
    );
  }
}

export default FirstLayout;
