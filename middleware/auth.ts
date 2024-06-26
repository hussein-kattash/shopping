
const AccessToken = localStorage.getItem("AccessToken");

export default defineNuxtRouteMiddleware((to, from) => {
   console.log(AccessToken)
    if (!AccessToken) {
      return navigateTo('/admin-login')
    }
  })