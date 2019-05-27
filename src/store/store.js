import AppStateClass from './appState'

const getState = initState => new AppStateClass(initState)

export {getState}
