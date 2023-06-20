import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, createRoutesFromChildren, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import { useHistory } from 'react-router-dom';
import { Data } from '../component/Data';

const Background= styled.div`
 width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("https://herovired.com/wp-content/uploads/2023/03/finance-and-business.webp") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
   width: 45%;
   padding: 20px;
   background-color: white;
`;
const Header = styled.h1`
  text-align: left;
  font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
`;
const Logo= styled.img`
  width: 50px;
  height: 50px;
`;
const Headertext = styled.div`
    font-size: 15px;
    margin-bottom: 10px;
    margin-bottom: 30px;
`;
const Accordion = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
`;
const AccordionHeader = styled.div`
  background-color: #e0e0e0;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AccordionArrow = styled.span`
  width: 12px;
  height: 12px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  transform: ${({ isOpen }) => (isOpen ? 'rotate( -405deg)' : 'rotate(-225deg)')};
  transition: transform 0.3s ease;
`;
const AccordionContent = styled.div`
  padding: 10px;
`;
const Form = styled.form`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: repeat(2,1fr);
`;
const Form1 = styled.form`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: repeat(2,1fr);
`;
const Form2 = styled.form`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 45% 5% 35% 15%;
`;
const Label = styled.label`
  margin-bottom: 5px;
  width: 50%;
  margin-left: 3px;
  margin-right: 6px;
  
