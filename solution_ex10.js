/**
 * Bài tập: Phân tích Trade-off giữa các loại khai báo hàm trong JavaScript
 * Môn: [RL-IT103B-K25] - Xây dựng ứng dụng web với Javascript
 * GitHub Org: it103b-rl-HoangCongDung
 */

'use strict';

// 1. Function Declaration
// Kiểm chứng cơ chế Hoisting: Có thể gọi hàm trước khi định nghĩa
console.log('--- 1. Function Declaration ---');
console.log('Ket qua goi ham truoc dinh nghia:', sum(5, 10)); // Hoạt động bình thường

function sum(a, b) {
    return a + b;
}


// 2. Function Expression
// Kiểm chứng cơ chế Hoisting: Sẽ báo lỗi nếu gọi trước khi định nghĩa
console.log('\n--- 2. Function Expression ---');
try {
    // Cau lenh nay se gay loi vi multiply chua duoc khoi tao (hoisting const chi dua bien len TDZ)
    console.log(multiply(2, 3)); 
} catch (error) {
    console.log('Loi bat duoc khi goi Function Expression truoc khi khai bao:', error.message);
}

const multiply = function(a, b) {
    return a * b;
};
console.log('Ket qua goi sau khi dinh nghia:', multiply(2, 3));


// 3. Arrow Function và Con trỏ this / arguments
console.log('\n--- 3. Arrow Function ---');
const calculatePower = (base, exponent = 2) => {
    // Arrow function khong co doi tuong arguments rieng
    // Su dung rest parameter thay the
    return Math.pow(base, exponent);
};

console.log('Tinh luy thua dung Arrow Function:', calculatePower(4));

// Vi du thuc te ap dung cho Smart Home IoT
const smartDevice = {
    deviceName: 'Cam Bien Nhiet Do phong khach',
    temperature: 28,
    // Su dung Arrow Function trong method de lay lexical this dung y muon
    logStatus: function() {
        setTimeout(() => {
            console.log('Thiet bi ' + this.deviceName + ' dang co nhiet do la ' + this.temperature + ' do C');
        }, 100);
    }
};

smartDevice.logStatus();