---
id: version-v1.1.0-webhook
title: WebHook
sidebar_label: WebHook (CRUD)
original_id: webhook
---
> Source is the <a href="https://updown.io/api" target="_blank">Official Page of updown.io API</a>
## Get All WebHooks
```php
$webhook = new WebHook();
/** @var WebHooks $all */
$all = $webhook->all();
```

`$all` is an instance of WebHooks, a collection of `Biscolab\UpDown\Objects\WebHook` objects

## CRUD methods

* WebHook is a **CRUD** object, so it has `create`, `read`, `update` and `delete` methods available.
* `$attributes` could an array containing a list of attributes (`Biscolab\UpDown\Fields\WebHookFields`) or a scalar value representing the token given by updown.io.  

>Actually `read` and `update` methods are not available for this object 

### Create WebHook object on updown.io
```php
$webhook = new WebHook($attributes);
$webhook->create();

// OR!
$webhook = new WebHook();
$webhook->create($attributes);
```
**Attributes**
|Attribute name (key)|Type    |Description   |
|-----------|-----------|-----------|
|`url`|string|`required` The URL of the webhook you want to add |

### Read Check data from updown.io
>This method is unavailable

### Update Check on updown.io
>This method is unavailable

### Delete Check from updown.io
```php
$webhook = new WebHook();
$deleted = $webhook->delete();
```
`$deleted` is bool, `true` if "ok", `false` if something went wrong