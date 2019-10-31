import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  Product,
  ImageProduct,
  DetaisProduct,
  Name,
  Price,
  IconDel,
  SumProduct,
  Count,
  Minus,
  Amout,
  Plus,
  Total,
} from './styles';

import * as CartActions from '../../../store/modules/cart/actions';
import { formatPrice } from '../../../util/format';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, updateAmountRequest, removeFromCart } = this.props;

    return (
      <Container>
        <Product>
          <ImageProduct source={{ uri: item.image }} />
          <DetaisProduct>
            <Name>{item.title}</Name>
            <Price>{formatPrice(item.price)}</Price>
          </DetaisProduct>
          <IconDel onPress={() => removeFromCart(item.id)} />
        </Product>
        <SumProduct>
          <Count>
            <Minus
              onPress={() => updateAmountRequest(item.id, item.amount - 1)}
            />
            <Amout>{item.amount}</Amout>
            <Plus
              onPress={() => updateAmountRequest(item.id, item.amount + 1)}
            />
          </Count>
          <Total>{formatPrice(item.priceTotal)}</Total>
        </SumProduct>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Item);
