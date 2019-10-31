import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../../styles';

export const Container = styled.View`
  padding: 5px;
  margin: 10px;
  border-radius: 4px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageProduct = styled.Image`
  background: #eee;
  width: 120px;
  height: 120px;
`;

export const DetaisProduct = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 18px;
  padding: 5px;
`;

export const Price = styled.Text`
  font-weight: bold;
  padding: 5px;
`;

export const IconDel = styled(Icon).attrs({
  name: 'trash-can',
  size: 30,
  color: colors.primary,
})`
  padding: 5px;
`;

export const SumProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  border-radius: 4px;
`;

export const Count = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const Minus = styled(Icon).attrs({
  name: 'minus-circle',
  size: 20,
  color: colors.primary,
})``;

export const Amout = styled.Text`
  padding: 2px;
  background: #fff;
  margin: 0px 4px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #d8d7da;
  text-align: center;
  min-width: 30px;
`;

export const Plus = styled(Icon).attrs({
  name: 'plus-circle',
  size: 20,
  color: colors.primary,
})``;

export const Total = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;
