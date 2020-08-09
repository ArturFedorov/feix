<template>
  <div class="navigation">
    <a
      class="navigation-trigger"
      @click="toggleSideNavigation">
      <h3>menu</h3>
      <SvgIcon
        class="navigation-icon"
        name="menu_icon"/>
    </a>
    <div
      class="navigation-content"
      :class="{'is-opened': sideNavigationOpened}">
        <div class="navigation-section">
          <a
            class="navigation-close"
            @click="toggleSideNavigation">
            <SvgIcon
              class="navigation-icon is-close"
              width="30"
              height="30"
              name="close"/>
          </a>
        </div>

        <div class="navigation-section with-margin is-full-height">
          <div class="navigation-column">
            <div>
              <p class="is-secondary is-caption navigation-label">
                Socials
              </p>
              <router-link
                v-for="link in socials"
                :key="link.label"
                :to="link.url"
                target="_blank"
                class="navigation-link is-flex is-caption">
                {{ link.label }}
              </router-link>
            </div>

            <div class="navigation-contact">
              <p class="is-secondary is-caption">
                Get in touch
              </p>
              <a class="navigation-text is-caption">
                feix@t-systems.com
              </a>
            </div>
            <div>
              <p class="is-secondary is-caption">
                Powered by
              </p>
              <SvgIcon
                class="navigation-text"
                name="cheeta"
                width="110"
                height="16"/>
            </div>
          </div>
          <div class="navigation-column">
            <div>
              <p class="is-secondary is-caption navigation-label">
                Menu
              </p>
              <router-link
                v-for="link in links"
                :key="link.label"
                :to="link.url"
                class="navigation-link"
                :class="{'with-border': link.label === 'Contact'}">
                <h2>{{link.label}}</h2>
              </router-link>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {navigationMixin} from '@/components/common/mixins/navigation.mixin';

export default Vue.extend({
  name: 'Navigation',
  mixins: [navigationMixin],
  data() {
    return {
      socials: [
        {label: 'Facebook', url: '/'},
        {label: 'Instagram', url: '/'},
        {label: 'Cheeta', url: '/'}
      ],
      links: [
        {label: 'Cases', url: '/'},
        {label: 'About', url: '/'},
        {label: 'Contact', url: '/'}
      ]
    }
  },
});
</script>

<style lang="scss" scoped>
  $content-width: 765px;
  $padding-bottom: 160px;

  .navigation {
    display: flex;
    align-items: center;
    position: relative;

    &-close {
      display: flex;
      cursor: pointer;
      margin-left: auto;
    }

    &-column {
      display: flex;

      flex-direction: column;
      width: 50%;
    }

    &-contact {
      margin: auto 0 $building-unit-x6 0;
    }

    &-content {
      display: flex;
      flex-direction: column;
      background-color: $white;
      width: 10px;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      transition: padding 0.6s ease-in-out, transform 0.7s ease-out, width 0.8s ease-out;
      transform: translate(100%, 0);
      padding: $building-unit-x9 0 $padding-bottom 0;

      &.is-opened {
        transform: translate(0%, 0);
        padding: $building-unit-x9 $building-unit-x10 $padding-bottom $building-unit-x10;
        width: $content-width;
      }
    }

    &-icon {
      stroke: $black;
      margin-left: $building_unit;

      &.is-close {
        position: relative;
        z-index: 3;
      }
    }

    &-label {
      margin-bottom: $building-unit-x7;
    }

    &-link {
      display: inline-block;

      &:not(:last-child) {
        margin-bottom: $building-unit-x2;
      }

      &.with-border {
        border-bottom: 1px solid $black;
      }

      &.is-flex {
        display: flex;
      }
    }

    &-section {
      display: flex;

      &.is-full-height {
        flex: 2;
      }

      &.with-margin {
        margin-top: $building-unit-x8;
      }
    }

    &-text {
      display: flex;
      margin-top: $building-unit;
    }

    &-trigger {
      display: flex;
      cursor: pointer;
      align-items: center;
    }
  }

  .svg-icon-cheeta {
    fill: $black;
  }
</style>
