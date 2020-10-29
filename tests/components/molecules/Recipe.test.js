import React from "react";
import { shallow } from "enzyme";

import {Recipe} from "components/molecules/Recipe";
import Button from "components/atoms/Button";

describe("Recipe", () => {
  it("should render and match snapshot", () => {
    const fakeOnDelete = jest.fn();
    const fakeOnEdit = jest.fn();
    const component = shallow(
        <Recipe
            ingredients={['a','b','c']}
            onDelete={fakeOnDelete}
            onEdit={fakeOnEdit}
        />
    );

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it("should call onDelete", () => {
    const fakeOnDelete = jest.fn();
    const fakeOnEdit = jest.fn();
    const component = shallow(
        <Recipe
            ingredients={['a','b','c']}
            onDelete={fakeOnDelete}
            onEdit={fakeOnEdit}
        />
    );

    component.find(Button).at(0).simulate('click')
    expect(fakeOnDelete).toHaveBeenCalled()
  });

  it("should call onEdit", () => {
    const fakeOnDelete = jest.fn();
    const fakeOnEdit = jest.fn();
    const component = shallow(
        <Recipe
            ingredients={['a','b','c']}
            onDelete={fakeOnDelete}
            onEdit={fakeOnEdit}
        />
    );

    component.find(Button).at(1).simulate('click')
    expect(fakeOnEdit).toHaveBeenCalled()
  });
});
