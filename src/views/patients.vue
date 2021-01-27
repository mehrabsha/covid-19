<template>
  <div>
    <navbar title="Patients" />
    <b-card class="usersCard mt-3 mt-sm-4">
      <div class="title m-3">Patients</div>
      <usersTable :items="items" :fields="fields"></usersTable>
    </b-card>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import usersTable from '@/components/patients/table'
export default {
  components: { navbar, usersTable },
  data() {
    return {
      fields: [
        { key: 'ud', label: 'User Details' },
        { key: 'bd', label: 'Birth Details' },
        { key: 'rd', label: 'Registeration Date' },
        { key: 'level', label: 'Infection level' },
      ],
      items: [
        {
          ud: {
            img: 'https://randomuser.me/api/portraits/men/63.jpg',
            mssage: 'Contact Email not Linked',
            update: 'Updated 1 day ago',
          },
          bd: {
            loc: 'Tehran',
            date: 'on 24.05.2000',
          },
          rd: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          level: 'HIGH',
        },
        {
          ud: {
            img: 'https://randomuser.me/api/portraits/men/47.jpg',
            mssage: 'Adding Images to Featured Posts',
            update: 'Updated 1 day ago',
          },
          bd: {
            loc: 'Los Angeles',
            date: 'on 24.05.2000',
          },
          rd: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          level: 'LOW',
        },
        {
          ud: {
            img: 'https://randomuser.me/api/portraits/men/63.jpg',
            mssage: 'When will I be charged this month?',
            update: 'Updated 1 day ago',
          },
          bd: {
            loc: 'New York',
            date: 'on 24.05.2000',
          },
          rd: {
            date: 'May 26, 2019',
            time: '6:30 PM',
          },
          level: 'HIGH',
        },
        {
          ud: {
            img: 'https://randomuser.me/api/portraits/men/47.jpg',
            mssage: 'Payment not going through',
            update: 'Updated 1 day ago',
          },
          bd: {
            loc: 'Texas',
            date: 'on 24.05.2000',
          },
          rd: {
            date: 'May 25, 2019',
            time: '6:30 PM',
          },
          level: 'NORMAL',
        },
        {
          ud: {
            img: 'https://randomuser.me/api/portraits/men/63.jpg',
            mssage: 'Unable to add replies',
            update: 'Updated 1 day ago',
          },
          bd: {
            loc: 'Tabriz',
            date: 'on 24.05.2000',
          },
          rd: {
            date: 'May 25, 2019',
            time: '6:30 PM',
          },
          level: 'HIGH',
        },
        {
          ud: {
            img: 'https://randomuser.me/api/portraits/men/47.jpg',
            mssage: 'Downtime since last week',
            update: 'Updated 1 day ago',
          },
          bd: {
            loc: 'New York',
            date: 'on 24.05.2000',
          },
          rd: {
            date: 'May 25, 2019',
            time: '6:30 PM',
          },
          level: 'NORMAL',
        },
        {
          ud: {
            img: 'https://randomuser.me/api/portraits/men/63.jpg',
            mssage: 'Referral Bonus',
            update: 'Updated 1 day ago',
          },
          bd: {
            loc: 'Delhi',
            date: 'on 24.05.2000',
          },
          rd: {
            date: 'May 25, 2019',
            time: '6:30 PM',
          },
          level: 'LOW',
        },
        {
          ud: {
            img: 'https://randomuser.me/api/portraits/men/47.jpg',
            mssage: 'How do I change my password?',
            update: 'Updated 1 day ago',
          },
          bd: {
            loc: 'Seoul',
            date: 'on 24.05.2000',
          },
          rd: {
            date: 'May 24, 2019',
            time: '6:30 PM',
          },
          level: 'NORMAL',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.usersCard {
  .title {
    font-weight: bold;
    font-size: 1.2rem;
  }
}
</style>
