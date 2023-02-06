<template>
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
    <div class="col" v-for="employee in employees" :key="employee.id">
      <div class="card">
        <div class="card-body">
          <p>Порядковый номер: {{employee.id}}</p>
          <h5 class="card-title">{{ employee.name }}</h5>
          <p class="card-text">Дата выдачи зарплаты: {{ employee.date }}</p>
          <p class="card-text">Отработанных дней: <br>{{ employee.count }}</p>
          <p class="card-text">Зарплата без налоговых отчислений: ${{ employee.salary }}</p>
          <p class="card-text">Зарплата с налоговыми отчислениями: ${{ employee.salary -calculateTax(employee.salary) }} </p>
          <button
            type="button"
            @click="deleteEmployee(employee.id)"
            class="btn btn-danger float-end"
          >Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employees: {
      type: Array
    }
  },
  methods: {
    deleteEmployee(id) {
      this.$emit('delete', id)
    },
    calculateTax(salary){
      return salary*0.15;
    }
  },
};
</script>
