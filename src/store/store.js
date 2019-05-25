import AppStateClass from './appState'

export const AppState = AppStateClass

export default {
  AppState: AppStateClass
}

export const createStoreMap = () => {
  return {
    appState: new AppStateClass()
  }
}
