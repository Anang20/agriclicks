<template>
    <div>
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-slate-800 opacity-75 text-2xl">
          Detail Produk
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
                  <span>Kuantiti</span>
                  <v-text-field
                    v-model="formData.qty"
                    density="comfortable"
                    placeholder="Masukkan kuantiti"
                    variant="solo-filled"
                    disabled
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
                    disabled
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" lg="6">
                <div>
                  <span class="mb-2">Hewan Ternak</span>
                  <v-select
                    v-model="formData.animal"
                    :items="animalItems"
                    density="comfortable"
                    placeholder="Pilih Hewan"
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
    qty: 0,
    price: 0,
    animal: "",
  });
  
  const animalItems = [
    { label: "Ayam", value: 'Ayam' },
    { label: "Bebek", value: 'Bebek' },
    { label: "Kambing", value: 'Kambing' },
    { label: "Sapi", value: 'Sapi' },
    { label: "Kerbau", value: 'Kerbau' },
  ];
  
  onMounted(async () => {
    const produkId = route.params.id;
    await getDetailProduksi(produkId);
  });
  
  const getDetailProduksi = async (produkId) => {
    try {
      const { data } = await http.get(`/produksi/${produkId}`);
      if (data) {
        formData.value = data;
      }
    } catch (err) {
      window.alert(err?.message);
    }
  };
  
  const toEditPage = () => {
    router.push(`/produksi/edit/${route.params.id}`);
  };
  </script>  