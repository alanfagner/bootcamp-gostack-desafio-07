import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { darken } from 'polished';
import { colors } from '../../../styles';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Name = styled.Text`
  text-align: center;
`;

export const Price = styled.Text`
  font-weight: bold;
`;

export const Button = styled(RectButton)`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  padding: 1px;
  border-radius: 4px;
  margin-top: auto;
`;

export const TextButton = styled.Text`
  text-align: center;
  flex: 1;
  color: #fff;
  font-weight: bold;
`;

export const IconContainer = styled.View`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  background: ${darken(0.03, colors.primary)};
`;

export const CountText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const ShoppingIcon = styled(Icon).attrs({
  name: 'add-shopping-cart',
  color: '#FFF',
  size: 20,
})``;
