<template>
  <div class="tbl">
    <b-table responsive hover :items="items" :fields="fields">
      <template #cell(ud)="row">
        <div class="user d-flex">
          <b-avatar :src="row.item.ud.img"></b-avatar>
          <div class="fcol ml-2 d-flex">
            <span class="bld">{{ row.item.ud.mssage }}</span>
            <span class="sub">{{ row.item.ud.update }}</span>
          </div>
        </div>
      </template>

      <template #cell(bd)="row">
        <div class="fcol ml-2 d-flex">
          <span class="bld">{{ row.item.bd.loc }}</span>
          <span class="sub">{{ row.item.bd.date }}</span>
        </div>
      </template>

      <template #cell(rd)="row">
        <div class="fcol ml-2 d-flex">
          <span class="bld">{{ row.item.rd.date }}</span>
          <span class="sub">{{ row.item.rd.time }}</span>
        </div>
      </template>

      <template #cell(level)="row">
        <b-badge
          class="p-2 mt-2 level"
          pill
          :variant="
            row.item.level == 'HIGH'
              ? 'danger'
              : row.item.level == 'LOW'
              ? 'warning'
              : 'success'
          "
          >{{ row.item.level }}</b-badge
        >
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ['items', 'fields'],
}
</script>

<style lang="scss">
.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th {
  background-color: rgba($color: #3751ff, $alpha: 0.04);
}
.tbl {
  .table td {
    padding: 1em;
  }
  .table th {
    border-top: none !important;
    font-size: 0.8rem;
    color: #9fa2b4;
  }
  .user {
    align-items: center;
  }
  .fcol {
    flex-flow: column;
  }
  .bld {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .sub {
    color: #c5c7cd;
    font-size: 0.85rem;
  }
  .level {
    font-size: 0.6rem;
    letter-spacing: 2px;
  }
}
</style>
