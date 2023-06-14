import PropTypes from 'prop-types';
import { StatisticList, StatisticText, StatisticValue, TotalStatistic } from './Statistics.styled';




export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticList>
            <StatisticText>Good: <StatisticValue>{good}</StatisticValue></StatisticText>
            <StatisticText>Neutral: <StatisticValue>{neutral}</StatisticValue></StatisticText>
            <StatisticText>Bad: <StatisticValue>{bad}</StatisticValue></StatisticText>
            <TotalStatistic>Total: <StatisticValue>{total}</StatisticValue></TotalStatistic>
            <TotalStatistic>Positive feedback: <StatisticValue>{positivePercentage}%</StatisticValue></TotalStatistic>
        </StatisticList>
    );
};


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}
