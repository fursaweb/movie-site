export const saveState = state => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
};

export const loadState = () => {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
        return undefined;
    } else {
        return JSON.parse(serializedState);
    }
};
