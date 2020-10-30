# js-fixerr

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3c699dde8ac34f3aab6677b4f8731367)](https://app.codacy.com/gh/js-pugilist/js-fixerr?utm_source=github.com&utm_medium=referral&utm_content=js-pugilist/js-fixerr&utm_campaign=Badge_Grade)

Lightweight and fast validation library for javascript

## Installation

```jsx
    npm install js-fixerr --save
```

## Usage
```jsx
    var fixerr = require('js-fixerr');
```

## js-fixerr Functions
  - min
  - max
  - isLength
  - isWhiteSpace
  - isSpecialChar
  - isAlphaNumeric
  - isMobile
  - isEmail
  - isDate
  - isTime
  - isVowel
  - isUrl
  - isVideoUrl
  - isRoman
  - isBoolean
  - isIPaddress
  - isLeapYear
  - isMacAddress
  - isEqual

### min
*Validate if the input is smaller then the min value*
```jsx
  fixerr.min('foobaar', 3) // return true
  fixerr.min('fooba12', 3) // return true
  fixerr.min(34563, 4) // return true
  fixerr.min(345, 4) // return false  
  fixerr.min('foo', 5) // return false  
```

### max
*Validate if the input is greater then the max value*
```jsx
  fixerr.max('foobaar', 6) // return true
  fixerr.max(12345, 6) // return true
  fixerr.max(12345, 3) // return false
  fixerr.max('foo', 2) // return false
```

### isLength
*Validate if the string lie between the given value*
```jsx
  fixerr.isLength('foobaar',{min:0, max:7}) // return true
  fixerr.isLength(123456, {min:0, max:7}) // return true
  fixerr.isLength(123456567878, {min:0, max:7}) // return flase
  fixerr.isLength('foobaar', {min:0, max:5}); // return false
```

### isWhiteSpace
*Validate if the input has whitespace*
```jsx
  fixerr.isWhiteSpace('foobaar') // return false
  fixerr.isWhiteSpace('a s') // return true
  fixerr.isWhiteSpace('') // return false
  fixerr.isWhiteSpace('foo baar'); // return true
```

### isSpecialChar
*Validate if the input has Special character*
```jsx
  fixerr.isSpecialChar('foo@$ba%ar') // return true
  fixerr.isSpecialChar('f!oo~ar') // return true   
  fixerr.isSpecialChar(' ') // return true
  fixerr.isSpecialChar('foobaar'); // return false
  
```


### isAlphaNumeric
*Validate if the input has no Alphanumeric characters*
```jsx
    fixerr.isAlphaNumeric('foobaar') // return false
    fixerr.isAlphaNumeric('fooba901') // return true
```

### isMobile
*Validate if the input is a 10 digit mobile number*
```jsx
    fixerr.isMobile(1234567890) // return true
    fixerr.isMobile(745387) // return false
```

### isEmail
*Validate if the input is a email address*
```jsx
    fixerr.isEmail('jsfixerr@gmail.com') // return true
    fixerr.isEmail('jsfixerr@com') // return false
    fixerr.isEmail('jsfix err@ gmail com') // return false
```

### isDate
*Validate if the input is a date*
```jsx
  fixerr.date('10/12/2017', { format: 'MM/DD/YYYY' }) // return true
  fixerr.date('10-12-2017', { format: 'MM-DD-YYYY' }) // return true
  fixerr.date('2017-12-12', { format: 'YYYY-DD-MM' }) // return true
  fixerr.date('2017/01/08', { format: 'YYYY/DD/MM' }) // return true
```


### isVowel
*Validate if the input is a vowel*
```jsx
  fixerr.isVowel('a') // return true
  fixerr.isVowel('aeo') // return true  
  fixerr.isVowel('aeoiu') // return true  
  fixerr.isVowel('sdf') // return false
  fixerr.isVowel('sdfa') // return false
    
```

### isVideoUrl
*Validate if the input is a youtube video Url*
```jsx
  fixerr.isVideoUrl('https://www.youtube.com/watch?v=LyrqhruLhBA') // return true
  fixerr.isVideoUrl('https://www.youtube.com/watch?v=LyrqhruLhB') // return false  
```

### isMacAddress
*Validate if the input is a MAC Address*
```jsx
  fixerr.isMacAddress('FF:FF:FF:FF:FF:FF') // return true
  fixerr.isMacAddress('asman:asdas') // return false
```

### isLeapYear
*Validate if the input is a leap year*
```jsx
  fixerr.isLeapYear(2020) // return true
  fixerr.isLeapYear(2017) // return false
```


### isIPaddress
*Validate if the input is a Ip address*
```jsx
  fixerr.isIPaddress('192.168.0.1') // return true
  fixerr.isIPaddress('192.168.0.') // return false
    
```

### isVowel
*Validate if the input has a vowel*
```jsx
  fixerr.isVowel('asskdsdf') // return true
  fixerr.isVowel('zxcvbn') // return false
  
```

### isBoolean
*Validate if the input is a boolean value*
```jsx
  fixerr.isBoolean(true) // return true
  fixerr.isBoolean(false) // return true  
  fixerr.isBoolean(1) // return false
```

### isRoman
*Validate if the input is Roman*
```jsx
    fixerr.isRoman('IV') // return true
    fixerr.isRoman('iv') // return true
    fixerr.isRoman('ER') // return false
```

### isEqual
*Comparing two values
```jsx
    fixerr.isEqual('sam','nam'); // return false
    fixerr.isEqual('sam','sam'); // return true
```


## Built With
* [javascript](https://developer.mozilla.org/bm/docs/Web/JavaScript)

## Authors
* **Anuj Singh** - *Initial work* - [anujsinghwd](https://github.com/anujsinghwd)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contribution
Feel free to contribute