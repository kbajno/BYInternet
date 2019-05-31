<template>
  <div class="board">
    <div class="column-container"
      v-for="column in columnsData"
      :key="column.name"
    >
      <Column :columnData="column" />
    </div>
    <div class="column-container">
      <div class="column">
        <div class="column-header">
          <div class="column-name">
            Add a column
          </div>
        </div>
        <vue-form-builder
          ref="form"
          v-model="model"
          :schema="schema"
          @action="onAction"
        ></vue-form-builder>
      </div>
    </div>
  </div>
</template>

<script>
import Column from './Column.vue'

export default {
  name: 'board',
  components: {
    Column
  },
  props: {
    columnsData: Array
  },
  data () {
    return {
      model: {
        name: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'input',
            label: 'Name',
            name: 'inputName',
            model: 'name',
            placeholder: 'Column name',
            readonly: false,
            disabled: false,
            validate: {
              required: true
            }
          },
          {
            type: 'actions',
            buttons: [
              {
                type: 'submit',
                buttonType: 'success',
                buttonLabel: 'Submit'
              }
            ]
          }
        ]
      }
    }
  },

  methods: {
    async onAction (e) {
      if (e.type === 'submit') { // Check if the submit button was pressed
        const res = await this.$refs.form.$validator.validate() // Check if the form is valid
        if (res) {
          // Do something
          this.$store.commit('addColumn', this.model.name)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.board {
  display: flex;
  flex-direction: row;

  padding: 16px 0;

  height: 100%;
  width: 100%;

  overflow-x: auto;

  .column-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex-shrink: 0;

    padding: 0 8px;

    width: 360px;

    &:first-child {
      padding-left: 16px;
    }

    &:last-child {
      padding-right: 16px;
    }

    input {
      margin-bottom: 5px;
      padding: 10px;

      height: 30px;
      width: 100%;

      font-size: 16px;
      border-radius: 5px;
      border: 1px solid rgb(235, 235, 235);
    }

    .vue-form__item-label {
      display: none;
    }

    button {
      // margin: 0 10px; /* Not sure about that */
      padding: 0 25px;

      height: 30px;

      font-size: 16px;
      color: #fff;
      background-color: rgb(48, 88, 232);
      border-radius: 5px;
      border: none;
    }
  }
}
</style>
