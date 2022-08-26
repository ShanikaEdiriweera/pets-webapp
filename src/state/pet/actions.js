import {
  FETCH_PETS_REQUEST,
  FETCH_PETS_SUCCESS,
  FETCH_PETS_FAILURE,
} from "./constants";
import { request } from "../../services/HttpService";

// Action Creators
/**
 * Fetch pets list
 */
export const fetchPets = () => async (dispatch) => {
  dispatch(fetchPetsRequest());
  try {
    const response = await request("GET", "pets", null);
    dispatch(fetchPetsSuccess(response.pets));
  } catch (err) {
    console.log("fetchPets error: ", err);
    dispatch(fetchPetsFailure(err));
  }
};

// Actions
const fetchPetsRequest = () => ({ type: FETCH_PETS_REQUEST });

const fetchPetsSuccess = (pets) => ({
  type: FETCH_PETS_SUCCESS,
  payload: pets,
});

const fetchPetsFailure = (error) => ({
  type: FETCH_PETS_FAILURE,
  payload: error,
});
