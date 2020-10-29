import React from "react";
import { shallow } from "enzyme";

import FormField from "components/atoms/FormField";

describe("FormField", () => {
  it("should render and match snapshot", () => {
    const component = shallow(
      <FormField><div>Child</div></FormField>
    );

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
