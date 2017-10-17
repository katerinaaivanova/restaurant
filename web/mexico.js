function calc(dayNum) { 

var number = parseInt($("#number").val()); 
var res = 0;
  
  // ������� ������������� ���������
$( "#date-of-booking" ).datepicker({  
    dateFormat: "dd.mm.yy",
    minDate: new Date(),
    firstDay: 1,
    onSelect: function(dateText, inst) {
        var curDate = dateText.split('.');
        getDayNumber(curDate);  
    }
});
  
  
if (dayNum == 6 || dayNum == 0) { 
res = number*700; 
} else { 
res = number*500; 
} 

if ($("#card").is(":checked")) { 
res *= 0.95; 
} 

$("#result").text(res); 
  
} 

// �������� calc() ��� ����� ��������� �������� �� ������� ����� 
$("#booking").change(calc); 

// ������� calc() ���� ��� ����� �������� �������� 
calc();


function getDayNumber(curDate){
    // �������� �� ���� ����� ���������� ��� ������
    var cDay = parseInt(curDate[0], 10);
    var cMonth = parseInt(curDate[1], 10) - 1;
    var cYear = parseInt(curDate[2], 10);
    var dateObj = new Date(cYear, cMonth, cDay);
    var dayNum = dateObj.getDay();
    calc(dayNum);
}
