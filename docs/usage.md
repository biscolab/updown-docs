---
id: usage
title: Usage
sidebar_label: Usage
---

## Initialize the UpDown
First of all you have to initialize the `UpDown` API object

```php

use Biscolab\UpDown\UpDown;
use Biscolab\UpDown\Fields\UpDownRequestFields;

// Initialize UpDown 
UpDown::init([
    UpDownRequestFields::API_KEY => '<YOUR_UPDOWN_API_KEY>'
]);
```