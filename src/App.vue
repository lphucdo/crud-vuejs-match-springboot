<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Vuetify CRUD Example">
      <v-container class="py-0 fill-height">
        <v-btn to="/">Dashboard</v-btn>
        <v-btn to="/about">About</v-btn>
        <v-btn to="/controller">Employee</v-btn>

        <v-spacer></v-spacer>
        <v-responsive></v-responsive>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer app>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-btn to="/" class="mx-2" color="success">Dashboard</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn to="/about" class="mx-2" color="success">About</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn to="/controller" class="mx-2" color="success"
            >Employee</v-btn
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <router-view />
    </v-main>
  </v-layout>
</template>