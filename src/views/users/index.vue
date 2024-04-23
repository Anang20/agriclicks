<template>
    <div>
      <v-card>
        <v-card-title class="d-flex align-center pe-2">
          <h3 class="font-semibold text-slate-800 opacity-75 text-2xl">User List</h3>
          <v-spacer></v-spacer>
          <div class="w-2/4 md:w-2/6">
            <div class="flex items-center gap-2 md:flex-row">
              <v-btn @click="toAddPage" color="primary"
                >Tambah</v-btn
              >
              <v-text-field
                v-model="search"
                density="compact"
                label="Search users"
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
          <template v-slot:item.status="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-chip v-if="item.status" v-bind="attrs" color="green"
                  >Aktif</v-chip
                >
                <v-chip v-else v-bind="attrs" color="red">Nonaktif</v-chip>
              </template>
            </v-tooltip>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="d-flex gap-3">
                  <v-btn
                    @click="toDetailPage(item)"
                    v-bind="attrs"
                    icon="mdi-account-eye"
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
        title="Delete User"
        @close="handleCloseDelete"
      >
        <v-card-text>
          <p class="text-center font-semibold text-lg text-slate-500">
            Apakah kamu yakin menghapus data ini?
          </p>
        </v-card-text>
  
        <v-card-actions class="my-2 d-flex justify-end">
          <v-btn
            class="text-none"
            color="primary"
            rounded="xl"
            text="Hapus"
          ></v-btn>
        </v-card-actions>
      </Modal>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from "vue";
  import Modal from "@/components/Modal.vue";
  import http from "@/utils/http";
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
      title: "Name",
      key: "name",
    },
    {
      title: "Email",
      key: "email",
    },
    {
      title: "Status",
      key: "status",
    },
    {
      title: "Aksi",
      key: "actions",
      sortable: false,
    },
  ];
  
  onMounted(async () => {
    await getUser();
  });
  
  watch(
    () => formData.value.name,
    (newName, oldName) => {
      console.log("Name changed from", oldName, "to", newName);
    }
  );
  
  const toAddPage = () => {
    router.push("/users/add");
  };
  
  const toDetailPage = (data) => {
    router.push(`users/detail/${data.id}`);
  };
  
  const getUser = async () => {
    const { data } = await http.get("/users");
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
  