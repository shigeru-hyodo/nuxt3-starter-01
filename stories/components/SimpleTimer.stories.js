import SimpleTimer from '~~/components/SimpleTimer.vue';

export default {
  title: 'コンポーネント',
  component: SimpleTimer,
};

const Template = _args => ({
  components: { SimpleTimer },
  template: '<SimpleTimer />',
});

export const simpleTimer = Template.bind({});
