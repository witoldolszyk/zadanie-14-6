var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
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
