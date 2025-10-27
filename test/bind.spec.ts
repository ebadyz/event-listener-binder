import { bind } from "../src/bind";

it("should bind an event listener", () => {
  const button: HTMLButtonElement = document.createElement("button");
  const onClick = jest.fn();
  bind(button, { type: "click", callback: onClick });
  button.click();
  expect(onClick).toHaveBeenCalledTimes(1);
});

it("should unbind an event listener", () => {
  const button: HTMLButtonElement = document.createElement("button");
  const onClick = jest.fn();
  const unbind = bind(button, { type: "click", callback: onClick });
  button.click();
  expect(onClick).toHaveBeenCalledTimes(1);

  onClick.mockClear();
  unbind();
  button.click();
  expect(onClick).not.toHaveBeenCalled();
});
