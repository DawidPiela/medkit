import React, { Component } from 'react';
import { connect } from 'react-redux'

import axios from '../../../../axios-instance';
import * as actions from '../../../../store/actions/index';
import Test from './Test/Test';
import Spinner from '../../../UI/Spinner/Spinner';

class TestList extends Component {

  state = {
    currentPage: 1,
    testsPerPage: 2
  }

  componentDidMount() {
    this.props.onFetchLaboratoryData(this.props.token, this.props.userId)
  }

  currentPageHandler = event => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    let tests = this.props.laboratoryListData.map(test => (
      <Test
        key={test.id}
        laboratoryData={test.laboratoryData}
      />
    ))

    const indexOfLastTest = this.state.currentPage * this.state.testsPerPage
    const indexOfFirstTest = indexOfLastTest - this.state.testsPerPage
    const currentTests = tests.slice(indexOfFirstTest, indexOfLastTest)

    const renderTests = currentTests.map((test, index) => {
      return <li key={index}>{test}</li>
    })

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(tests.length / this.state.testsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.currentPageHandler}
        >
          {number}
        </li>
      )
    })

    return (
      <>
        {!this.props.loading ?
          <div>
            <ul>
              {renderTests}
            </ul>
            <ul>
              {renderPageNumbers}
            </ul>
          </div>
          : <Spinner />}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    laboratoryListData: state.laboratory.laboratoryListData,
    loading: state.laboratory.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchLaboratoryData: (token, userId) =>
      dispatch(actions.fetchLaboratoryData(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestList, axios)