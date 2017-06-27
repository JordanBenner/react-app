import React, {
  Component
} from 'react';

class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = date: new Date()
    people: [{
        id: 1,
        name: 'Paul'
      },
      {
        id: 2,
        name: 'Paulette'
      }
    ]
  }

  componentDidMount() {
    var self = this;
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState {
      date: new Date()

    });
  // events
  handlClick(event, p) {
    if (p.selected) {
      p.selected = false;
    } else {
      p.selected = true;
    }
    this.setState({people: this.state.people});
  }

    render() {
      return ( <
        div >
        <
        h1 > Hello {
          this.props.name
        } < /h1> <
        h2 > It is {
          this.state.date.toLocaleTimeString()
        }. < /h2> <
        ul >
        // events
        {
          this.state.people.map((p) = >
            <
            li key = {
              p.id
            } >
            <
            button onClick = {
              (e) => this.handleClick(e, p)
            } > {
              p.name
            } <
            /button> <
            /li>

          )
        } <
        /ul> <
        /div>
      )
    }
  }

  export default HelloMessage;
