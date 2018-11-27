import { PROFILE_DATA_LOADED, PROFILE_DATA_LOAD_STARTED } from "../actions";

export default (state = {}, action) => {
	switch (action.type) {
		case PROFILE_DATA_LOAD_STARTED:
			return store;
		case PROFILE_DATA_LOADED:
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				email: action.payload.email,
				status: action.payload.status,
				reputation: action.payload.reputation,
				userGroups: action.payload.userGroups,
				reputation: action.payload.reputation
			};
		default:
			return state;
	}
};
