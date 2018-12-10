import React, { Component } from 'react';

import SideNav from './SideNav/SideNav';
import TopNav from './TopNav/TopNav';
import photo from '../../assets/images/doctor_4.jpg';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <TopNav fullName='John Doe' userPhoto={photo} />
      </div>
    );
  }
}

export default Dashboard;
