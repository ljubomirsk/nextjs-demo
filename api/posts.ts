import fetch from 'node-fetch';
import { PlansResponse, Currency } from './types';

export const getPosts = async (
  currency = Currency.EUR
): Promise<PlansResponse> => {
  const myInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'x-pm-appversion': 'Other',
      'x-pm-apiversion': '3',
      Accept: 'application/vnd.protonmail.v1+json',
    },
    mode: 'cors',
  };
  const response = await fetch(
    `https://api.protonmail.ch/payments/plans?Currency=${currency}`,
    myInit
  );
  return response.json();
};
