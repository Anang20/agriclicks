<template>
    <div>
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-slate-800 opacity-75 text-2xl">
          Edit User
        </h3>
      </div>
      <v-card class="px-5 mt-4">
        <v-form v-model="formValid">
          <v-container>
            <v-row>
              <v-col cols="12" lg="6">
                <div>
                  <span class="mb-2">Name</span>
                  <v-text-field
                    v-model="formData.name"
                    density="comfortable"
                    placeholder="Masukkan Name"
                    variant="solo-filled"
                    :rules="[required]"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <div>
                  <span>Email</span>
                  <v-text-field
                    v-model="formData.email"
                    density="comfortable"
                    type="email"
                    placeholder="Masukkan Email"
                    variant="solo-filled"
                    :rules="emailValidationRules"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <div>
                  <span class="mb-2">Password</span>
                  <v-text-field
                    v-model="formData.password"
                    density="comfortable"
                    placeholder="Masukkan Password"
                    variant="solo-filled"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <div>
                  <span class="mb-2">Status</span>
                  <v-select
                    v-model="formData.status"
                    :items="statusItems"
                    density="comfortable"
                    placeholder="Pilih Status"
                    item-title="label"
                    item-key="value"
                    variant="solo-filled"
                  ></v-select>
                </div>
              </v-col>
            </v-row>
            <v-btn type="submit" :disabled="!formValid" color="primary" class="float-right my-8"
              >Simpan</v-btn
            >
          </v-container>
        </v-form>
      </v-card>
    </div>
  </template>
  
  <script setup>
  import http from "@/utils/http";
  import { ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  
  const router = useRouter();
  const route = useRoute();
  
  const formValid = ref(true);
  const formData = ref({
    id: "",
    name: "",
    email: "",
    password: "",
    status: false,
  });
  
  const required = (v) => !!v || "This field is required";
  
  const emailValidationRules = [
    (v) => v.trim().length >= 6 || "Email must be at least 6 characters",
    (v) => v.trim().includes("@") || "Email must include an @ symbol",
  ];
  
  const passwordValidationRules = [
    (v) => v.trim().length >= 8 || "Password must be at least 8 characters",
    (v) =>
      v.match(/[a-z]/) || "Password must contain at least one lowercase letter",
    (v) =>
      v.match(/[A-Z]/) || "Password must contain at least one uppercase letter",
    (v) => v.match(/\d/) || "Password must contain at least one digit",
  ];
  
  const statusItems = [
    { label: "Active", value: true },
    { label: "Nonaktif", value: false },
  ];
  
  onMounted(async () => {
    const userId = route.params.id;
    await getDetailUser(userId);
  });
  
  const getDetailUser = async (userId) => {
    try {
      const { data } = await http.get(`/users/${userId}`);
      if (data) {
        formData.value = data;
      }
    } catch (err) {
      window.alert(err?.message);
    }
  };

  </script>
  