<template>
    <div class="card">
      <Menubar :model="items">
        <template #start>
          <nuxt-link to="/" class="sm:mr-4">
            <img :src="logo" class="w-6rem" />
          </nuxt-link>
        </template>
        <template #item="{ item, props }">
          <nuxt-link
            :to="item.link"
            v-ripple
            class="flex align-items-center"
            v-bind="props.action"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </nuxt-link>
        </template>
        <template #end>
            <Button @click="Logout" icon="pi pi-sign-out" label="Logout" iconPos="right"/>
        </template>
      </Menubar>
      <Toast/>
    </div>
  </template>
  
  <script setup>
  import logo from "../../assets/images/logo.png";
  import { LogoutService } from "~/services/LogoutService";
  import { useToast } from "primevue/usetoast";

  let data = ref()
  const toast = useToast();
  const router = useRouter();
  const Logout = async()=>{
    data.value = await LogoutService();
    if(data.value.message){
        toast.add({ severity: 'success', summary: 'Success', detail: data.value.message , life: 3000 });
        localStorage.removeItem("AccessToken");
        setTimeout(()=>{
            router.push("/admin-login");
        },3000)
    }
  }
  const items = ref([
    {
      label: "Home",
      icon: "pi pi-home",
      link: "/",
    },
    {
      label: "Products",
      icon: "pi pi-shopping-bag",
      link: "/products",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      link: "/contact-us",
    },
  ]);
  </script>