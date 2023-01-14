import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // arrange
    render(<Greeting />)

    // act
    // ...

    // assert
    const helloEl = screen.getByText('Hello, world!');
    expect(helloEl).toBeInTheDocument();
  })

  test('renders Changed! if button was clicked', () => {
    render(<Greeting />)

    // act
    userEvent.click(screen.getByRole('button'));

    // assert
    const changedEl = screen.getByText('Changed!', { exact: false });
    expect(changedEl).toBeInTheDocument();
  })

  test('does not render Changed! if button was not clicked', () => {
    render(<Greeting />)

    const notChangedEl = screen.getByText('Not Changed!', { exact: false });

    expect(notChangedEl).toBeInTheDocument();
  })

  test('does not render "Not changed" if button was clicked', () => {
    render(<Greeting />)

    userEvent.click(screen.getByRole('button'));

    const notChangedEl = screen.queryByText('Not Changed!', { exact: false });

    expect(notChangedEl).toBeNull();
  })
})
