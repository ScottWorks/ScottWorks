import React from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../assets/particlesjs-config.json'

class Header extends React.Component {
  render() {
    var styles = {
      position: 'absolute',
      top: '0px',
      left: '0px',
      height: '100%',
      width: '100%',
    }
    return (
      <section id="header">
        <Particles params={particlesConfig} style={styles} />
        <div className="inner">
          <span className="icon major fa-cloud" />
          <h1>
            Hi, I'm <strong>Photon</strong>, another fine<br />
            little freebie from <a href="http://html5up.net">HTML5 UP</a>.
          </h1>
          <p>
            Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
            lobortis feugiat sapien sed etiam volutpat accumsan.
          </p>
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
