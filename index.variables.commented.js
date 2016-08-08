/**
=== Common code ===
*/
_ = ~[];
_ = {
    a: {
		a: !![]+[],   // "true"
		b: ![]+[],    // "false"
		c: []+{},     // "[object Object]"
		d: [][_]+[] // "undefined"
	},
    b: ++_, // 0
    c: ++_, // 1
    d: -~_++, // 2
    e: -~_, // 3
    f: -~++_  // 4
},

/**
=== Available characters ===
'truefalse[object Object]undefined'.split``.filter((e,i,s) => s.indexOf(e) === i).sort((a, b) => a.localeCompare(b));
[" ", "[", "]", "a", "b", "c", "d", "e", "f", "i", "j", "l", "n", "o", "O", "r", "s", "t", "u"]
(space) , [ ] a b c d e f i j l n o O r s t u

Missing letters
g h k m p q v w x y z
*/

_.g = _.a.c[_.f+_.c]  // c
    + _.a.c[_.c]      // o
    + _.a.d[_.c]      // n
    + _.a.b[_.e]      // s
    + _.a.a[_.b]      // t
    + _.a.a[_.c]      // r
    + _.a.d[_.b]      // u
    + _.a.c[_.f+_.c]  // c
    + _.a.a[_.b]      // t
    + _.a.c[_.c]      // o
    + _.a.a[_.c],     // r

_.h = [][_.g][_.g], // This is now a function call

/**
=== Once you have 'constructor' ===
[]+/[]/['constructor']
"function RegExp() { [native code] }"

[]+[]['constructor']
"function Array() { [native code] }"

[]+([]+[])['constructor']
"function String() { [native code] }"

_.b['constructor']
"function Number() { [native code] }"
*/

_.a.e = []+/[]/[_.g], // "function RegExp() { [native code] }"
_.a.f = []+[][_.g], // "function Array() { [native code] }"
_.a.g = []+([]+[])[_.g], // "function String() { [native code] }"
_.a.h = []+_.b[_.g], // "function Number() { [native code] }"

/**
Gained characters
["(", ")", "{", "}", "A", "E", "g", "m", "N", "p", "R", "S", "v", "x", "y"]
( ) { } A E g m N p R S v x y

=== Total available characters without using 'toString' ===
(space) ( ) { } [ ] , A E N O R S a b c d e f g i j l m n o p r s t u v x y

Missing letters
h k q w z
*/

_.i = _.a.a[_.b]      // t
    + _.a.c[_.c]      // o
    + _.a.g[_.c+_.f+_.f] // S
    + _.a.a[_.b]      // t
    + _.a.a[_.c]      // r
    + _.a.d[_.c+_.f]  // i
    + _.a.d[_.c]      // n
    + _.a.g[[]+_.c+_.f]; // g

/**
With 'toString' we can find the missing letters (see "toString Lookup table"):

h: (_.f*_.f+_.c)[_.i](_.e*_.e*_.d)
k: ((_.d+_.e)*_.f)[_.i](_.e*(_.e+_.f))
q: ((_.d+_.e)*(_.d+_.e)+_.c)[_.i](_.e*_.e*_.e)
w: (_.f*_.f*_.d)[_.i](_.f*_.f*_.d+_.c)
z: ((_.f+_.e)*(_.f+_.c))[_.i](_.e*_.e*_.f)
*/

/**
And let's grab the quotation mark and equal sign as well here with String.link()
*/
_.j = _.a.a[_.a.b[_.d]+_.a.d[_.c+_.f]+_.a.d[_.c]+((_.d+_.e)*_.f)[_.i](_.e*(_.e+_.f))]() // <a href="undefined">true</a>

// Lets get 'return' for shorter functions
_.k = _.a.a[_.c]+_.a.a[_.e]+_.a.a[_.b]+_.a.a[_.d]+_.a.a[_.c]+_.a.d[_.c];

// Get - (dash) and . (dot)
_.l = []+_.h(_.k+_.a.c[_.e+_.f]+([]+~_.b)[_.b]+_.c+_.j[[]+_.d+(_.d+_.e)]+_.d)();

// escape
_.m = _.h(_.k+_.a.c[_.e+_.f]+_.a.a[_.e]+_.a.b[_.e]+_.a.c[_.f+_.c]+_.a.b[_.c]+_.a.e[[]+_.c+_.f]+_.a.a[_.e])();

