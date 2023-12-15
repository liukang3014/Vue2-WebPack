import CryptoJS from 'crypto-js';

export const md5 = function (text) {
	return CryptoJS.MD5(text).toString();
}
export const sha256 = function (text) {
	return CryptoJS.SHA256(text).toString();
}


// 使用示例

/*

const text = 'Hello, World!';
// 计算 MD5 哈希
const md5Hash = md5(text);
console.log('MD5:', md5Hash);

// 计算 SHA-256 哈希
const sha256Hash = sha256(text);
console.log('SHA-256:', sha256Hash);

*/

