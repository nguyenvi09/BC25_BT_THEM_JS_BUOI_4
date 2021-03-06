/**
 * BT1: 
 * - Đầu vào: ngày / tháng / năm người dùng nhập
 * 
 * - Xử lý: 
 * BUTTON NGÀY TRƯỚC ĐÓ:
 * B1: bắt lấy sự kiện click
 * B2: kiểm tra năm nhuận hay năm thường
 * B3: xử lý 2 trường hợp
 *    1. ngày 01 tháng 01 năm ... : giảm ngày -> giảm năm -> giảm tháng
 *    2. ngày ... tháng ... năm ... còn lại : giảm ngày -> giảm tháng -> giữ nguyên năm
 * => tạo điều kiện if xử lý 2 trường hợp nhập cho cả năm nhuận và năm thường
 * B4: dùng swtich case để tạo mặc định số ngày trong tháng
 * 
 * 
 * BUTTON NGÀY SAO ĐÓ:
 * B1: tạo hàm tính số ngày trong tháng -> trả về số ngày
 * B2: tăng ngày 
 * B3: kiểm tra nếu > số ngày trong tháng -> gán ngay = 1 , tăng tháng
 * B4: nếu thang > 12 -> gán thang = 1, tăng năm
 * 
 * - Đầu ra: in ra màn hình kết quả
 * 
 */


document.getElementById("ngayTruoc").onclick = function() {
    var ngay = document.getElementById("ngay").value *1;
    var thang = document.getElementById("thang").value *1;
    var nam = document.getElementById("nam").value *1;
    var ketQuaTNT;

    // kiểm tra có phải năm nhuận hay không?
    if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        // rào trường hợp ngày 01 tháng 01 
        if(thang == 1 && ngay == 1){
            nam--;
            thang = 12;
            switch (thang){
                case 1: ngay = 31; break;
                case 3: ngay = 31; break;
                case 5: ngay = 31; break;
                case 7: ngay = 31; break;
                case 8: ngay = 31; break;
                case 10: ngay = 31; break;
                case 12: ngay = 31; break;

                case 4: ngay = 30; break;
                case 6: ngay = 30; break;
                case 9: ngay = 30; break;
                case 11: ngay = 30; break;

                case 2: ngay = 29; break;
            };
            
        }else{
            ngay--;
            if(ngay == 0){
                thang--;
                switch (thang){
                    case 1: ngay = 31; break;
                    case 3: ngay = 31; break;
                    case 5: ngay = 31; break;
                    case 7: ngay = 31; break;
                    case 8: ngay = 31; break;
                    case 10: ngay = 31; break;
                    case 12: ngay = 31; break;
    
                    case 4: ngay = 30; break;
                    case 6: ngay = 30; break;
                    case 9: ngay = 30; break;
                    case 11: ngay = 30; break;
    
                    case 2: ngay = 29; break;
                };
            };
        };
    }else{
        if(thang == 1 && ngay == 1){
            nam--;
            thang = 12;
            switch (thang){
                case 1: ngay = 31; break;
                case 3: ngay = 31; break;
                case 5: ngay = 31; break;
                case 7: ngay = 31; break;
                case 8: ngay = 31; break;
                case 10: ngay = 31; break;
                case 12: ngay = 31; break;

                case 4: ngay = 30; break;
                case 6: ngay = 30; break;
                case 9: ngay = 30; break;
                case 11: ngay = 30; break;

                case 2: ngay = 28; break;
            };
        }else{
            ngay--;
            if(ngay == 0){
                thang--;
                switch (thang){
                    case 1: ngay = 31; break;
                    case 3: ngay = 31; break;
                    case 5: ngay = 31; break;
                    case 7: ngay = 31; break;
                    case 8: ngay = 31; break;
                    case 10: ngay = 31; break;
                    case 12: ngay = 31; break;
    
                    case 4: ngay = 30; break;
                    case 6: ngay = 30; break;
                    case 9: ngay = 30; break;
                    case 11: ngay = 30; break;
    
                    case 2: ngay = 28; break;
                };
            };
        };
    };
    ketQuaTNT = ngay + " - " + thang +  " - " + nam;

    document.getElementById("ketQuaTinhNgayTruoc").innerHTML = "Trước ngày nhập là: " + ketQuaTNT;

};


