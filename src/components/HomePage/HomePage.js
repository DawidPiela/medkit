import React, { Component } from 'react';

import Header from './Header/Header';
import BgPhoto from './BgPhoto/BgPhoto';
import About from './About/About';
import OurDoctors from './OurDoctors/OurDoctors';
import Footer from './Footer/Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header isAuth={this.props.isAuth} />
        <BgPhoto />
        <About />
        <OurDoctors />
        <Footer />
      </div>
    )
  }
}

export default HomePage;