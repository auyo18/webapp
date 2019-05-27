import {action, computed, observable} from 'mobx'
import {getSiteInfo} from "../api/site"
import {getArticleList} from "../api/article"

export default class AppState {
  constructor({count, name, homeArticleList, siteInfo} = {
    count: 0,
    name: 'JaMie!',
    homeArticleList: [],
    siteInfo: {}
  }) {
    this.count = count
    this.name = name
    this.homeArticleList = homeArticleList
    this.siteInfo = siteInfo
  }

  @observable count
  @observable name
  @observable homeArticleList
  @observable siteInfo

  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }

  @action add() {
    this.count += 1
  }

  @action setArticleList() {
    return new Promise((resolve, reject) => {
      getArticleList().then(response => {
        const {code, result} = response
        if (code === 0) {
          this.homeArticleList = result
        }
        resolve(response)
      }).catch(
          error => {
            reject(error)
          }
      )
    })
  }

  @action setSiteInfo() {
    return new Promise((resolve, reject) => {
      getSiteInfo().then(response => {
        const {code, result} = response
        if (code === 0) {
          this.siteInfo = result
        }
        resolve(response)
      }).catch(
          error => {
            reject(error)
          }
      )
    })
  }

  @action changeName(name) {
    this.name = [name]
  }
}
