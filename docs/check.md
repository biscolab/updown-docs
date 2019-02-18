---
id: check
title: Check
sidebar_label: Check
---
> Source is the <a href="https://updown.io/api" target="_blank">Official Page of updown.io API</a>
## Get All Checks
```php
$check = new Chek();
/** @var Checks $all */
$all = $check->all();
```

`$all` is an instance of Checks, a collection of `Biscolab\UpDown\Objects\Check` objects

## CRUD methods

* Check is a **CRUD** object, so it has `create`, `read`, `update` and `delete` methods available.
* `$attributes` could an array containing a list of attributes (`Biscolab\UpDown\Fields\CheckFields`) or a scalar value representing the token given by updown.io.  

>Use Enum values like `CheckFields` to avoid errors to read and set attributes!

### Create Check object on updown.io
```php
$check = new Check($attributes);
$check->create();

// OR!
$check = new Check();
$check->create($attributes);
```
**Attributes**
|Attribute name (key)|Type    |Description   |Default value |
|-----------|-----------|-----------|-----------------|
|`url`|string|`required` The URL you want to monitor |`required` |
|`period`|int|Interval in seconds (15, 30, 60, 120, 300, 600, 1800 or 3600)| 60 |
|`apdex_t`|float|APDEX threshold in seconds (0.125, 0.25, 0.5, 1.0 or 2.0) | 0.5|
|`enabled`|bool|Is the check enabled (true or false)| true |
|`published`|bool|Shall the status page be public (true or false)| false |
|`alias`|string|Human readable name | null |
|`string_match`|string|Search for this string in the page | null |
|`mute_until`|string|Mute notifications until given time, accepts a time, 'recovery' or 'forever' | null |
|`http_verb`|string|The HTTP verb used to perform the request ('GET/HEAD', 'POST', 'PUT', 'PATCH', 'DELETE' or 'OPTIONS') | null |
|`http_body`|string|The HTTP body sent alongside the request | null | 
|`disabled_locations`|array|Disabled monitoring locations. It's an array of abbreviated location names. Can be any of these: ["lan", "mia", "bhs", "gra", "fra", "sin", "tok", "syd"] | null |
|`custom_headers`|array|The HTTP headers you want in updown request | null |

### Read Check data from updown.io
```php
$check = new Check($token);
$check->read();

// get data as array
$array_data = $check->toArray();

// get single value from accessor
// $<field_value> = $check->{<FIELD_NAME>};
// E.g.:
$url = $check->{CheckFields::URL};
```
**Fields**
|Field name (key)|Type    |Description   |
|-----------|-----------|-----------|
|`token`|string|`required` The URL you want to monitor |
|`url`|string|The URL you want to monitor |
|`period`|int|Interval in seconds (15, 30, 60, 120, 300, 600, 1800 or 3600)|
|`apdex_t`|float|APDEX threshold in seconds (0.125, 0.25, 0.5, 1.0 or 2.0) |
|`enabled`|bool|Is the check enabled (true or false)|
|`published`|bool|Shall the status page be public (true or false)|
|`alias`|string|Human readable name |
|`string_match`|string|Search for this string in the page |
|`mute_until`|string|Mute notifications until given time, accepts a time, 'recovery' or 'forever' |
|`http_verb`|string|The HTTP verb used to perform the request ('GET/HEAD', 'POST', 'PUT', 'PATCH', 'DELETE' or 'OPTIONS') |
|`http_body`|string|The HTTP body sent alongside the request |
|`disabled_locations`|array|Disabled monitoring locations. It's an array of abbreviated location names. Can be any of these: ["lan", "mia", "bhs", "gra", "fra", "sin", "tok", "syd"] |
|`custom_headers`|array|The HTTP headers you want in updown request |
|`down`|bool|The domain status |
|`down_since`|datetime| Timestamp indicating when the domain went down |
|`last_status`|int| Last HTTP status (200, 404, 500 etc...) |
|`error`|string|The error message |
|`last_check_at`|datetime|Timestamp of the last check |
|`next_check_at`|datetime|Timestamp of the next check |
|`favicon_url`|string|Favicon URL |
|`ssl`|Ssl|SSL certificate data |

### Update Check on updown.io
```php
$check = new Check($token);
$check->update($attributes);
```
|Attribute name (key)|Type    |Description   |Default value |
|-----------|-----------|-----------|-----------------|
|`token`|string|`required` The URL you want to monitor |`required` |
|`url`|string|The URL you want to monitor |null|
|`period`|int|Interval in seconds (15, 30, 60, 120, 300, 600, 1800 or 3600)| 60 |
|`apdex_t`|float|APDEX threshold in seconds (0.125, 0.25, 0.5, 1.0 or 2.0) | 0.5|
|`enabled`|bool|Is the check enabled (true or false)| true |
|`published`|bool|Shall the status page be public (true or false)| false |
|`alias`|string|Human readable name | null |
|`string_match`|string|Search for this string in the page | null |
|`mute_until`|string|Mute notifications until given time, accepts a time, 'recovery' or 'forever' | null |
|`http_verb`|string|The HTTP verb used to perform the request ('GET/HEAD', 'POST', 'PUT', 'PATCH', 'DELETE' or 'OPTIONS') | null |
|`http_body`|string|The HTTP body sent alongside the request | null | 
|`disabled_locations`|array|Disabled monitoring locations. It's an array of abbreviated location names. Can be any of these: ["lan", "mia", "bhs", "gra", "fra", "sin", "tok", "syd"] | null |
|`custom_headers`|array|The HTTP headers you want in updown request | null |

### Delete Check from updown.io
```php
$check = new Check($token);
$deleted = $check->delete();
```
`$deleted` is bool, `true` if "ok", `false` if something went wrong

## Metrics and Downtimes
### Get Check "Metrics" from updown.io
```php
$check = new Check($token);
$metrics = $check->getMetrics($from, $to, $group);
```

`$metrics` is anf objact of class `Biscolab\UpDown\Types\Metrics`

**Arguments**
|Name   |Type   |Description   |Default    |
|-------|--------|-----------|-----------|
|$from  |int    |Start time (will be converted in ISO8601 format)    |1 month ago   |
|$to  |int    |End time (will be converted in ISO8601 format)    |now   |
|$group  |string    |Group data by 'time' (hour) or 'host' (location)    |null   |

>Statistic are aggregated per hour which means you can't get more precise results than this. For example all requests performed between 5:00 and 5:59 will be reported at 5:00 in this API. The time range needs to be at least one hour to get data.

### Get Check "Downtimes" from updown.io
```php
$check = new Check($token);
$downtimes = $check->getDowntimes($page);
```

`$downtimes` is anf objact of class `Biscolab\UpDown\Types\DownTimes`, a collection of `Biscolab\UpDown\Types\DownTime` objects 

**Arguments**
|Name   |Type   |Description   |Default    |
|-------|--------|-----------|-----------|
|$page  |int    |The page to fetch (100 per page)    |1   |