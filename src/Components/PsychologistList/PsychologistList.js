import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Label,
  SelectWrap,
  Wrap,
} from "./PsychologistList.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Psychologists_fetch/PsychologistsDef";

import PsychologistCard from "../PsychologistCard/PsychologistCard";
import { filterAction } from "../redux/action";
import {
  getLoading,
  getPsychologists,
  selectPsychologists,
} from "../redux/psychologistsSlice";
import FilterSelect from "../FilterSelect";
import { filterPsychologists } from "../../utils/utils";

const PsychologistsList = () => {
  const dispatch = useDispatch();
  const [per_page, setPer_page] = useState(3);

  const psychologists = useSelector(selectPsychologists);
  const filter = useSelector((state) => state.filter.selectedfilter);

  // Використовуємо функцію filterPsychologists для фільтрації та сортування
  const filteredPsychologists = filterPsychologists(psychologists, filter);
  const filteredPsychologistsPerPage = filteredPsychologists.slice(0, per_page);

  useEffect(() => {
    dispatch(getLoading());

    fetchData().then((data) => dispatch(getPsychologists(data)));
  }, [dispatch]);

  // Обробник для селекту
  const handleSelect = (selectedOption) => {
    dispatch(filterAction(selectedOption.label));
  };

  return (
    <div>
      <Wrap>
        <Container>
          <SelectWrap>
            <Label>
              Filters
              <FilterSelect onChange={handleSelect} />
            </Label>
          </SelectWrap>

          {/* Перевірка на порожній список, якщо фільтрація нічого не знайшла */}
          {filteredPsychologistsPerPage.length === 0 ? (
            <p>No psychologists found</p>
          ) : (
            filteredPsychologistsPerPage.map((psychologist) => (
              <PsychologistCard
                psychologist={psychologist}
                key={psychologist.id}
              />
            ))
          )}

          {filteredPsychologistsPerPage.length > 0 && // Масив не порожній
            filteredPsychologistsPerPage.length % 3 === 0 && (
              <Button type="button" onClick={() => setPer_page(per_page + 3)}>
                Load more
              </Button>
            )}
        </Container>
      </Wrap>
    </div>
  );
};

export default PsychologistsList;
