export interface Product{
  id: string;
  name: string;
  category: string;
  stock: number;
  price: number;
  shipping: boolean;
  reviews:number;
  stars:number;
  description: string;
  featured: boolean;
  company: string;
  colors: string[];
  imgUrl: string[];
}
