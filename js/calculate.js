function print(x, char, y) {
    if (x === '') { console.log('空') } else if (y === '') { console.log('空'); } else if (char == '-') { console.log(x - y); } else if (char == '+') { console.log(x + y); } else if (char == '-') { console.log(x - y); } else if (char == '*') { console.log(x * y); } else if (char == '/') {
        if (y == 0) { alert('除数不能为零') }
        console.log(x / y)
    }

}


//超级拙劣的计算器输入窗口，请输入
print('', '+', 3)
print(1, '-', '')
print(1, '*', 3)
print(1, '/', 3)
print(1, '+', 3)
print(1, '-', 3)
print(1, '/', 0)
