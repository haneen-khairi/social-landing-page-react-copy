import { Select } from "chakra-react-select";
import "./style.css";
interface Props {
  placeholder: string;
  option: Option[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
  inputName: string;
  isMulti?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
}

type Option = {
  id: number;
  name: string;
};
const MultiSelectArea = ({
  placeholder,
  option,
  defaultValue,
  inputName,
  isMulti,
  onChange,
}: Props) => {
  return (
    <Select
      name={inputName}
      options={option}
      isMulti={isMulti ? true : false}
      getOptionLabel={(option: Option) => option.name}
      getOptionValue={(option: Option) => String(option.id)}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default MultiSelectArea;
