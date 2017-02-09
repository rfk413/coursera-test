var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;
	
	//make js work in internet explorer
	if(window.ActiveXObject) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			xmlHttp = false;
		}
	} else {
		try {
			xmlHttp = new XMLHttpRequest();
		} catch (e) {
			xmlHttp = false;
		}
	}
	
	if (!xmlHttp)
		alert("can\'t create that object!!!!");
	else 
		return xmlHttp;
	
}

//takes variable in the input (on load) and sends it to the server
function process() {
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4) {
		//0 or 4 are the states that say that the server isn't busy--
		//the object is free and you can communicate with the server
		food = encodeURIComponent(document.getElementById("userInput").value());
		xmlHttp.open("GET","foodstore.php?food=" + food,true);
		//.open creates the type of request that we want
		//now 
		xmlHttp.onreadystatechange = handleServerResponse;
		//now we need to send the request
		xmlHttp.send(null);
		//when using post, we don't .send null
	} else {
		setTimeout('process()',1000);
	}
}


function handleServerResponse() {
	if(xmlHttp.readyState==4) {
		if(xmlHttp.status==200) {
			xmlResponse = xmlHttp.responseXML;
			xmlDocumentElement = xmlResponse.documentElement;
			message = xmlDocumentElement.firstChild.data;
			document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
			setTimeout('process()',1000);
		} else {
			alert('Something went wrong in handleServerResponse');
		}
	}
}
