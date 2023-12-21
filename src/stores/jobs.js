import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
    filtroJobs: [],
    isActive: false,
    selectedFruits: []
  }),
  getters: {
    getJobs: (state) => (item) => state.jobs[0].filter(selected => selected.level === item || selected.role === item),
    filteredFruits (state) {
      if (state.selectedFruits.length === 0) {
        return []
      } else {
        return state.jobs.filter(fruit => state.selectedFruits.includes(fruit))
      }
    }

  },
  actions: {
    async adicionarJobs () {
      try {
        const response = await fetch('src/data/data.json')
        const dados = await response.json()
        this.jobs = [...this.jobs, dados]
      } catch (error) {
        console.error(error)
      }
    },

    toggleItem (item) {
      /* this.filtroJobs = []
      this.filtroJobs = [...this.filtroJobs, this.getJobs(item)] */
      this.filtroJobs = this.getJobs(item)
      console.log(this.filtroJobs)
      this.jobs = []
      this.jobs = [...this.jobs, this.filtroJobs]
      this.isActive = true
      // console.log(this.getJobs(level))
      // console.log(this.jobs)
    },
    addSelectedFruit (fruit) {
      console.log(this.selectedFruits.push(fruit))
    },
    removeSelectedFruit (fruit) {
      const index = this.selectedFruits.indexOf(fruit)
      if (index !== -1) {
        this.selectedFruits.splice(index, 1)
      }
    }

  }
})
