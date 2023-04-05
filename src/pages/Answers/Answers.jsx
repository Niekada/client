import { useEffect, useState } from "react";
import styled from 'styled-components';
import { MainColor, BgColor } from '../../consts/Colors';
import { useNavigate } from "react-router-dom";

const Answers = () => {
  const navigate = useNavigate();
  const [answerData, setAnswerData] = useState([{}]);
  const [tempAnswer, setTempAnswer] = useState([{}]);
  const [changed, setChanged] = useState(false);
  const [like, setLike] = useState(100);
  const [dislike, setDislike] = useState(9);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  useEffect(() => {
    if (!setAnswerData) return;
    let equal = true;
    if (setAnswerData !== tempAnswer){
      equal = false;
    }
    if (equal){
      setChanged(false);
    }
  });

  useEffect(() => {
    fetch("/answers")
      .then(
        response => response.json()
      )
      .then(
        data => {
          setAnswerData(data)
          setTempAnswer(data)
        }
      )
  }, []);

  const updateAnswer = () => {
    const url = "/answers/:id"
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tempAnswer)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setAnswerData(data)
      setChanged(false);
      console.log(data);
    })
    .catch();
  };

  const likef = () => {
    if (likeActive) {
      setLikeActive(false)
      setLike(like -1)
    } else {
      setLikeActive(true)
      setLike(like +1)
      if (dislikeActive) {
        setDislikeActive(false)
        setLike(like +1)
        setDislike(dislike -1)
      }
    }
  };

  const dislikef = () => {
    if (dislikeActive) {
      setDislikeActive(false)
      setDislike(dislike -1)
    } else {
      setDislikeActive(true)
      setDislike(dislike +1)
      if (likeActive) {
        setLikeActive(false)
        setDislike(dislike +1)
        setLike(like -1)
      }
    }
  }

  return (
    <Container>
      <Title>
        All Answers
      </Title>
      <AnswersContainer>
        {(typeof tempAnswer.answers === 'undefined') ? (
          <Loading>Loading...</Loading>
        ) : (
          tempAnswer.answers.map((answer, i) => (
            <Inputs>
              <input 
                  key={answer.id} 
                  type="text" 
                  value={answer} 
                  onChange={(e) => {
                    setChanged(true);
                    setTempAnswer({
                      ...tempAnswer, 
                      answer: e.target.value,
                    });
                  }}
              />;
              <SmallButtons
                onClick={() => {
                  const url = "/answers/:id";
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
                      navigate("/answers");
                    })
                    .catch((e) => {
                      console.log(e);
                    })
                  }}
              >
                Delete
              </SmallButtons> 
              <br></br>
              <SmallButtons
                onClick={likef}
              >
                Like {like}
              </SmallButtons>
              <SmallButtons
                onClick={dislikef}
              >
                Dislike {dislike}
              </SmallButtons>
              {changed ? (
                <ButtonsContainer>
                  <SmallButtons
                    onClick={updateAnswer}
                  >
                    Save
                  </SmallButtons> 
                  <SmallButtons
                    onClick={() => {
                      setTempAnswer({...answer});
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
      </AnswersContainer>
      <AddAnswersButton>
        <a href="/addAnswer">Add Answer</a>
      </AddAnswersButton>
    </Container>
  );
};

export default Answers;

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

const AnswersContainer = styled.div`
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

const AddAnswersButton = styled.button`
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