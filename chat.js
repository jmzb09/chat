var messageInputElement;
var userName;

window.onload = function()
{
    window.addEventListener("storage", newMessageCame, false);
    document.forms[0].addEventListener("submit", add_message, false);

    messageInputElement = document.getElementsByTagName("textarea")[0];
    userName = document.location.hash.substring(1);
    restore();
}

function messageHTMLElement(message)
{
    var elt = document.createElement("div");
    elt.className = "message";
    elt.innerHTML = "<strong>" + message.user + "</strong> " + message.date
                    + "<p>" + message.text + "</p>"

    return elt;
}

function add_message()
{
    var datetime = new Date().toGMTString();
    var message = { text : messageInputElement.value, date : datetime, user : userName };
    messageInputElement.value = "";
    document.body.appendChild(messageHTMLElement(message)); 
    save(message);
    return false;
}

function save(message)
{
    var cnt = localStorage.messageCount++;
    localStorage["message" + cnt] = JSON.stringify(message);
}

function newMessageCame(ev)
{
    if (ev.key != "messageCount") {
        document.body.appendChild(messageHTMLElement(JSON.parse(ev.newValue))); 
    }
}

function restore()
{    
    localStorage.messageCount = localStorage.messageCount || 0;
    var cnt = parseInt(localStorage.messageCount);
    for (var i = 0; i < cnt; ++i) {
        document.body.appendChild(messageHTMLElement(JSON.parse(localStorage["message" + i])));
    }
}





