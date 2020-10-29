import React from "react";
import { shallow } from "enzyme";

import {AccordionItem} from "components/atoms/AccordionItem";
import {Header} from "components/atoms/AccordionItem/styles";

describe("AccordionItem", () => {
  it("should render and match snapshot", () => {
    const component = shallow(
      <AccordionItem name='Name'><div>Child</div></AccordionItem>
    );

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it("should show content if clicked", () => {
    const component = shallow(
      <AccordionItem name='Name'><div>Child</div></AccordionItem>
    );
    
    component.find(Header).simulate('click');
    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
