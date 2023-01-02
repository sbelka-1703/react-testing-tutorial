import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//We are importing the component that we will test
import { ShowContentButton } from "./ShowContentButton";

test("When a user presses the button, they will see some text", async () => {
  //Running this setup at the beginning of the test lets us use the userEvent methods( like user.click())
  const user = userEvent.setup();

  //The component needs to be rendered before we can start testing anything else in that component
  render(<ShowContentButton>Some Text</ShowContentButton>);

  //We grabbing our button by using screen.getByRole. The role is referring to its aria role: https://www.w3.org/TR/html-aria/#docconformance
  const ourButton = screen.getByRole("button", { name: "Show Content" });

  //userEvent is an async method, hence the await. Above we defined our button and bellow we are clicking on it using the userEvent as user from the setup on line 8
  await user.click(ourButton);

  //Here we are asserting that the text "Some Text" is being seen by the user or that it is rendered to the page or the Document
  expect(screen.getByText("Some Text")).toBeInTheDocument();

  //We click the button to hide the content or the text "Some Text"
  await user.click(ourButton);

  //We assert that the content is no longer there with queryBy
  expect(screen.queryByText("Some Text")).not.toBeInTheDocument();
});
