<template>
  <div>
    <navbar title="Covid 19 Tracker - Sokan Edition" />
    <b-row class="count-cards mt-3 mt-sm-4">
      <b-col cols="12" sm="6" md="3">
        <b-card class="mb-2 count-card">
          <span class="title">Total</span>
          <span class="count">
            45
          </span>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" md="3">
        <b-card class="mb-2 count-card active">
          <span class="title">Active</span>
          <span class="count">
            16
          </span>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" md="3">
        <b-card class="mb-2 count-card">
          <span class="title">Recovered</span>
          <span class="count">
            24
          </span>
        </b-card>
      </b-col>

      <b-col cols="12" sm="6" md="3">
        <b-card class="mb-2 count-card">
          <span class="title">Death</span>
          <span class="count">
            53
          </span>
        </b-card>
      </b-col>
    </b-row>
    <b-card class="mt-2 mt-sm-4">
      <chart :width="200" v-if="loaded" :data="chartData" />
    </b-card>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import chart from '@/components/overview/chart.js'
export default {
  data() {
    return {
      loaded: false,
      chartData: {},
    }
  },
  components: { navbar, chart },
  mounted() {
    var date = new Date()
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    var monthLen = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    this.chartData.range = Array.from(new Array(monthLen), (x, i) => i + 1)

    console.log(this.chartData.range)
    var lastDay = new Date(date.getFullYear(), date.getMonth(), monthLen)
    console.log(firstDay)
    console.log(lastDay)
    this.axios
      .get(
        'https://api.covid19api.com/live/country/iran/status/confirmed/date/' +
          firstDay.toISOString()
      )
      .then((response) => {
        this.chartData.Total = response.data.map((val) => val.Confirmed)
        this.chartData.Recovered = response.data.map((val) => val.Recovered)
        this.loaded = true
      })
  },
}
</script>

<style lang="scss">
.card {
  border-radius: 0.5rem !important;
}
.count-cards {
  .count-card.active,
  .count-card:hover {
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
