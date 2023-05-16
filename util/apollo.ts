import { client } from './query';

interface LoginInput {
  email: string;
  password: string;
}
interface SignUpInput {
  email: string;
  password: string;
  name: string;
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
  async getProduct() {
    const { data } = await useAsyncQuery(client.query.getProduct);
    return data;
  }
}
