export const isNull = (text) => {
    return text === null || typeof (text) === 'undefined';
};

export const isEmpty = (text) => {
    return isNull(text) || text === '';
};


