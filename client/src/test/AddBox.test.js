import { render, screen, fireEvent } from '@testing-library/react';
import AddBox from "../views/AddBox"

beforeEach(() => {
  render(<AddBox />);
});

test('Should change value in Name input', () => {
  const name = screen.getByLabelText('Name', {selector: 'input'});
  fireEvent.change(name, {target: {value: 'Mohammad'}})
  expect(name).toHaveValue("Mohammad");
});

test('Should change value in Weight input', () => {
  const weight = screen.getByLabelText('Weight', {selector: 'input'});
  fireEvent.change(weight, {target: {value: 1}})
  expect(weight).toHaveValue(1);
});

test('Should not allow to have text in Weight input', () => {
  const weight = screen.getByLabelText('Weight', {selector: 'input'});
  fireEvent.change(weight, {target: {value: "Hello"}})
  expect(weight).toHaveValue(null);
});

test('Should not allow to have negative value in Weight input', () => {
  const weight = screen.getByLabelText('Weight', {selector: 'input'});
  fireEvent.change(weight, {target: {value: -1}})
  const save = screen.getByText('Save')
  fireEvent.click(save);
  jest.spyOn(window, 'alert').mockImplementation(() => {
    expect("Negative values are not permitted").toBeInTheDocument();
  });
});

test('Should Name input not be empty', () => {
  const name = screen.getByLabelText('Name', {selector: 'input'});
  //fireEvent.change(name, {target: {value: ""}})
  const save = screen.getByText('Save')
  fireEvent.click(save);
  jest.spyOn(window, 'alert').mockImplementation(() => {
    expect("Please fill name field").toBeInTheDocument();
  });
});


test("Should show the DropDownButton default value", () => {
  expect(screen.getByText("Sweden")).toBeInTheDocument();
});

test("Should DropDownButton change value when selected", () => {
  fireEvent.change(screen.getByTestId("select"), {
    target: { value: "Brazil" },
  });
  expect(screen.getByText("Brazil")).toBeInTheDocument();
});




