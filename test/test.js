var titler = require('../index');
var assert = require('assert');

var mockDoc = {};
titler.setDocument(mockDoc);

describe('Titler', function() {
	describe('Setting the title', function () {
		it('Should set the title when changing the app', function () {
			titler.setApp('AppName');
			assert.equal(mockDoc.title, 'AppName');
		});

		it('Should set the title when changing the page', function () {
			titler.setApp('AppName');
			titler.setPage('PageName');
			assert.equal(mockDoc.title, 'AppName | PageName');
		});

		it('Should set the title when changing the modifier', function () {
			titler.setApp('AppName');
			titler.setPage('PageName');
			titler.setModifier('Modified');
			assert.equal(mockDoc.title, 'AppName | PageName | Modified');
		});

		it('Should set the title when changing the separator', function () {
			titler.setApp('AppName');
			titler.setPage('PageName');
			titler.setModifier('Modified');
			titler.setSeparator(' : ');
			assert.equal(mockDoc.title, 'AppName : PageName : Modified');
			titler.setSeparator(' | ');
		});

		if ('Should reset modifier when setting page', function () {
			titler.setApp('AppName');
			titler.setPage('PageName');
			titler.setModifier('Modified');
			titler.setPage('Other PageName');
			assert.equal(mockDoc.title, 'AppName | Other PageName');
		});

		if ('Should reset page and modifier when changing app name', function () {
			titler.setApp('AppName');
			titler.setPage('PageName');
			titler.setModifier('Modified');
			titler.setApp('Other AppName');
			assert.equal(mockDoc.title, 'Other AppName');
		});
	});

	describe('Flashing a message', function () {
		it('Should set the title to the message, then change it back', function (done) {
			titler.setApp('AppName');
			titler.setMessageTime(4);
			titler.flash('Emergency!');
			assert.equal(mockDoc.title, 'Emergency!');
			setTimeout(function () {
				assert.equal(mockDoc.title, 'AppName');
				done();
			}, 5);

		});
	});
});
