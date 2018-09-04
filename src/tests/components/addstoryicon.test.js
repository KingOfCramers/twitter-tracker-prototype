import React from "react";
import { AddStoryIcon } from "../../components/AddStoryIcon";
import { shallow } from "enzyme";

test("Should render story page correctly", () => {
  const wrapper = shallow(<AddStoryIcon />);
  expect(wrapper).toMatchSnapshot();
});
