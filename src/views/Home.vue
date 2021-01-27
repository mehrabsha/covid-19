<template>
  <div>
    <navbar title="Covid 19 Tracker - Sokan Edition" />
    <b-row class="count-cards mt-5">
      <b-col>
        <b-card class="mb-2 count-card">
          <span class="title">Total</span>
          <span class="count">
            45
          </span>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="mb-2 count-card active">
          <span class="title">Active</span>
          <span class="count">
            16
          </span>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="mb-2 count-card">
          <span class="title">Recovered</span>
          <span class="count">
            24
          </span>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="mb-2 count-card">
          <span class="title">Death</span>
          <span class="count">
            53
          </span>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  components: { navbar },
}
</script>

<style lang="scss">
.count-cards {
  .count-card.active,
  .count-card:hover {
    transition: 0.2s;
    border: 2px solid #3751ff !important;
    color: #3751ff !important;
    .title {
      color: #3751ff !important;
    }
  }
  .count-card .card-body {
    cursor: pointer;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    .count {
      font-size: 2.4rem;
    }
    .title {
      margin-bottom: 5px;
      color: #9fa2b4;
      font-size: 1rem;
    }
  }
}
</style>