function tinhSoNgayTrongThang(thang, nam) {

    if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        switch (thang){
            case 1: ngay = 31; break;
            case 3: ngay = 31; break;
            case 5: ngay = 31; break;
            case 7: ngay = 31; break;
            case 8: ngay = 31; break;
            case 10: ngay = 31; break;
            case 12: ngay = 31; break;

            case 4: ngay = 30; break;
            case 6: ngay = 30; break;
            case 9: ngay = 30; break;
            case 11: ngay = 30; break;

            case 2: ngay = 29; break;
        };
        return ngay;
    }else {
        switch (thang){
            case 1: ngay = 31; break;
            case 3: ngay = 31; break;
            case 5: ngay = 31; break;
            case 7: ngay = 31; break;
            case 8: ngay = 31; break;
            case 10: ngay = 31; break;
            case 12: ngay = 31; break;

            case 4: ngay = 30; break;
            case 6: ngay = 30; break;
            case 9: ngay = 30; break;
            case 11: ngay = 30; break;

            case 2: ngay = 28; break;
        };
        return ngay;
    };
};

document.getElementById("ngaySau").onclick = function() {
    var ngay = document.getElementById("ngay").value *1;
    var thang = document.getElementById("thang").value *1;
    var nam = document.getElementById("nam").value *1;
    // var ketQuaTNS;

    ngay++;
    if (ngay > tinhSoNgayTrongThang(thang, nam)){
        ngay = 1;
        thang++;
        if(thang > 12){
            thang = 1;
            nam++;
        };
    };
    ketQuaTNS = ngay + " - " + thang +  " - " + nam;

    
    document.getElementById("ketQuaTinhNgaySau").innerHTML = "Sau ngày nhập là: " + ketQuaTNS;

};


/**
 * BT2:
 * - Đầu vào: tháng và năm do người dùng nhập
 * 
 * - Xử lý: 
 * B1: kiểm tra năm là năm nhuận hay thường
 * B2: nếu nhuận thì tháng 2 có 29 ngày - thường thì có 28 ngày
 * B3: dùng switch case lưu các giá trị của tháng 
 * 
 * - Đầu ra: in kết quả ra màn hình
 */

document.getElementById("checkDay").onclick = function() {
    var month = document.getElementById("month").value *1;
    var year = document.getElementById("year").value *1;
    var result;

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        switch (month){
            case 1: day = 31; break;
            case 3: day = 31; break;
            case 5: day = 31; break;
            case 7: day = 31; break;
            case 8: day = 31; break;
            case 10: day = 31; break;
            case 12: day = 31; break;

            case 4: day = 30; break;
            case 6: day = 30; break;
            case 9: day = 30; break;
            case 11: day = 30; break;

            case 2: day = 29; break;
        };
    } else {
        switch (month){
            case 1: day = 31; break;
            case 3: day = 31; break;
            case 5: day = 31; break;
            case 7: day = 31; break;
            case 8: day = 31; break;
            case 10: day = 31; break;
            case 12: day = 31; break;

            case 4: day = 30; break;
            case 6: day = 30; break;
            case 9: day = 30; break;
            case 11: day = 30; break;

            case 2: day = 28; break;
        };
    };
    result ="Tháng " + month + " Năm " + year + " có " + day + " Ngày";

    document.getElementById("result").innerHTML = result;

};

/**
 * BT3:
 * - Đầu vào: số nguyên có 3 chữ số
 * 
 * - Xử lý:
 * B1: tạo biến so 
 * B2: kiểm tra so đó có phải số nguyên có 3 chữ số hay không
 * B3: tách hangTram / hangChuc / hangDonvi
 * B4: dùng switch case để lưu giá trị cách đọc số. Nếu hangChuc = 0 và hangDonVi khác 0
 * -> gán hangChuc = "lẻ";
 * 
 * - Đầu ra: in cách đọc số ra màn hình web
 * 
 */

