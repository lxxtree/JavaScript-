/*
* Global对象的encodeURI()和encodeURIComponent()方法可以对URI(Uniform Resource Identifiers，通用资源标识符)进行编码，以便发给浏览器。
* encodeURI()主要用于整个URI，而encodeURIComponent()主要用于对URI中的某一段进行编码。
* 它们主要区别在于，encodeURI()不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；
* 而encodeURIComponent()则会对它发现的任何非标准字符进行编码
 */
var uri = "http://www.wrox.com/illegal value.htm#start";
alert(encodeURI(uri));
alert(encodeURIComponent(uri));

/*
* decodeURI()和decodeURIComponent()是与encodeURI和encodeURIComponent()方法对应的两个方法
* decodeURI()只能对使用encodeURI替换的字符进行解码
* decodeURIComponent()能够解码使用encodeURIComponent()编码的所有字符，即它可以解码任何特殊字符的编码
 */
var uri2 = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
alert(decodeURI(uri2));
alert(decodeURIComponent(uri2));
