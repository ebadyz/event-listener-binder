import { bind } from "./bind";

function mergeOptions(
  listenerOption: AddEventListenerOptions | boolean | undefined,
  defaultOptions?: AddEventListenerOptions | boolean
) {
  let obj: AddEventListenerOptions = {};

  if (typeof defaultOptions === "boolean") {
    obj.capture = defaultOptions;
  }

  if (typeof listenerOption === "boolean") {
    obj.capture = listenerOption;
  }

  if (defaultOptions instanceof Object) {
    obj = {
      ...defaultOptions,
      ...obj,
    };
  }

  if (listenerOption instanceof Object) {
    obj = {
      ...obj,
      ...listenerOption,
    };
  }

  return obj;
}

export function bindAll<T extends EventTarget>(
  element: T,
  listenerOptions: Array<{
    type: keyof HTMLElementEventMap;
    listener: EventListenerOrEventListenerObject;
    options?: AddEventListenerOptions | boolean;
  }>,
  options?: AddEventListenerOptions | boolean
) {
  const unbinds = listenerOptions.map((listenerOption) =>
    bind(element, {
      type: listenerOption.type,
      listener: listenerOption.listener,
      options: mergeOptions(listenerOption.options, options),
    })
  );

  return function unbind() {
    unbinds.forEach((unbind) => unbind());
  };
}
