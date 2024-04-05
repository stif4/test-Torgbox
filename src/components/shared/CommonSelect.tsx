import React, { memo } from "react";
import Select, { Props } from "react-select";
import "./CommonSelect.scss";

interface ICoomonSelectProps
  extends Omit<Props, "className" | "classNamePrefix"> {}

function CoomonSelect({ ...other }: ICoomonSelectProps) {
  return (
    <div className="CommonSelect">
      <Select
        {...other}
        className="CommonSelect__main"
        classNamePrefix="prefix-react-select"
      />
    </div>
  );
}

export default memo(CoomonSelect);
