import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Item from './Item';
import {
  List,
  EmptyContainer,
  Container,
  Text,
  Total,
  PriceTotal,
  ButtonFinsh,
  TextButton,
  TotalContainer,
  Wapper,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderEmpty = () => {
    return (
      <EmptyContainer>
        <Text>Carrinho de compras vazio</Text>
      </EmptyContainer>
    );
  };

  render() {
    const { cart, amountTotal } = this.props;

    return (
      <Container>
        <Wapper>
          <List
            ListEmptyComponent={this.renderEmpty}
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Item key={item.id} item={item} />}
            ListFooterComponent={
              <TotalContainer>
                <Total>Total</Total>
                <PriceTotal>{formatPrice(amountTotal)}</PriceTotal>
                <ButtonFinsh>
                  <TextButton>Finalizar</TextButton>
                </ButtonFinsh>
              </TotalContainer>
            }
          />
        </Wapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => {
    return { ...product, priceTotal: product.price * product.amount };
  }),
  amountTotal: state.cart.reduce((total, product) => {
    total += product.price * product.amount;
    return total;
  }, 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
