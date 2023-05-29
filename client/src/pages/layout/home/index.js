import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Content from "../../../components/content";
import Header from "../../../components/header";
import Menu from "../../../components/menu";
import SideMenu from "../../../components/side_menu";
import { Container } from "../style";
import { CardsContainer, Card, MajorCard } from "./style";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

export default function Home() {


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

  const labels = ['1', '2', '3', '4', '5', '6', '7'];
  const data = {
    labels,
    datasets: [
        {
            label: 'placeholder vermelho',
            data: 
              labels.map((() => Math.floor(Math.random() * 100))),
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'placeholder azul',
            data: 
              labels.map((() => Math.floor(Math.random() * 100))),
            backgroundColor: 'rgb(53, 162, 235)',
        },
    ],
  };

  const data2 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data3 = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Dataset 3',
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: false,
            text: 'Dataset',
        },
    },
};

  return(
    <>
    <Header />
    <Container>
      <SideMenu />
      <Content>
        <CardsContainer>
          <Card>
            <Bar 
              data={data}
              options={options}
            />
          </Card>
          <Card>
            <Bar 
              data={data}
              options={options}
            />
          </Card>
          <MajorCard>
            <Bar 
              data={data3}
              options={options2}
            />
          </MajorCard>
        </CardsContainer>
      </Content>
      <Menu>
        <strong>dashboards</strong>
        <Link to='/home'>financeiro</Link>
        <Link to='/home'>estoque</Link>
      </Menu>
    </Container>
    </>
  )
}