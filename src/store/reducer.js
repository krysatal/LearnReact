const defaultState = {
    inputValue: '',
    list: [
        '按摩',
        '推背',
        '洗脚'
    ]
}
export default (state = defaultState, action) =>{
    if(action.type === 'change_input_value'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'add_item_list') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'delete_item_list') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}