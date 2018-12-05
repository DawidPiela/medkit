import React, { Component } from 'react';

import BgPhoto from './BgPhoto/BgPhoto';
import About from './About/About';
import OurDoctors from './OurDoctors/OurDoctors';
import Footer from './Footer/Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <BgPhoto />
        <About />
        <OurDoctors />
        <Footer />
      </div>
    )
  }
}

export default HomePage;