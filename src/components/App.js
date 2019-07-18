import React, { Component } from 'react';
import './app.scss';

import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';

import Header from './Header';
import Headline from './Headline';
import Button from './Button';
import ListItem from './ListItem';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    oStatus: true,
  },
];

class App extends Component {
  state = {
    hideButton: false,
  };

  fetch = () => {
    const { fetchPosts } = this.props;
    fetchPosts();
    this.exampleMethod_updatesState();
  };

  exampleMethod_updatesState = () => {
    const { hideButton } = this.state;
    this.setState({ hideButton: !hideButton });
  };

  exampleMethod_returnsValue = (number) => number + 1;

  render = () => {
    const { posts } = this.props;
    const { hideButton } = this.state;
    const buttonConfig = {
      btnText: 'Get posts',
      emitEvent: this.fetch,
    };
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Headline"
            description="Click the button to render posts"
            arr={tempArr}
          />
          {!hideButton && <Button {...buttonConfig} />}
          {posts && (
            <div>
              {posts.map((post) => {
                const { title, body, id } = post;
                const listItemConfig = {
                  title,
                  content: body,
                };
                return <ListItem {...listItemConfig} key={id} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);
