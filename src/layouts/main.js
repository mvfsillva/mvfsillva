import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

import theme from '../theme/main'
import GlobalStyles from '../theme/global-styles'
import FullContainer from '../styles/full-container'

import Footer from '../components/footer'

import lion from '../static/images/lion.png'

const Main = ({ title, children }) => (
  <PageTransition>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
              author
            }
          }
        }
      `}
      render={({ site }) => (
        <ThemeProvider theme={theme}>
          <FullContainer>
            <Helmet title={title || site.siteMetadata.title}>
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:image" content={lion} />
              <meta name="twitter:site" content={site.siteMetadata.author} />
              <meta name="twitter:creator" content={site.siteMetadata.author} />
              <meta name="twitter:title" content={title || site.siteMetadata.title} />
              <meta name="twitter:description" content={site.siteMetadata.description} />
              <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
                rel="stylesheet"
              />
            </Helmet>
            <GlobalStyles />
            {children}
            <Footer />
          </FullContainer>
        </ThemeProvider>
      )}
    />
  </PageTransition>
)

Main.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Main
