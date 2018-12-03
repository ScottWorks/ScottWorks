import React from 'react'
import Particles from 'react-particles-js'
import particlesDesktop from '../assets/particlesjs-desktop.json'
import particlesMobile from '../assets/particlesjs-mobile.json'

class Footer extends React.Component {
  render() {
    var particlesStyle = {
      position: 'absolute',
      top: '0px',
      left: '0px',
      height: '100%',
      width: '100%',
    }
    return (
      <section id="footer">
        <div className="desktop">
          <Particles params={particlesDesktop} style={particlesStyle} />
        </div>

        <div className="mobile">
          <Particles params={particlesMobile} style={particlesStyle} />
        </div>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/ScottWxrks"
              target="_blank"
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@scottworks"
              target="_blank"
              className="icon alt fa-medium"
            >
              <span className="label">Medium</span>
            </a>
          </li>
          <li>
            <a
              href="http://github.com/ScottWorks"
              target="_blank"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/scottworksio/"
              target="_blank"
              className="icon alt fa-linkedin"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:scottwork.io@gmail.com"
              target="_blank"
              className="icon alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; 2018 ScottWorks Inc. All Rights Reserved.</li>
          <li>
            Template By: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Footer
