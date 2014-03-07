var items = [
  "announcements",
  "schedule",
  "assignments",
  "policies",
  "other"
];

function toggleItem(itemName)
{
	var item = document.getElementById(itemName);
	var itemtoggle = document.getElementById(itemName.concat("toggle"));
	if(item.style.display == "none")
	{
        localStorage.setItem(item.id, "expanded");
		item.style.display = "";
		itemtoggle.innerHTML = "&#8722";
	}
	else
	{
        localStorage.setItem(item.id, "collapsed");
		item.style.display = "none";
		itemtoggle.innerHTML = "+";
	}
}


function hideAll()
{
	for(var i in items)
	{
        if(items.hasOwnProperty(i))
		{
			var item = document.getElementById(items[i]);
			item.style.display = "none";
		}
        if(localStorage.getItem(items[i]) == "expanded")
            toggleItem(items[i]);
    }
}
