import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '../../styles';

export const EmptyContainer = styled.View`
  background: #fff;
  padding: 20px;
  margin: 50px 20px;
  border-radius: 4px;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.View``;

export const Wapper = styled.View`
  margin: 20px;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
`;

export const TotalContainer = styled.View`
  align-items: center;
  margin: 40px 30px 0px;
`;

export const List = styled.FlatList``;

export const Total = styled.Text`
  color: #999999;
  font-size: 20px;
`;

export const PriceTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ButtonFinsh = styled(RectButton)`
  background: ${colors.primary};
  align-self: stretch;
  padding: 10px 0px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
