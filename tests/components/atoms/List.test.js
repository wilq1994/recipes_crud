import React from "react";
import { shallow } from "enzyme";

import List from "components/atoms/List";

describe("List", () => {
  it("should render and match snapshot", () => {
    const list = ["a", "b", "c"];
    const component = shallow(<List list={list} />);

    expect(component.exists()).toBeTruthy();
    expect(component.find("li").length).toBe(list.length);
    expect(component).toMatchSnapshot();
  });
});
