export interface Plan {
  id: string;
  paymentInterval: string;
  currency: string;
  priceCents: number;
}

export interface Product {
  id: string;
  name: string;
  features: string[];
  plans: Plan[];
}