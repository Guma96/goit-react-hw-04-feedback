import PropTypes from 'prop-types';
import { FeedbackPanel, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 return (
        <FeedbackPanel>
            {options.map((btn) => {
                return (
                    <Button
                        key={btn}
                        type="button"
                        onClick={() => onLeaveFeedback(btn)}>
                        {btn}
                    </Button>
                );
            })}
        </FeedbackPanel>
    )
};


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};
