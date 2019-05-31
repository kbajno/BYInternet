<template>
  <div class="column">
    <div class="column-header">
      <div class="column-name">
        {{ columnData.name }}
      </div>
      <div class="column-buttons">
        <i class="fa fa-ellipsis-h"></i>
      </div>
    </div>
    <div v-for="link in columnData.links" :key="link.name">
      <Card :linkName="link.name" :linkUrl="link.url" />
    </div>
    <div>
      <vue-form-builder
        ref="form"
        v-model="model"
        :schema="schema"
        @action="onAction"
      ></vue-form-builder>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'column',
  components: {
    Card
  },
  props: {
    columnData: Object
  },
  data () {
    return {
      columnName: this.columnData.name,
      model: {
        name: '',
        url: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'input',
            label: 'Name',
            name: 'inputName',
            model: 'name',
            placeholder: 'Name',
            readonly: false,
            disabled: false,
            validate: {
              required: true
            }
          },
          {
            type: 'input',
            inputType: 'input',
            label: 'Name',
            name: 'inputUrl',
            model: 'url',
            placeholder: 'URL',
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
      if (e.type === 'submit') {
        const res = await this.$refs.form.$validator.validate()
        if (res) {
          console.log(this.model)
          this.$store.commit('addLink', {
            name: this.columnName,
            link: this.model
          })
        }
      }
    }
  }
}
</script>

<style lang="scss">
.column {
  padding: 10px;

  height: 100%; // Full height column

  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgb(220, 220, 220);

  overflow-y: auto;

  .column-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    margin: 0 10px;
    padding: 5px 0;

    font-weight: bold;
  }
}
</style>
