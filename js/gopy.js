
function kt(){
	var mail=document.gopy.email.value;
	
	if(mail.length==0)
	{
		window.alert('ban chua nhap email');
		window.document.gopy.email.focus();
		return false;
	}
	
}
function pt(){
	var mail=document.gopy.Tênđăngnhập.value;
	
	if(mail.length==0)
	{
		window.alert('ban chua nhap tên đăng nhập');
		window.document.gopy.email.focus();
		return false;
	}
}