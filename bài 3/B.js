let number  = Math.floor(Math.random() * (9) + 1);
let count  = 3;
console.log(number);

 $('#check').click(function(){
	
	if($('#input_text').val() > 10 && $('#input_text').val() < 1)
	{
		alert("Dự đoán trong từ 1 đến 10, vui lòng nhập lại")
	}
	if(number == $('#input_text').val()){
		alert($('#input_text').val() + ' là kết quả đúng');
	}
	else{
        count--;
        alert("Vui lòng nhập lại đáp án")
	}
	if(count == 0){
		alert('Bạn đã hết lượt chơi');
	}
});

