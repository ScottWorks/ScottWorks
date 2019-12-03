import React from 'react'
import Particles from 'react-particles-js'
import particlesDesktop from '../assets/particlesjs-desktop.json'
import particlesMobile from '../assets/particlesjs-mobile.json'

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
				<div className="desktop">
					<Particles params={particlesDesktop} style={particlesStyle} />
				</div>

				<div className="mobile">
					<Particles params={particlesMobile} style={particlesStyle} />
				</div>

				<div className="inner">
					<h1>ScottWorks Consulting</h1>
					<h3>
						Software Engineering | Web & Mobile Applications
          </h3>

					<div style={{ 'margin-top': '32px' }}>
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
									href="mailto:cescott@scottwork.io"
									target="_blank"
									className="icon alt fa-envelope"
								>
									<span className="label">Email</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default Header
