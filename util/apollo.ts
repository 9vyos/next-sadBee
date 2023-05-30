import { client } from './query';
interface categoryType {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
interface imageType {
  id: string;
  imageUrl: string;
  isMain: Boolean;
}
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: categoryType;
  productImages: imageType;
}
interface LoginInput {
  email: string;
  password: string;
}
interface SignUpInput {
  email: string;
  password: string;
  name: string;
}
interface updateProduct {
  productId: number;
  name: string;
  price: number;
  description: string;
}

export default class Apollo {
  async login(variables: LoginInput) {
    const { mutate } = useMutation(client.mutate.login, { variables });
    return await mutate();
  }
  async signUp(variables: SignUpInput) {
    const { mutate } = useMutation(client.mutate.signUp, { variables });
    return await mutate();
  }
  async updateProduct(variables: updateProduct) {
    const { mutate } = useMutation(client.mutate.updateProduct, { variables });
    return await mutate();
  }
  async getProduct() {
    const { data } = await useAsyncQuery<Product>(client.query.getProduct);
    return data;
  }
  async getOneProduct() {
    const { data } = await useAsyncQuery<Product>(client.query.getOneProduct);
    return data;
  }
}
