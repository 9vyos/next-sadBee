<script lang="ts" setup>
const { $api }: any = useNuxtApp();

const variables = {
  email: 'hjy4649@naver.com',
  password: '1234',
};
const { data: loginData } = await $api.login(variables);
// console.log(loginData.login);

// const { data: productData } = await $api.getProduct();

const data = ref(null);

const test = async () => {
  console.log(await $api.getProduct());
};
await test();
data.value = $api.getProduct();

// console.log(data.value);
</script>

<template>
  <div>
    <div>Page: foo</div>
    <p>{{ data }}</p>
    <!-- <ul>
      <li v-for="item in data.getProducts">
        {{ item.name }}
      </li>
    </ul> -->
  </div>
</template>

<style scoped></style>
