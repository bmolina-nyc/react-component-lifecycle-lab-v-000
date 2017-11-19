import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate(nextProps){
    // const current_tweets = this.state.tweets.map( (tweet) => tweet.text)
    // const latest_tweets = nextProps.newTweets.map( (tweet) => tweet.text)
    // return Boolean(current_tweets !== latest_tweets)
    return nextProps.newTweets.length > 0 ;
  }

  componentWillReceiveProps(nextProps){
    // this.setState({tweets: nextProps.newTweets});
    this.setState({
      tweets:[
        ...nextProps.newTweets,
        ...this.state.tweets
      ]
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
