<template>
   <q-page class="row flex justify-center">
        <div class="col-9 q-mt-xl">
          <CardJobs v-for="job in jobs[0]" :key="job.id"
            v-bind="job"
            class="q-mb-xl"
          />
        </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import CardJobs from '../components/CardJobs.vue'
import { useJobsStore } from 'src/stores/jobs'
/* import data from '../data/data.json'
 */
export default defineComponent({
  name: 'IndexPage',
  components: {
    CardJobs
  },
  setup () {
    const store = useJobsStore()

    onMounted(() => {
      store.adicionarJobs()
    })

    const jobs = computed(() => store.jobs)
    return {
      jobs
    }
  }
})
</script>
