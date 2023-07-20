import {ADD_HOUSE ,GET_ALL_HOUSES, GET_HOUSE, CLEAR_HOUSE, CREATE_HOUSE} from './Actions/Types'
import {onlyHouses} from '../houses1'
import {housesWithChar} from '../houses'
import {characters} from '../characters'

const initialState = {
    houses:[],
    house:{},
    housesCreateID: 4,
    characters: characters,
    onlyHouses: onlyHouses,
    housesWithChar: housesWithChar 
}

export default function rootReducer(state=initialState, {type, payload}){
    switch (type) {
        case GET_ALL_HOUSES:
            if (payload === "withChar") {
                return{
                    ...state,
                    houses: [...state.housesWithChar]
                }
            }else if (payload === "withoutChar") {
                return{
                    ...state,
                    houses: [...state.onlyHouses]
                }
            }
        case GET_HOUSE:
            return{
                ...state,
                house: {...state.housesWithChar[Number(payload - 1)]}
            }
        case CLEAR_HOUSE:
            return{
                ...state,
                house: {}
            }
        case CREATE_HOUSE:
            return{
                ...state,
                housesWithChar: [...state.housesWithChar, payload],
                onlyHouses: [...state.onlyHouses, payload],
                house: {...state.house, payload}
            }
        case ADD_HOUSE:
            return{
                ...state,
                housesCreateID: state.housesCreateID + 1
            }
        default:
            return state
    }
}