export const new_task = {
    namespaced: true,
    state: {
        new_task: ''
    },
    mutations: {
        increment2: function (state) {
            state.count++
        }
    },
    actions: {
        incrementTwo: function(context){
            context.commit('increment2')
        }
    }
}