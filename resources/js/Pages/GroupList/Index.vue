<script setup>
import { Head } from '@inertiajs/vue3'

defineProps({ user: Object })
</script>

<template>
  <v-layout class="rounded rounded-md" >

    <Head title="AAAA"></Head>

    <v-main  class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-btn prepend-icon="$delete" variant="tonal" color="purple-accent-1">
        AAA
      </v-btn>
    </v-main>
  </v-layout>
</template>