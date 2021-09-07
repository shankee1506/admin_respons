import { DragIconWrapper } from "./styles";
import { ReactComponent as DragHandleIcon } from "./drag-handle_119198.svg";
import React from "react";

export function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
      <DragHandleIcon />
    </DragIconWrapper>
  );
}