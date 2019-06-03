<template>
  <div class="status">
    <div class="status--header">
    </div>
    <div class="status--body">
      {{ $store.state.status.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'statusMessage'
}
</script>
