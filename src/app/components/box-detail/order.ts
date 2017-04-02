export class Order {
  constructor (
    public material: string,
    public dimension: string,
    public quantity: number,
    public shippingOption: string,
    public name: string,
    public address: string,
    public phone: string,
    public email: string,
    public company?: string
  ){}
}


