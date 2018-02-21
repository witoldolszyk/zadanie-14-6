var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    componentWillMount: function() {
      console.log('Zaraz nastąpi renederowanie')
    },

    componentDidMount: function() {
      console.log('komponent zamontowany')
    },

    componentWillReceiveProps: function() {
      console.log('wszystko już widnieje na stronie www')
    },
    shouldComponentUpdate: function(){
      console.log('Sprawdzamy czy trzeba coś przerysować')
    },
    componentWillUpdate: function() {
      console.log('więc jednak trzeba coś przerysować')
    },
    componentDidUpdate: function() {
      console.log('dokonały się jednak jakieś manipulacje')
    },
    componentWillUnmount: function() {
      console.log('jednak coś trzeba wymontować')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },



    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, '+ dodaj'),
            React.createElement('button', {onClick: this.decrement}, '- odejmij'),
            React.createElement('span', {}, 'wynik' + this.state.counter)
        );
    }
});


var element =
  React.createElement('div', {},
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, )
  );

ReactDOM.render(element, document.getElementById('app'));
