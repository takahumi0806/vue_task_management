<template>
  <div class="edit-form">
    <table>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
        <th>   </th>
      </tr>
      <tr v-for='(item, key) in done' :key="key">
        <td>{{item.id}}</td>
        <td> {{item.item}}</td>
        <td><button @click='doStatus(item.id)'>{{item.status}}</button></td>
        <td><button @click='doDelete(item.id)'>削除</button></td>
      </tr>
      </table>
      <h2>新規タスクの追加</h2>
      <input v-model='task'>
      <button @click="doAdd(task)">追加</button>
    
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data: function () {
    return {
      task: ''
    }
  },
  computed: {
    done() {
      return this.$store.getters.getDone('完了')
    },
  },
  methods: {
    doAdd() {
      this.$store.dispatch('doAdd', this.task)
      this.task= '';
    },
    doStatus(id) {
      this.$store.dispatch('doStatus', id)
    },
    doDelete(id) {
      this.$store.dispatch('doDelete', id)
    }
  }
}
</script>
