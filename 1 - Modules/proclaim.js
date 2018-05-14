var whisper = (message) => {
    console.log('proclaiming: '+ message)
};

// we cannot directly assign exports.soflty an anonymous function
exports.softly = whisper;

// we cannot directly assign exports.soflty an anonymous function
exports.loudly = (message) => {
    console.log("PROCLAIMING" + message)
}