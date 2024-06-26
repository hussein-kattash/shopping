
<template>
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();

const confirm1 = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
    });
};

</script>

