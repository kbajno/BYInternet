<template>
  <div class="mask">
    <div class="modal">
      <i class="fa fa-close" @click="$emit('close')"></i>
      <div class="modal--header">
        <slot name="header"></slot>
      </div>
      <div class="modal--body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>
