import { defineStore } from 'pinia';
import { ProductModel } from '~/models/ProductModel';

class CartItem extends ProductModel {
  quantity?: number;
}

interface CartState {
  items: CartItem[];
}

export const cartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [] as CartItem[],
  }),
  actions: {
    addToCart(item: ProductModel): void {
      const findProduct = this.items.find(
        (product) => product._id === item._id
      );

      if (findProduct) {
        findProduct.quantity! += 1;
      } else {
        const productClone = { ...item, quantity: 1 };
        this.items.push(productClone);
      }
    },
    decreaseQty(item: ProductModel): void {
      const findProduct = this.items.find(
        (product) => product._id === item._id
      );

      if (findProduct) {
        findProduct.quantity! > 0
          ? (findProduct.quantity! -= 1)
          : (findProduct.quantity! = 0);
      } else {
        const productClone = { ...item, quantity: 1 };
        this.items.push(productClone);
      }
    },
    removeItem(itemId: string): void {
      this.items = this.items.filter((product) => product._id !== itemId);
    },
  },
  getters: {
    totalPrice(): number {
      return this.items.reduce(
        (total, item) => total + (item.price || 0) * (item.quantity || 1),
        0
      );
    },
  },
});
