var db = [
    {
        username: "d",
        pass: "secretly"
    },
    {
        username: "sally",
        pass: "444"
    },
    {
        username: "looper",
        pass: "1"
    }
];

var newsFeed = [
    {
        username: "ddd",
        comment: "hahaha"
    },
    {
        username: "shiii dyadya",
        comment: "damnson"
    }
];
var userNamePrompt = prompt("Wacha name?");
var passPrompt = prompt("Wacha pass?");

function ifUserIsValid(usr, psw) {
    for (var i = 0; i < db.length; i++) {
        if (usr === db[i].username && psw === db[i].pass) {
            return true;
        }
    }
    return false;
}
function signIn(usr, psw){
    if (ifUserIsValid(usr,psw)){
        console.log(newsFeed);
    } else alert("Wrong shit dyadya.")
}

signIn(userNamePrompt, passPrompt);