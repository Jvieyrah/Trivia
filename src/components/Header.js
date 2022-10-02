import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './Header.module.css';


class Header extends React.Component {
  render() {
    const { name, score, email } = this.props;
    const hash = md5(email).toString();
    return (
      <header className={ style.header }>
        <div className={ style.container}>
        <img
          className={ style.imageProfile }
          src={ `https://www.gravatar.com/avatar/${hash}` }
          alt="Avatar do jogador"
          data-testid="header-profile-picture"
        />
        <div className={ style.name } data-testid="header-player-name">{ `Player: ${name}` }</div>
        <div className={ style.score } data-testid="header-score">{ `Score: ${score}` }</div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  email: state.player.gravatarEmail,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
