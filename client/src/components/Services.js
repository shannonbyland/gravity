import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

const Services = () => (
  <div>
    <Header as="h3">
      Our Services
    </Header>
    <p>
      Design and Planning
      A GPS, an important tool in trail design and inventory, sits on a map.Gravity Logic will undertake a thorough site analysis which will result in:

      Trail inventory and basic trail mapping
      Terrain inspection and feasibility assessment
      Construction/development costs and ROI
      Lift Requirements
      Operating Plan
      Staffing Plan
      Marketing Plan – including visit and revenue forecasts
      Five Year Financial Plan

      Development and Construction
      wooden bike trail feature design crank it up whistlerGravity Logic can oversee the construction of the facility as per the Design Plan. This will include:

      Project management plan
      Detailed Construction Budget
      Trail Design
      Trail Construction
      Maintenance Budget and Schedule
      Future Development Identification
    </p>
 </div>
)

export default connect(mapStateToProps)(Services);
