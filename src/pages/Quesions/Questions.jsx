import { useEffect, useState } from "react";
import { Title, Container, MainContainer, Loading, Inputs, AddButton, ButtonsContainer, SmallButtons } from "../../styles/QuestionsAnswersStyles";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState([{}]);
  const [tempQuestion, setTempQuestion] = useState([{}]);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (!setQuestionData) return;
    let equal = true;
    if (setQuestionData !== tempQuestion){
      equal = false;
    }
    if (equal){
      setChanged(false);
    }
  });

  useEffect(() => {
    fetch("/questions/")
      .then(
        response => response.json()
      )
      .then(
        data => {
          setQuestionData(data);
          setTempQuestion(data);
        }
      )
  }, []);

  const updateQuestion = () => {
    const url = "/questions/:id"
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tempQuestion)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuestionData(data)
      setChanged(false);
      console.log(data);
    })
    .catch();
  };

  return (
    <Container>
      <Title>
        All Questions<br></br>
        <SmallButtons>
          <a>Sort</a>
        </SmallButtons>
        <SmallButtons>
          <a>Filter</a>
        </SmallButtons>
      </Title>
      <MainContainer>
        {(typeof tempQuestion.questions === 'undefined') ? (
          <Loading>Loading...</Loading>
        ) : (
          tempQuestion.questions.map((question, index) => (
              <Inputs>
                <input 
                  key={index} 
                  type="text" 
                  value={question} 
                  onChange={(e) => {
                    setChanged(true);
                    setTempQuestion({
                      ...tempQuestion, 
                      question: e.target.value,
                    });
                  }}
                />;
                <SmallButtons>
                  <a href="/AddAnswer">Answer</a>
                </SmallButtons>
                <SmallButtons
                      onClick={(e) => {
                        const url = "/questions/:id";
                        fetch(url, {
                          method: 'DELETE',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        })
                          .then((response) => {
                            if (!response.ok) {
                              throw new Error('Oops');
                            }
                            navigate("/questions");
                          })
                          .catch((e) => {
                            console.log(e);
                          })
                      }}
                    >
                      Delete
                    </SmallButtons> 
                {changed ? (
                  <ButtonsContainer>
                    <SmallButtons
                      onClick={updateQuestion}
                    >
                      Save
                    </SmallButtons> 

                    <SmallButtons
                      onClick={() => {
                        setTempQuestion({...question});
                        setChanged(false);
                      }}
                    >
                      Cancel
                    </SmallButtons>
                  </ButtonsContainer>
                ) : null}
              </Inputs>
          ))
        )};
      </MainContainer>
      <AddButton>
        <a href="/addQuestion">Add Question</a>
      </AddButton>
    </Container>
  );
};

export default Questions;