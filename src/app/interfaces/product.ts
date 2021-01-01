export interface product {
  _id: string,
  title: string,
  description: string,
  mainImage: string,
  images: string[],
  price: number,
  oldPrice: number,
  discountPresent: number,
  shippingPrice: number,
  shippingTime: number,
  shippingFrom: string,
  shippingLimit: string,
  keywords: string,
  stock: number,
  isEvedible: boolean
}