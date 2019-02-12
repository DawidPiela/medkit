import React, { Component } from 'react';

import Tab from './Tab/Tab';
import styles from './Tabs.module.scss';

class Tabs extends Component {

  state = {
    activeTab: this.props.children[0].props.label,
  };

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <>
        <ol className={styles.tabList}>
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </>
      </>
    );
  }
}

export default Tabs;