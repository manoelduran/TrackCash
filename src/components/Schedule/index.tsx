import {Container, ButtonSelect} from './styles';
import { DateRangePicker } from "react-date-range";
import { useContext, useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { AuthContext } from '../../contexts/AuthContext';

export function Schedule() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const {handleCloseCalendar } = useContext(AuthContext)
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };
      function handleSelect(ranges: any) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <Container>
           <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <ButtonSelect onClick={() => handleCloseCalendar(startDate, endDate)}>Selecionar intervalo</ButtonSelect>
        </Container>
    );
}