export const tasks = {
    namespaced: true,
    state: {
        tasks: []
    },
    mutations: {
        increment1: function (state) {
            state.count++
        }
    },
    actions: {
        incrementOne: function(context){
            context.commit('increment1')
        }
    }
}