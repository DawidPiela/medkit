import React, { Component } from 'react';

import styles from './Tab.module.scss';

class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label
      }
    } = this

    let liClass = [styles.tabListItem]

    if (activeTab === label) {
      liClass.push(styles.tabListActive)
    }

    return (
      <li
        className={liClass.join(' ')}
        onClick={onClick}
      >
        {label}
      </li>
    )
  }
}

export default Tab