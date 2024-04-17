<template>
  <nav class="flex space-x-4">
    <router-link to="/" class="button">Home</router-link>
    <router-link :to="{name: 'about'}" class="button">About</router-link>
    <router-link :to="{name: 'services'}" class="button">Services</router-link>
    <router-link :to="{name: 'blog'}" class="button">Blog</router-link>
    <router-link :to="{name: 'contact'}" class="button">Contact</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss"></style>
