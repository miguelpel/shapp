export const decamelize = (str, separator=" ") => {
	separator = typeof separator === 'undefined' ? '_' : separator;

	return str
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase()
        .replace(/\b\w/g, l => l.toUpperCase());
}

export const removeDuplicatesAndRank = (arr) => {
        return arr.sort().filter(function(item, pos, ary) {
                return !pos || item != ary[pos - 1];
            })
}