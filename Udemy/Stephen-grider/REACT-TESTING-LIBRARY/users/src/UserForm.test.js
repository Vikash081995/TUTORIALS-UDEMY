import { render, screen } from "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  //render the component
  render(<UserForm name="test name" />);
  //manipulate the component or find an  element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  //Assertion-make sure the component is doing
  //what we expect it to do

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when form is submitted", () => {
  const mock = jest.fn();
  //Try to render my component
  render(<UserForm onUserAdd={mock} />);
  //find the two inputs
  const nameInput = screen.getAllByRole("textbox", {
    name: /name/i
  });
  const emailInput = screen.getAllByRole("textbox", {
    email: /email/i
  });

  //Simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");

  //Simulate typing in an email
  user.click(emailInput);
  user.keyboard("yourEmail@gmail.com");

  //find the button
  const button = screen.getByRole("button");
  //Simulate clicking the button'
  user.click(button);
  //Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@gmail.com" });
});

test("empties the two inputs when form is submitted", () => {
  render(<UserForm onUserAdd={() => {}} />);
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");
  user.click(nameInput);
  user.keyboard("jane");

  user.click(emailInput);
  user.keyboard("yourEmail@gmail.com");
  user.click(button);
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
