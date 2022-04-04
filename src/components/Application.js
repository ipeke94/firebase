import React, { Component } from "react";
import Posts from "./Posts";
import { firestore } from "../firebase";
import { collectionDocsIDS } from "../utilities";

class Application extends Component {
  state = {
    posts: [],
  };
  // when the componentDidMount we will subscribe the changes to the post collection
  // actually it"s not really problem for this example but it can be problem some lower level components
  // when the components mounts you start listening for the changes and then user navigates away you never stop listening that is still firing
  // js objects cant get garbage collected (memory leak)
  //  when the components mounts you start listening for the changes when the component unmounts we will remove the listener
  // We will unsubscribe for the changes, so added unsubscribe
  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectionDocsIDS);
      this.setState({ posts });
    });
  };

  componentWillUnmount = async () => {
    this.unsubscribe();
  };

  render() {
    const { posts } = this.state;
    return (
      <main className="application">
        <h1 className="app-title">Say Helo!</h1>
        <Posts posts={posts}></Posts>
      </main>
    );
  }
}

export default Application;
