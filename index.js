
/**
 * create an alias from `from` to `to`
 *
 * @param {Object} obj
 * @param {String|Object} to
 * @param {String} [from]
 * @return {obj}
 */

module.exports = function alias(obj, to, from){
	if (typeof to == 'object') for (from in to) alias(obj, from, to[from])
	else Object.defineProperty(obj, from, {
		get: function(){
			return this[to]
		},
		set: function(val){
			return this[to] = val
		},
		configurable: true,
		enumerable: true
	})
	return obj
}