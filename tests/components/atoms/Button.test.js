import React from "react";
import { shallow } from "enzyme";

import Button from "components/atoms/Button";

describe("Button", () => {
  it("should render and match snapshot", () => {
    const component = shallow(<Button>Button</Button>);

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it("should render small if small property passed", () => {
    const component = shallow(<Button small>Button</Button>);

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it("should render as secondary if secondary property passed", () => {
    const component = shallow(<Button secondary>Button</Button>);

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
