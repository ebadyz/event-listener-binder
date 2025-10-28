/* First param is DOM element ( e.g. button ).
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
*/

export function bind<T extends EventTarget>(
  element: T,
  listenerOptions: {
    type: keyof HTMLElementEventMap;
    listener: EventListenerOrEventListenerObject;
    options?: AddEventListenerOptions | boolean | undefined;
  }
) {
  element.addEventListener(
    listenerOptions.type,
    listenerOptions.listener,
    listenerOptions.options
  );

  return function unbind() {
    element.removeEventListener(
      listenerOptions.type,
      listenerOptions.listener,
      listenerOptions.options
    );
  };
}
