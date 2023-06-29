import { useState } from 'react';
import { Container } from './App.styled';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export const App = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = name => {
    setValues(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = values;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    const { good } = values;
    return total > 0 ? Math.round((good * 100) / total) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(values)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
