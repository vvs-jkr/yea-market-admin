import React from "react";

export interface DropdownFromProps extends React.ComponentProps<'div'> {
  data?: string[],
  initialValue?: string,
}
