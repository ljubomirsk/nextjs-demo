import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { getPosts } from '../api/posts';
import Dropdown from '../components/Dropdown';
import { Plan, Currency } from '../api/types';

const Container = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  box-sizing: border-box;
`;

const DropdownContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const currencyDropdownOptions = [Currency.EUR, Currency.USD, Currency.CHF];

interface OwnProps {
  plans: Array<Plan>;
}

type Props = OwnProps;

const App = ({ plans }: Props) => {
  const [currency, setCurrency] = useState(Currency.EUR);
  const [plansByCurrency, setPlansByCurrency] = useState({ [currency]: plans });

  const fetchPlansForCurrency = async () => {
    const { Plans } = await getPosts(currency);
    setPlansByCurrency((prevPlans) => ({ ...prevPlans, [currency]: Plans }));
  };

  useEffect(() => {
    if (!plansByCurrency[currency]) {
      fetchPlansForCurrency();
    }
  }, [currency]);

  return (
    <Container>
      <h1>Plans &amp; prices</h1>
      <DropdownContainer>
        <Dropdown
          onOptionChange={setCurrency}
          options={currencyDropdownOptions}
        />
      </DropdownContainer>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await getPosts();
  return {
    props: {
      plans: result.Plans,
    },
  };
};

export default App;
