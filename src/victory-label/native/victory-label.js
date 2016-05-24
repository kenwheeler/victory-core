import React from "react";
import { Text } from "react-native-svg";
import VictoryLabel from "../victory-label";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: "0.71"
  };

  renderLabel(content, style, dx, dy, transform, textAnchor) {
    return (
      <Text
        x={this.props.x}
        y={this.props.y}
        dy={-(style.fontSize / 2)}
        dx={dx}
        textAnchor={textAnchor}
        style={style}
        fontSize={style.fontSize}
        fontWeight={style.fontWeight}
        fill={style.fill}
        {...this.props.events}
      >
        {content}
      </Text>
    );
  }
}