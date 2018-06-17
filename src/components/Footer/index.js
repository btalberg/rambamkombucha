import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'
import PropTypes from 'prop-types'
import SocialMediaIcons from "../SocialMediaIcons";

const AppFooter = ({ urls }) => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <SocialMediaIcons
              urls={ urls }
              color="currentColor"
            />
          </Column>
        </Columns>
        <p className='has-text-centered'>Nourish the soul through healthy diet <Icon hasTextColor="danger" className="fa fa-heart" /></p>
      </Content>
    </Container>
  </Footer>
);

export default AppFooter;

AppFooter.propTypes = {
  urls: PropTypes.object.isRequired
};
