export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface LocationInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  mapLink: string;
  hours: { [key: string]: string };
}
