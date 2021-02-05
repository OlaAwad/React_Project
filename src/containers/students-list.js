import { Component } from 'react'
import { connect } from 'react-redux'
import { getStudents } from '../actions'
import Student from '../components/student'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'

const StudentList = ({ getStudents, list, history, match }) => {
  //const id = match.params.id;
  useEffect(() => {
    getStudents()
    return () => {
      console.log('unAmount')
    }
  }, [])

  const renderStudentDetails = (list) => {
    if (list) {
      return (
        <div className="container">
          <div>
            {list.map((student) => {
              console.log('here')
              return (
                <Student
                  key={student.id}
                  studentInfo={student}
                  history={history}
                />
              )
            })}
          </div>
        </div>
      )
    }
    return ''
  }
  return <div className="alert alert-light">{renderStudentDetails(list)}</div>
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
