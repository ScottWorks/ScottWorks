import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import nodelocator from '../assets/images/nodelocator.png'
import altheadash from '../assets/images/altheadash.png'
import testify from '../assets/images/testify.png'
import profile from '../assets/images/profilepic.jpg'
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
              <span id="profilePic" className="image fit">
                <img src={profile} alt="" />
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
                <img src={testify} alt="" />
              </span>
              <h3>Testi-fy</h3>
              <p>
                Testi-fy is a Test Management Solution designed to lower
                friction associated with engineering team collaboration as well
                as provide a centralized storage location for document and
                artifact storage.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://testi-fy.scottworks.io/#/"
                    target="_blank"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={nodelocator} alt="" />
              </span>
              <h3>Althea Node Locator</h3>
              <p>
                The Node Locator utilizes Google Maps API + Firebase Realtime
                Database to provide a visual representation of the approximate
                location of potential nodes in the althea network. This
                application can be integrated into a website or platform that
                requires the collection of user data that can be displayed on a
                map.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/ScottWorks/Althea-Node-Locator"
                    target="_blank"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={altheadash} alt="" />
              </span>
              <h3>Althea Dashboard</h3>
              <p>
                The Althea Dashboard is an application built on top of React
                that allows users to change settings on their router, view
                balances, and interact with other nodes in the network.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/althea-mesh/althea-dash"
                    target="_blank"
                    className="button"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
