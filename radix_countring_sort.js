function hexadecimalRadixSort(arr) {
    let min = arr[0],
        max = 0,
        minHex = "",
        maxHex = "",
        len = arr.length,
        arrHex = [],
        preFinal = [],
        final = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }

        arrHex[i] = {
            hex: arr[i].toString(16),
            dec: arr[i],
            i: i
        }
        final[i] = "";
        preFinal[i] = "";
    }

    minHex = min.toString(16);
    maxHex = max.toString(16);

    var tempArr = arrHex.map(x => {
        while (maxHex.length > x.hex.length) {
            x.hex = '0' + x.hex;
        }
        return x.hex;
    });

    var counter = 0;

    while (counter < maxHex.length) {

        var cd = 0 - 1 - counter;
        const hexArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

        var firstAvaliable;

        for (var i = 0; i < arrHex.length; i++) {
            if (arrHex[i].hex[arrHex[i].hex.length + cd] != undefined) {
                firstAvaliable = arrHex[i].hex[arrHex[i].hex.length + cd];
                break;
            }
        }

        var tempMin = firstAvaliable;
        var tempMax = firstAvaliable;

        for (var i = 0; i < arrHex.length; i++) {
            if (
                arrHex[i].hex[arrHex[i].hex.length + cd] != undefined &&
                hexArr.indexOf(arrHex[i].hex[arrHex[i].hex.length + cd]) < hexArr.indexOf(tempMin)
            ) {
                tempMin = arrHex[i].hex[arrHex[i].hex.length + cd];
            }

            if (
                arrHex[i].hex[arrHex[i].hex.length + cd] != undefined &&
                hexArr.indexOf(arrHex[i].hex[arrHex[i].hex.length + cd]) > hexArr.indexOf(tempMax)
            ) {
                tempMax = arrHex[i].hex[arrHex[i].hex.length + cd];
            }
        }

        var minID = hexArr.indexOf(tempMin);
        var maxID = hexArr.indexOf(tempMax);
        var count = {};

        for (var i = 0; i <= maxID; i++) {
            count[String(hexArr[i])] = 0;
        }

        for (var i = 0; i < len; i++) {
            var val = arrHex[i].hex[arrHex[i].hex.length + cd];
            if (val) {
                count[String(val)] += 1;
            } else {
                count[0] += 1;
            }
        }

        var tempSearch = [];
        var tempValArr = [];
        for (var i = 0; i < 16; i++) {
            while (count[i.toString(16)] > 0) {

                var tempVal = undefined;
                var c = -1;
                while (!tempVal && c < 15) {
                    tempVal = tempArr.find(
                        function(el) {
                            c++;
                            return el.lastIndexOf(hexArr[i] + preFinal[c]) >= (el.length + cd);
                        }
                    );
                }
                tempSearch.push(hexArr[i] + preFinal[c]);
                tempValArr.push(tempVal);
                tempArr.splice(tempArr.lastIndexOf(tempVal), 1);
                preFinal.splice(c, 1);

                count[i.toString(16)]--;
            }
        }
        preFinal = tempSearch.map(x => x);
        tempArr = tempValArr.map(x => x);
        counter++;

        console.log(tempArr.map(x => parseInt(x, 16)));
    }
}

hexadecimalRadixSort([9, 87, 199, 15, 3, 214, 19, 26, 58, 2, 102, 23]);