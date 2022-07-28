function showInfo(id, content) {
   document.getElementById(id).innerHTML = content;
}

/*  
    ASSUMING
        - Tổng số nguyên dương > 10000 và số nguyên dương này phải nhỏ nhất || 1 + 2 + ... + n > 10000

    INPUT
        - Tạo biến sum để gán giá trị là tổng của các số nguyên dương từ 0 đến n
        - Tạo biến n sử dụng làm bước nhảy
    
    HANDLE
        - Sử dụng vòng lặp với điều kiện dừng là tổng các số nguyên dương từ 1 - n > 10000
        - Mỗi vòng thoả điều kiện chạy thì bước nhảy n++
        
    OUTPUT
        - Hiển thị giá trị của n ra div có id showResult
*/
function findInteger() {
   let n = 0;
   let sum = 0;

   while (sum < 10000) {
      n++;
      sum += n;
   }

   showInfo("showResult", "<p>Số nguyên dương nhỏ nhất n: " + n + "</p>");
}

/*  
    ASSUMING
        - End user nhập vào 2 số x và n
        - Tìm tổng của x + x^2 + ... + x^n

    INPUT
        - Tạo biến number để gán giá trị từ input có id number
        - Tạo biến squared để gán giá trị từ input có id squared
        - Tạo biến sum để nhận giá trị tổng của x + x^2 + ... + x^n
        - Tạo hàm squaredX nhận 2 param và x và n sau đó return về x^n
    
    HANDLE
        - Sử dụng vòng lặp với điều kiện chạy <= n
        - Với mỗi vòng lặp sẽ cộng dồng giá trị vào biến sum
        
    OUTPUT
        - Hiển thị giá trị của sum ra div có id showResult1
*/
function squaredX(number, squared) {
   return Math.pow(number, squared);
}

function calc1() {
   let number = +document.getElementById("number").value;
   let squared = +document.getElementById("squared").value;

   let sum = 0;

   for (let i = 1; i <= squared; i++) {
      sum += squaredX(number, i);
   }

   showInfo(
      "showResult1",
      "<p>Tổng của " +
         number +
         " + ... + " +
         number +
         "^" +
         squared +
         " : " +
         sum +
         "</p>"
   );
}

/*  
    ASSUMING
        - End user nhập vào n với n là số cần tìm giai thừa

    INPUT
        - Tạo biến number1 để gán giá trị từ input có id number1
        - Tạo biến sum để nhận giá trị tổng của 1*2*...n
    
    HANDLE
        - Sử dụng vòng lặp với điều kiện chạy <= number1
        - Với mỗi vòng lặp number1 sẽnhân với giá trị hiện tại của biến sum sau đó gán lại biến sum
        
    OUTPUT
        - Hiển thị giá trị của sum ra div có id showResult2
*/
function findfactorial() {
   let number1 = +document.getElementById("number1").value;
   let sum = 1;

   for (let i = 1; i <= number1; i++) {
      sum *= i;
   }

   showInfo("showResult2", "<p>Giai thừa của " + number1 + ": " + sum + "</p>");
}

/*  
    ASSUMING
        - Khi end user click vào btn sẽ hiển thị 10 div tag và tương ứng lới chẳn thì bgc: đỏ còn lẻ là bgc: xanh

    INPUT
    
    HANDLE
        - Sử dụng vòng lặp với điều kiện chạy < 10
        - Nếu i % 2 === 0 thì tạo div tag có bgc: red
        - Nếu i % 2 !== 0 thì tạo div tag có bgc: xanh
        
    OUTPUT
        - Hiển thị kết quả ra div có id showDivTag
*/
function showDivTag() {
   let showDiv = "";
   for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
         showDiv +=
            '<span class="d-block p-2 bg-danger text-white"> Div chẵn ' +
            i +
            "</span>";
      } else {
         showDiv +=
            '<span class="d-block p-2 bg-primary text-white"> Div lẻ ' +
            i +
            "</span>";
      }
   }

   showInfo("showDivTag", showDiv);
}
