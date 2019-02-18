---
id: version-v1.1.0-event
title: Event
sidebar_label: Event
original_id: event
---
> Source is the <a href="https://updown.io/api" target="_blank">Official Page of updown.io API</a>

Every time an event occurs (check changes its status, either go down or go up) a POST request will be sent toward to every enpoint we previously set as `webhook`.

## Events

To handle event object use object `Biscolab\UpDown\Objects\Event`

**Fields**
|Field name (key)|Type    |Description   |
|-----------|-----------|-----------|
|`event`|string|The event type: `check.up` or `check.down`|
|`check`|Check|Last Check|
|`downtime`|Downtime|Downtime data|