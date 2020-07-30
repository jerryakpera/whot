<template>
  <div class="q-pa-md">
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: 'name',
        required: true,
        label: 'Player Name',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true,
        classes: 'bg-grey-2 ellipsis',
        style: 'max-width: 80px',
        headerClasses: 'bg-secondary text-black'
      },
      { 
        name: 'calories', 
        align: 'left', 
        label: 'Played', 
        field: 'calories', 
        sortable: true,
        style: 'max-width: 30px',
        sortable: true 
      },
      { 
        name: 'fat', 
        label: 'Won', 
        field: 'fat', 
        align: 'left', 
        style: 'max-width: 30px',
        sortable: true 
      },
      { 
        name: 'carbs', 
        label: 'Lost', 
        field: 'carbs',
        align: 'left', 
        style: 'max-width: 30px',
        sortable: true
      },
      { 
        name: 'protein', 
        label: 'Points', 
        field: 'protein', 
        align: 'left', 
        style: 'max-width: 30px',
        sortable: true
      }
    ],
    data: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9
      }
    ]
  })
}
</script>