import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import shortid from 'shortid'

import { Paragraph, Header, Footer } from '../components'

import contacts from '../helpers/contacts'
import intl from '../helpers/intl'

import mvfsillva from '../static/images/mvfsillva-usa.jpg'

const Hero = styled.div`
  width: 100%;
  height: 60vh;
  background: ${theme('palette.black')};
  overflow: hidden;

  :before {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 60vh;
    opacity: 0.5;
    background-image: url(${mvfsillva});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
const Title = styled.h1`
  ${theme('typography.title')};
  margin-top: ${theme('spacing.xxxLarge')};
  text-align: left;
`

const List = styled.ul`
  margin: ${theme('spacing.large')};
  li {
    font-weight: 300;
  }
`

const Bold = styled.span`
  font-weight: 400;
  margin-top: ${theme('spacing.large')};
`

const About = ({ lang, setLanguage }) => (
  <>
    <Header navigation={intl.general[lang].navigation} setLanguage={setLanguage} back  />
    <Hero />
    <main>
      <Title>{intl.general[lang].intro}</Title>
      {intl.about[lang].description.map(p => (
        <Paragraph key={shortid.generate()}>{p}</Paragraph>
      ))}

      <Bold>{intl.about[lang].beyond.title}</Bold>
      <List>
        {intl.about[lang].beyond.list.map(l => (
          <li key={shortid.generate()}>{l}</li>
        ))}
      </List>

      <Bold>{intl.about[lang].contacts}:</Bold>
      <Paragraph>
        <Footer contacts={contacts} />
      </Paragraph>
    </main>
  </>
)

About.propTypes = {
  lang: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default About
