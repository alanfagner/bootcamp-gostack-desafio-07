import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from '../../services/navigation';
import {
  Container,
  Text,
  Logo,
  CartContainer,
  CountContainer,
  ShoppingIcon,
} from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cartSize } = this.props;
    return (
      <Container>
        <Logo />
        <CartContainer onPress={() => Navigation.navigate('Cart')}>
          <ShoppingIcon />
          <CountContainer>
            <Text>{cartSize}</Text>
          </CountContainer>
        </CartContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
