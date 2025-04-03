import Select from "react-select";


const options = [
  { value: "a-z", label: "A to Z", isGray: false },
  { value: "z-a", label: "Z to A", isGray: true },
  { value: "less-10", label: "Less than 150$", isGray: true },
  { value: "greater-10", label: "Greater than 160$", isGray: true },
  { value: "popular", label: "Popular", isGray: true },
  { value: "not-popular", label: "Not popular", isGray: true },
  { value: "show-all", label: "Show all", isGray: true },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#3470ff",
    color: "#fbfbfb;",
    borderRadius: "14px",
    border: "none",
    padding: "14px",
    boxShadow: state.isFocused ? "0 0 10px rgba(41,98,255,0.3)" : "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fbfbfb",
    fontWeight: "500px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
    backgroundColor: "#fff",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    color: isSelected ? "#191a15" : "rgba(25, 26, 21, 0.3)",
    backgroundColor: isSelected ? "rgba(109, 109, 109, 0.1)" : "white",
    fontWeight: isSelected ? "bold" : "normal",
    cursor: "pointer",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: "transform 0.3s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    color: "#fbfbfb",
    ":hover": { color: "#fbfbfb" },
  }),
};

const FilterSelect = ({ onChange }) => {
  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={options[0]}
      isSearchable={false}
      onChange={onChange}
    />
  );
};

export default FilterSelect;
