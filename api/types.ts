export interface Plan {
  ID: string;
  Type: number;
  Name: string;
  Title: string;
  MaxDomains: number;
  MaxAddresses: number;
  MaxSpace: number;
  MaxMembers: number;
  MaxVPN: number;
  MaxTier: number;
  Services: number;
  Features: number;
  Pricing: Record<string, number>;
  Currency: string;
  Quantity: number;
  Cycle: number;
  Amount: number;
}

export interface PlansResponse {
  Code: number;
  Plans: Array<Plan>;
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  CHF = 'CHF',
}
