import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const CREATE_WOMAN_MUTATION = gql`
  mutation CREATE_WOMAN_MUTATION($name: String!, $description: String) {
    createWoman(name: $name, description: $description) {
      id
    }
  }
`;

class CreateWoman extends Component {
  state = {
    name: "Name Here",
    description: "She is awesome"
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <Mutation mutation={CREATE_WOMAN_MUTATION} variables={this.state}>
        {(createWoman, { loading, error }) => (
          <Form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await createWoman();
              // change them to the single item page
              console.log(res);
              Router.push({
                pathname: "/",
                query: { id: res.data.createWoman.id }
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name Goes Here"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Description
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateWoman;
export { CREATE_WOMAN_MUTATION };
