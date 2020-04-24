import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { getPosts } from '../api/posts';
import Dropdown, { DropdownOption } from '../components/Dropdown';
import { Plan, Currency, Period } from '../api/types';
import BillingOption from '../components/BillingOption';

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

const PlansContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

const currencyDropdownOptions: Array<DropdownOption> = [
  {
    value: Currency.EUR,
    displayName: '€ Euro',
  },
  {
    value: Currency.USD,
    displayName: '$ US Dollar',
  },
  {
    value: Currency.CHF,
    displayName: 'Swiss Frank',
  },
];
const periodDropdownOptions: Array<DropdownOption> = [
  {
    value: Period.Monthly,
    displayName: 'Monthly',
  },
  {
    value: Period.Annualy,
    displayName: 'Anually',
  },
  {
    value: Period.Biennially,
    displayName: '2 Years',
  },
];

interface OwnProps {
  plans: Array<Plan>;
}

type Props = OwnProps;

const App = ({ plans }: Props) => {
  const [currency, setCurrency] = useState(Currency.EUR);
  const [period, setPeriod] = useState(Period.Monthly);
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
        <Dropdown onOptionChange={setPeriod} options={periodDropdownOptions} />
      </DropdownContainer>
      <PlansContainer>
        {plansByCurrency[currency]?.map((plan) => (
          <BillingOption key={plan.ID} plan={plan} period={period} />
        ))}
      </PlansContainer>
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
