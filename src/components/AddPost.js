import React, { Component } from "react";
import { firestore } from "../firebase";

class AddPost extends Component {
  state = { title: "", content: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = this.state;
    const newPost = {
      // id: Date.now().toString(),
      title,
      content,
      user: {
        uid: "1111",
        displayName: "IpekMurat G.",
        email: "ipekmurat@mailinator.com",
        photoURL:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC5603AQHvJ0cHwxRsKg%2Fprofile-displayphoto-shrink_200_200%2F0%2F1627132145738%3Fe%3D1653523200%26v%3Dbeta%26t%3DA79tIMzntA-fLKKuYn-8UfictJ0KOTRcxGE_ODuTJ9w&imgrefurl=https%3A%2F%2Fde.linkedin.com%2Fin%2Fmurat-guener&tbnid=SpE9K4Aa3v8oXM&vet=12ahUKEwinkMyjkfP2AhVLtioKHYVPDHkQMygAegQIARAd..i&docid=nVz6q3pcIEs84M&w=200&h=200&q=murat%20guner%20munich&ved=2ahUKEwinkMyjkfP2AhVLtioKHYVPDHkQMygAegQIARAd",
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    };
    firestore.collection("posts").add(newPost);
    this.setState({
      title: "",
      content: "",
    });
  };

  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="add-post">
        <input type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange} />
        <input type="text" name="content" placeholder="Body" value={content} onChange={this.handleChange} />
        <input className="create" type="submit" value="Create New Post!" />
      </form>
    );
  }
}

export default AddPost;
