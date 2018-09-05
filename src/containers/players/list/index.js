import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import './styles.css';
import { ButtonEdit, ButtonDetails, ButtonDelete } from '../../../components/button/crudButtons';
import Edit from '../../../assets/icons/buttons_crud/edit.png';
import Details from '../../../assets/icons/buttons_crud/details.png';
import Delete from '../../../assets/icons/buttons_crud/delete.png';
import Modal from '../../../components/modal';

class ListPlayers extends Component {
  constructor(props) {
    super(props);
    fetch('http://localhost:53766/api/Player')
      .then(response => response.json())
      .then(data => this.setState({ players: data.players }));

    this.state = {
      isModalVisible: false,
      players: [],
    };
  }

  deletePlayer(id) {
    return fetch(`http://localhost:53766/api/Player/${id}`, {
      method: 'DELETE',
    });
  }

  renderTable = () => this.state.players.map(element => (
    <tr key={element.id}>
      <td>{element.firstName}</td>
      <td>{element.lastName}</td>
      <td>{element.nickName}</td>
      <td>{element.age}</td>
      <td>{element.sex}</td>
      <td>
        <ButtonEdit
          img={Edit}
          id={element.id}
          redirect={{
            pathname: `/player-edit/${element.id}`,
            param: element,
          }}
        />
      </td>
      <td>
        <ButtonDetails
          img={Details}
          id={element.id}
          redirect={{
            pathname: `/player-details/${element.id}`,
            param: element,
          }}
        />
      </td>
      <td>
        <ButtonDelete
          img={Delete}
          id={element.id}
          onClick={() => this.setState(prevState => (
            { isModalVisible: !prevState.isModalVisible }))}
        />
      </td>
    </tr>
  ))

  render() {
    const { t } = this.props;

    return (
      <div className="margin_top">
        {this.state.isModalVisible && <Modal />}
        <table>
          <tr>
            <th>{t('player_data.first_name')}</th>
            <th>{t('player_data.last_name')}</th>
            <th>{t('player_data.nick_name')}</th>
            <th>{t('player_data.age')}</th>
            <th>{t('player_data.sex')}</th>
            <th>{' '}</th>
            <th>{' '}</th>
            <th>{' '}</th>
          </tr>
          {this.renderTable()}
        </table>
      </div>
    );
  }
}

ListPlayers.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common')(ListPlayers);
