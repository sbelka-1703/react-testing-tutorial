import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShowTextButton } from "./showTextButton";

test("When a user clicks on the button, the onClick event shows text to the user ", async () => {
  const onClickMock = jest.fn();
  const user = userEvent.setup();
  render(
    <ShowTextButton
      onClick={onClickMock}
      buttonText="Show Text"
      someText="Hi"
    />
  );
  const ourButton = screen.getByRole("button", { name: "Show Text" });
  await user.click(ourButton);
  expect(screen.getByText("Hi"));
  expect(onClickMock).toHaveBeenCalled();
});
