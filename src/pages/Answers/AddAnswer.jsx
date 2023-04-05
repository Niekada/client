import { Form, Formik } from "formik";
import { addAnswerInitialValues } from "../../consts/InitialValues";
import { TextField } from "formik-mui";
import styled from "styled-components";
import axios from "axios";
import { MainColor, BgColor } from "../../consts/Colors";

const AddAnswer = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const add = axios.post(
        "/answers", values
        );
      alert("you succesfully added an answer");
      console.log(add)
      resetForm();
    } catch (error) {
      alert(`${error}, answer adding failed`);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <Container>
        <AnswerAdd>Add your answer</AnswerAdd>
        <Formik
          initialValues={addAnswerInitialValues}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <AnswersContainer>
                <StyledInput
                  component={TextField}
                  name="anwser"
                  label="Your Answer"
                  sx={{ mb: 2 }}
                  fullWidth
                />
              </AnswersContainer>
              <AddAnswerButton
                type="submit"
                disabled={isSubmitting}           
              >
                Add Answer
              </AddAnswerButton>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AnswerAdd = styled.p`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
`;

const AnswersContainer = styled.div`
  width: 100%;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 200px; 
  width: 500px;
  background-color: ${BgColor};
  color: ${MainColor};
  font-weight: 600;
`;

const AddAnswerButton = styled.button`
  margin-top: 24px;
  text-align: center;
  width: 250px;
  height: 50px;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  background-color: ${BgColor};
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};

  &:active {
    transform: translateY(4px);
  }
`;

export default AddAnswer;