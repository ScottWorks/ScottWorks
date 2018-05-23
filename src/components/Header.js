import React from 'react'
import Particles from 'react-particles-js'
import particlesConfigHeader from '../assets/particlesjs-config-header.json'

class Header extends React.Component {
  render() {
    var particlesStyle = {
      position: 'absolute',
      top: '0px',
      left: '0px',
      height: '100%',
      width: '100%',
    }
    return (
      <section id="header">
        <Particles params={particlesConfigHeader} style={particlesStyle} />
        <div className="inner">
          <h1>
            <strong>Scott</strong>Works
          </h1>
          <h3>Blockchain & Web Developer | Cyclist | Hiker</h3>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
