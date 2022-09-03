import { useNavigate } from "react-router-dom";

function Main() {
  const navigation = useNavigate();

  return (
    <div>
      <div className="main-image-box">
        <img
          src="https://kakaofriendsmbti.netlify.app/static/media/00.88f71908.png"
          alt="캐릭터 채팅방"
        />
        <button
          className="on-button"
          type="button"
          onClick={() => {
            navigation("onboarding1");
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Main;
