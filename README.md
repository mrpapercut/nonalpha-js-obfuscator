# Non-Alphanumeric JS obfuscator
This will convert javascript code to nearly un-reversable non-alphanumeric obfuscated code

## TODO:
* Use escape('"') to get '%' and then use unescape for every missing character
* Remove switch for local lookup table, instead calculate which mode would be shorter
* Improve encode.js for better code generation
* Write tests
* Turn into nodejs module
