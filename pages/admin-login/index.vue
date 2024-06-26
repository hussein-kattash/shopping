<template>
  <div class="flex flex-row">
    <div class="col-6 h-screen">
      <img src="../../assets/images/Admin-rafiki.png" class="w-full" />
    </div>
    <div class="col-6 px-4 flex align-items-center justify-content-center">
      <div
        class="h-24rem px-4 w-full bg-white shadow-5 border-round flex flex-column align-items-center"
      >
        <h2 class="text-center">Admin Login</h2>
        <form @submit="onSubmit" class="w-full mt-4">
          <span class="p-input-icon-left w-full">
            <i class="pi pi-user" />
            <InputText placeholder="Username" v-model="username" class="w-full" :class="{ 'p-invalid': usernameError }" aria-describedby="username-error"/>
          </span>
          <small class="p-error" id="username-error">{{ usernameError || '&nbsp;' }}</small>
          <span class="p-input-icon-left w-full mt-4">
            <i class="pi pi-lock" />
            <InputText type="password" placeholder="Password" v-model="password" class="w-full" :class="{ 'p-invalid': passwordError }" aria-describedby="password-error"/>
          </span>
          <small class="p-error" id="password-error">{{ passwordError || '&nbsp;' }}</small>
          <Button :loading="loading" type="submit" label="Login" class="mt-4 w-full" icon="pi pi-sign-in"/>
          <InlineMessage v-if="data?.error" severity="error" class="w-full text-left mt-2">{{ data?.error }}</InlineMessage>
        </form>
      </div>
    </div>
    <Toast/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { AdminLogin } from '~/services/AdminLogin';
import { useToast } from "primevue/usetoast";

const router = useRouter();
const toast = useToast();
const { handleSubmit, resetForm } = useForm();

const { value: username, errorMessage: usernameError } = useField('username', validateUsername);
const { value: password, errorMessage: passwordError } = useField('password', validatePassword);

function validateUsername(value: any) {
  if (!value) {
    return 'Username is required.';
  }

  return true;
}

function validatePassword(value: any) {
  if (!value) {
    return 'Password is required.';
  }

  // Add more password validation logic as needed, e.g., minimum length, special characters, etc.

  return true;
}

let data = ref();
let loading = ref(false);

const onSubmit = handleSubmit(async(values:any) => {
  if (values.username && values.password) {
    loading.value = true;
    data.value = await AdminLogin(values);
    if(data?.value.message){
      loading.value = false;
      toast.add({ severity: 'success', summary: 'Success', detail: data.value.message , life: 3000 });
      setTimeout(()=>{
        router.push("/dashboard")
      },3000)
      resetForm();
    }else{
      loading.value = false
    }
  }
});

definePageMeta({
  layout: "dashboard",
});
</script>


<style scoped>
</style>