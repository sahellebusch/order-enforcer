# order-enforcer
Small library for verifying lists are in order.  See tests for examples.

[![NPM](https://nodei.co/npm/order-enforcer.png)](https://nodei.co/npm/order-enforcer/)

[![build status](https://api.travis-ci.org/sahellebusch/order-enfocer.png?branch=master)](http://travis-ci.org/sahellebusch/order-enforcer)
[![npm version](https://badge.fury.io/js/order-enforcer.svg)](https://badge.fury.io/js/order-enforcer)

## Functions

<dl>
<dt><a href="#isAscending">isAscending(list, [path])</a></dt>
<dd><p>Determines if a list is sorted in ascending order.</p>
</dd>
<dt><a href="#isDescending">isDescending(list, [path])</a></dt>
<dd><p>Determines if a list is sorted in descending order.</p>
</dd>
</dl>

<a name="isAscending"></a>

## isAscending(list, [path])
Determines if a list is sorted in ascending order.

**Kind**: global function

**Throws**:

- <code>TypeError</code> if list is not an array or values to be compared are not a string or number

**Returns**: <code>Boolean</code>  true if sorted

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| list | <code>Array.&lt;\*&gt;</code> |  | list of items to determine if sorted |
| [path] | <code>String</code> | <code>null</code> | for a list of objects, compares the value of the path of the object |

<a name="isDescending"></a>

## isDescending(list, [path])
Determines if a list is sorted in descending order.

**Kind**: global function<br />

**Throws**:

- <code>TypeError</code> if list is not an array or values to be compared are not a string or number

**Returns**: <code>Boolean</code>  true if sorted

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| list | <code>Array.&lt;\*&gt;</code> | | list of items to determine if sorted |
| [path] | <code>String</code> | <code>null</code> | for a list of objects, compares the value of the path of the object |

