import PropTypes from 'prop-types';
import { FindText, InputFind } from './Filter.styled';


export const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <FindText>Find contacts by name</FindText>
      
      <InputFind
    
       type="text"
        name="filter"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilterChange}
      />

    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
