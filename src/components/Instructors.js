import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import {getInstructors} from '../actions/index'

class Instructors extends Component {
  render() {
    return (
      <div className="tabs-container">
        <h1>Instructors</h1>
        <div className="tab-content">
          <div className="instructors">
            {this.props.instructors.map((instructor, index) => {
              return (
                <div className="instructor" key={index}>
                  <Card>
                    <Icon name={'user circle'} size={'massive'} />
                    <Card.Content>
                      <Card.Header>{`${instructor.first_name} ${
                        instructor.last_name
                      }`}</Card.Header>
                      {/* <Card.Description>{instructor.bio}</Card.Description> */}
                      <Card.Description>
                        Aute nisi id cillum ad amet ut officia eiusmod ut
                        laboris occaecat. Aute dolor officia ut eiusmod nulla
                        mollit eiusmod commodo in culpa. Cupidatat voluptate est
                        enim pariatur sunt veniam culpa. Commodo pariatur dolor
                        sint eu cupidatat commodo sit. Fugiat excepteur proident
                        irure quis amet id voluptate. Culpa officia ullamco
                        mollit Lorem.
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps
  // , {
  //   // getInstructors
  // }
)(Instructors);
