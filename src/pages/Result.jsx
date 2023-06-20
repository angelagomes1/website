import React from 'react';
import styled from 'styled-components';
import { useLocation} from 'react-router-dom';

const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
    height: 100%;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("https://static.vecteezy.com/system/resources/thumbnails/001/842/936/small/dark-blue-background-in-polygonal-style-vector.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ReportContainer = styled.div`
   background-color: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const SectionHeading = styled.h2`
  margin-bottom: 10px;
`;
const ChartContainer = styled.div`
  margin-bottom: 20px;
  height: 300px;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableHeader = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
`;
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #cccccc;
  text-align: center;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const GridColumn = styled.div`
  border: 1px solid #ccc;
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  padding: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
`;

const GridLabel = styled.div`
  font-weight: bold;
`;

const GridValue = styled.div`
margin-left: 10px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 90px;
  height: 50px;
  margin-left: auto;
  margin-bottom: auto;
`;
const Footer = styled.footer`
  margin-top: auto; /* Push the footer to the bottom */
  display: flex;
  align-items: center;
`;

const FooterLogo = styled.img`
  width: 50px;
  height: 30px;
  margin-right: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #888;
`;
const Chart = styled.div`
  width: 500%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://www.pluscharts.com/wp-content/uploads/2019/03/doughnut.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Result = () => {
  // const location = useLocation();
  // const formValue = location.state;

  // const fullName = formValue.fullName;
  // const email = formValue.email;
  // const number = formValue.number;
  return (
    <PageContainer>
      <ReportContainer>
      <Header>
          <Logo src="https://resource-bridge.com/wp-content/uploads/2022/09/logo_rb-1-2048x984.png" alt="Logo" />
        </Header>
        <SectionHeading>Hi XYZ, </SectionHeading>
        <GridContainer>
          <GridColumn>
            <GridLabel>Phone Number:</GridLabel>
            <GridValue>+91 5373654354</GridValue>
            <GridLabel>Email:</GridLabel>
            <GridValue>email.email@email.com</GridValue>
          </GridColumn>
          <GridColumn>
            <GridLabel>Company Name:</GridLabel>
            <GridValue>Resource Bridge</GridValue>
            <GridLabel>Industry:</GridLabel>
            <GridValue>Executive Search Firm</GridValue>
            <GridLabel>Company Size:</GridLabel>
            <GridValue>24</GridValue>
          </GridColumn>
          <GridColumn>
          <GridLabel>Fixed CTC:</GridLabel>
            <GridValue>543</GridValue>
            <GridLabel>Variable:</GridLabel>
            <GridValue>435</GridValue>
            <GridLabel>Esops:</GridLabel>
            <GridValue>6775</GridValue>
            <GridLabel>Long Term:</GridLabel>
            <GridValue>5456</GridValue>
            <GridLabel>Cash Benefits</GridLabel>
            <GridValue>6757</GridValue>
            <GridLabel>Other Benefits:</GridLabel>
            <GridValue>4325</GridValue>
          </GridColumn>
          <GridColumn>
            <ChartContainer>
              <Chart/>
            </ChartContainer>
          </GridColumn>
        </GridContainer>
        <SectionHeading>Total Annual CTC: $7836</SectionHeading>
        <Table>
          <thead>
            <tr>
            <TableHeader></TableHeader>
              <TableHeader>Turnover chart</TableHeader>
              <TableHeader>Sales</TableHeader>
              <TableHeader>Revenue</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>You are at</TableCell>
              <TableCell>89%ile</TableCell>
              <TableCell>94%ile</TableCell>
              <TableCell>82%ile</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>95%ile are at</TableCell>
              <TableCell>34 L</TableCell>
              <TableCell>21 L</TableCell>
              <TableCell>50 L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>50%ile are at</TableCell>
              <TableCell>17 L</TableCell>
              <TableCell>10.5 L</TableCell>
              <TableCell>25 L</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>% withrespect to ESOP</TableCell>
              <TableCell>43%</TableCell>
              <TableCell>27%</TableCell>
              <TableCell>86%</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Footer>
          <FooterLogo src="https://resource-bridge.com/wp-content/uploads/2022/09/logo_rb-1-2048x984.png" alt="Footer Logo" />
          <FooterText>© 2023 Resource Bridge. All rights reserved.</FooterText>
        </Footer>
      </ReportContainer>
    </PageContainer>
  );
};
export default Result;
