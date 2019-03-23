import React from "react"
import { Link } from "gatsby";
import '../styles/main.scss'
import Emoji from '../components/emoji'


export default () => 
<div>
  <main>
    <div className="flex-container space-below-m">
      <h1>Whoops something went wrong <Emoji symbol="😬" label=""/></h1>
      
    </div>
    <div className="flex-container space-above-m">
      <Link to='/' className="show-link">Go back</Link>
    </div>
  </main>
</div>