document.getElementById("cachDocSo").onclick = function() {
    var so = document.getElementById("so").value;
    var ketQuaCachDocSo;
    
    if( so >= 100 && so <= 999){
        var hangTram = Math.floor(so / 100);
        var hangChuc = Math.floor((so / 10) % 10);
        var hangDonVi = Math.floor(so % 10);
        
        switch(hangTram){
            case 1: hangTram = "Một trăm"; break;
            case 2: hangTram = "Hai trăm"; break;
            case 3: hangTram = "Ba trăm"; break;
            case 4: hangTram = "Bốn trăm"; break;
            case 5: hangTram = "Năm trăm"; break;
            case 6: hangTram = "Sáu trăm"; break;
            case 7: hangTram = "Bảy trăm"; break;
            case 8: hangTram = "Tám trăm"; break;
            case 9: hangTram = "Chín trăm"; break;
        };
    
        if( hangChuc == 0 &&  hangDonVi != 0 ){
            hangChuc = "lẻ";
        };

        switch(hangChuc){
            case 0: hangChuc = ""; break; 
            case 1: hangChuc = "mười"; break;
            case 2: hangChuc = "hai mươi"; break;
            case 3: hangChuc = "ba mươi"; break;
            case 4: hangChuc = "bốn mươi"; break;
            case 5: hangChuc = "năm mươi"; break;
            case 6: hangChuc = "sáu mươi"; break;
            case 7: hangChuc = "bảy mươi"; break;
            case 8: hangChuc = "tám mươi"; break;
            case 9: hangChuc = "chín mươi"; break;
        };
    

        switch(hangDonVi){
            case 0: hangDonVi = ""; break;
            case 1: hangDonVi = "một"; break;
            case 2: hangDonVi = "hai"; break;
            case 3: hangDonVi = "ba"; break;
            case 4: hangDonVi = "bốn"; break;
            case 5: hangDonVi = "năm"; break;
            case 6: hangDonVi = "sáu"; break;
            case 7: hangDonVi = "bảy"; break;
            case 8: hangDonVi = "tám"; break;
            case 9: hangDonVi = "chín"; break;
        };
    };
    ketQuaCachDocSo = hangTram + " " + hangChuc + " " + hangDonVi;

    document.getElementById("ketQuaCachDocSo").innerHTML = ketQuaCachDocSo;
}


/**
 * BT4: 
 * - Đầu vào: tạo 4 biến lưu giá trị tọa độ
 * 
 * - Xử lý: 
 * B1: tạo biến lưu giá trị tính khoảng cách từng bạn sinh viên đến trường
 * bằng công thức sqrt((xB - xA)*(xB - xA) + (yB - yA)*(yB - yA))
 * B2: so sánh độ dài tìm ra ai xa trường nhất . Ta bỏ qua trường hợp = 
 * vì nếu tọa độ bằng nhau ta không cần so sánh độ dài nữa
 * 
 * - Đầu ra: in kết quả
 */

var truongHoc = [3, 2];
var tung = [1, 1];
var lan = [11, 15];
var khanh = [14, 36];

var nhaTungDenTruong = Math.sqrt((tung[0] - truongHoc[0])*(tung[0] - truongHoc[0]) + (tung[1] - truongHoc[1])*(tung[1] - truongHoc[1]));
var nhaLanDenTruong = Math.sqrt((lan[0] - truongHoc[0])*(lan[0] - truongHoc[0]) + (lan[1] - truongHoc[1])*(lan[1] - truongHoc[1]));
var nhaKhanhDenTruong = Math.sqrt((khanh[0] - truongHoc[0])*(khanh[0] - truongHoc[0]) + (khanh[1] - truongHoc[1])*(khanh[1] - truongHoc[1]));

if (nhaTungDenTruong > nhaLanDenTruong && nhaTungDenTruong > nhaKhanhDenTruong){
    console.log("Nhà Tùng xa trường nhất");
}else if(nhaLanDenTruong > nhaTungDenTruong && nhaLanDenTruong > nhaKhanhDenTruong){
    console.log("Nhà Lan xa trường nhất");
}else {
    console.log("Nhà Khanh xa trường nhất");
};
