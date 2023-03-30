import { ADD_HOUSE ,CREATE_HOUSE, GET_ALL_HOUSES, GET_HOUSE ,DELETE_HOUSE} from "./Types";

export function getAllHouses(withOrWithout){
    return{
        type: GET_ALL_HOUSES,
        payload:withOrWithout
    }
}

export function getHouse(id){
    return{
        type: GET_HOUSE,
        payload:id
    }
}

export function createHouse(valores){
    return{
        type: CREATE_HOUSE,
        payload:valores
    }
}
// payload: {
//     id: 5,
//     name: "House Arryn",
//     region: "The Vale of Arryn",
//     words: "As High as Honor",
//   }

export function addhouse(){
    return{
        type: ADD_HOUSE
    }
}

export function deleteHouse(id){
    return{
        type: DELETE_HOUSE,
        payload:id
    }
}