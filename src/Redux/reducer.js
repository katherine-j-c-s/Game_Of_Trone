import {ADD_HOUSE ,GET_ALL_HOUSES, GET_HOUSE, CREATE_HOUSE, DELETE_HOUSE} from './Actions/Types'
import {onlyHouses} from '../houses1'
import {housesWithChar} from '../houses'
import {characters} from '../characters'

const initialState = {
    houses:[],
    house:{},
    housesLength: 3,
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
                house: {...state.housesWithChar[Number(payload)]}
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
                housesLength: state.housesLength + 1
            }
        case DELETE_HOUSE:
            const newListHouse = state.houses.filter((c)=> c.id !== payload)
            return{
                ...state,
                houses: newListHouse
            }
        default:
            return state
    }
}