<template>
  <v-card>
    <v-img
      class="white--text align-end"
      height="190px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Super App</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Total views</th>
              <th class="text-left">New views</th>
              <th class="text-left">Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in apps" :key="item.id">
              <td>{{ item.total }}</td>
              <td>{{ item.new }}</td>
              <td>{{ item.sales }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "popular-app",
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      apps: [
        {
          id: "a",
          total: "5,000",
          new: "200",
          sales: "2,987",
        },
        {
          id: "a",
          total: "5,000",
          new: "200",
          sales: "2,987",
        },
        {
          id: "a",
          total: "5,000",
          new: "200",
          sales: "2,987",
        },
        {
          id: "a",
          total: "5,000",
          new: "200",
          sales: "2,987",
        },
      ],
      widget: this.data,
    };
  },
};
</script>