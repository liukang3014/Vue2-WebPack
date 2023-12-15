
//当前时间戳

/*
 *时间戳函数-格式为-20231103225918
 */
export const getDateNumber = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	const formattedTime = `${year}${month}${day}${hours}${minutes}${seconds}`;
	return formattedTime;
}

/* 
 * 使用示例
 *const dateNumber = getDateNumber();
 * console.log(dateNumber)
 *
 */