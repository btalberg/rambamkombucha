import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import '../styles/all.sass'
import herologo from "../images/rambam-hero-logo-white.png";

import {
  Button,
  Container,
  Hero,
  HeroHeader,
  HeroBody,
  Title,
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet title={ data.site.siteMetadata.title } />
    <Hero isFullHeight isColor="dark">
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>
        <Container hasTextAlign="centered">
          <img src={herologo} alt="Logo" />
          <Title isSize="5">
            The well-being of the soul rests in the well-being of the body
          </Title>
          <span>
            <Button className='nav' isLink={true} isColor="primary" href='#about'>About</Button>
            <Button className='nav' isLink={true} isColor="white" href='#contact'>Contact Us</Button>
          </span>
        </Container>
      </HeroBody>
    </Hero>

    <div>{ children() }</div>

    <AppFooter
      urls={ data.site.siteMetadata.siteSocialUrls }/>
  </div>
);

TemplateWrapper.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.func
};

export default TemplateWrapper

export const query = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
        siteSocialUrls
      }
    }
  }
`;
