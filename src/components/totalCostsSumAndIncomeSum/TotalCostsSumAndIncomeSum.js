import React from 'react';
import PropTypes from 'prop-types';
import s from './TotalCostsSumAndIncomeSum.module.css';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { TotalCountsCosts } from '../categoriesFilter/config';
// import  totalCategoryCost from '../'

// console.log(TotalCountsCosts.totalCategoryCost);

const getCostsSum = (array) =>
array.reduce((acc, item) => {
  return acc + item.amount;
}, 0);

const filterCosts = (array, year, month) => {
  return array.filter((item) => {
    const startMonth = new Date(year, month -  1, 0, 0);
    const endMonth = new Date(year, month  + 1, 1, 0, 0);
    const res =
      item.date > startMonth.toISOString() &&
      item.date < endMonth.toISOString();
    return res;
  });
};

function TotalCostsSumAndIncomeSum() {
  const costs = useSelector(state => state.operations.costs);
  const income = useSelector(state => state.operations.income);
  const month = useSelector(state => state.statistics.month);
// console.log(costs);
// console.log(income);
// console.log(month);
//   const costs

  // const costsTotal = costs.filter
  


  // const costsSum = getCostsSum.filter(
  //             item =>
  //             filterCosts
  //           )
  //           .reduce((acc, el) => acc + el.amount, 0);
  //       }
  //     console.log(costsSum);  

  // const constsTotal = arr reduce(function(costs, ))
  // console.log(month);
  // console.log(costs);
  // console.log(income);
  // totalCategoryCost
  // console.log(totalCategoryCost);
  // const costsSum = (costs) => {
  //   return(
  //       costsSum = costs
  //       .filter(
  //         item =>
  //           moment(item.date).format('MMMM YYYY') ===
  //           moment(date).format('MMMM YYYY'),
  //       )
  //       .reduce((acc, el) => acc + el.amount, 0);
  //   }
  // }



  // if (costs && costs.length > 0) {
  //     costsSum = getCostsSum.filter(
  //           item =>
  //             moment(month).format('MMMM YYYY') ===
  //             moment(month).format('MMMM YYYY'),
  //         )
  //         .reduce((acc, el) => acc + el.amount, 0);
  //     }
  //   console.log(costsSum);  



  // const {
  //   date,
  //   selectedCategory,
  //   categoriesList,
  // } = this.state;
  // let chartData = null;
  // let categoryList = [];
  // let costsSum = 0;
  // if (costs && costs.length > 0) {
  //   costsSum = costs
  //       .filter(
  //         item =>
  //           moment(item.date).format('MMMM YYYY') ===
  //           moment(date).format('MMMM YYYY'),
  //       )
  //       .reduce((acc, el) => acc + el.amount, 0);
  //   }
    
  //   let incomeSum = 0;
  //   if (income && income.length > 0) {
  //     incomeSum = income
  //     .filter(
  //       item =>
  //       moment(item.date).format('MMMM YYYY') ===
  //       moment(date).format('MMMM YYYY'),
  //       )
  //       .reduce((acc, el) => acc + el.amount, 0);
  //     }
      
  //     if (costs && costs.length > 0) {
  //       categoryList = this.costs;
  //       if (selectedCategory === '') {
  //         chartData = this.categoryList;
  //       } else {
  //         chartData = this.costs;
  //       }
  //     } else if (categoriesList && categoriesList.length > 0) {
  //       categoryList = categoriesList.map(category => ({
  //         category: category.name,
  //         amount: 0,
  //         id: category.name,
  //       }));
  //     }
      
      return (
      <div className={"container"}>
        <div className={s.fon}>
          <div className={s.wrapper}>
            <div className={s.column}>
              <p className={s.stat_title}>Расходы:</p>
              <p className={s.stat_exp}>-{0} грн</p>
            </div>
            <div className={s.separate} />
            <div className={s.column}>
              <p className={s.stat_title}>Доходы:</p>
              <p className={s.stat_inc}>{0} грн</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  TotalCostsSumAndIncomeSum.propTypes = {
    costsSum: PropTypes.number.isRequired,
    incomeSum: PropTypes.number.isRequired,
  };

    export default TotalCostsSumAndIncomeSum;