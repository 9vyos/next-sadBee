<script lang="ts" setup>
const { $api }: any = useNuxtApp();

// const getProduct = gql`
//   query {
//     getProducts {
//       id
//       name
//       price
//       description
//       category {
//         id
//         name
//         createdAt
//         updatedAt
//       }
//       productImages {
//         imageUrl
//         isMain
//         id
//       }
//     }
//   }
// `;
// const { data: getProducts } = await useAsyncQuery<Product>(getProduct);
// console.log(getProducts.value);
const variables = {
  email: 'hjy4649@naver.com',
  password: '1234',
};
const { data: loginData } = await $api.login(variables);
console.log(loginData.login);

const data = ref(null);

data.value = await $api.getProduct();

// const { data } = await $api.getProduct();
console.log(data);
console.log(data.value);
</script>

<template>
  <div>
    <div>Page: foo</div>

    <ul>
      <li v-for="item in data.getProducts">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
