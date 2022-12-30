import { getAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShowContentButton } from "./ShowContentButton";

test("When a user clicks on the button, the user will see the text from the children ", async () => {
  //setting up userEvent
  const user = userEvent.setup();

  render(<ShowContentButton>Some Text</ShowContentButton>);
  const showContentButton = screen.getByRole("button", { name: "Show Text" });
  await user.click(showContentButton);
  expect(screen.getByText("Some Text")).toBeInTheDocument();

  await user.click(showContentButton);
  expect(screen.queryByText("Some Text")).not.toBeInTheDocument();
});

test("A user will be able see other HTML elements after the showContentButton is pressed", async () => {
  //setting up userEvent
  const user = userEvent.setup();

  render(
    <ShowContentButton>
      <h1>Large Title</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </ShowContentButton>
  );
  const showContentButton = screen.getByRole("button", { name: "Show Text" });
  await user.click(showContentButton);
  expect(screen.getByText("Large Title")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();

  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);

  expect(screen.getByText("Item 1")).toBeInTheDocument();
});
