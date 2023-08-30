import axios from "axios";
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from './types';

export const get_categories = () => async dispatch => { //Funcion para hacer los llamados a redux
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };



    try{ //el await hace referencia a la espera del response cuando intentamos obtener info de un GET
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/list`, config)

        if (res.status === 200){
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_CATEGORIES_FAIL
            });
        }
    } catch(err){
        dispatch({
            type: GET_CATEGORIES_FAIL
        });
    }
}
