function action(){
	var str = document.getElementById('input').value;
	var rev = "";

	for(var i=str.length-1;i>=0;i--){
		rev = rev.concat(str.charAt(i));
	}

	if(rev===str){
		document.getElementById('res').innerHTML = "'"+str+"' is a palindrome word/phrase."
	}
	else{
		document.getElementById('res').innerHTML = "'"+str+"' is not a palindrome word/phrase."
	}
}