import { Form, Formik } from "formik";
import { addAnswerInitialValues } from "../../consts/InitialValues";
import { TextField } from "formik-mui";
import { MainContainer, Add, SecondaryContainer, StyledInput, AddButton } from "../../styles/AddQNAStyles";
import axios from "axios";

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
      <MainContainer>
        <Add>Add your answer</Add>
        <Formik
          initialValues={addAnswerInitialValues}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <SecondaryContainer>
                <StyledInput
                  component={TextField}
                  name="anwser"
                  label="Your Answer"
                  sx={{ mb: 2 }}
                  fullWidth
                />
              </SecondaryContainer>
              <AddButton
                type="submit"
                disabled={isSubmitting}           
              >
                Add Answer
              </AddButton>
            </Form>
          )}
        </Formik>
      </MainContainer>
    </div>
  )
};

export default AddAnswer;