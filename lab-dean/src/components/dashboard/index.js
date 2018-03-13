import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryDelete} from '../../actions/category-actions';
import CategoryForm from '../category/category-form/index';
import CategoryItem from '../category/category-item/index';

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Track Your Spending Problems!</h1>
        <CategoryForm
          buttonText="Create"
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(category => <CategoryItem
            key={category._id}
            category={category}
            buttonText="Delete"/>)
          :
          undefined
        }

      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);