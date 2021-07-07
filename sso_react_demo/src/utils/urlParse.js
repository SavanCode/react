/**
 * getUrlKey 截取地址栏参数
 * @param name 参数名称
 * @param url 要解析的url地址
 * @returns {String}
 */
export function getUrlKey(name, url) {
  return decodeURIComponent(
    (new RegExp("[?|&]" + name + "=([^&;]+?)(&|#|;|$)").exec(url) || [
      null, // 如果匹配不到参数，要保证数组有2个元素，第一个元素是什么无所谓
      ""
    ])[1].replace(/\+/g, "%20")
  );
}
export default {
  getUrlKey
};
