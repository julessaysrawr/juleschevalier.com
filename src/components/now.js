import React from "react";
import Emoji from '../components/emoji'
import '../styles/main.scss'

const Now = props => {
  return (
    <div>
      <h3 className="space-below">What I'm doing now</h3>
      <p>Contemplating what is essential and removing what isn't ♻️</p>
      <p>Redefining <Emoji symbol="🤔" label="" />  what success looks like in this phase of life <Emoji symbol="🦋" label="" /> </p>
      <p>Focusing on my health <Emoji symbol="💪" label="" /> , and prioritizing rest <Emoji symbol="🛌" label="" /> </p>
      <p>Enjoying more time outdoors <Emoji symbol="🏞" label="" />  and in the sun <Emoji symbol="🌅" label="" /> </p>
      <p>Spending my creative time doing <Emoji symbol="📷" label="" /> photography and <Emoji symbol="🖋" label="" /> writing</p>
      <p>Grateful to be a part of the team behind: <Emoji symbol="↣ ↣ ↣" label="" /> <a href="https://be-ingoodcompany.com/">In Good Company</a> <Emoji symbol="↢ ↢ ↢ " label="" /><Emoji symbol="📖📈💰" label="" /> </p>
      <p>Accepting that video games <Emoji symbol="🎮" label="" />  are an essential part of my self-care</p>
      <p className="space-above">Updated on: May 27, 2019</p>

      <p className="space-above-m">(thanks to <a href="https://sivers.org/">Derek Sivers</a> for this <a href="https://nownownow.com/about">idea</a>)</p>
    </div>
  );
};

export default Now;