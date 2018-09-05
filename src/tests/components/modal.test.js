import React from "react";
import { Modal } from "../../components/Modal";
import { shallow } from "enzyme";

test("Should render Modal", () => {
  const wrapper = shallow(<Modal />);
  expect(wrapper).toMatchSnapshot();
});