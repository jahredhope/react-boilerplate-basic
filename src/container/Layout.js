import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Header from 'component/Header';
import NavMenu from 'component/NavMenu'
import Footer from 'component/Footer';

class Layout extends Component {
  render() {
    const {routes} = this.props;
    return (
      <div>
        <Header routes={routes} />
        <NavMenu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default connect()(Layout);
