<template><Button @click="submit"> Add User </Button></template>

<script setup lang="ts">
async function submit() {
  const { body } = await $fetch("/api/user", {
    method: "post",
    body: {
      email: "test@example.com",
      name: "Test User",
      password: "password",
    },
  });

  console.log(body);
  if (body.error) {
    // Handle the error
    console.error("index.vue: Error adding user");
    console.error(body.error);
  }
}
</script>
