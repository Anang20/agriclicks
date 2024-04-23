<template>
    <div>
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-slate-800 opacity-75 text-2xl">
          Detail User
        </h3>
        <v-btn @click="toEditPage" type="submit" color="orange" class="text-white"
          >Edit</v-btn
        >
      </div>
      <v-card class="px-5 mt-4">
        <v-form>
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
                    disabled
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
                    disabled
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
                    disabled
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
                    disabled
                  ></v-select>
                </div>
              </v-col>
            </v-row>
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
  
  const formData = ref({
    name: "",
    email: "",
    password: "",
    status: false,
  });
  
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
  
  const toEditPage = () => {
    router.push(`/users/edit/${route.params.id}`);
  };
  </script>
  