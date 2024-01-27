export const getNextId = (data) => {
    return data.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
};
