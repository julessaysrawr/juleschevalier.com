import React from "react";
import Emoji from '../components/emoji'
import '../styles/main.scss'

const Now = props => {
  return (
    <div>
      <h3 className="space-below">What I'm doing now</h3>
      <p>Letting go and finding I am happier with less</p>
      <p>Trying to live in the present moment</p>
      <p>Focusing on creating: <Emoji symbol="🖋" label="" /> writing and <Emoji symbol="📷" label="" /> photography</p>
      <p>Playing Elder Scrolls Online on XBox, in my ugly recliner <Emoji symbol="🎮" label="" /></p>
      <p>Learning that doing nothing is a productivity technique</p>
      <p>Eating whole foods <Emoji symbol="🥗🥒🍅🥕🍠" label="" />  Keto-ish <Emoji symbol="🍖🍳🥓" label="" /></p>
      <p>Employed in software engineering </p>
      <p className="space-above">Updated on: May 25, 2018</p>
    </div>
  );
};

export default Now;