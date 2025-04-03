import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../redux/favouriteSlice";
import PsychologistCard from "../PsychologistCard/PsychologistCard";
import { useState } from "react";
import {
  Button,
  Container,
  Label,
  Select,
  SelectWrap,
  Wrap,
} from "../PsychologistList/PsychologistList.styled";
import { filterAction } from "../redux/action";
import { selectPsychologists } from "../redux/psychologistsSlice";
import FilterSelect from "../FilterSelect";
import { filterPsychologists } from "../../utils";

const FavouriteComponent = () => {
  const [per_page, setPer_page] = useState(3);
  const dispatch = useDispatch();

  const favouritedList = useSelector(selectFavourites);

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
            <p>No psychologists found</p>
          ) : (
            filteredPsychologistsPerPage.map((favouritedPsychologist) => (
              <PsychologistCard
                psychologist={favouritedPsychologist}
                key={favouritedPsychologist.id}
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

export default FavouriteComponent;
