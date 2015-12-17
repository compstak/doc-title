# Titler

This compact library helps you change the title of the document and flash notification messages.

## Basic Usage

```javascript
var titler = require('titler');

titler.setApp('AppName'); // title is 'AppName'
titler.setPage('Home'); // title is 'AppName | Home'
titler.setModifier('On The Range'); // title is 'AppName | Home | On The Range'
titler.setSeparator(': '); // title is 'AppName: Home: On The Range'

titler.flash('Where the deer and the buffalo roam'); // title is 'Where the deer and the buffalo roam' for 5 seconds, then resets
```

