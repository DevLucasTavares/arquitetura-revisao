export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private description: string,
    private brand: {
      id: string;
      name: string;
    }
  ) {}

    // public get 
}
