import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from './FilterStyled';

const filterId = nanoid(5);

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        required
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};