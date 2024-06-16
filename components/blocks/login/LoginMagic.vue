<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const loading = ref(false);
const email = ref("");

console.log(useRuntimeConfig().public.BASE_URL);

const handleLogin = async () => {
  try {
    loading.value = true;
    console.log("login");
    console.log(useRuntimeConfig().public.BASE_URL);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: useRuntimeConfig().public.BASE_URL
      },
    });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};

const handleLogout = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signOut({ redirectTo: useRuntimeConfig().public.BASE_URL + "/login" });
    if (error) throw error;
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <Card v-if="!user" class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl"> Login </CardTitle>
      <CardDescription>
        Enter your email below to login to your account.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input class="w-full" id="email" type="email" placeholder="Email" required v-model="email"
          :disabled="loading" />
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full" @click="handleLogin"> Send Login Link</Button>
    </CardFooter>
  </Card>

  <Card v-else class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl"> Not You?</CardTitle>
      <CardDescription>
        Logged in as <strong>{{ user.email }}</strong>
      </CardDescription>
    </CardHeader>
    <CardFooter class="flex justify-evenly px-6 pb-6">
      <Button variant="destructive" @click="handleLogout"> Logout </Button>
      <NuxtLink to="/"><Button> Resume </Button></NuxtLink>
    </CardFooter>
  </Card>
</template>
