<template>
    <div>
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-slate-800 opacity-75 text-2xl">
          Edit Produk
        </h3>
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
                    placeholder="Masukkan Nama Produk"
                    variant="solo-filled"
                    :rules="[required]"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <div>
                  <span>Kuanatiti</span>
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
                    placeholder="Pilih Hewan Ternak"
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
    qty: "",
    price: "",
    animal: "",
  });
  
  const required = (v) => !!v || "This field is required";
  const numberValidationRules = [
    (v) => /^[0-9]$/.test(v)
  ];
  
  const animalItems = [
    { label: "Ayam", value: "Ayam" },
    { label: "Bebek", value: "Bebek" },
    { label: "Kambing", value: "Kambing" },
    { label: "Sapi", value: "Sapi" },
    { label: "Kerbau", value: "Kerbau" },
  ];
  
  </script>
  