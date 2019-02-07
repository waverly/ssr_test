import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import WomanStyles from "./styles/WomanStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

export default class Woman extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { woman } = this.props;
    return (
      <WomanStyles>
        <h1>{woman.name}</h1>
      </WomanStyles>
    );
  }
}