`;
const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 93%;
  margin-right: 1%;
`;
const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;
const InfoButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border-color: gray;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Select = styled.select`

  padding: 5px;
  margin-bottom: 10px;
  width: 97%;
  margin-right: 1%;
`;
const Option = styled.option`
  margin-bottom: 10px;
  width: 97%;
  margin-right: 1%;
`;
const Rdbutton = styled.input`
    size-adjust: 10px 10px;
    padding: 10px;
    color: blue;
    margin-left: 10px;
`;
const FormWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;
const FormInput = styled.input`
  width: 50%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  margin-right: 5px;
`;
const SubmitButton1 = styled.button`
 background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  width: 50%;
`;
const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 50% 50%;
`;
const Label1 = styled.label`
    display: block;
    margin-bottom: 5px;
  `;
const Input1 = styled.input`
    width: 100%;
    padding: 5px;
  `;
  const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const MainPage = () => {
const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);
const [sort, setSort] = useState("newest");
const [selectedOption, setSelectedOption] = useState("");
const [selectedOption1, setSelectedOption1] = useState("");
const [showForm, setShowForm] = useState(false);
const [showForm1, setShowForm1] = useState(false);
const [showForm3, setShowForm3] = useState(false);
const [selectedSector, setSelectedSector] = useState("");
const [otherSector, setOtherSector] = useState("");
const [errors, setErrors] = useState({});
const [fixedCTC, setFixedCTC] = useState("");
const [fullName, setFullName] = useState("");
const [company, setCompany] = useState("");
const [turnover, setTurnover] = useState("");
const [origin, setOrigin] = useState("");
const [bt, setBT] = useState("");
const [ls, setLS] = useState("");
const [pe, setPE] = useState("");
const [sector,setSector] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
const [ldr, setLdr] = useState("");
const [city, setCity] = useState("");
const [cayear, setCAyear] = useState("");
const [variableCTC, setVariableCTC] = useState("");
const [esops, setEsops] = useState("");
const [longTermBenefits, setLongTermBenefits] = useState("");
const [cashBenefits, setCashBenefits] = useState("");
const [otherBenefits, setOtherBenefits] = useState("");
const [totalAnnualCTC, setTotalAnnualCTC] = useState("");
const [data, setData] = useState([]);
const navigate = useNavigate();
const [formValue,setFormValue]=useState({
  fullName:'',
  email:'',
  number:''
})
const [suminputs, setInputs] = useState({
  fixedCTC: "",
  variableCTC: "",
  esops: "",
  longTermBenefits: "",
  cashBenefits: "",
  otherBenefits: "",
  totalAnnualCTC: "",
});
const inputs = {
  fullName: "",
  email: "",
  phoneNumber: "",
};

const toggleAccordion = (accordion) => {
  if (accordion === 1) {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  } else if (accordion === 2) {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
  } else if (accordion === 3) {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const formValue = {
    fullName,
    email,
    number
  };
  navigate("/result", { state: formValue }); // Pass formValues as props
};

// const postData = () => {
//   const data = {
//     fixedCTC,
//     variableCTC,
//     esops,
//     longTermBenefits,
//     cashBenefits,
//     otherBenefits,
//     totalAnnualCTC,
//   };

//   axios.post("https://sheet.best/api/sheets/b55aa6a7-b6cb-4676-b15d-92cf35cae85d", data)
//   .then((response) => {
//     setFixedCTC('');
//     setVariableCTC('');
//     setEsops('');
//     setLongTermBenefits('');
//     setCashBenefits('');
//     setOtherBenefits('');
//     setTotalAnnualCTC('');
//   })
//   .catch((error) => {
//     // Handle the error if needed
//   });
// };

// const getData = () => {
//   axios.get("https://sheet.best/api/sheets/b55aa6a7-b6cb-4676-b15d-92cf35cae85d")
//     .then((response) => {
//       setData(response.data);
//     })
//     .catch((error) => {
//       // Handle the error if needed
//     });
// };

// Triggering function
// useEffect(() => {
//   getData();
// }, [data]);

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
  setShowForm(event.target.value !== "");
};

const handleOpenForm2 = () => {
  setShowForm1(true);
};

const handleOpenForm1 = () => {
  setShowForm1(true);
};

const handleOpenForm3 = () => {
  setShowForm3(true);
};

const handleCloseForm3 = () => {
  setShowForm3(false);
};

const handleOptionChange1 = (event) => {
  setSelectedOption1(event.target.value);
  setShowForm1(event.target.value !== "");
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  calculateSum();
  const isValid = validateInputs();
  if (isValid) {
  const formValue = {
    fullName,
    email,
    number
  };
  navigate("/result", { state: formValue })
  }
};

const handleClosePopup = () => {
  setShowForm(false);
  setShowForm1(false);
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setInputs((prevState) => ({ ...prevState, [name]: value }));
  calculateSum();
  setFormValue(prevState =>({
    ...prevState,
    [name]:value
  }));
};

const handleSectorChange = (e) => {
  const selectedValue = e.target.value;
  setSelectedSector(selectedValue);

  if (selectedValue !== "Others") {
    setOtherSector("");
  }
};

const handleOtherSectorChange = (e) => {
  setOtherSector(e.target.value);
};

const calculateSum = () => {
  const {
    fixedCTC,
    variableCTC,
    esops,
    longTermBenefits,
    cashBenefits,
    otherBenefits,
  } = suminputs;

  const sum =
    parseFloat(fixedCTC) +
    parseFloat(variableCTC) +
    parseFloat(esops) +
    parseFloat(longTermBenefits) +
    parseFloat(cashBenefits) +
    parseFloat(otherBenefits);

  setInputs((prevState) => ({ ...prevState, totalAnnualCTC: sum.toString() }));
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setInputs((prevState) => ({ ...prevState, [name]: value }));
};

const validateInputs = () => {
  let newErrors = { ...errors };

  // if (inputs.fullName.trim() === "") {
  //   newErrors.fullName = "Full Name is required";
  // }

  if (inputs.email.trim() === "") {
    newErrors.email = "Email is required";
  } else if (!isValidEmail(inputs.email)) {
    newErrors.email = "Invalid email format";
  }

  setErrors(newErrors);

  // Return true if there are no errors
  return Object.keys(newErrors).length === 0;
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleFormReset = () => {
  setInputs({
    fixedCTC: "",
    variableCTC: "",
    esops: "",
    longTermBenefits: "",
    cashBenefits: "",
    otherBenefits: "",
    totalAnnualCTC: "",
  });
  setErrors({});
};  

  return (
    <Background>
    <Container onSubmit={handleFormSubmit}>
      <Header>2023 CFO Compensation Benchmarking</Header>
      <Logo src="https://resource-bridge.com/wp-content/uploads/2022/09/logo_rb-1.png" alt="Logo"/>
      <Headertext>Hi xxxxxx, thanks for agreeing to particapte in CFO compensation benchmarking report.
        The data you submit will be compeletly confidental. Upon submitting you will get a customized report in your email.
      </Headertext>
      <Accordion isOpen={isOpen1}>
        <AccordionHeader onClick={() => toggleAccordion(1)}>
          Personal Information
          <AccordionArrow isOpen={isOpen1} />
        </AccordionHeader>
        {isOpen1 && (
          <AccordionContent>
            <Form>
              <Label>Full Name:</Label>
              <Input type="text" name="fullName" placeholder='Enter your Full Name' 
              // onChange={(e) => setFullName(e.target.value)} 
              onChange={handleChange}
              value={formValue.fullName}/>
              {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
              <Label>Email:</Label>
              <Input type="email" name="email"placeholder='Enter your Personal Email' 
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
               value={formValue.email}/>
              {errors.fullName && <ErrorMessage>{errors.email}</ErrorMessage>}
              <Label>Mobile Number:</Label>
              <Input type="number" name='number' placeholder='Enter your Mobile Number' 
              // onChange={(e) => setNumber(e.target.value)} 
              onChange={handleChange}
              value={formValue.number}/>
              <Label>LinkedIn URL:</Label>
              <Input type="url" placeholder='Enter your LinkedIn URL'onChange={(e) => setLdr(e.target.value)} value={ldr}/>
              <Label>Current City</Label>
              <Select onChange={(e) => setCity(e.target.value)} value={city}>
            <Option >Select</Option>
            <Option>Mumbai</Option>
            <Option >Pune</Option>
            <Option >Banglore</Option>
            <Option>Chennai</Option>
            <Option>Jaipur</Option>
            <Option>Surat</Option>
            <Option>Kolkata</Option>
            <Option>Others</Option>
            </Select>
              <Label>CA Year</Label>
              <Input type="number" placeholder='Enter your Passing CA Year' onChange={(e) => setCAyear(e.target.value)} value={cayear} />
             <SubmitButton1 onClick={handleSubmit}>Save</SubmitButton1>

            </Form>
          </AccordionContent>
        )}
      </Accordion>
      <Accordion isOpen={isOpen2}>
        <AccordionHeader onClick={() => toggleAccordion(2)}>
          Your Current Company Details
          <AccordionArrow isOpen={isOpen2} />
        </AccordionHeader>
        {isOpen2 && (
          <AccordionContent>
            <Form>
              <Label>Current Company</Label>
              <Input type="text"
              placeholder='Enter your Current Company'
               onChange={(e) => setCompany(e.target.value)} value={company} 
              />
            <Label>Turnover(Rs CR):</Label>
            <Select onChange={(e) => setTurnover(e.target.value)} value={turnover}>
            <Option >Select</Option>
            <Option>1-2.5K</Option>
            <Option >2.5-5K</Option>
            <Option >5-10K</Option>
            <Option>10-25K</Option>
            <Option>25-50K</Option>
            <Option>50-100K</Option>
            <Option>100K+</Option>
            </Select>
              <Label>
              Origin
              </Label>
              <div>
            <Rdbutton type="radio" name="answer1" onChange={(e) => setOrigin(e.target.value)} value={origin}/>
            <Label>Indian</Label>
            <Rdbutton type="radio" name="answer1" onChange={(e) => setOrigin(e.target.value)} value={origin}/>
            <Label>MNC</Label>
            </div>
            <Label>
            B2B or B2C
            </Label>
            <div>
            <Rdbutton type="radio" name="answer2" onChange={(e) => setBT(e.target.value)} value={bt}/>
            <Label>
            B2B  
            </Label>
            <Rdbutton type="radio" name="answer2" onChange={(e) => setBT(e.target.value)} value={bt} />
            <Label>
            B2C
            </Label>
            </div>
            <Label>
            Listing Status
            </Label>
            <div>
            <Rdbutton type="radio" name="answer3"  onChange={(e) => setLS(e.target.value)} value={ls}/>
            <Label>
            Listed
            </Label>
            <Rdbutton type="radio" name="answer3" onChange={(e) => setLS(e.target.value)} value={ls}/>
            <Label>
            Unlisted
            </Label>
            </div>
            <Label>
            PE Status
            </Label>
            <div >
            <Rdbutton type="radio" name="answer4" onChange={(e) => setPE(e.target.value)} value={pe}/>
            <Label>
            PE Investee  
            </Label>
            <Rdbutton type="radio" name="answer4" onChange={(e) => setPE(e.target.value)} value={pe} />
            <Label>
            Non PE Investee
            </Label>
            </div>  
            <Label>Your Sector</Label>
            <Select onChange={(e) => setSector(e.target.value)} value={sector}>
            <Option >Select</Option>
            <Option >Energy & Power</Option>
            <Option >Pharmaceutical</Option>
            <Option >BFSI</Option>
            <Option >EPC & Infrastructure</Option>
            <Option >FMCA & Consumer Durable</Option>
            <Option >Retail, E-Commerce & Fashion</Option>
            <Option >Metal</Option>
            <Option >Chemical & Fertilizers</Option>
            <Option >Energy & Power</Option>
            <Option >Cement & Building Materials</Option>
            <Option>Others</Option>
            </Select>
            {selectedSector === 'Others' && (
        <div>
          <Label1>Please specify:</Label1>
          <Input1
            type="text"
            value={otherSector}
            onChange={handleOtherSectorChange}
          />
        </div>
      )}
             <SubmitButton1 onClick={handleSubmit}>Save</SubmitButton1>
            </Form>
          </AccordionContent>
        )}
      </Accordion>

      <Accordion isOpen={isOpen3}>
        <AccordionHeader onClick={() => toggleAccordion(3)}>
          CTC Breakdown
          <AccordionArrow isOpen={isOpen3} />
        </AccordionHeader>
        {isOpen3 && (
          <AccordionContent>
            <FormWrapper show={showForm}>
          <PopupContent onSubmit={handleFormSubmit}>
            <FormLabel>
              No of units:
              <FormInput type="text" />
            </FormLabel>
            <FormLabel>
              Vesting schedule
              <FormInput type="number" />
            </FormLabel>
            <FormLabel>
              Annual
              <FormInput type="number" />
            </FormLabel>
            <FormLabel>
            Avg no of units:
            <FormInput type="number" />
          </FormLabel>
          <FormLabel>
            Exercise price:
            <FormInput type="number" />
          </FormLabel>
          <FormLabel>
            Vesting date:
            <FormInput type="number" />
          </FormLabel>
          <SubmitButton1 type="submit">Submit</SubmitButton1>
          <SubmitButton1 onClick={handleClosePopup}>Close</SubmitButton1>
        </PopupContent>
      </FormWrapper>

      <FormWrapper show={showForm1}>
          <PopupContent onSubmit={handleFormSubmit}>
            <FormLabel>
              No of units:
            </FormLabel>
            <FormInput type="text" />
            <FormLabel>
              Vesting schedule
            </FormLabel>
            <FormInput type="number" />
            <FormLabel>
              Existing Price
            </FormLabel>
            <FormInput type="number" />
            <FormLabel>
            Accuring in FY24
          </FormLabel>
          <FormInput type="number" />
          <FormLabel>
            Annual
          </FormLabel>
          <FormInput type="number" />
          <FormLabel>
            Value for FY24
          </FormLabel>
          <FormInput type="number" />
          <SubmitButton1>Submit</SubmitButton1>
          <SubmitButton1 onClick={handleClosePopup} >Close</SubmitButton1>
        </PopupContent>
      </FormWrapper>
            <Form2>
            <Label>Currency</Label>
            <div></div>
            <Select onChange={(e)=> setSort(e.target.value)} value={sort}>
            <Option >Select</Option>
            <Option>INRL (Rs)</Option>
            <Option >USDM ($)</Option>
            </Select>
            <InfoOutlinedIcon fontSize='small'checked={selectedOption === 'option1'}
            onMouseEnter={handleOpenForm3}
            onMouseLeave={handleCloseForm3}/>
              <Label>Fixed CTC</Label>
              <div></div>
              <div>
              <Input type="number" name="fixedCTC" 
              onChange={handleChange}
              placeholder='Enter your fixed CTC'
              // onChange={(e) => setFixedCTC(e.target.value)} value={fixedCTC} 
              />
              </div>
              <InfoOutlinedIcon fontSize='small'checked={selectedOption === 'option1'}
            onMouseEnter={handleOpenForm3}
            onMouseLeave={handleCloseForm3}/>
              <Label>Variable CTC</Label>
              <div></div>
              <Input type="number" name="variableCTC" 
              onChange={handleChange}
              placeholder='Enter your varible CTC'
              // onChange={(e) => setVariableCTC(e.target.value)} value={variableCTC}
              />
              <InfoOutlinedIcon fontSize='small'checked={selectedOption === 'option1'}
            onMouseEnter={handleOpenForm3}
            onMouseLeave={handleCloseForm3}/>
              <Label>ESOPS</Label>
              <BackupTableOutlinedIcon 
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
            onClick={handleOpenForm1}
             />
              <Input type="number" name="esops" 
              onChange={handleChange}
              placeholder='Calculate Esops in given sheet'
              // onChange={(e) => setEsops(e.target.value)} value={esops}
              />
              <InfoOutlinedIcon fontSize='small' checked={selectedOption === 'option1'}
            onClick={handleOpenForm3}
            onChange={handleOptionChange}/>

              <Label>Long Term Benefits</Label>
              <BackupTableOutlinedIcon
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange1}
            onClick={handleOpenForm2} />
            <Input type="number" name="longTermBenefits" 
            onChange={handleChange}
            placeholder='Enter your long term benefits'
            // onChange={(e) => setLongTermBenefits(e.target.value)} value={longTermBenefits}
            />
            <InfoOutlinedIcon fontSize='small'checked={selectedOption === 'option1'}
            onClick={handleOpenForm3}
            onChange={handleOptionChange}/>

              <Label>Cash Benefits</Label>
              <div></div>
              <Input type="number" name="cashBenefits" 
              onChange={handleChange}
              placeholder='Enter Cash Benefits'/>
              {/* onChange={(e) => setCashBenefits(e.target.value)} value={cashBenefits}  */}
              <InfoOutlinedIcon fontSize='small'checked={selectedOption === 'option1'}
            onClick={handleOpenForm3}
            onChange={handleOptionChange}/>
              <Label>Other Benefits</Label>
              <div></div>
              <Input type="text" name="otherBenefits" 
              // onChange={(e) => setOtherBenefits(e.target.value)} value={otherBenefits}
              onChange={handleChange}
              placeholder='Enter your Other Benefits'/>
              <InfoOutlinedIcon fontSize='small'checked={selectedOption === 'option1'}
            onClick={handleOpenForm3}
            onChange={handleOptionChange}/>
              <Label>Total Annual CTC</Label>
              <div></div>
              <Input type="text" name="totalAnnualCTC" 
        value={suminputs.totalAnnualCTC}
        placeholder='Your Total CTC is calculated'
        readOnly />
            </Form2>
            <FormWrapper show={showForm3}>
          <PopupContent onSubmit={handleFormSubmit}>
            <FormLabel>
              CTC should be in Rs
              </FormLabel>
              
        </PopupContent>
      </FormWrapper>
          </AccordionContent>
        )}
        
      </Accordion>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Container>
    </Background>
  );
}

export default MainPage;


