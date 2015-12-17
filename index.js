
var document;
if (typeof window !== 'undefined') {
	window.document;
}

var app = '';
var page = '';
var modifier = '';

var separator = ' | ';

var title = '';

var timeout;
var messages = [];
var messageTime = 5000;

function renderTitle () {
	var titleArray = [];
	
	if (app) {
		titleArray.push(app);
	}

	if (page) {
		titleArray.push(page);
	}

	if (modifier) {
		titleArray.push(modifier);
	}

	title = titleArray.join(separator);
}

function setTitle () {
	if (!timeout) {
		document.title = title;
	}
}

function showMessage (message) {
	if (timeout) {
		messages.push(message)
	} else {
		document.title = message;
		timeout = setTimeout(function () {
			timeout = undefined;
			if (messages.length) {
				showMessage(messages.shift());
			} else {
				setTitle();
			}
		}, messageTime)
	}
}

exports.setDocument = function (injectedDocument) {
	document = injectedDocument;
};

exports.setApp = function (injectedApp) {
	if (typeof injectedApp !== 'string') {
		throw new TypeError('Title app name must be a string.');
	}
	app = injectedApp;
	page = '';
	modifier = '';

	renderTitle();
	setTitle();
};

exports.setPage = function (injectedPage) {
	if (typeof injectedPage !== 'string') {
		throw new TypeError('Title page name must be a string.');
	}
	page = injectedPage;
	modifier = '';

	renderTitle();
	setTitle();
};

exports.setModifier = function (injectedModifier) {
	if (typeof injectedModifier !== 'string') {
		throw new TypeError('Title modifier must be a string.');
	}
	modifier = injectedModifier;
	renderTitle();
	setTitle();
};

exports.setSeparator = function (injectedSeparator) {
	if (typeof injectedSeparator !== 'string') {
		throw new TypeError('Title separator must be a string.');
	}
	separator = injectedSeparator;
	renderTitle();
	setTitle();
};

exports.flash = function (message) {
	if (typeof message !== 'string') {
		throw new TypeError('Title message must be a string.');
	}
	showMessage(message);
};

exports.setMessageTime = function (injectedMessageTime) {
	if (+injectedMessageTime !== injectedMessageTime) {
		throw new TypeError('Title message time must be a number.');
	}
	messageTime = injectedMessageTime;
};
