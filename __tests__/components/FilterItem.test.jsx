import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterItem from "../../src/app/components/FilterItem";

describe("FilterItem", () => {
  it("displays a checkmark for a truthy item", () => {
    const item = true;
    const handler = () => {};
    const text = "butts";
    const { getByText } = render(
      <FilterItem item={item} itemHandler={handler} text={text} />,
    );

    const filterItem = getByText("✅");
    expect(filterItem).toBeTruthy();
  });

  it("displays an X for a falsy item", () => {
    const item = false;
    const handler = () => {};
    const text = "booties";
    const { getByText } = render(
      <FilterItem item={item} itemHandler={handler} text={text} />,
    );

    const filterItem = getByText("❌");
    expect(filterItem).toBeTruthy();
  });

  it("calls the handler when clicked", () => {
    const item = false;
    const handler = jest.fn();
    const text = "bootied";

    const { getByText } = render(
      <FilterItem item={item} itemHandler={handler} text={text} />,
    );

    const filterItemAnchor = getByText(text);
    fireEvent.click(filterItemAnchor);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
