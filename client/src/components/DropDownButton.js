import 'react-dropdown/style.css';
import "./componentsStyles.css"

const DropDownButton = ({ options, value, onChange, label, datatestid }) => (

  <div>
    <label> {label}</label>
    <select data-testid={datatestid}
    className="dropdownButton" defaultValue={value}
      onChange={onChange}
    >
      {
        options.map((op) => {
          return (
            <option key={options.indexOf(op)} value={op}> {op} </option>
          )
        })
      }
    </select>
  </div>
);

export default DropDownButton;