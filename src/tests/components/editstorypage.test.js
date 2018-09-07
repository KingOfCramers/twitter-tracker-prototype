import React from "react";
import { EditStoryPage } from "../../components/EditStoryPage";
import { shallow } from "enzyme";

test("Should render story page correctly", () => {
  const props = {
    story: "STory title",
    dueDate: 123092408,
    description: "soidf0qiof"
  }
  const wrapper = shallow(<EditStoryPage {...props}/>);
  expect(wrapper).toMatchSnapshot();
});