import { render } from "@testing-library/react";
import { Swap } from "./Swap";
vi.mock("./components/UserSearch/UserSearch", () => ({
  UserSearch: () => <>User Search</>,
}));
vi.mock("./useSwap");
vi.mock("./Swap.util");

describe("Swap", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should match snapshot", () => {
    const { container } = render(<Swap />);

    expect(container).toMatchSnapshot();
  });
});
