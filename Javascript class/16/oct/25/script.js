// let data = confirm("Are you sure you wannt to delete this message?")
// console.log(data);

// const examples = [
//     ["\\'", "'"],
//     ['\\"', '"'],
//     ['\\\\', '\\'],
//     ['\\n (newline)', '\n'],
//     ['\\r (carriage return)', '\r'],
//     ['\\t (tab)', '\t'],
//     ['\\b (backspace)', '\b'],
//     ['\\f (form feed)', '\f'],
//     ['\\v (vertical tab)', '\v'],
//     ['\\0 (null)', '\0'],
//     ['\\x41 (hex A)', '\x41'],
//     ['\\u03A9 (Omega)', '\u03A9'],
//     ['\\u{1F60A} (code point U+1F60A)', '\u{1F60A}'],
//     ['\\u2028 (line separator)', '\u2028'],
//     ['\\u2029 (paragraph separator)', '\u2029'],
//     ['\\cA (control-A)', '\cA'],
//     ['\\x41 (hex A)', '\x41']
// ];

// examples.forEach(([label, s], i) => {
//     const codes = Array.from(s).map(ch => 'U+' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0'));
//     console.log(`${i + 1}. ${label} => ${JSON.stringify(s)} | length: ${s.length} | codes: ${codes.join(' ')}`);
// });