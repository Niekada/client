import { useEffect, useState } from "react";
import { Title, Container, MainContainer, Loading, Inputs, AddButton, ButtonsContainer, SmallButtons } from "../../styles/QuestionsAnswersStyles";
import { useNavigate } from "react-router-dom";
import { ADD_ANSWER_PATH } from "../../routes/const";

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
      <MainContainer>
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
                key={i}
                onClick={likef}
              >
                Like {like}
              </SmallButtons>
              <SmallButtons
                key={i}
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
      </MainContainer>
      <AddButton>
        <a href={ADD_ANSWER_PATH}>Add Answer</a>
      </AddButton>
    </Container>
  );
};

export default Answers;