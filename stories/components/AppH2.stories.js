import AppH2 from '~~/components/AppH2.vue';

export default {
  title: 'コンポーネント/基底コンポーネント',
  component: AppH2,
};

const Template = _args => ({
  components: { AppH2 },
  template: '<AppH2>heading</AppH2>',
});

// ファイル名の先頭小文字表現だと小見出しが作られない。
// 逆に、export const Primary = xxxx など先頭大文字の変数名で
// exportすると、その変数名に応じた小見出しが作られる。
export const appH2 = Template.bind({});
