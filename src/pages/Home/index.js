import React, { Component } from 'react';

import { List, Container } from './styles';
import Item from './Item';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.searchProducts();
  }

  searchProducts = async () => {
    const rep = await api.get('/products');

    const data = rep.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <List
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Item key={String(item.id)} item={item} />}
        />
      </Container>
    );
  }
}
