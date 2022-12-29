# Getting Started with [Click Outside Detect](https://www.npmjs.com/package/click-outside-detect)


## Installing

Using npm:

```
npm i click-outside-detect
```

Using yarn:

```
yarn add click-outside-detect
```

## Usege

Once the package is installed, you can import the library using import or require approach:

```js
import OutsideClickDetect from "click-outside-detect";
```

this fuction require 2 peramters `referance` and `callback function`

```js
OutsideClickDetect(ref,callback());
```


## Example

```js
import { useRef } from "react";
import OutsideClickDetect from "click-outside-detect"; //import function

function App() {
  const ref = useRef();

  const callback = ()=>{
    console.log("clicked outside here")
  }

  OutsideClickDetect(ref,callback)
  return (
    <div>
      <div>
        click here
      </div>
      <div ref={ref} >
        Div
      </div>
    </div>
  );
}

export default App;

```

