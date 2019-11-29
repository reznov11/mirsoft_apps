import React from "react";
import HeaderLayout from "./header";

class CabinetLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pageContent">
        <main>
          <header>
            <h1>Кабинет</h1>
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

              <p>
                When you get lost in your imaginatory vagueness, your foresight
                will become a nimble vagrant. It's OK to get Rib-grease on your
                face, because you're allowing people to see that you're proud of
                these ribs. Go with the feeling of the nature. Take it easy.
                Know why you're here. And remember to balance your internal
                energy with the environment.
              </p>

              <p>
                It's OK to get Rib-grease on your face, because you're allowing
                people to see that you're proud of these ribs. You gotta go
                through it to see there ain't nothing to it. The magic Indian is
                a mysterious spiritual force, and we're going to Cathedral Rock,
                and that's the vortex of the heart. These kind of things only
                happen for the first time once. I would like to give you a
                backstage pass to my imagination. When you get lost in your
                imaginatory vagueness, your foresight will become a nimble
                vagrant. It's OK to get Rib-grease on your face, because you're
                allowing people to see that you're proud of these ribs.
              </p>
            </div>
          </section>
        </main>
        <HeaderLayout />
      </div>
    );
  }
}

export default CabinetLayout;
