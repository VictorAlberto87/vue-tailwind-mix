<template>
    <div class="flex h-screen w-full items-center justify-center">
        <h1 class="text-3xl font-bold">{{message}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'helloword',
        data() {
            return {
                message: 'Hello Word'
            }
        }   
    }
</script>