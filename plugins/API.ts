import API from '@/util/apollo';

export default defineNuxtPlugin((nuxtApp) => {
  const api: API = new API();
  nuxtApp.provide('api', api);
});
