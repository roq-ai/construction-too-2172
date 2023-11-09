import { InventoryInterface } from 'interfaces/inventory';
import { RentalInterface } from 'interfaces/rental';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  type: string;
  brand: string;
  price_per_day: number;
  available_quantity: number;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  rental?: RentalInterface[];

  _count?: {
    inventory?: number;
    rental?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  brand?: string;
}
