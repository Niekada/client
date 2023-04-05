import { Form, Formik } from "formik";
import { addQuestionInitialValues } from "../../consts/InitialValues";
import { TextField } from "formik-mui";
import { MainContainer, Add, SecondaryContainer, StyledInput, AddButton } from "../../styles/AddQNAStyles";
import axios from "axios";

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
      <MainContainer>
        <Add>Add your question</Add>
        <Formik
          initialValues={addQuestionInitialValues}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <SecondaryContainer>
                <StyledInput
                  component={TextField}
                  name="question"
                  label="Your Question"
                  sx={{ mb: 2 }}
                  fullWidth
                />
              </SecondaryContainer>
              <AddButton
                type="submit"
                disabled={isSubmitting}           
              >
                Add Question
              </AddButton>
            </Form>
          )}
        </Formik>
      </MainContainer>
    </div>
  )
};

export default AddQuestion;