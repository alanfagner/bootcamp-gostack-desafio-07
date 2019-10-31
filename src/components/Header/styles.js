import styled from 'styled-components/native';
import { Header } from 'react-navigation-stack';
import { StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import logoRocket from '../../assets/images/logo.png';

export const Container = styled.SafeAreaView`
  margin-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight};
  flex-direction: row;
  justify-content: space-between;
  height: ${Header.HEIGHT};
  padding: 10px;
`;
export const Logo = styled.Image.attrs({
  source: logoRocket,
  resizeMode: 'cover',
})``;

export const CountContainer = styled.View`
  position: absolute;
  background: #7159c1;
  border-radius: 10px;
  justify-content: center;
  align-self: center;
  width: 20px;
  height: 20px;
  padding: 4px;
  right: 0;
  top: 0;
`;

export const Text = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 12;
  font-weight: bold;
`;

export const CartContainer = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ShoppingIcon = styled(Icon).attrs({
  name: 'shopping-basket',
  color: '#FFF',
  size: 24,
})`
  margin: 0px 10px 0px;
`;
