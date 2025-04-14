import { useDispatch, useSelector } from "react-redux";
import PsychologistCard from "../PsychologistCard/PsychologistCard";
import { useState } from "react";

import FilterSelect from "../FilterSelect";
import { filterPsychologists } from "../../utils/utils";
import {
  Button,
  Container,
  Label,
  NotFound,
  SelectWrap,
  Ul,
  Wrap,
} from "./Favourite.styled";
import { filterAction } from "../redux/filtersReducer";

const FavouriteComponent = () => {
  const [per_page, setPer_page] = useState(3);
  const dispatch = useDispatch();

  const favouritedList = useSelector((state) => state.user.favouritesList);
  const filter = useSelector((state) => state.filter.selectedfilter);

  const filteredPsychologists = filterPsychologists(favouritedList, filter);
  const filteredPsychologistsPerPage = filteredPsychologists.slice(0, per_page);

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

          {filteredPsychologistsPerPage.length === 0 ? (
            <NotFound>No psychologists found</NotFound>
          ) : (
            <Ul>
              {filteredPsychologistsPerPage.map((favouritedPsychologist) => (
                <PsychologistCard
                  psychologist={favouritedPsychologist}
                  key={favouritedPsychologist.id}
                />
              ))}
            </Ul>
          )}

          {filteredPsychologists.length > 3 &&
            filteredPsychologistsPerPage.length !== 0 &&
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

export default FavouriteComponent;
