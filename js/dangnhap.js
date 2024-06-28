function KiemTra()
{

	var ten = window.document.dangky.txtTenDN.value;
	var mk = window.document.dangky.txtMatKhau.value;
	var ad= "ptp";
	var ad1= "ptp123";
	
if(ten!=ad)
	{
		window.alert(" Ban nhap sai ten tài khoản ");
		window.document.dangky.txtTenDN.focus();
		return false;
	}

	if (mk!==ad1)
		{
		window.alert("Mật khẩu sai");
		document.dangky.txtMatKhau.focus();
		return false;
	 
		}
	
	else if (mk=ad1)
	window.alert("ĐĂNG NHẬP THÀNH CÔNG");
   
}