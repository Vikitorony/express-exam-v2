export interface Flat {
  id?:number;
  title: string;
  price: number;
  floorArea: number;
  country: string;
  zip: number;
  city: string;
  street: string;
  createdAt?: string;
  updatedAt?: string;
}