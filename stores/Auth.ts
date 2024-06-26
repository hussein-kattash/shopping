import { defineStore } from 'pinia';

export const authStore = defineStore("auth",{
    state:()=>({
        token:'' as string,
    }),
    actions:{
        setToken(token:string){
            this.token = token
        }
    }
})