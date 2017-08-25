import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

const Home = ({ username }) => (
  <div>
    <Header as="h3">
      Our Mission:
    </Header>
      <p>
       Gravity Logic was created to utilize the expertise gained building the Whistler Mountain Bike Park
       – the World’s #1 Bike Park – to assist other businesses in the design, development, construction
       and operation of unparalleled park riding experiences by creating trails and facilities that thrill
       riders of a wide variety of ages, skill, and interests.
      </p>
    <Header as="h3">
      Why Gravity Logic?
    </Header>
      <p>
        Gravity Logic is known for having designed and built some of the planet’s most well known, most ridden,
        and time tested trails.   Beyond the dirt, however, we are a Bike Resort development company with proven
        operational experience and staff who have worked deep inside the the most successful bike resorts in the
        world.  A clear understanding of Rental, Retail, Programming and day-to-day Operations are just as
        important as the trails that support them.   Gravity Logic is the only truly experienced and qualified
        Bike Resort development company in the world.
      </p>
  </div>
)

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(Home);
