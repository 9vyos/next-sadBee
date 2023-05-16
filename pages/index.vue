<script lang="ts" setup>
const { $api }: any = useNuxtApp();
// console.log($api);
// const login = gql`
//   mutation Login($email: String!, $password: String!) {
//     login(loginUserRequest: { email: $email, password: $password }) {
//       userId
//       jwtToken
//     }
//   }
// `;

const variables = {
  email: 'hjy4649@naver.com',
  password: '1234',
};
// const { mutate } = useMutation(login, { variables });

console.log(await $api.login(variables));
</script>

<template>
  <div>Page: foo</div>
</template>

<style scoped></style>
