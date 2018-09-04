import React from "react";
import StoryPage from "../../components/StoryPage";
import { shallow } from "enzyme";

test("Should render story page correctly", () => {
  const wrapper = shallow(<StoryPage />);
  expect(wrapper).toMatchSnapshot();
});

