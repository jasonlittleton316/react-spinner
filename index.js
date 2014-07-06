/** @jsx React.DOM */

(function(window, React) {
  var Spinner = React.createClass({displayName: 'Spinner',
    render: function() {
      var bars = [];
      var barStyle;

      for (var i = 0; i < 12; i++) {
        barStyle = {};
        barStyle.WebkitAnimationDelay = barStyle.animationDelay =
          (i - 12) / 10 + 's';

        barStyle.WebkitTransform = barStyle.transform =
          'rotate(' + (i * 30) + 'deg) translate(146%)';

        bars.push(
          React.DOM.div( {style:barStyle, className:"react-spinner_bar"} )
        );
      }

      return this.transferPropsTo(
        React.DOM.div( {className:"react-spinner"}, bars)
      );
    }
  });

  if (typeof module === 'undefined') {
    window.Spinner = Spinner;
  } else {
    module.exports = Spinner;
  }
})(window, typeof require === 'function' ? require('React') : React);
