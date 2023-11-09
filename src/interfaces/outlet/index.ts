import { InventoryInterface } from 'interfaces/inventory';
import { RentalInterface } from 'interfaces/rental';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  company_id: string;
  name: string;
  location: string;
  contact_number: string;
  operating_hours: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  rental?: RentalInterface[];
  company?: CompanyInterface;
  _count?: {
    inventory?: number;
    rental?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  name?: string;
  location?: string;
  contact_number?: string;
  operating_hours?: string;
}
