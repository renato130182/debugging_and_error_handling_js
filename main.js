function isValid(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Send the parameter!');

		if (typeof(arr) != 'object')
			throw new TypeError('Send a element type ARRAY');

		if (typeof(num) !== 'number')
			throw new TypeError('Send a element type NUMBER!');

		if (arr.length !== num) throw new RangeError('array size is invalid');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.message);
        }else if(e instanceof TypeError){
            console.log('TypeError!');
			console.log(e.message);        
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.message);
		} else {
			console.log('Other error type!');
			console.log(e.message);
		}
	}
}

console.log(isValid());
console.log(isValid(1,2));
console.log(isValid([1, 2, 3], "0"));
console.log(isValid([1, 2, 3], 0));
console.log(isValid([1, 2, 3], 3));