const consoles = {};

consoles.assert = (message) => {
    if (__DEV__) {
        console.assert(message);
    }
};
consoles.count = (message) => {
    if (__DEV__) {
        console.count(message);
    }
};
consoles.debug = (message) => {
    if (__DEV__) {
        console.debug(message);
    }
};
consoles.dir = (message) => {
    if (__DEV__) {
        console.dir(message);
    }
};
consoles.dirxml = (message) => {
    if (__DEV__) {
        console.dirxml(message);
    }
};
consoles.error = (message) => {
    if (__DEV__) {
        console.error(message);
    }
};
consoles.exception = (message) => {
    if (__DEV__) {
        console.exception(message);
    }
};
consoles.group = (message) => {
    if (__DEV__) {
        console.group(message);
    }
};
consoles.groupCollapsed = (message) => {
    if (__DEV__) {
        console.groupCollapsed(message);
    }
};
consoles.info = (message) => {
    if (__DEV__) {
        console.info(message);
    }
};
consoles.log = (message) => {
    if (__DEV__) {
        console.log(message);
    }
};
consoles.warn = (message) => {
    if (__DEV__) {
        console.warn(message);
    }
};

module.exports = consoles;
