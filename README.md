# Titler

This compact library helps you change the title of the document and flash notification messages.

## Basic Usage

```javascript
var title = require('doc-title');

title.setApp('AppName'); // title is 'AppName'
title.setPage('Home'); // title is 'AppName | Home'
title.setModifier('On The Range'); // title is 'AppName | Home | On The Range'
title.setSeparator(': '); // title is 'AppName: Home: On The Range'

title.flash('Where the deer and the buffalo roam'); // title is 'Where the deer and the buffalo roam' for 5 seconds, then resets
```

