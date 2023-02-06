<template>
  <div class="row">
      <div class="col d-flex justify-content-center mt-3">
        <form class="w-50" action="">
          <div class="mb-3">
            <label for="name" class="form-label">Ф.И.О. сотрудника</label>
            <input type="text" v-model="name" class="form-control" :class="{'is-invalid':!name}" id="name" />
            <div id="name" class="invalid-feedback">
              Введите верное Ф.И.О.
            </div>
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">Дата выдачи зарплаты</label>
            <input type="date" v-model="date" class="form-control" :class="{'is-invalid':!date}" id="date" />
            <div id="date" class="invalid-feedback">
              Введите верную дату
            </div>
          </div>
          <div class="mb-3">
            <label for="count" class="form-label">Количество отработанных дней </label>
            <input
              type="text"
              v-model="count"
              class="form-control"
              id="count"
              :class="{'is-invalid':!count}"
            />
            <div id="count" class="invalid-feedback">
              Введите верное количество
            </div>
          </div>
          <div class="mb-3">
            <label for="salary" class="form-label"
              >Размер заработной платы сотрудника
            </label>
            <input
              type="text"
              v-model="salary"
              class="form-control"
              id="salary"
              :class="{'is-invalid':!salary}"
            />
            <div id="salary" class="invalid-feedback">
              Введите верный размер заработной платы
            </div>
          </div>
          <div>
            <button
              @click="add"
              @mouseover="hover"
              type="button"
              class="btn position-relative btn-success anim"
              :class="{right: btnClass}"
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      date: ``,
      salary: 0,
      count: 0,
      btnClass: true
    }
  },
  props:{
    nextId:0
  },
  methods: {
    add() {
      if (this.name && this.date && this.salary && this.count) {
        let product = {
          id: this.nextId,
          name: this.name,
          date: this.date,
          salary: parseInt(this.salary),
          count: parseInt(this.count),
        }
        this.$emit("add",product);
        this.name = "";
        this.date = ``;
        this.salary = 0;
        this.count = 0;
      } else alert("Введите верные значения");
    },
    hover(){
      if (this.name && this.date && this.salary && this.count) console.log('f');
      else{
        this.btnClass = !this.btnClass
      }
    }
  },
}
</script>

<style>
.anim{
  transition: all 0.3s ease;
}
.right{
  margin-left: 100%;
  transform: translateX(-100%);
}
</style>