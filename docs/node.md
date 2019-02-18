---
id: node
title: Node
sidebar_label: Node
---
> Source is the <a href="https://updown.io/api" target="_blank">Official Page of updown.io API</a>

Nodes are "Monitoring Nodes"! Find further information <a href="https://updown.io/about" target="_blank">here</a>
## Get All Nodes
```php
$node = new Node();
/** @var Nodes $all */
$all = $node->all();
```
`$all` is an instance of Nodes, a collection of `Biscolab\UpDown\Objects\Node` objects

## Read-only object
>You cannot read a specific `Node`, you can just download the whole list of `Nodes` using `all` method

### Read "all" method result from updown.io

As you saw before the result is a collection of `Node` object each of which has following fields.

**Fields**
|Field name (key)|Type    |Description   |
|-----------|-----------|-----------|
|`name`|string|Name of the server |
|`ip`|string|IP server address |
|`ip6`|string|IP v6 server address|
|`city`|string|City where the server is located |
|`country`|string|Country where the server is located|
|`country_code`|bool|ISO country code|
|`lat`|float|Latitude |
|`lng`|float|Longitude |

## IPv4 and IPv6
### Get Nodes "IPv4"
```php
$node = new Node();
$ipv4 = $node->getIpV4();
```
`$ipv4` is an array of string, each one represents an IPv4 address of a monitorign server

### Get Nodes "IPv6"
```php
$node = new Node();
$ipv6 = $node->getIpV6();
```
`$ipv6` is an array of string, each one represents an IPv6 address of a monitorign server