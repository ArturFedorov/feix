import Vue from 'vue';

// Local Components
import SvgIcon from './SvgIcon/SvgIcon.vue';

import leadingZero from './filters/lead-zero.filter';

const components: { [key: string]: {} } = {
  SvgIcon
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);

Vue.filter('leadingZero', leadingZero);
