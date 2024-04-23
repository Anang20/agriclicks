<template>
    <div>
      <v-card>
        <v-card-title class="d-flex align-center pe-2">
          <h3 class="font-semibold text-slate-800 opacity-75 text-2xl">
            Produksi List
          </h3>
          <v-spacer></v-spacer>
          <div class="w-2/4 md:w-2/6">
            <div class="flex items-center gap-2 md:flex-row">
              <v-btn @click="toAddPage" color="primary">Tambah</v-btn>
              <v-text-field
                v-model="search"
                density="compact"
                label="Search produksi"
                prepend-inner-icon="mdi-magnify"
                variant="solo-filled"
                flat
                hide-details
                single-line
              ></v-text-field>
            </div>
          </div>
        </v-card-title>
  
        <v-data-table :headers="headers" :items="dataSource" :search="search">
          <template v-slot:item.price="{ item }">
            <span>{{ rupiahFormatted(item.price) }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="d-flex gap-3">
                  <v-btn
                    @click="toDetailPage(item)"
                    v-bind="attrs"
                    icon="mdi-eye"
                    color="orange"
                    size="small"
                    class="text-white"
                  ></v-btn>
                  <v-btn
                    @click="handleOpenModalDelete(item)"
                    v-bind="attrs"
                    icon="mdi-delete"
                    color="red"
                    size="small"
                    class="text-white"
                  ></v-btn>
                </div>
              </template>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card>
  
      <Modal
        v-model="isModalDelete"
        title="Delete Produk"
        @close="handleCloseDelete"
      >
        <v-card-text>
          <p class="text-center font-semibold text-lg text-slate-500">
            Apakah kamu yakin menghapus data ini?
          </p>
        </v-card-text>
  
        <v-card-actions class="my-2 d-flex justify-end">
          <v-btn color="primary">Hapus</v-btn>
        </v-card-actions>
      </Modal>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from "vue";
  import Modal from "@/components/Modal.vue";
  import http from "@/utils/http";
  import rupiahFormatted from '@/utils/rupiahFormatted';
  import { useRouter } from "vue-router";
  
  const search = ref(null);
  const formData = ref({
    name: null,
  });
  const dataSource = ref([]);
  const itemId = ref(null);
  const isModalDelete = ref(false);
  const router = useRouter();
  
  const headers = [
    {
      title: "Nama Produk",
      key: "name",
    },
    {
      title: "Kuantiti",
      key: "qty",
    },
    {
      title: "Harga Per Kg",
      key: "price",
    },
    {
      title: "Aksi",
      key: "actions",
      sortable: false,
    },
  ];
  
  onMounted(async () => {
    await getProduksi();
  });
  
  const toAddPage = () => {
    router.push("/produksi/add");
  };
  
  const toDetailPage = (data) => {
    router.push(`produksi/detail/${data.id}`);
  };
  
  const getProduksi = async () => {
    const { data } = await http.get("/produksi");
    dataSource.value = data;
  };
  
  const handleOpenModalDelete = (data) => {
    itemId.value = data.id;
    isModalDelete.value = true;
  };
  
  const handleCloseDelete = () => {
    itemId.value = null;
    isModalDelete.value = false;
  };
  </script>
  