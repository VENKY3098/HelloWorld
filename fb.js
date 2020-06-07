var database =[ 
	{
		username: "sahil",
		password: "gupta"
	},
	{
		username : "lucky",
		password: "777"
	}, 
	{
		username : "samir",
		password: "111"
	}
];

var newsfeed = [
	{
		username: "bobby",
		timeline : "Having lunch"
	},
	{
		username: "joey",
		timeline: "how you doing"
	}
];
var promptuser = prompt("What's your username?");
var promptpswd = prompt("What's your password?");

function IsUserValid(user,pswd){
	for(var i =0; i< database.length; i++){
		if (user === database[i].username &&	pswd === database[i].password) 
		{
			return true;
		}
	}
	return false;
}

function signin(username,password)
{
	if(IsUserValid(username,password))
	{
		console.log(newsfeed);
	}
	else
	{
		console.log("Sorry! Wrong username and password");
	}
}

signin(promptuser,promptpswd);