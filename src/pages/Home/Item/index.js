import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../../store/modules/cart/actions';
import {
  Container,
  Image,
  Name,
  Price,
  Button,
  TextButton,
  ShoppingIcon,
  IconContainer,
  CountText,
} from './styles';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { amount, item, addToCartRequest } = this.props;
    const { id, image, title, priceFormatted } = item;

    return (
      <Container>
        <View>
          <Image source={{ uri: image }} />
          <Name>{title}</Name>
        </View>
        <View>
          <Price>{priceFormatted}</Price>
          <Button onPress={() => addToCartRequest(id)}>
            <IconContainer>
              <ShoppingIcon />
              <CountText>{amount[id] || 0}</CountText>
            </IconContainer>
            <TextButton>ADICIONAR</TextButton>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
