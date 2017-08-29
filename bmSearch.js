function getShiftTable(search) {
	var table = {};
	var length = search.length;
	for (var i = 0; i <= length - 2; i++) {
		table[search[i]] = length - i - 1;
	}

	return table;
}

function bmSearch(search, str) {
	var resultIndex;
	var shiftTable = getShiftTable(search);
	var searchLength = search.length;
	var strLength = str.length;
	var strIndex = searchLength - 1;

	while (strIndex < strLength) {
		var searchIndex = 0;

		while (searchIndex < searchLength) {
			if (search[searchLength - 1 - searchIndex] === str[strIndex - searchIndex]) {
				searchIndex++;
			} else {
				break;
			}
		}

		if (searchIndex == searchLength) {
			resultIndex = strIndex - (searchLength-1);
			break;
		} else if (searchIndex == 0) {
			var shift = shiftTable[str[strIndex - searchIndex]] || searchLength;
			strIndex += shift;
		} else {
			var shift = shiftTable[search[searchLength-1]] || searchLength;
			strIndex += shift;
		}
	}

	return resultIndex;
}

var str = 'Lorem ipsum dtlor sit dolor, consectetur adipiscing elpt';
var search = 'dolo';

console.log(bmSearch(search, str));