<template>
    <div>
     im page{{$route.params.id}}
    </div>
</template>

<script setup>
import {useRoute}from 'vue-router'
const router = useRoute()
// console.log(router)
</script>