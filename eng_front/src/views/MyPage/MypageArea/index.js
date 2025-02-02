import React, {useState, useEffect} from 'react';
import './Mypage.css';
import emptyChattingList from './images/emptyChattingList.png'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ModalChange from './ModalChange';
import '../../../App.css'
import trash1 from './images/trash1.png';
import Modal from "../../Speech/Modal";
import loginImg from "../../Speech/images/loginImg.png";

export default function MypageArea() {

    const [userProfile, setUserProfile] = useState();
    const [userGender, setGender] = useState();
    const [chattingList, setChattingList] = useState([]);
    const navigate = useNavigate();
    const [completed, setCompleted] = useState(0);
    const [userExperience, setUserExperience] = useState(0);
    const [modalInfo, setModalInfo] = useState(false);
    const [inputPassword, setInputPassword] = useState('');
    const [passwordAttempts, setPasswordAttempts] = useState(0);
    const [userFriend , setUserFriend] = useState();
    const [FriendEmail, setFriendEmail] = useState('');
    const [friendProfile , setFriendProfile] = useState();
    const [getFriendList , setGetFriendList] = useState([]);
    const [friendAdded, setFriendAdded] = useState(false);
    const [modalAddFriend, setMdalAddFriend] = useState(false);
    const [modalFriendList, setModalFriendList] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const userNum = sessionStorage.getItem('userNum');

    useEffect(() => {
        if (userNum == null) {
            // 모달 창 띄워서 로그인 하세요 하고 확인 누르면 로그인 창으로 보내기
            setLoginModalOpen(true);
        }
    }, [userNum]);

    const closeModalAndNavigate = () => {
        setLoginModalOpen(false);
        navigate('/login');
    };

    const checkPassword = () => {
        if (inputPassword === userProfile.pw) {
            navigate('/change');
        } else {
            if (passwordAttempts < 3) { // 0, 1, 2 - 총 3번의 기회
                setPasswordAttempts(passwordAttempts + 1);
                alert(`비밀번호가 일치하지 않습니다. 다시 시도해주세요. 남은 횟수 : ${3 - passwordAttempts} 회`);

            } else {
                navigate('/main');
            }
        }
        setModalInfo(false); // 모달창 닫기
    };

    const searchFriend= async (email) => {
        try {
            const response = await fetch(`http://localhost/ranking/search-friend?email=${email}`);
            if (response.ok) {
                const data = await response.json();
                setFriendProfile(data);
                console.log('가져온 친구 정보: ', data);
                setFriendAdded(false);
            } else {
                console.error('Failed');
            }
        } catch (error) {
            console.error('Error :', error);
        }
    };




    useEffect(() => {
        // 페이지 로드 후 1초마다 completed 상태를 업데이트
        const interval = setInterval(() => {
            setCompleted(prevCompleted => {
                const newCompleted = prevCompleted + 1;
                // 특정 값(예: 70)에 도달하면 interval을 클리어
                if (newCompleted >= 70) {
                    clearInterval(interval);
                }
                return newCompleted;
            });
        }, 10); // 10ms 마다 1씩 증가
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
    }, []);


    useEffect(() => {
        profile();
        fetchSubtitles();
    }, []);

    const profile = async () => {

        const data = {
            userNum
        };

        try {
            const response = await axios.post('http://localhost/user/mypage', data);
            setUserProfile(response.data);
            console.log(response.data);
            setUserExperience(response.data?.experience || 0);
            console.log(userExperience);
            gender(response.data.gender);
            console.log('유저 프로필:', response.data); // 응답 로깅
        } catch (error) {
            console.error('프로필 불러오는 중 오류 발생:', error);
        }
    };

    function formatDate(dataTimeString) {
        const getDate = new Date(dataTimeString);
        const formattedDate = `${getDate.getFullYear()}/${(getDate.getMonth() + 1).toString().padStart(2, '0')}/${getDate.getDate().toString().padStart(2, '0')}`;
        return formattedDate;
    }

    const fetchSubtitles = async () => {
        try {
            const response = await axios.post('http://localhost/talking/chattingList', {userNum});
            // console.log('자막 응답:', response.data); // 응답 로깅
            setChattingList(response.data);
        } catch (error) {
            console.error('채팅방 목록 불러오는 중 오류 발생:', error);
        }
    };

    const handleClick = (crid) => {
        navigate('/script', {state: {crid}});
    };

    const handleVoca = () => {
        navigate('/voca');
    };

    const gender = (userGender) => {
        if (userGender == 1) {
            setGender("남성");
        } else {
            setGender("여성");
        }
    }

    const goToLevelTest = () => {
        navigate('/leveltest');
    }

    const change = () => {
        setModalInfo(true);
    }

    const deleteResult = async (crid) => {
        try {
            const response = await axios.post('http://localhost/chatting/deleteRoom', {crid});
            console.log('응답:', response.data);
            fetchSubtitles();
            // setGetScript(response.data);
        } catch (error) {
            console.error('error: ', error);
        }
    };

    const addFriend = async (friendNum) => {
        // Assuming you have userNum stored in a variable
        const userNum = sessionStorage.getItem('userNum');

        try {
            const response = await axios.post('http://localhost/ranking/friend-add', null, {
                params: {
                    user1Id: userNum,
                    user2Id: friendNum
                }
            });
            setFriendAdded(true);
            console.log(response.data);
            setFriendEmail("");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const deleteFriend = async (friendNum) => {
        const userNum = sessionStorage.getItem('userNum');
        try {
            const response = await axios.delete('http://localhost/ranking/friend-delete', {
                params: {
                    user1Id: userNum,
                    user2Id: friendNum
                }
            });
            console.log(response.data);
            friendList(userNum);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const friendList = async (userNum) => {
        try {
            const response = await axios.post('http://localhost/ranking/friend-list', {userNum});
            console.log('응답:', response.data);
            fetchSubtitles();
            setGetFriendList(response.data);
        } catch (error) {
            console.error('error: ', error);
        }
    };

    return (
        <>
            <div className='App'>
                <div className="MypageCenter" style={{marginTop: '150px'}}>
                    {userProfile && (
                        <>
                            <div className="MypageContainer" style={{marginRight: '30px'}}>
                                <div style={{marginBottom: '20px'}}/>
                                <h4 className="MypageName" style={{marginTop: '10px'}}>{userProfile.name}</h4>
                                <div className="grayline"/>
                                <h5 className="MypageName">{userProfile.email}</h5>
                                <div className="grayline"/>
                                <h5 className="MypageName">{userGender}</h5>
                                <div className="grayline"/>
                                <h5 className="MypageName">{userProfile.lv} Lv</h5>
                                <div>
                                    <ProgressBar bgcolor={"#17264D"} completed={userExperience}/>
                                    {userExperience === 100 ? (
                                        <button className="LevelTestBtn" onClick={goToLevelTest}>레벨 테스트 보러 가기</button>
                                    ) : (
                                        <>
                                            <p>파이팅! 조금만 힘내세요!</p>
                                        </>
                                    )}
                                </div>

                                <div className="grayline" style={{marginBottom: '20px', marginTop: '20px'}}/>
                                <div className="MypageFriendBtnContainer">
                                    <button className="MypageFriendBtn" onClick={() => setMdalAddFriend(true)}>
                                        친구 추가
                                    </button>
                                    <button className="MypageFriendBtn" onClick={() => {
                                        setModalFriendList(true);
                                        friendList(userNum);
                                    }}>
                                        친구 목록
                                    </button>
                                </div>


                                <div className="grayline" style={{marginBottom: '20px', marginTop: '20px'}}/>
                                <button className="MypageBtn" onClick={handleVoca}>단어장 복습</button>
                                <div className="grayline" style={{marginBottom: '20px', marginTop: '20px'}}/>
                                <button className="MypageBtn" onClick={() => {
                                    setModalInfo(true);
                                    change();
                                }}
                                >개인정보 수정
                                </button>
                            </div>
                        </>
                    )}

                    <div className="MypageContainer" style={{width: '1250px'}}>
                        <div style={{
                            marginTop: '20px',
                            justifyContent: "space-around",
                            display: "flex",
                            marginBottom: '10px'
                        }}>
                            <h5 className="MypageListT" style={{width: '100px', textAlign: "center"}}>상황</h5>
                            <h5 className="MypageListT">내 역할</h5>
                            <h5 className="MypageListT">AI 역할</h5>
                            <h5 className="MypageListT">레벨</h5>
                            <h5 className="MypageListT">국가</h5>
                            <h5 className="MypageListT">날짜</h5>
                            <h5 className="MypageListT">결과</h5>
                        </div>
                        <div className="grayline"/>

                        {chattingList.length > 0 ? (
                            chattingList.map((chattingRoom, index) => (
                                <div key={index} className="MypageListItem">
                                    <p className="MypageList"
                                       style={{width: '160px', textAlign: 'center', marginRight: '40px'}}>
                                        {chattingRoom.SITUATION}
                                    </p>
                                    <p className="MypageList">{chattingRoom.USERROLE}</p>
                                    <p className="MypageList" style={{paddingLeft : '13px'}}>{chattingRoom.GPTROLE}</p>
                                    <p className="MypageList" style={{paddingLeft : '13px'}}>{chattingRoom.LV}</p>
                                    <p className="MypageList" style={{paddingRight : '15px'}}>{chattingRoom.COUNTRY}</p>
                                    <p className="MypageList" style={{paddingRight : '40px'}}>{formatDate(chattingRoom.REGDATE)}</p>
                                    <div className="butt">
                                        <button className="MypageResultBtn"
                                                onClick={() => handleClick(chattingRoom.CRID)}>결과보기
                                        </button>
                                        <button className="ResultDeleteBtn"  onClick={() => deleteResult(chattingRoom.CRID)}>
                                            <img src={trash1} width='15px' height='18px'></img>
                                        </button>
                                    </div>
                                    <div className="grayline"/>
                                </div>
                            ))
                        ) : (
                            <div className="ChatListNull">
                                <div className="ChatListNullContent">
                                    <img src={emptyChattingList} alt="emptyChattingList" width="250px" height="auto"/>
                                    <p>AI 선생님과 함께 대화를 시작해보세요!</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {modalInfo && (
                    <ModalChange isOpen={modalInfo} onClose={() => setModalInfo(false)}>
                        <h2 className="modal-titlea">개인정보 확인</h2>
                        <div className="modal-bodya">
                            <p>비밀번호 입력</p>
                            <input
                                type="password"
                                value={inputPassword}
                                onChange={(e) => setInputPassword(e.target.value)}
                            />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                            <button className="modal-buttona" onClick={checkPassword} style={{marginRight: '10px'}}>확인
                            </button>
                            <button
                                onClick={() => setModalInfo(false)}
                                className="modal-buttona">
                                닫기
                            </button>
                        </div>
                    </ModalChange>
                )}

                {modalAddFriend && (
                    <ModalChange isOpen={modalAddFriend} onClose={() => setModalInfo(false)}>
                        <h2 className="modal-titlea">친구 추가</h2>
                        <div className="modal-bodya">
                            <p>친구 추가할 아이디를 입력하세요</p>
                            <input
                                type="text"
                                value={FriendEmail}
                                onChange={(e) => setFriendEmail(e.target.value)}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                            {friendProfile && (
                                <div>
                                    <p>이름: {friendProfile.name}</p>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', columnGap: '10px', alignItems: 'center' }}>
                                        <p style={{ marginBottom: '10px' }}>이메일: {friendProfile.email}</p>
                                        {friendAdded ? (
                                                <div className='friendAdd'><p>추가완료</p></div>
                                            ) :
                                            <button className='modal-buttona2' onClick={()=> addFriend(friendProfile.num)}>추가</button>
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className="modal-buttona" onClick={() => searchFriend(FriendEmail)} style={{marginRight: '10px'}}>검색
                        </button>
                        <button
                            onClick={() => setMdalAddFriend(false)}
                            className="modal-buttona">
                            닫기
                        </button>
                    </ModalChange>
                )}

                {modalFriendList && (
                    <ModalChange isOpen={modalFriendList} onClose={() => setModalInfo(false)}>
                        <h2 className="modal-titlea">친구 목록</h2>
                        <div className="modal-bodya">
                            <p>삭제 버튼을 누르면 친구가 삭제 돼요</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                            {getFriendList.map((friendList, index) => (
                                <div key={index}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', columnGap: '10px', alignItems: 'center' }}>
                                        <p>이름: {friendList.NAME}</p>
                                        <button className="friendRemoveBtn" onClick={()=>deleteFriend(friendList.NUM)}>삭제</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setModalFriendList(false)}
                            className="modal-buttona">
                            닫기
                        </button>
                    </ModalChange>
                )}

                <Modal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)}>

                    <div className="speechModalCenter">
                        <img src={loginImg} alt='로그인 이미지' className="speechLoginImg"/>
                        <h4>로그인 후 이용해 주세요</h4>
                        <button onClick={closeModalAndNavigate} className="modal-custom-button">
                            닫기
                        </button>
                    </div>
                </Modal>

            </div>
        </>
    )
}