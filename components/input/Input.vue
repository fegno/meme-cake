<template>
  <div class="input_block">
    <div class="label">
      <label :for="name">{{ label }}</label>
    </div>
    <div class="input">
      <input
        :type="type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        @change="onChange"
        @keyup="onChange"
        :value="value"
      />
    </div>
  </div>
</template>

<style scoped>
.input_block {
  width: 100%;
}
.input_block .label {
  width: 100%;
  display: block;
}
.input_block .label label {
  font-weight: 500;
}
.input_block .input {
  width: 100%;
  display: block;
}
.input_block .input input {
  border-radius: 25px;
  width: 100%;
  border: solid 1px #dcdcdc;
  padding: 8px 15px;
}
</style>
<script>
export default {
  props: ["name", "placeholder", "type", "label", "onChange", "value"],
};
</script>
