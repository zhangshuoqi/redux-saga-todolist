import React, { Component } from 'react';
import './App.css'
import { Input, List, Button, message } from 'antd/lib'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUserAction, loadUserAction, delItemAction } from './actions'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      list: [],
    }
  }
  componentWillReceiveProps = (nextProps) => {
  }
  componentDidMount = () => {
    this.props.loadUser()
  }
  inputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  addClick = () => {
    if (!this.state.value) {
      message.error('please input value...')
      return
    }
    this.props.addUser(this.state.value)
  }
  deleteItem = (index) => {
    this.props.delUser(index)
  }
  render() {
    return (
      <div className="App">
      <div className="content">
      <Input className="input" placeholder='to do...' onChange={this.inputChange}></Input>
      <Button type="primary" onClick={this.addClick}>Add</Button>
      </div>
      <List
        bordered
        dataSource={this.props.users}
        renderItem={(item,index) => (
          <List.Item onClick={()=>this.deleteItem(index)}>{item.name}</List.Item>
        )}
      >
      </List>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.loadUsers,
    addUsers: state.addUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: bindActionCreators(loadUserAction,dispatch),
    addUser: bindActionCreators(addUserAction,dispatch),
    delUser: bindActionCreators(delItemAction,dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
