# date-format

that formatting Date objects as strings

# Installation

> npm i @aierse/date-format

# Usage

> Do not use the spacebar as a separator.

```js
import dateFormat from "@aierse/date-format";

const now = new Date("2023-09-14 12:20:30");

const type1 = dateFormat(now); // 2023-09-14
const type2 = dateFormat(now, "yyyy"); // 2023
const type3 = dateFormat(now, "yyyy/MM/dd"); // 2023/09/14
const type4 = dateFormat(now, "MM-dd-yyyy"); // 09-14-2023
const type1 = dateFormat(now, "M-d-yyyy"); // 9-14-2023
const type1 = dateFormat(now, "yyyy-MM-dd hh:mm:ss"); // 2023-09-14 12:20:30
const type1 = dateFormat(now, "hh:mm"); // 12:20
```
