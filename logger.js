export default function logger(reducer) {
    return (preState, action, args) => {
        console.group(action)
        console.log('Pre State:', preState)
        console.log('Action Arguments:', args)
        const nexState = reducer(preState, action, args)
        console.log('Next State:', nexState)
        
        console.groupEnd()
        return nexState
    }
}