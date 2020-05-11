export const tasks = {
    namespaced: true,
    state: {
        tasks: []
    },
    mutations: {
        increment: function (state) {
            state.count++
        }
    },
    actions: {
        incrementOne: function(context){
            context.commit('increment')
        }
    }
}