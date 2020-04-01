import styled from 'styled-components';
import { Card } from '../../shared/Card';

export const FilterCard = styled(Card)`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ul {
    width: 100%;
    justify-content: center;
  }
`;

export const Country = styled.li`
  background-color: lightgray;
  margin: 3px;
  padding: 5px 8px;
  border-radius: 15px;
`;

export const Color = styled.li`
  background: ${props => {
    let color = props.color.toLowerCase();
    switch (color) {
      case 'green':
        return '#32cd32';
      case 'violet':
        return '#5b0a91';
      case 'yellow':
        return '#ecb753';
      case 'blue':
        return '#00008b';
      case 'teal':
        return '#008b8b';
      case 'maroon':
        return '#800000';
      case 'red':
        return '#b53737';
      case 'aquamarine':
        return '#ff4500';
      case 'orange':
        return '#ff4500';
      case 'mauv':
        return '#b784a7';
      default:
        return color;
    }
  }};
  height: 20px;
  width: 20px;
  margin: 3px;
  border-radius: 50%;
`;
