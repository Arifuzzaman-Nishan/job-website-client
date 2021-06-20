import { Select } from "antd";
import React from "react";
import { Card } from "react-bootstrap";
import "./Filter.css";

// i.toString(36) + i

const Filter = () => {
  const { Option } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i}</Option>
    );
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Card>
        <h3 className="text-center">Filters</h3>
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Tags Mode"
          onChange={handleChange}
        >
          {children}
        </Select>
      </Card>
    </div>
  );
};

export default Filter;
