/* 
 * 生成随机字符串 
 */

export const generateRandomString = function (length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}
/* 
 * 使用示例
 * const randomString = generateRandomString(8);
 * console.log(randomString);
 *
 */


/* 
 * 生成随机数
 */

export const generateRandomNumber = function (length) {
  const numbers = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result += numbers[randomIndex];
  }
  return parseInt(result, 10);
}

/* 
 * 使用示例
 * const randomNumber = generateRandomNumber(6);
 * console.log(randomNumber);
 *
 */
