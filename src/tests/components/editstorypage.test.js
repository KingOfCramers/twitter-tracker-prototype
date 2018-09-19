import React from "react";
import { EditStoryDashboard } from "../../components/EditStoryDashboard";
import { shallow } from "enzyme";

test("Should render story page correctly", () => {
  const props = {
    story: "STory title",
    dueDate: 123092408,
    description: "soidf0qiof"
  }
  const wrapper = shallow(<EditStoryDashboard {...props}/>);
  expect(wrapper).toMatchSnapshot();
});