let string = ""

function shout(string) {
    return string.toUpperCase();
};

function whisper(string) {
    return string.toLowerCase();
};

function logWhisper(string) {
    console.log(string.toLowerCase());
};

function logShout(string) {
    console.log(string.toUpperCase());
};

const soft = "I can't hear you!";
const loud = "YES INDEED!";
const loveTo = "I would love to!";

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        return soft;
    } else if (string === string.toUpperCase()){
        return loud;
    } else if (string === "Let's have dinner together!"){
        return loveTo;
    };
}