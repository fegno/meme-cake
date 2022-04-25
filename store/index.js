export const state = () => ({
  user: {
    name: "Siby",
  },
});
export const mutations = {
  SIGN_IN(state, user) {
    state.user = user;
  },
  SIGN_OUT() {
    state.user = null;
  },
};
