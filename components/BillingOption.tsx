import React from 'react';
import styled from 'styled-components';
import { Plan, Period } from '../api/types';

const Container = styled.div`
  border: 2px solid rgba(192, 192, 192, 0.5);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: 30rem;
  color: rgba(0, 0, 0, 0.7);
  margin: 2rem 0;
  font-weight: bold;
`;

const Header = styled.div`
  text-align: center;
  h5 {
    color: #36ba3a;
    margin: 0.3rem 0;
  }
  h4 {
    color: black;
    margin: 0.2rem 0;
  }
`;

const PriceContainer = styled.div`
  font-size: 14px;
  margin: 0.2rem 0;
  line-height: 1.5rem;
  text-align: center;
`;

const Amount = styled.h2`
  display: inline;
`;

const Description = styled.span`
  text-align: center;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  align-self: flex-start;
  height: 7rem;
  li:before {
    content: '→';
    padding-right: 8px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #07aae6;
  color: white;
  border: none;
  border-radius: 3px;
  outline: none;
  transition: all ease 300ms;
  cursor: pointer;
  vertical-align: middle;
  letter-spacing: 0.015em;
  line-height: 1;
  padding: 1rem 2rem;

  :hover {
    background: #049ed6;
  }
`;

interface OwnProps {
  plan: Plan;
  period: Period;
}

type Props = OwnProps;

const BillingOption = ({ plan, period }: Props) => {
  console.log('eee');
  return (
    <Container>
      <Header>
        <h5>MOST POPULAR</h5>
        <h4>PLUS</h4>
      </Header>
      <PriceContainer>
        $ {<Amount>4</Amount>}/mo{<div>Billed as $48 per year</div>}
      </PriceContainer>
      <Description>Full featured mailbox with advanced protection</Description>
      <UnorderedList>
        <li>test</li>
      </UnorderedList>
      <Button>Select</Button>
    </Container>
  );
};

export default BillingOption;
