var userName;
var userResult;

userName = prompt("お名前を教えてください。");
if(userName == "") userName = "名無し";
document.getElementById("name").innerHTML = userName;

var rand = Math.floor(Math.random() * 5);
switch(rand)
{
    case 0:
        userResult = "大吉";
        break;
    case 1:
        userResult = "中吉";
        break;
    case 2:
        userResult = "小吉";
        break;
    case 3:
        userResult = "吉";
        break;
    case 4:
        userResult = "凶";
        break;
}

document.getElementById("result").innerHTML = userResult;