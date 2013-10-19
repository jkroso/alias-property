
var chai = require('./chai')
var alias = require('..')

describe('alias-property', function(){
	var a
	var b
	beforeEach(function(){
		a = {a:1}
		b = Object.create(a)
		alias(a, 'a', 'b')
	})

	it('should work with inheritance', function(){
		alias(a, 'a', 'b')
		a.b.should.equal(1)
		b.b.should.equal(1)
	})

	it('should change with the original', function(){
		a.a = 2
		a.b.should.equal(2)
		b.b.should.equal(2)
	})

	it('should change with the alias', function(){
		a.b = 2
		a.a.should.equal(2)
		b.a.should.equal(2)
	})

	it('should support mass aliasing', function(){
		alias(a, {a: 'b'})
		a.b.should.equal(1)
		b.b.should.equal(1)
	})
})