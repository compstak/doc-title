var title = require('../index');
var assert = require('assert');

var mockDoc = {};
title.setDocument(mockDoc);

describe('Doc-title', function() {
	describe('Setting the title', function () {
		it('Should set the title when changing the app', function () {
			title.setApp('AppName');
			assert.equal(mockDoc.title, 'AppName');
		});

		it('Should set the title when changing the page', function () {
			title.setApp('AppName');
			title.setPage('PageName');
			assert.equal(mockDoc.title, 'AppName | PageName');
		});

		it('Should set the title when changing the modifier', function () {
			title.setApp('AppName');
			title.setPage('PageName');
			title.setModifier('Modified');
			assert.equal(mockDoc.title, 'AppName | PageName | Modified');
		});

		it('Should set the title when changing the separator', function () {
			title.setApp('AppName');
			title.setPage('PageName');
			title.setModifier('Modified');
			title.setSeparator(' : ');
			assert.equal(mockDoc.title, 'AppName : PageName : Modified');
			title.setSeparator(' | ');
		});

		if ('Should reset modifier when setting page', function () {
			title.setApp('AppName');
			title.setPage('PageName');
			title.setModifier('Modified');
			title.setPage('Other PageName');
			assert.equal(mockDoc.title, 'AppName | Other PageName');
		});

		if ('Should reset page and modifier when changing app name', function () {
			title.setApp('AppName');
			title.setPage('PageName');
			title.setModifier('Modified');
			title.setApp('Other AppName');
			assert.equal(mockDoc.title, 'Other AppName');
		});
	});

	describe('Flashing a message', function () {
		it('Should set the title to the message, then change it back', function (done) {
			title.setApp('AppName');
			title.setMessageTime(4);
			title.flash('Emergency!');
			assert.equal(mockDoc.title, 'Emergency!');
			setTimeout(function () {
				assert.equal(mockDoc.title, 'AppName');
				done();
			}, 5);

		});
	});
});
