import Vue from 'vue';

// Local Components
import SvgIcon from './SvgIcon/SvgIcon.vue';
import Logo from './logo/Logo.vue';
import IntersectionObserver from '@/components/common/abstract/IntersectionObserver.vue';
import TextLabel from '@/components/common/TextLabel/TextLabel.vue';

import leadingZero from './filters/lead-zero.filter';

const components: { [key: string]: {} } = {
  IntersectionObserver,
  Logo,
  SvgIcon,
  TextLabel
};

Object.keys(components).forEach(componentName =>
  Vue.component(componentName, components[componentName])
);

Vue.filter('leadingZero', leadingZero);
