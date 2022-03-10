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
            document.getElementById("ketQuaTinhNgayTruoc").innerHTML = "Trước ngày nhập là: " + ngay + " - " + thang +  " - " + nam;
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
            document.getElementById("ketQuaTinhNgayTruoc").innerHTML = "Trước ngày nhập là: " + ngay + " - " + thang +  " - " + nam;

            }
            document.getElementById("ketQuaTinhNgayTruoc").innerHTML = "Trước ngày nhập là: " + ngay + " - " + thang +  " - " + nam;


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
            document.getElementById("ketQuaTinhNgayTruoc").innerHTML = "Trước ngày nhập là: " + ngay + " - " + thang +  " - " + nam;


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
                document.getElementById("ketQuaTinhNgayTruoc").innerHTML = "Trước ngày nhập là: " + ngay + " - " + thang +  " - " + nam;


            }
            document.getElementById("ketQuaTinhNgayTruoc").innerHTML = "Trước ngày nhập là: " + ngay + " - " + thang +  " - " + nam;


        };
    }
};


function tinhSoNgayTrongThang(thang, nam) {
    thang = document.getElementById("thang").value *1;
    nam = document.getElementById("nam").value *1;

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

    ngay++;
    if (ngay > tinhSoNgayTrongThang(thang, nam)){
        ngay = 1;
        thang++;
        if(thang > 12){
            thang = 1;
            nam++;
            document.getElementById("ketQuaTinhNgaySau").innerHTML = "Sau ngày nhập là: " + ngay + " - " + thang +  " - " + nam;

        }
    }
    document.getElementById("ketQuaTinhNgaySau").innerHTML = "Sau ngày nhập là: " + ngay + " - " + thang +  " - " + nam;

};