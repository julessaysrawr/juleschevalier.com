import React from 'react'
import Link from './link'
import '../styles/main.scss'

const Nav = () => {
  return (
    <div>
      <Link hrefLocal="/">
        <header className="center space-above space-below">
          <h1 className="name-plate">Jules Chevalier</h1>
          <h3 className="tag-line">Progress not perfection</h3>
        </header>
      </Link>
      <div style={{ display: 'flex' }}>
        <nav className="nav">
          <ul>
            <li>
              <Link type={'navigation'} hrefLocal={'/blog'}>
                Blog
              </Link>
            </li>
            <li>
              <Link type={'navigation'} hrefLocal={'/photography'}>
                Photography
              </Link>
            </li>
            <li>
              <Link type={'navigation'} hrefLocal={'/about'}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav
