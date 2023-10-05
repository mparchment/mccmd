import styled from "styled-components";
import { PageBackground } from "../../components/PageBackground";
import BoardCell from "../../components/BoardCell";
import PortraitPlaceholder from "../../assets/portrait-placeholder.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;

    font-size: 14px;
    font-weight: 500;

    @media (min-width: 1366px) {
        width: 50%;
        padding-top: 10px;
        margin: 0 auto;

        padding-left: 7.5%;
        padding-right: 7%;

        background-color: #fff;
    }
`;

const Divider = styled.div`
    width: 12.5%;
    height: 3px;
    background-color: var(--accent-color);
    margin: 0 auto;
`;

const Title = styled.h2`
    font-weight: 800;
    font-size: 200%;
    color: #333;
`;

const AboutBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media (max-width: 1366px) {
        flex-direction: column;
        gap: 0;
    }
`;

const Subtitle = styled.h3`
    &:first-of-type {
        margin-top: 25px;
    }
    font-weight: 800;
`;

const ImamTitle = styled.h2`
    align-self: center;
    margin-bottom: 10px;
`;

const Portrait = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-self: center;
    margin-bottom: 25px;
`;

const BoardBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;

    margin-bottom: 25px;
    margin-top: 25px;
`;

const BoardHeading = styled.h3`
    align-self: center;
    margin-bottom: 25px;
`;

const ImamSubtitle = styled.h3`
    align-self: center;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 400;
`;

const Verse = styled.div`
    self-align: center;
    max-width: 600px;
`;

const Disclaimer = styled.div`
    background-color: #f5f5f5;
    padding: 25px;

    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const ZakatSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    margin-top: 20px;
    margin-bottom: 25px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    gap: 50px;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Table = styled.table`
    width: 100%;
`;

const TableRow = styled.tr`
    width: 100%;
`;

const TableBody = styled.tbody`
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const TableHead = styled.thead`
    font-weight: bold;
`;

const TableData = styled.td`
    padding: 5px;
`;

const NumberData = styled(TableData)`
    text-align: center;
`;

const CancelData = styled(TableData)`
    text-align: right;
    cursor: pointer;
`;

const ZakatSectionContainer = styled.div`
    width: 50%;
    padding: 25px; 
    margin: 0 auto;
`

