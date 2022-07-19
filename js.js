// bai 1
document.getElementById("btnSapXep").onclick = function (){
    var so_1 = document.getElementById("so_1").value*1;
    var so_2 = document.getElementById("so_2").value*1;
    var so_3 = document.getElementById("so_3").value*1;
    if (so_3 > so_2 && so_2 > so_1) {
        var ketQua =
          "3 số có giá trị tăng dần : " + so_1 + " , " + so_2 + " , " + so_3;
      }
      else if (so_2 > so_3 && so_3 > so_1) {
        var ketQua =
          "3 số có giá trị tăng dần : " + so_1 + " , " + so_3 + " , " + so_2;
      }
      else if (so_1 > so_3 && so_3 > so_2) {
        var ketQua =
          "3 số có giá trị tăng dần : " + so_2 + " , " + so_3 + " , " + so_1;
      }
      else if (so_3 > so_1 && so_1 > so_2) {
        var ketQua =
          "3 số có giá trị tăng dần : " + so_2 + " , " + so_1 + " , " + so_3;
      }
      else if (so_2 > so_1 && so_1 > so_3) {
        var ketQua =
          "3 số có giá trị tăng dần : " + so_3 + " , " + so_1 + " , " + so_2;
      }
      else if (so_1 > so_2 && so_2 > so_3) {
        var ketQua =
          "3 số có giá trị tăng dần : " + so_3 + " , " + so_2 + " , " + so_1;
      }
      else {
        var ketQua = "Hãy nhập lại 3 số nguyên khác nhau";
      }
      
      document.getElementById("XapSep").innerHTML = ketQua;
      document.getElementById("XapSep").classList.add("alert-success");
}
// bai 2
document.getElementById("btnGuiLoiChao").onclick = function (){
    var nguoiDung = document.getElementById("nguoiDung").value;
    var loiChao = '';
    if (nguoiDung == "Bố") {
        loiChao = "Xin Chào Bố!";
      } else if (nguoiDung == "Mẹ") {
        loiChao = "Xin Chào Mẹ!";
      } else if (nguoiDung == "Anh") {
        loiChao = "Xin Chào Anh Trai!";
      } else if (nguoiDung == "Em") {
        loiChao = "Xin Chào Em Gái!";
      } else {
        loiChao = "Bạn không được cấp quyền truy cập";
      }
   
      document.getElementById("chaoLoiChao").innerHTML = loiChao;
    
 };

//bai 3
document.getElementById("btnDem").onclick = function (){
    var soNguyenThu1 = document.getElementById("soThu1").value*1;
    var soNguyenThu2 = document.getElementById("soThu2").value*1;
    var soNguyenThu3 = document.getElementById("soThu3").value*1;
    var soChan = 0;
    var soLe = 0;
    if (soNguyenThu1 % 2 == 0) {
      ++soChan;
    } else {
      ++soLe;
    }
    if (soNguyenThu2 % 2 == 0) {
      ++soChan;
    } else {
      ++soLe;
    }
    if (soNguyenThu3 % 2 == 0) {
      ++soChan;
    } else {
      ++soLe;
    }

    document.getElementById("demDem").innerHTML =
      "Kết quả là : " + soChan + " Số Chẵn " + soLe + " Số Lẻ ";
  
}
//bai 4
document.getElementById("btnDuDoan").onclick = function(){
    var canh_a = document.getElementById("soCanh1").value * 1;
  var canh_b = document.getElementById("soCanh2").value * 1;
  var canh_c = document.getElementById("soCanh3").value * 1;

 
  if (canh_a == canh_b && canh_b == canh_c) {
    raKetQua = "Tam Giác Đều";
  }
  
  else if (canh_a == canh_b || canh_a == canh_c || canh_b == canh_c) {
    raKetQua = "Tam Giác Cân";
  }
  
  else if (
    canh_a == Math.sqrt(Math.pow(canh_b, 2) + Math.pow(canh_c, 2)) ||
    canh_b == Math.sqrt(Math.pow(canh_c, 2) + Math.pow(canh_a, 2)) ||
    canh_c == Math.sqrt(Math.pow(canh_a, 2) + Math.pow(canh_b, 2))
  ) {
    raKetQua = "Tam Giác Vuông";
  }
  document.getElementById("DuDoan").innerHTML =
    " Kết quả là: " + raKetQua;

};