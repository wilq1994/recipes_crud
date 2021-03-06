import React from "react";
import { shallow } from "enzyme";

import App from "components/App";

describe("App", () => {
  it("should render and match snapshot", () => {
    const component = shallow(<App />);

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
