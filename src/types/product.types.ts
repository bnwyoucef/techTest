export interface Breadcrumb {
  label: string;
  url: string;
  isBlur?: boolean;
}

export interface GlobalRating {
  score: number;
  nbReviews: number;
}

export interface Review {
  note: number;
  title: string;
  description: string;
  author: {
    firstName: string;
  };
}

export interface Buybox {
  salePrice: number;
  shippingAmount: number;
  rspCampaignDiscount: number;
  seller: {
    login: string;
  };
}

export interface Product {
  id: number;
  headline: string;
  description: string;
  edito: string;
  newBestPrice: number;
  imagesUrls: string[];
  breadcrumbs: Breadcrumb[];
  globalRating: GlobalRating;
  reviews: Review[];
  buybox: Buybox;
}

export interface ProductResponse {
  status: number;
  data: Product;
}
