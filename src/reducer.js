import { TOGGLE_SIDEBAR } from "./actions";

const initialState = {
    location: "Warsaw",
    weather: { temperature: 20, type: "cloudy" },
    date: null,
    isSidebarOpen: false,
};

export default (state = initialState, { type, payload }) => {
    if (type === TOGGLE_SIDEBAR) {
        return { ...state, isSidebarOpen: !state.isSidebarOpen };
    }

    return state;
};
