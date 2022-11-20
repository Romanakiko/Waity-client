export interface IOrder {
  id: number,
  products: IProduct[],
  clientId?: number
}

export interface IProduct {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  cost: number,
  currency: Currency
}

enum Currency {
  Rub = 'RUB',
  Usd = 'USD',
  Eur = 'EUR'
}
