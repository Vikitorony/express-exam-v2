import { Flat } from '../models/flat';

export interface FlatSerializer {
  title: string;
  price: number;
  floorArea: number;
  country?: string;
  zip?: number;
  city?: string;
  street?: string;
  address: string;
};

export const index = (flats: Array<Flat>): Array<FlatSerializer> => {
  return flats.map((flat: Flat) => show(flat));
};

export const show = (flat: Flat): FlatSerializer => {
  return {
    title: flat.title,
    price: flat.price,
    floorArea: flat.floorArea,
    address: `${flat.country} ${flat.zip} ${flat.city} ${flat.street}`
  }
};