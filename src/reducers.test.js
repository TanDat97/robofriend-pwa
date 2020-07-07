import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

 import * as reducers from './reducers';
 
 describe('search robot', () => {
  const initialState = {
    searchField: ''
  }

  it('it should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
  })

  it('should handle change_searchfield', () => {
    expect(reducers.searchRobots(initialState, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc',

    })
  })
 })

 describe('request robots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  }

  it('it should return the initial robots state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it('should handle request_robots_pending action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING,
    })).toEqual({
      robots: [],
      isPending: true
    })
  })

  it('should handle request_robots_success action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }]
    })).toEqual({
      robots: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }],
      isPending: false
    })
  })

  it('should handle request_robots_failed action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'noooo!!!!'
    })).toEqual({
      error: 'noooo!!!!',
      robots: [],
      isPending: false
    })
  })
 })