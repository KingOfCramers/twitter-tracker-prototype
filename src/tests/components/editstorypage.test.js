import React from "react";
import EditStoryPage from "../../components/EditStoryPage";
import { shallow } from "enzyme";

test("Should render story page correctly", () => {
  const wrapper = shallow(<EditStoryPage />);
  expect(wrapper).toMatchSnapshot();
});

