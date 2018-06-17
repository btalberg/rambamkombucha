import React from 'react'
import PropTypes from 'prop-types'
import {
  Columns,
  Column,
  Container,
  Section,
  Title } from 'bloomer'
import ContactForm from '../components/ContactForm'

const IndexPage = () => (
  <div>
    <Section id="about">
      <Container>
        <Columns isCentered>
          <Column isSize={{desktop:"3/4"}}>
            <div>
              <Title>Rämbäm (/rähm bähm/)</Title>
              <p>
                Inspired and named after Maimonides (<span className='underline'>R</span>abbi <span className='underline'>M</span>oses <span className='underline'>b</span>en <span className='underline'>M</span>aimon), a medieval Sephardic Jewish philosopher. Kombucha promotes healthy digestion through a variety of probiotics. Known as “The Tea of Immortality” in Japan, Russia, and Eastern Europe, dating back to the Chinese Tsin Dynasty of the 3rd century BCE, RÄMBÄM nourishes the soul through healthy diet.
              </p>
              <br/>
              <p>
                RÄMBÄM is locally brewed in the Twin Cities.
              </p>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section id="contact">
      <Container>
        <Columns isCentered>
          <Column isSize={{desktop:"3/4"}}>
            <Title>Contact Us</Title>
            <div className="columns is-mobile is-centered has-text-justified">
              <div
                className="column is-half-desktop is-half-widescreen is-half-fullhd">
                <ContactForm />
              </div>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage
