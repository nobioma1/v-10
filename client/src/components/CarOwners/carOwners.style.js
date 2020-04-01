import styled from 'styled-components';

import { Card } from '../../shared/Card';

export const CarOwnersCardImage = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    width: 100%;
  }
`;

export const Header = styled.div`
  div {
    cursor: pointer;
    margin: 5px 0;
  }
`;

export const CarOwnersCard = styled(Card)`
  flex-direction: row;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;

  section {
    display: flex;

    p {
      color: gray;

      span {
        color: black;
      }
    }
  }

  section.car {
    div {
      :not(:last-child) {
        border-right: 1px solid black;
      }
      :first-child {
        padding-right: 5px;
      }
      :not(:first-child) {
        padding: 0 5px;
      }
    }
  }

  section.owner {
    div {
      margin-right: 15px;

      p {
        :last-child {
          color: black;
        }
      }
    }
  }
`;

export const Bio = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
