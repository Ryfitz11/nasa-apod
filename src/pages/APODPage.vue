<template>
  <div class="apod">
    <form @submit.prevent="getApod()">
      <input v-model="date" type="date" required />
      <button type="submit">Get Images</button>
    </form>
    <img :src="apod.url" />
    <a :href="apod.url" target="none" v-if="apod.media_type == 'video'">
      {{ apod.url }}</a
    >
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { apodService } from "../services/APODService";
export default {
  setup() {
    //REVIEW what is ref?
    const date = ref("");
    return {
      date,
      apod: computed(() => AppState.apod),
      async getApod() {
        await apodService.getApod(date.value);
      },
    };
  },
};
</script>
