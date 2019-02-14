import { combineReducers } from 'redux'

import { reducer as moneyReducer } from '@front/domain/money/reducer'
import { reducer as userReducer } from '@front/domain/user/reducer'

import { State } from './State'

export const reducer = combineReducers<State>({
  user: userReducer,
  money: moneyReducer,
})
