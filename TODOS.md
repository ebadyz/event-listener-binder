# bind util

- First param is DOM element ( e.g. button ).
- Second param is an object with event type and event function. it accepts event listeners options as a third property called `options`.
- Returns an unbind function, if called, unbind the binded event.

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
- Second param is an Array of events object on a DOM element.
- Third param is a default options. it should be merged with the `options` on each binding.  
  Note: it is a little bit more complicated than just object spreading as it will also behave correctly when passing in a boolean capture argument. An options value can be a boolean { options: true } which is shorthand for { options: {capture: true } }
- Returns an unbind function to unbind all the binded events.

```
import { bindAll } from 'bind-event-listener';

const unbind = bindAll(button, [
    {
    type: 'click',
    listener: onClick,
    options: { passive: true },
    },
  ],
  // default options that are applied to all bindings
  { capture: false },
);

// when you are all done:
unbind();
```