function ZakatSection({ subtitle, children }) {
    const [closed, setClosed] = useState(true);

    const SectionWrapper = styled.div`
        border: 1px solid #ccc;
        border-radius: 5px;
    `;

    const SectionTitle = styled.h3`
        margin: 0;
    `;

    const SectionTop = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: ${closed ? "transparent" : "#b98474"};
        color: ${closed ? "#333" : "#fff"};
        cursor: pointer;
        padding: 25px;
    `;

    const SectionContent = styled.div`
        padding: 25px;
    `;

    const handleCloseToggle = () => {
        setClosed(!closed);
    };

    return (
        <SectionWrapper>
            <SectionTop onClick={handleCloseToggle}>
                <SectionTitle>{subtitle}</SectionTitle>
                <div>▼</div>
            </SectionTop>
            {!closed && <SectionContent>{children}</SectionContent>}
        </SectionWrapper>
    );
}

function Zakat() {
    const [householdMembers, setHouseholdMembers] = useState([
        { name: "", relationship: "", age: "" },
        { name: "", relationship: "", age: "" },
        { name: "", relationship: "", age: "" },
    ]);

    const addHouseholdMember = () => {
        setHouseholdMembers([
            ...householdMembers,
            { name: "", relationship: "", age: "" },
        ]);
    };

    const removeHouseholdMember = (index) => {
        if (householdMembers.length === 1) {
            return;
        }
        const newMembers = [...householdMembers];
        newMembers.splice(index, 1);
        setHouseholdMembers(newMembers);
    };

    return (
        <>
        <Wrapper>
            <Title>Zakat Application</Title>
            <Subtitle>Give Your Zakat to Those in Need</Subtitle>
            <p>
                If you are in need of zakat assistance, please fill out the
                following application. If you have any questions or concerns
                about the application or our program, please contact us at [...]
                We look forward to working with you to fulfill this important
                pillar of Islam.
            </p>
        </Wrapper>
        <ZakatSectionContainer>
            <ZakatSectionWrapper>
                <ZakatSection subtitle={"Applicant Information"}>
                    <Form>
                        <FormDiv>
                            <label>
                                First Name:
                                <input type="text" name="firstName" />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" name="lastName" />
                            </label>
                            <label>
                                Date:
                                <input type="date" name="date" />
                            </label>
                            <label>
                                Driver's License #:
                                <input type="text" name="licenseNumber" />
                            </label>
                            <label>
                                Legal Status:
                                <select name="legalStatus">
                                    <option value="citizen">Citizen</option>
                                    <option value="permanentResident">
                                        Permanent Resident
                                    </option>
                                    <option value="refugee">Refugee</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                            <label>
                                Marital Status:
                                <select name="maritalStatus">
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="widowed">Widowed</option>
                                </select>
                            </label>
                            <label>
                                Home Telephone Number:
                                <input type="tel" name="homePhone" />
                            </label>
                            <label>
                                Mobile Telephone Number:
                                <input type="tel" name="mobilePhone" />
                            </label>
                            <label>
                                Email Address:
                                <input type="email" name="email" />
                            </label>
                        </FormDiv>
                        <FormDiv>
                            <label>
                                Home Address:
                                <input type="text" name="homeAddress" />
                            </label>
                            <label>
                                City, State, Zip:
                                <input type="text" name="cityStateZip" />
                            </label>
                            <label>
                                Name of Employer:
                                <input type="text" name="employerName" />
                            </label>
                            <label>
                                Job Title:
                                <input type="text" name="jobTitle" />
                            </label>
                            <label>
                                Gender:
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                    />
                                    Male
                                </label>
                            </label>
                            <label>
                                Education Level:
                                <select name="educationLevel">
                                    <option value="someHighSchool">
                                        Some High School
                                    </option>
                                    <option value="highSchoolOrGED">
                                        High School or GED Degree
                                    </option>
                                    <option value="collegeDegree">
                                        College Degree
                                    </option>
                                    <option value="graduateDegree">
                                        Graduate Degree
                                    </option>
                                </select>
                            </label>
                            <label>
                                English Proficiency:
                                <label>
                                    <input
                                        type="checkbox"
                                        name="englishProficiency"
                                        value="reading"
                                    />
                                    Reading
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="englishProficiency"
                                        value="writing"
                                    />
                                    Writing
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="englishProficiency"
                                        value="speaking"
                                    />
                                    Speaking
                                </label>
                                <select name="englishProficiencyLevel">
                                    <option value="excellent">Excellent</option>
                                    <option value="fair">Fair</option>
                                    <option value="limited">Limited</option>
                                </select>
                            </label>
                            <label>
                                Registered MCC Member:
                                <label>
                                    <input
                                        type="radio"
                                        name="mccMember"
                                        value="yes"
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="mccMember"
                                        value="no"
                                    />
                                    No, mosque attended:
                                    <input type="text" name="mosqueAttended" />
                                </label>
                            </label>
                            <label>
                                Religion:
                                <label>
                                    <input
                                        type="radio"
                                        name="religion"
                                        value="muslim"
                                    />
                                    Muslim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="religion"
                                        value="other"
                                    />
                                    Other
                                </label>
                            </label>
                        </FormDiv>
                    </Form>
                </ZakatSection>
                <ZakatSection subtitle={"Household Members"}>
                    <Table>
                        <thead>
                            <TableRow>
                                <th></th>
                                <th>Name</th>
                                <th>Relationship</th>
                                <th>Age (if over 18, include income)</th>
                                <th></th>
                            </TableRow>
                        </thead>
                        <TableBody>
                            {householdMembers.map((member, index) => (
                                <TableRow key={index}>
                                    <NumberData>{index + 1}</NumberData>
                                    <TableData>
                                        <Input
                                            type="text"
                                            name={`name${index}`}
                                            value={member.name}
                                            onChange={(e) => {
                                                const newMembers = [
                                                    ...householdMembers,
                                                ];
                                                newMembers[index].name =
                                                    e.target.value;
                                                setHouseholdMembers(newMembers);
                                            }}
                                        />
                                    </TableData>
                                    <TableData>
                                        <Input
                                            type="text"
                                            name={`relationship${index}`}
                                            value={member.relationship}
                                            onChange={(e) => {
                                                const newMembers = [
                                                    ...householdMembers,
                                                ];
                                                newMembers[index].relationship =
                                                    e.target.value;
                                                setHouseholdMembers(newMembers);
                                            }}
                                        />
                                    </TableData>
                                    <TableData>
                                        <Input
                                            type="text"
                                            name={`age${index}`}
                                            value={member.age}
                                            onChange={(e) => {
                                                const newMembers = [
                                                    ...householdMembers,
                                                ];
                                                newMembers[index].age =
                                                    e.target.value;
                                                setHouseholdMembers(newMembers);
                                            }}
                                        />
                                    </TableData>
                                    {
                                        <CancelData
                                            disabled={
                                                householdMembers.length === 1
                                            }
                                            onClick={() =>
                                                removeHouseholdMember(index)
                                            }
                                        >
                                            <FaTimes />
                                        </CancelData>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <button onClick={addHouseholdMember}>Add Member</button>
                </ZakatSection>
                <ZakatSection subtitle={"Financial Summary"}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <th>Income Source</th>
                                <th>Amount</th>
                                <th>Monthly Expenses</th>
                                <th>Amount</th>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableData>Work</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                                <TableData>Rent/Mortgage</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Social Security Income</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                                <TableData>Utilities</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Govt Support (TANF)</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                                <TableData>Phone</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>SNAP/WIC</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                                <TableData>Transportation</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Child Support</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                                <TableData>Food</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Other Masajid</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                                <TableData>Medical</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Savings</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                                <TableData>Debt</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>Other</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                                <TableData>Other</TableData>
                                <TableData>
                                    <Input type="text" />
                                </TableData>
                            </TableRow>
                        </TableBody>
                    </Table>
                </ZakatSection>
                <ZakatSection subtitle={"Amount Requested"}>
                    Dependent Information
                </ZakatSection>
                <ZakatSection subtitle={"Reference Information"}>
                    Reference Information
                </ZakatSection>
                <ZakatSection subtitle={"Artifacts"}>Artifacts</ZakatSection>
                <ZakatSection subtitle={"Personal Statement"}>
                    Personal Statement
                </ZakatSection>
            </ZakatSectionWrapper>

            <Disclaimer>
                <label>
                    <input type="checkbox" />
                </label>
                <div>
                    <strong>I Acknowledge and Consent:</strong> By filling out
                    or having the formed filled on my behalf and submitting this
                    zakat application, I authorize the organization to verify
                    the information contained therein. I understand I may be
                    required to present proof of all the statements in this
                    application upon request. I understand a representative of
                    the organization will verify the necessary information in
                    order to render any assistance to me in a timely and
                    discreet manner. I am aware due to unforeseen circumstances,
                    assistance I requested may be unavailable. When I submit
                    this zakat application for review, I certify I have read, or
                    had read to me all the statements in this online form and
                    all the information given is true, correct, and complete to
                    the best of my knowledge. If this application is approved, I
                    authorize the zakat reviewers to pay any owed vendors
                    directly on my behalf.
                </div>
            </Disclaimer>
        </ZakatSectionContainer>
        </>
    );
}

export default Zakat;
