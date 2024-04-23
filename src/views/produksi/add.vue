<template>
    <div>
      <h3 class="font-semibold text-slate-800 opacity-75 text-2xl">
        Tambah Produk
      </h3>
      <v-card class="px-5 mt-2">
        <v-form @submit.prevent="handleSubmit" v-model="formValid">
          <v-container>
            <v-row>
              <v-col cols="12" lg="6">
                <div>
                  <span class="mb-2">Nama Produk</span>
                  <v-text-field
                    v-model="formData.name"
                    density="comfortable"
                    placeholder="Masukkan Nama Produk"
                    variant="solo-filled"
                    :rules="[required]"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <div>
                  <span>Kuantiti</span>
                  <v-text-field
                    v-model="formData.qty"
                    density="comfortable"
                    placeholder="Masukkan Kuantiti"
                    variant="solo-filled"
                    type="number"
                    :rules="[required, numberValidationRules]"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <div>
                  <span class="mb-2">Harga Per Kg</span>
                  <v-text-field
                    v-model="formData.price"
                    density="comfortable"
                    placeholder="Masukkan Harga"
                    variant="solo-filled"
                    type="number"
                    :rules="[required, numberValidationRules]"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <div>
                  <span class="mb-2">Hewan Ternak</span>
                  <v-select
                    v-model="formData.animal"
                    :items="animalItems"
                    :rules="[required]"
                    density="comfortable"
                    placeholder="Pilih Hewan"
                    item-title="label"
                    item-key="value"
                    variant="solo-filled"
                  ></v-select>
                </div>
              </v-col>
            </v-row>
            <v-btn
              type="submit"
              :disabled="!formValid"
              color="primary"
              class="float-right my-8"
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
  
  const formValid = ref(true);
  const formData = ref({
    id: Math.random()
      .toString(36)
      .slice(2, 8 + 2),
    name: "",
    qty: "",
    price: "",
    animal: "",
  });
  
  const required = (v) => !!v || "This field is required";
  
  const animalItems = [
    { label: "Ayam", value: "Ayam" },
    { label: "Bebek", value: "Bebek" },
    { label: "Kambing", value: "Kambing" },
    { label: "Sapi", value: "Sapi" },
    { label: "Kerbau", value: "Kerbau" },
  ];
  
  const numberValidationRules = [
    (v) => /^[0-9]$/.test(v)
  ];
  
  const handleSubmit = () => {
    http
      .post("/produksi", formData.value)
      .then((res) => {
        if (res.status == 201) {
          Swal.fire({
            title: "Berhasil!",
            text: "Berhasil menambah produk",
            icon: "success",
            confirmButtonText: "Close",
          });
          router.push("/produksi");
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Gagal!",
          text: "Opps, gagal menambah produk",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };
  </script>
  