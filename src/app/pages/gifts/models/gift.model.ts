export interface Gift {
  id: number;
  seller: string;
  store: string;
  city: string;
  rescuedProduct: string;
  quantity: number;
  balanceAtTime: number;
  pointsUsed: number;
  status: string;
  rescueDate: number;
  deliveryEstimate: number;
  deliveryDate: number;
  approved: boolean;
}
