import { PROFILE_DATA_LOADED, PROFILE_DATA_LOAD_STARTED } from ".";

export const profileDataLoadingStarted = () => dispatch => {
	dispatch({
		type: PROFILE_DATA_LOAD_STARTED,
		payload: {}
	});
};
export const profileDataRetrieved = data => dispatch => {
	dispatch({
		type: PROFILE_DATA_LOADED,
		payload: data
	});
};
