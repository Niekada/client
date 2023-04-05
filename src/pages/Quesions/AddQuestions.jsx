import { Form, Formik } from "formik";
import { addQuestionInitialValues } from "../../consts/InitialValues";
import { TextField } from "formik-mui";
import styled from "styled-components";
import axios from "axios";
import { MainColor, BgColor } from "../../consts/Colors";

const AddQuestion = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const add = axios.post(
        "/questions", values
        );
      alert("you succesfully added a question");
      console.log(add)
      resetForm();
    } catch (error) {
      alert(`${error}, question adding failed`);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <Container>
        <QuestionAdd>Add your question</QuestionAdd>
        <Formik
          initialValues={addQuestionInitialValues}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <QuestionsContainer>
                <StyledInput
                  component={TextField}
                  name="question"
                  label="Your Question"
                  sx={{ mb: 2 }}
                  fullWidth
                />
              </QuestionsContainer>
              <AddQuestionButton
                type="submit"
                disabled={isSubmitting}           
              >
                Add Question
              </AddQuestionButton>
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

const QuestionAdd = styled.p`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
`;

const QuestionsContainer = styled.div`
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

const AddQuestionButton = styled.button`
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

export default AddQuestion;