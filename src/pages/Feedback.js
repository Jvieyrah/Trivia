import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import itachiSasuke from '../itachi-sasuke.gif';
import vegeta from '../vegeta.gif';
import style from './Feedback.module.css';

class Feedback extends React.Component {
  feedbackMessage = (score) => {
    const checkNumber = 3;
    if (score < checkNumber) {
      return (
        <div>
          <img src={ itachiSasuke} alt="pikachu" />
          <h1 data-testid="feedback-text">Você é fraco, lhe falta ódio</h1>
        </div>
      );
    }
    return (
      <div>
        <img src={ vegeta } alt="vegeta" />
        <h1 data-testid="feedback-text">Você é muito bom</h1>
      </div>
    );
  }

  render() {
    const { numberOfAssertions, score, assertions } = this.props;
    return (
      <section className={ style.section }>
        <Header />
        <div className={ style.container }>
        { this.feedbackMessage(numberOfAssertions) }
          <div data-testid="feedback-total-score">
            Score:
            { score }
          </div>
          <div data-testid="feedback-total-question">
            Assertions:
            { assertions }
          </div>
          <Link to="/" data-testid="btn-play-again">Play Again</Link>
          <Link to="/ranking" data-testid="btn-ranking">Ranking</Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  numberOfAssertions: state.player.assertions,
  score: state.player.score,
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  numberOfAssertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Feedback);
