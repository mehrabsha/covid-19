import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data'],
  data() {
    return {
      gradient: null,
    }
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 90, 450)

    this.gradient.addColorStop(0, 'rgba(55, 81,255, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(55, 81,255, 0.25)')
    this.gradient.addColorStop(1, 'rgba(55, 81,255, 0)')
    console.log(this.labels);
    this.renderChart(
      {
        labels: this.data.range,
        datasets: [
          {
            label:'Total',
            borderColor: '#3751FF',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#3751FF',
            backgroundColor: this.gradient,
            data: this.data.Total,
          },{
            label: 'Recovered',
            borderColor: '#DFE0EB',
            pointBackgroundColor: '#3751FF',
            borderWidth: 2,
            pointBorderColor: 'white',
            backgroundColor: 'white',
            data: this.data.Recovered,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false },
    )
  },
}
