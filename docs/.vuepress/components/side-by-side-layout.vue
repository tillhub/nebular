<template>
  <div ref="container" class="side-by-side-container">
      <v-nodes :vnodes="blocks" :style="{ width: `${Math.floor(100 / blocks.length)}%`, background: 'red'}" />
    </div>
</template>

<script>
  export default {
  computed: {
    blocks: function () {
      return this.$slots.default
    },
  },
    mounted() {

    },
components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => {
        if (!ctx.props.vnodes || !ctx.props.vnodes.length) return
        const nodes = ctx.props.vnodes.filter((item) => item && item.tag).map((item) => {
          return {
            ...item
          }
        })

      // ctx.props.vnodes.forEach((node, index, array) => {
      //   if (node.tag === 'p' && nodes.length && nodes[nodes.length - 1] && nodes[nodes.length - 1].tag === 'p') {
      //     if (nodes[nodes.length - 1].merged !== true) {
      //       const elem = h('p', {}, [ nodes[nodes.length - 1], node ])
      //       elem.merged = true
      //       nodes[nodes.length - 1] = elem
      //     } else {
      //        const elem = h('p', {}, [ ...nodes[nodes.length - 1].children, node ])
      //         elem.merged = true
      //        nodes[nodes.length - 1] = elem
      //     }
      //   } else {
      //     nodes.push(node)
      //   }
      // })

        return nodes
      }
    }
}
}
</script>

<style lang="css" scoped>
.side-by-side-container {
  display: flex;
  justify-content: space-between;
}

.side-by-side-container > * {
  flex-grow: 1;
  flex-basis: 100%;
}
</style>
