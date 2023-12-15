
// localStorage 长久存储

// 设置本地存储
export const setStorage = function (localStorageKey, value) {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
}

// 获取本地存储
export const getStorage = function (localStorageKey) {
    const storageData = localStorage.getItem(localStorageKey);
    if (storageData) {
        return JSON.parse(storageData);
    }
    return null;
}

// 删除本地存储
export const removeStorage = function (localStorageKey) {
    localStorage.removeItem(localStorageKey);
}


// sessionStorage 退出页面清除

// 设置会话存储
export const setSessionStorage = function (SessionStorageKey, value) {
    sessionStorage.setItem(SessionStorageKey, JSON.stringify(value));
}

// 获取会话存储
export const getSessionStorage = function (SessionStorageKey) {
    const sessionStorageData = sessionStorage.getItem(SessionStorageKey);
    if (sessionStorageData) {
        return JSON.parse(sessionStorageData);
    }
    return null;
}

// 删除会话存储
export const removeSessionStorage = function (SessionStorageKey) {
    sessionStorage.removeItem(SessionStorageKey);
}



// cookie 存储
// 设置 cookie，默认存储7天
export const setCookie = function (cookieName, value, days = 7) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString() + "; path=/";
    document.cookie = cookieName + "=" + cookieValue;
}

// 获取 cookie
export const getCookie = function (cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}


// 删除 cookie
export const removeCookie = function (cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

