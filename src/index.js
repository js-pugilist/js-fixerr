/*
 * Description : lightweight and fast vlidation library of js:  .
 * @author Anuj SIngh
 * @version 2.1.8
 * Date: 01/10/2019
 * 
 */
function isEmpty(val) {
    return ((val === undefined) || (val === null) || (typeof val === 'object' && Object.keys(val).length === 0) || (typeof val === 'string' && val.trim().length === 0)) ? true : false;
}

function numberToString(e) {
    return (typeof e === "number" && !isEmpty(e)) ? e.toString() : e
}

function min(e, r) {
    return !isEmpty(e) && !isEmpty(r) ? (e = numberToString(e), isNaN(r) ? "length is not a number" : e.length >= r ? !0 : !1) : "pass valid parameters"
}

function max(e, r) {
    return !isEmpty(e) && r ? (e = numberToString(e), isNaN(r) ? "length is not a number" : e.length <= r ? !0 : !1) : "pass valid parameters"
}

function isLength(e, r) {
    if(r.min && r.max){
        return e = numberToString(e), min(e, r.min) && max(e, r.max) ? !0 : !1
    } else{
        return false;
    }
}

function isWhiteSpace(e) {
    return !isEmpty(e) ? (e = numberToString(e), e.indexOf(" ") >= 0) : false;
}

function isNumber(e) {
    return "number" === typeof parseInt(e) ? !0 : !1
}

function isSpecialChar(e) {
    if(isEmpty(e)){
        return false;
    }
    e = numberToString(e);
    var r = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    return r.test(e) ? true : false;
}

function isAlphaNumeric(e) {
    e = numberToString(e);
    var r = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
    return e.match(r) ? !0 : !1
}

function isMobile(e) {
    return !isAlphaNumeric(e) && isNumber(e) && isLength(e, { min:10, max:12 }) ? true : false;
}

function isEmail(e) {
    e = numberToString(e);
    var r = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !isEmpty(e) && r.test(e) ? !0 : !1
}

function isDate(e, f) {
    var r;
    e = numberToString(e);
    if(f.format)
    {
        if(f.format === 'DD/MM/YYYY' || f.format === 'DD-MM-YYYY')
        {
            r = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        }
        else if(f.format === 'YYYY/MM/DD' || f.format === 'YYYY-MM-DD')
        {
            r = /^\d{4}[\/\-](0[1-9]|1[012])[\/\-](0[1-9]|[12][0-9]|3[01])$/;
        }
    }
    else
    {
        r = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    }
    return !isEmpty(e) && r.test(e) ? !0 : !1
}

function isTime(e) {
    e = numberToString(e);
    var r = /^\d{1,2}:\d{2}([ap]m)?$/;
    return !isEmpty(e) && r.test(e) ? !0 : !1
}

function isVowel(e) {
    if(isEmpty(e)) return false;
    for (var r = 0, n = 0; n < e.length; n++)("a" == e[n].toLowerCase() || "i" == e[n].toLowerCase() || "o" == e[n].toLowerCase() || "e" == e[n].toLowerCase() || "u" == e[n].toLowerCase()) && (r += 1);
    return r > 0 ? !0 : !1
}

function isUrl(e) {
    if(isEmpty(e)) return false;
    e = numberToString(e);
    var r = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return r.test(e) ? !0 : !1
}

function isVideoUrl(e) {
    if(isEmpty(e)) return false;
    e = numberToString(e);
    if (void 0 != e || "" != e) {
        var r = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/,
            n = e.match(r);
        return n && 11 == n[2].length ? !0 : !1
    }
}

function isPrime(e) {
    if(isEmpty(e)) return false;
    for (var r = 2; e > r; r++)
        if (e % r === 0) return !1;
    return 1 !== e
}

function isPositiveInteger(e) {
    if(isEmpty(e)) return false;
    return e >>> 0 === parseFloat(e)
}

function isEven(e) {
    if(isEmpty(e)) return false;
    return e % 2 == 0 ? !0 : !1
}

function isOdd(e) {
    if(isEmpty(e)) return false;
    return e % 2 != 0 ? !0 : !1
}

function isPerfectSquare(e) {
    if(isEmpty(e)) return false;
    return Math.sqrt(e) % 1 === 0
}

function isBoolean(e) {
    return e === !1 || e === !0
}

function isRoman(e) {
    if(isEmpty(e)) return false;
    e = numberToString(e);
    var r = /^(?:M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|\d+)$/;
    return r.test(e.toUpperCase()) ? !0 : !1
}

function isMacAddress(e) {
    if(isEmpty(e)) return false;
    e = numberToString(e);
    var r = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;
    return r.test(e) ? !0 : !1
}

function isLeapYear(e) {
    if(isEmpty(e)) return false;
    e = numberToString(e);
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
}

function isIPaddress(e) {
    if(isEmpty(e)) return false;
    e = numberToString(e);
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e) ? !0 : !1
}

module.exports = {
    min, max, isLength, isWhiteSpace, isSpecialChar, isAlphaNumeric, isMobile, isEmail, isDate, isTime,
    isVowel, isUrl, isVideoUrl, isRoman, isBoolean, isIPaddress, isLeapYear, isMacAddress
}