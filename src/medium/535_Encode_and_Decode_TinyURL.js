let map = {};
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
	let url = "http://tinyurl.com/";
	let str = Math.random().toString(36).substring(6);
	map[str] = longUrl;
	return url + str;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
	let arr = shortUrl.split("/");
	return map[arr[arr.length - 1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */