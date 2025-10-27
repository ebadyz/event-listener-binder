# bind util

First param is DOM element ( e.g. button ).
Second param is an object with event type and event function. it accepts event listeners options as a third key called "options".
Returns an unbind function, if called, unbind the binded event.

```
import { bind, UnbindFn } from 'bind-event-listener';

const unbind: UnbindFn = bind(button, {
  type: 'click',
  listener: onClick,
  options: { capture: true, passive: false },
});

// when your are all done:
unbind();
```

# bindAll util

- First param is DOM element ( e.g. button ).
- Second param is an Array of events on a DOM element (I assuming the last object of the array is the default options for the all events which means it will be merge into all the options on each binding).
- Returns an unbind function to unbind all the binded events.

```
import { bindAll } from 'bind-event-listener';

const unbind = bindAll(button, [
  {
    type: 'click',
    listener: onClick,
    options: { passive: true },
  },
  // default options that are applied to all bindings
  { capture: false },
]);

// when you are all done:
unbind();
```
