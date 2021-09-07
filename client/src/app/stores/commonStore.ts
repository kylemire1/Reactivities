import { makeAutoObservable, reaction } from 'mobx'
import { JWT_KEY } from '../common/constants'
import { ServerError } from '../models/serverError'

export default class CommonStore {
  error: ServerError | null = null
  token: string | null = window.localStorage.getItem('jwt')
  appLoaded = false

  constructor() {
    makeAutoObservable(this)

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem(JWT_KEY, token)
        } else {
          window.localStorage.removeItem(JWT_KEY)
        }
      }
    )
  }

  setServerError = (error: ServerError) => {
    this.error = error
  }

  setToken = (token: string | null) => {
    this.token = token
  }

  setAppLoaded = () => {
    this.appLoaded = true
  }
}
