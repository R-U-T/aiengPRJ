import React, {useState, useEffect} from 'react';
import './Mypage.css';
import emptyChattingList from './images/emptyChattingList.png'
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function MypageArea() {

    const [userProfile, setUserProfile] = useState();
    const [userGender , setGender] = useState();
    const [chattingList, setChattingList] = useState([]);
    const navigate = useNavigate();

    // 프론트에서 세션 uid 가져오기
    const userNum = sessionStorage.getItem('userNum');

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
        navigate('/script', { state: { crid } });
    };

    const gender = (userGender) => {
        if(userGender == 1)
        {
            setGender("남성");
        } else {
            setGender("여성");
        }
    }

    return (
        <>
            <div>
                <div className="MypageCenter" style={{marginTop: '150px'}}>
                    {userProfile && (
                        <>
                            <div className="MypageContainer" style={{marginRight: '30px'}}>
                                <div style={{marginBottom:'30px'}}/>
                                <div className="MypageImg"/>
                                <div className="grayline" style={{marginTop: '20px'}}/>
                                <h5 className="MypageName" style={{marginTop: '20px'}}>{userProfile.name}</h5>
                                <div className="grayline"/>
                                <h5 className="MypageName">{userProfile.email}</h5>
                                <div className="grayline"/>
                                <h5 className="MypageName">{userGender}</h5>
                                <div className="grayline"/>
                                <h5 className="MypageName">레벨</h5>
                                <div className="grayline" style={{marginBottom: '15px'}}/>
                                <div className="MypageBtn">개인정보 수정</div>
                            </div>
                        </>
                    )}

                    <div className="MypageContainer" style={{width: '1200px'}}>
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
                                    <p className="MypageList" style={{ width: '160px', textAlign: 'center', marginRight: '40px' }}>
                                        {chattingRoom.SITUATION}
                                    </p>
                                    <p className="MypageList">{chattingRoom.USERROLE}</p>
                                    <p className="MypageList">{chattingRoom.GPTROLE}</p>
                                    <p className="MypageList">{chattingRoom.LV}</p>
                                    <p className="MypageList">{chattingRoom.COUNTRY}</p>
                                    <p className="MypageList">{formatDate(chattingRoom.REGDATE)}</p>
                                    <div className="MypageResultBtn" onClick={() => handleClick(chattingRoom.CRID)}>결과보기</div>
                                    <div className="grayline" />
                                </div>
                            ))
                        ) : (
                            <div className="ChatListNull">
                                <div className="ChatListNullContent">
                                    <img src={emptyChattingList} alt="emptyChattingList" width="250px" height="auto" />
                                    <p>AI 선생님과 함께 대화를 시작해보세요!</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}