<script lang="ts">
import Vue, {VNode} from 'vue';
const warn = (msg: string) => {
  if (!Vue.config.silent) {
    /* eslint-disable */
      console.warn(msg)
    }
  }

  export default Vue.extend({
    name: 'intersect',
    data() {
      return {
        observer: {} as IntersectionObserver
      }
    },
    props: {
      threshold: {
        type: Array as () => number[],
        required: false,
        default: () => [0, 0.2]
      },
      root: {
        type: typeof HTMLElement !== 'undefined' ? HTMLElement : Object,
        required: false,
        default: () => null
      },
      rootMargin: {
        type: String,
        required: false,
        default: () => '0px 0px 0px 0px'
      }
    },
    mounted () {
      this.observer = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) {
          this.$emit('leave', entries[0])
        } else {
          this.$emit('enter', entries[0])
        }
        this.$emit('change', entries[0])
      }, {
        threshold: this.threshold,
        root: this.root,
        rootMargin: this.rootMargin
      });

      this.$nextTick(() => {
        if (this.$slots.default && this.$slots.default.length > 1) {
          warn('[VueIntersect] You may only wrap one element in a <intersect> component.');
        } else if (!this.$slots.default || this.$slots.default.length < 1) {
          warn('[VueIntersect] You must have one child inside a <intersect> component.');
          return;
        }
        this.observer.observe(this.$slots.default[0].elm as Element);
      })
    },
    destroyed () {
      this.$emit('destroyed');
      this.observer.disconnect();
    },
    render(): VNode {
      return this.$slots.default ? this.$slots.default[0] : {} as VNode
    }
  })
</script>

