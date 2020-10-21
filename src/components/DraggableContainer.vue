<template>
  <draggable
    :list="items"
    v-bind="dragOptions"
    @start="drag = true"
    @end="drag = false"
  >
    <transition-group
      class="row"
      type="transition"
      :name="!drag ? 'flip-list' : null"
    >
      <slot></slot>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "draggable-container",
  components: {
    draggable,
  },
  props:{
    data: {
      type: Array,
      required: true
    },
    group: {
      type: String,
      required: true
    }
  },
  data: function(){
    return {
      items: this.data,
      drag: false,
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: this.group,
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
};
</script>

<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
}
</style>