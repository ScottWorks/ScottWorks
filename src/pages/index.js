import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    const frontEndArray = [
      {
        iconClass: 'html',
        iconTitle: 'HTML5',
      },
      {
        iconClass: 'css3',
        iconTitle: 'CSS3',
      },
      {
        iconClass: 'javascript',
        iconTitle: 'Javascript',
      },
      {
        iconClass: 'react',
        iconTitle: 'React',
      },
      {
        iconClass: 'redux',
        iconTitle: 'Redux',
      },
      {
        iconClass: 'graphql',
        iconTitle: 'GraphQL',
      },
    ]

    const backEndArray = [
      {
        iconClass: 'nodejs',
        iconTitle: 'Node',
      },
      {
        iconClass: 'express',
        iconTitle: 'Express',
      },
      {
        iconClass: 'postgres',
        iconTitle: 'PostgreSQL',
      },
    ]

    const blockChainArray = [
      {
        iconClass: 'blockchain',
        iconTitle: 'Blockchain',
      },
      {
        iconClass: 'ethereum',
        iconTitle: 'Ethereum',
      },
      {
        iconClass: 'solidity',
        iconTitle: 'Solidity',
      },
    ]

    const otherTechArray = [
      {
        iconClass: 'jest',
        iconTitle: 'Jest',
      },
      {
        iconClass: 'ubuntu',
        iconTitle: 'Ubuntu',
      },
      {
        iconClass: 'git',
        iconTitle: 'git',
      },
    ]

    return (
      <div>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>
                Developer with a diverse engineering background motivated to
                build tomorrows blockchain/ web applications. Currently I have
                experience developing applications with JavaScript, Solidity,
                React/ Redux, Truffle, Node, Express, Firebase, Postgres (SQL),
                as well as other technologies.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://medium.com/@scottworks"
                    target="_blank"
                    className="button"
                  >
                    Writing
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ScottWxrks"
                    target="_blank"
                    className="button"
                  >
                    Thoughts
                  </a>
                </li>
                <li>
                  <a
                    href="../assets/Courtney_Scott_Resume.pdf"
                    target="_blank"
                    className="button"
                    download
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper container">
            <div className="col-12">
              <header className="minor">
                <h2>Technologies</h2>
              </header>
              <header className="minor">
                <h3>Frontend</h3>
              </header>
              <ListIcons iconArray={frontEndArray} />
              <header className="minor">
                <h3>Backend</h3>
              </header>
              <ListIcons iconArray={backEndArray} />
              <header className="minor">
                <h3>Blockchain</h3>
              </header>
              <ListIcons iconArray={blockChainArray} />
              <header className="minor">
                <h3>Other Technologies</h3>
              </header>
              <ListIcons iconArray={otherTechArray} />
            </div>
            {/* <div className="col-6">
              <header className="major">
                <h2>Full Stack</h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
              <p>
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
                varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat
                accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
                curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div> */}
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Past Projects</h2>
              </header>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Ipsum feugiat consequat?</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section> */}
      </div>
    )
  }
}

const ListIcons = ({ iconArray }) => {
  return (
    <ul className="major-icons">
      {iconArray.map((elem, idx) => {
        return (
          <li className="minor-icon" key={idx}>
            {/* <span className={`icon ${elem.iconClass}`} /> */}
            <img
              className={`icon ${elem.iconClass}`}
              src={`../assets/icons/${elem.iconClass}`}
              alt=""
            />
            <h4>{elem.iconTitle}</h4>
          </li>
        )
      })}
    </ul>
  )
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
