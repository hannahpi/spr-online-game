//Action
function Action(name, type, imageSrc) {
    this.name = name;
    this.type = type;
    this.image = new Image();
    this.image.src = imageSrc;

    this.setNewImage = function (imageSrc) {
        this.image.src = imageSrc;
    }

    this.setImage = function (image) {
        this.image = image;
    }

    this.getImage = function() {
        return this.image;
    }
}

/* I can't remember where I was going with this exactly... I remember
 * thinking that these were actions available... perhaps these were
 * just meant to be hooked up to a javascript function so a user could
 * use them.
 */
let actions = new Array();
actions.push(new Action("rock", "playerAction", "img/rock.jpg"));
actions.push(new Action("paper", "playerAction", "img/paper.jpg"));
actions.push(new Action("scissors", "playerAction", "img/scissors.jpg"));
actions.push(new Action("3", "countdown", "img/3.jpg"));
actions.push(new Action("2", "countdown", "img/2.jpg"));
actions.push(new Action("1", "countdown", "img/1.jpg"));
actions.push(new Action("shoot", "countdown", "img/shoot.jpg"));
actions.push(new Action("selectAction", "gameMode", ""));
actions.push(new Action("findMatch", "gameMode", ""));

//look up an action
function actionLookup(name) {
    for (action:actions) {
        if (action.name === name)
            return action;
    }
    return new Action("none", "none", null);  //action not found.
}

//Message
function Message(text, type) {
    this.text = text;
    this.type = type;
}

//GameMode
function GameMode(name, type, msgTypes) {
    this.name = name;
    this.type = type;
    this.msgTypes = msgTypes;
}

//Player
function Player(name, id) {
    this.name = name;
    this.action = new Action("none", "none", null);
    this.id = id;
    this.rating = rating;

    this.setAction = function (newAction) {
        this.action = newAction;
    }

    this.setConnection = function (setConnection) {
        this.connection = setConnection;
    }
    this.sendMessage = function (newMessage) {
        var msg = new Message(newMessage,"chat");
        this.connection.sendMessage(newMessage);
    }
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
