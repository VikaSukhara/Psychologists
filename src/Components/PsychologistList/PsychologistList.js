import { useEffect, useState } from "react";
import {
  Container,
  Label,
  Select,
  SelectWrap,
  Wrap,
} from "./PsychologistList.styled";
import { useDispatch } from "react-redux";
import { fetchData } from "../Psychologists_fetch/PsychologistsDef";

import PsychologistCard from "../PsychologistCard/PsychologistCard";
// Імпортуй функцію

const PsychologistsList = () => {
  const [psychologists, setPsychologists] = useState(null);

  const [limit, setLimit] = useState(3);
  const [selected, setSelected] = useState("A to Z");

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then((data) => setPsychologists(data));
  }, []);

  const options = [
    "Z to A",
    "Less than 10$",
    "Greater than 10$",
    "Popular",
    "Not popular",
    "Show all",
  ];

  //   const handleSelect = event => {
  //     event.preventDefault();
  //     setSelected(event.target.value);
  //     dispatch(filtersNanyAction(event.target.value));
  //     setLimit(3);
  //   };

  return (
    <div>
      <Wrap>
        <Container>
          <SelectWrap>
            <Label>
              Filters
              <Select
                name="select"
                id="position"
                value={selected}
                //   onChange={handleSelect}
              >
                <option selected> A to Z </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Label>
          </SelectWrap>
        </Container>
      </Wrap>
      {psychologists?.map((psychologist) => (
        <PsychologistCard psychologist={psychologist} />
      ))}
    </div>
  );
};

export default PsychologistsList;

//
