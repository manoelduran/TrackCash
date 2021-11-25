import { Line } from 'react-chartjs-2';
import { Container } from './styles';
const state = {
  labels: ["", "", "","", "", "", "" ,"", "", "", "", ""],
  datasets: [
    {
      label: '',
      data: [65, 59, 80, 81, 56, 70, 32, 77,64, 56, 44, 35],
    }
  ],
};

const MultiAxisLine = () => (
  <Container>
    <Line data={state}
    style={{
      width: 552.24,
      height: 207.56,
      marginTop: 30,
    }}
    />
  </Container>
);

export default MultiAxisLine;