// unescape
_.n = _.h(_.k+_.a.c[_.e+_.f]+_.a.a[_.d]+_.a.d[_.c]+_.a.a[_.e]+_.a.b[_.e]+_.a.c[_.f+_.c]+_.a.b[_.c]+_.a.e[[]+_.c+_.f]+_.a.a[_.e])();

/*
So we end up with:
=== Complete lookup table ===
*/
{
	'space' : _.a.c[_.e+_.f],
	'(' : _.a.g[_.e*(_.d+_.e)],
	')' : _.a.g[_.f*_.f],
	'{' : _.a.g[_.e*(_.e+_.e)],
	'}' : _.a.g[[]+_.e+_.f],
	'[' : _.a.g[[]+_.d+_.b],
	']' : _.a.g[[]+_.e+_.d],
	'<' : _.j[_.b],
	'>' : _.j[[]+_.c+(_.e*_.e)],
	'=' : _.j[_.e+_.f],
	'"' : _.j[_.f+_.f],
	'/' : _.j[[]+_.d+(_.d+_.e)],
    '-' : _.l[_.b],
    '.' : _.l[_.d],
    '0' : _.b,
	'1' : _.c,
	'2' : _.d,
	'3' : _.e,
	'4' : _.f,
	'5' : _.c+_.f,
	'6' : _.e+_.e,
	'7' : _.e+_.f,
	'8' : _.f+_.f,
	'9' : _.e*_.e,
	'A' : _.a.f[_.e*_.e],
	'E' : _.a.e[_.e*_.f],
	'N' : _.a.h[_.e*_.e],
	'O' : _.a.c[_.d*_.f],
	'R' : _.a.e[_.e*_.e],
	'S' : _.a.g[_.e*_.e],
	'a' : _.a.b[_.c],
	'b' : _.a.c[_.d],
	'c' : _.a.c[_.f+_.c],
	'd' : _.a.d[_.d],
	'e' : _.a.a[_.e],
	'f' : _.a.b[_.b],
	'g' : _.a.g[[]+_.c+_.f],
	'h' : (_.f*_.f+_.c)[_.i](_.e*_.e*_.d),
	'i' : _.a.d[_.c+_.f],
	'j' : _.a.c[_.e],
	'k' : ((_.d+_.e)*_.f)[_.i](_.e*(_.e+_.f)),
	'l' : _.a.b[_.d],
	'm' : _.a.h[[]+_.c+_.c],
	'n' : _.a.d[_.c],
	'o' : _.a.c[_.c],
	'p' : _.a.e[[]+_.c+_.f],
	'q' : ((_.d+_.e)*(_.d+_.e)+_.c)[_.i](_.e*_.e*_.e),
	'r' : _.a.a[_.c],
	's' : _.a.b[_.e],
	't' : _.a.a[_.b],
	'u' : _.a.a[_.d],
	'v' : _.a.e[[]+_.d+(_.d+_.e)],
	'w' : (_.f*_.f*_.d)[_.i](_.f*_.f*_.d+_.c),
	'x' : _.a.e[_.e*_.f+_.c],
	'y' : _.a.f[_.e*_.f+_.c],
	'z' : ((_.f+_.e)*(_.f+_.c))[_.i](_.e*_.e*_.f)
}

/**
=== toString lookup table ===
(a,b)=>((a)['toString'](b))
{
	"1" : [1, 2],
	"2" : [2, 3],
	"3" : [3, 4],
	"4" : [4, 5],
	"5" : [5, 6],
	"6" : [6, 7],
	"7" : [7, 8],
	"8" : [8, 9],
	"9" : [9, 10],
	"a" : [10, 11],
	"b" : [11, 12],
	"c" : [12, 13],
	"d" : [13, 14],
	"e" : [14, 15],
	"f" : [15, 16],
	"g" : [16, 17],
	"h" : [17, 18],
	"i" : [18, 19],
	"j" : [19, 20],
	"k" : [20, 21],
	"l" : [21, 22],
	"m" : [22, 23],
	"n" : [23, 24],
	"o" : [24, 25],
	"p" : [25, 26],
	"q" : [26, 27],
	"r" : [27, 28],
	"s" : [28, 29],
	"t" : [29, 30],
	"u" : [30, 31],
	"v" : [31, 32],
	"w" : [32, 33],
	"x" : [33, 34],
	"y" : [34, 35],
	"z" : [35, 36]
}
*/