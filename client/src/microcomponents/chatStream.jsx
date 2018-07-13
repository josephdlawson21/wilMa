import React from "react";
import { Popover } from "react-bootstrap";

class ChatStream extends React.Component {
  render() {
    return (
      <Popover
        id="popover-basic"
        placement="right"
        positionLeft={200}
        positionTop={50}
        title="Popover right"
      >
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover>
    );
  }
}

export default ChatStream;
