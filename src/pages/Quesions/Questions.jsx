import { useEffect, useState } from "react";
import styled from 'styled-components';
import { MainColor, BgColor } from '../../consts/Colors';
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
      </Title>
      <QuestionsContainer>
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
      </QuestionsContainer>
      <AddQuestionButton>
        <a href="/addQuestion">Add Question</a>
      </AddQuestionButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
`;

const QuestionsContainer = styled.div`
  width: 75%;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loading = styled.p`
  font-weight: 700;
  font-size: 34px;
  color: ${MainColor};
`;

const Inputs = styled.div`
  width: 75%;
  margin: 20px;

  input {
    width: 80%;
    height: 30px;
    border: 2px solid ${MainColor};
    border-radius: 5px;
    background-color: ${BgColor};
    color: ${MainColor};
    font-weight: 600;
  }
`;

const AddQuestionButton = styled.button`
  text-align: center;
  width: 250px;
  height: 50px;
  border: 2px solid ${MainColor};
  border-radius: 5px;
  background-color: ${BgColor};

  a {
    font-weight: 700;
    font-size: 34px;
    color: ${MainColor};
    text-decoration: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SmallButtons = styled.button`
  text-align: center;
  width: 70px;
  height: 20px;
  color: ${MainColor};
  border: 2px solid ${MainColor};
  border-radius: 5px;
  background-color: ${BgColor};
  font-size: 12px;

  a {
    color: ${MainColor};
    text-decoration: none
  }
`;

export default Questions;