import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Label,
  LoaderContainerStyle,
  NotFound,
  SelectWrap,
  Ul,
  Wrap,
} from "./PsychologistList.styled";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { fetchData } from "../Psychologists_fetch/PsychologistsDef";

import PsychologistCard from "../PsychologistCard/PsychologistCard";

import {
  getLoading,
  getPsychologists,
  selectIsLoading,
  selectPsychologists,
} from "../redux/psychologistsSlice";
import FilterSelect from "../FilterSelect";
import { filterPsychologists } from "../../utils/utils";
import { filterAction } from "../redux/filtersReducer";

const PsychologistsList = () => {
  const dispatch = useDispatch();
  const [per_page, setPer_page] = useState(3);

  const psychologists = useSelector(selectPsychologists);
  const filter = useSelector((state) => state.filter.selectedfilter);
  const isLoading = useSelector(selectIsLoading);

  const filteredPsychologists = filterPsychologists(psychologists, filter);
  const filteredPsychologistsPerPage = filteredPsychologists.slice(0, per_page);

  useEffect(() => {
    dispatch(getLoading());

    fetchData().then((data) => dispatch(getPsychologists(data)));
  }, [dispatch]);

  const handleSelect = (selectedOption) => {
    dispatch(filterAction(selectedOption.label));
  };

  const generalCss = {
    width: "140px",
    display: "flex",
    justifyContent: "space-around",
    opacity: "0.9",
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
          {isLoading ? (
            <LoaderContainerStyle>
              <PulseLoader
                cssOverride={generalCss}
                color="var(--highlight-color)"
                loading={true}
                size={30}
              />
            </LoaderContainerStyle>
          ) : filteredPsychologistsPerPage.length === 0 ? (
            <NotFound>No psychologists found</NotFound>
          ) : (
            <>
              <Ul>
                {filteredPsychologistsPerPage.map((psychologist) => (
                  <PsychologistCard
                    psychologist={psychologist}
                    key={psychologist.id}
                  />
                ))}
              </Ul>
              {filteredPsychologistsPerPage.length > 0 &&
                filteredPsychologistsPerPage.length % 3 === 0 && (
                  <Button
                    type="button"
                    onClick={() => setPer_page(per_page + 3)}
                  >
                    Load more
                  </Button>
                )}
            </>
          )}
        </Container>
      </Wrap>
    </div>
  );
};

export default PsychologistsList;
