import {Product} from "./product.model";

export interface ProductStore {
  products : Product[];
  search: string;
  appearnce_product: Array<Product>;
  category : string[];
  category_selected: string;
  company : string[];
  company_selected: string;
  colors: string[];
  color_selected: string;
  min_price: number;
  max_price: number;
  priceSelected: number;
  free_shipping: boolean;
  sort_by : Array<string>;
  sort_selected : string;
}
