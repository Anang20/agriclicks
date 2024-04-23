<template>
    <div>
      <h3 class="font-semibold text-slate-800 opacity-75 text-2xl">
        Tambah User
      </h3>
      <v-card class="px-5 mt-2">
        <v-form @submit.prevent="handleSubmit" v-model="formValid">
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
                    :rules="passwordValidationRules"
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
              >Tambah</v-btn
            >
          </v-container>
        </v-form>
      </v-card>
    </div>
  </template>
  
  <script setup>
  import http from "@/utils/http";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const formValid = ref(true)
  const formData = ref({
    id: Math.random()
      .toString(36)
      .slice(2, 8 + 2),
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

  const handleSubmit = () => {
    http
        .post("/users", formData.value)
        .then((res) => {
        if (res.status == 201) {
            Swal.fire({
            title: "Berhasil!",
            text: "Berhasil menambah user",
            icon: "success",
            confirmButtonText: "Close",
            });
            router.push("/users");
        }
        })
        .catch((err) => {
        Swal.fire({
            title: "Gagal!",
            text: "Opps, gagal menambah user",
            icon: "error",
            confirmButtonText: "Close",
        });
        });
    };
  
  </script>
  