<template>
  <q-card class="my-card" :class="{ 'border-div': featured }">
    <q-card-section >
      <q-card-section class="row">
          <div class="col-md-2 col-sm-12">
            <q-img :src="url" style="width: 80px;"></q-img>
          </div>
          <div class="col-md-10 col-sm-12">
            <div class="row q-col-gutter-sm">
                  <div class="col-md-9 col-sm-12 ">
                    <div class="row">
                      <q-list>
                        <q-item style="padding:0">
                          <q-item-section>
                            <span class="card-title q-mr-xl">{{ company }}</span>
                          </q-item-section>
                          <q-item-section v-if="state.newProp">
                            <div class="new-div">New</div>
                          </q-item-section>
                          <q-item-section v-if="state.featuredProp">
                            <div class="future-div">Future</div>
                          </q-item-section>
                        </q-item>
                      </q-list>
                  </div>
                  </div>
                </div>
            <div class="row q-col-gutter-sm">
              <div class="col-md-12 col-sm-12 ">
                <div class="row">
                  <div class="col-md-5 col-sm-12 ">
                    <span class="position-span">{{ position }}</span>
                    <div class="row">
                      <div class="col-md-12 col-sm-12">
                        <div class="row q-col-gutter-sm">
                          <div class="col-md-3 col-sm-3 q-py-md">
                            <span style="color: gray;">{{ postedAt }}</span>
                          </div>
                          <div class="col-md-1 col-sm-3 q-py-md">
                            <span style="color: gray;"> - </span>
                          </div>
                          <div class="col-md-3 col-sm-3 q-py-md">
                            <span style="color: gray;">{{ contract }}</span>
                          </div>
                          <div class="col-md-1 col-sm-3 q-py-md">
                            <span style="color: gray;"> - </span>
                          </div>
                          <div class="col-md-3 col-sm-3 q-py-md">
                            <span style="color: gray;">{{ location }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 ">
                    <div class="row q-col-gutter-md">
                      <div class="col-md-2 col-sm-2">
                        <q-btn :label="level" @click="toggleSelection(level)" size="0.9rem" no-caps class="btn-card"></q-btn>
                      </div>
                      <div class="col-md-2 col-sm-2">
                        <q-btn :label="role" @click="toggleSelection(role)" size="0.9rem" no-caps class="btn-card"></q-btn>
                      </div>
                      <div class="col-md-2 col-sm-2" v-for="language in languages" :key="language">
                        <q-btn :label="language" size="0.9rem" no-caps class="btn-card"></q-btn>
                      </div>
                      <div class="col-md-2 col-sm-2" v-for="tool in tools" :key="tool">
                        <q-btn :label="tool" size="0.9rem" no-caps class="btn-card"></q-btn>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import imageUrl from '../../src/utils/images'
/* import { useJobsStore } from 'src/stores/jobs'
 */
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    new: {
      type: Boolean,
      required: true
    },
    featured: {
      type: Boolean,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    postedAt: {
      type: String,
      required: true
    },
    contract: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    languages: {
      type: Object,
      required: true
    },
    tools: {
      type: Object,
      required: true
    }
  },
  setup (prop) {
    const url = imageUrl(prop.company)
    // const store = useJobsStore()

    const state = reactive({
      newProp: prop.new,
      featuredProp: prop.featured
    })

    function toggleSelection () {}

    return {
      url,
      toggleSelection,
      state
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.future-div {
  text-transform: uppercase;
  display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    outline: 0;
    border: 0;
    vertical-align: middle;
    font-size: 12px;
    line-height: 1.715em;
    text-decoration: none;
    color: inherit;
    background: $dark;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    width: auto;
    height: auto;
    cursor: default;
    padding: 4px 16px;
    //min-height: 2.572em;
    color: white;
    border-radius: 14px;

}

.new-div {
  display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    font-weight: 500;
    position: relative;
    outline: 0;
    border: 0;
    vertical-align: middle;
    font-size: 12px;
    line-height: 1.715em;
    text-decoration: none;
    color: inherit;
    background: $primary;
    text-transform: uppercase;
    text-align: center;
    width: auto;
    height: auto;
    cursor: default;
    padding: 4px 16px;
    color: white;
    border-radius: 14px;
}

.card-title {
  font-weight: 700;
  color: $primary;
}

.btn-card {
  background-color: $lightgrayishcyan;
  width: 70px;
  color: $primary;
  font-weight: 700;
}

.btn-card:hover {
  background-color: $primary;
  color: #fff;
}

.border-div {
  border-left: 5px solid $primary;
}

.position-span {
  font-weight: 700;
  font-size: 1rem;
}

.position-span:hover{
  color: $primary;
}

.my-card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

</style>
