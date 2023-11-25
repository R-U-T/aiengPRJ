import React from 'react';
import  './style.css'
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import jhImage from '../Images/jh.jpg';
import syImage from '../Images/sy.jpg';
import cgImage from '../Images/cg.jpg';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import aic from './images/AI대화.png';
import eng from './images/영어학습.png';
import success from './images/성공사례.png';
import khImage from '../Images/kh.jpg';
import logo from './images/logo.png';


export default function Footer(){

    return(
        <>
            <div style={{marginTop : '50px'}}></div>

            <h2 id="team" className="page-section-heading text-center text-uppercase mb-0"
                style={{paddingTop: '30px', color: 'black', fontWeight: 'bold'}}>
                팀 소개
            </h2>
            {/* Icon Divider*/}
            <div className="divider-custom"/>





            <Container maxWidth="lg" id="team"> {/* maxWidth를 설정하여 최대 너비를 조절할 수 있습니다. */}
                <Box className="team-container" sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2,
                    justifyContent: 'space-around', // 여기서 간격을 균등하게 설정합니다.
                    margin: 'auto', // 이를 통해 Box를 가운데 정렬할 수 있습니다.
                }}>

        <Card sx={{ maxWidth: 345,
            boxShadow: 'none', // 박스 쉐도우 제거
            backgroundColor: 'white', // 현재 배경색으로 고정
            '&:hover': {
                backgroundColor: 'white', // 마우스 오버 시에도 배경색을 동일하게 유지
                // 다른 마우스 오버 효과를 추가적으로 제거할 수 있습니다.
                boxShadow: 'none', // 마우스 오버 시 그림자 효과 제거
                transform: 'none' // 마우스 오버 시 변형 효과 제거
            }}}>
            <CardActionArea sx={{
                border: 'none', // 테두리 제거
                '&:hover': {
                    backgroundColor: 'white', // 마우스 오버 시에도 배경색을 동일하게 유지
                    boxShadow: 'none', // 마우스 오버 시 그림자 효과 제거
                    transform: 'none' // 마우스 오버 시 변형 효과 제거
                }
            }}>
                <CardMedia
                    component="img"
                    sx={{
                        height: 200, // MUI에서는 단위를 생략하고 숫자만 적어도 px로 취급합니다.
                        width: 200,
                        borderRadius: '50%',
                        margin: 'auto' // 이미지를 가운데로 정렬합니다.
                    }}
                    image={syImage}
                    alt="jh"
                />

                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        박서윤
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        취업 하고 싶어요 *^^*
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>





                    <Card sx={{ maxWidth: 345,
                        boxShadow: 'none', // 박스 쉐도우 제거
                        backgroundColor: 'white', // 현재 배경색으로 고정
                        '&:hover': {
                            backgroundColor: 'white', // 마우스 오버 시에도 배경색을 동일하게 유지
                            // 다른 마우스 오버 효과를 추가적으로 제거할 수 있습니다.
                            boxShadow: 'none', // 마우스 오버 시 그림자 효과 제거
                            transform: 'none' // 마우스 오버 시 변형 효과 제거
                        }}}>
                        <CardActionArea sx={{
                            border: 'none', // 테두리 제거
                            '&:hover': {
                                backgroundColor: 'white', // 마우스 오버 시에도 배경색을 동일하게 유지
                                boxShadow: 'none', // 마우스 오버 시 그림자 효과 제거
                                transform: 'none' // 마우스 오버 시 변형 효과 제거
                            }
                        }}>
                    <CardMedia
                        component="img"
                        sx={{
                            height: 200, // MUI에서는 단위를 생략하고 숫자만 적어도 px로 취급합니다.
                            width: 200,
                            borderRadius: '50%',
                            margin: 'auto' // 이미지를 가운데로 정렬합니다.
                        }}
                        image={khImage}
                        alt="jh"
                    />

                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            정경희
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>



                    <Card sx={{ maxWidth: 345,
                        boxShadow: 'none', // 박스 쉐도우 제거
                        backgroundColor: 'white', // 현재 배경색으로 고정
                        '&:hover': {
                            backgroundColor: 'white', // 마우스 오버 시에도 배경색을 동일하게 유지
                            // 다른 마우스 오버 효과를 추가적으로 제거할 수 있습니다.
                            boxShadow: 'none', // 마우스 오버 시 그림자 효과 제거
                            transform: 'none' // 마우스 오버 시 변형 효과 제거
                        }}}>
                        <CardActionArea sx={{
                            border: 'none', // 테두리 제거
                            '&:hover': {
                                backgroundColor: 'white', // 마우스 오버 시에도 배경색을 동일하게 유지
                                boxShadow: 'none', // 마우스 오버 시 그림자 효과 제거
                                transform: 'none' // 마우스 오버 시 변형 효과 제거
                            }
                        }}>
                    <CardMedia
                        component="img"
                        sx={{
                            height: 200, // MUI에서는 단위를 생략하고 숫자만 적어도 px로 취급합니다.
                            width: 200,
                            borderRadius: '50%',
                            margin: 'auto' // 이미지를 가운데로 정렬합니다.
                        }}
                        image={jhImage}
                        alt="jh"
                    />

                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            서정훈
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            안녕하세요!!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>




                    <Card sx={{ maxWidth: 345,
                        boxShadow: 'none', // 박스 쉐도우 제거
                        backgroundColor: 'white', // 현재 배경색으로 고정
                        '&:hover': {
                            backgroundColor: 'white', // 마우스 오버 시에도 배경색을 동일하게 유지
                            // 다른 마우스 오버 효과를 추가적으로 제거할 수 있습니다.
                            boxShadow: 'none', // 마우스 오버 시 그림자 효과 제거
                            transform: 'none' // 마우스 오버 시 변형 효과 제거
                        }}}>
                        <CardActionArea sx={{
                            border: 'none', // 테두리 제거
                            '&:hover': {
                                backgroundColor: 'white', // 마우스 오버 시에도 배경색을 동일하게 유지
                                boxShadow: 'none', // 마우스 오버 시 그림자 효과 제거
                                transform: 'none' // 마우스 오버 시 변형 효과 제거
                            }
                        }}>
                    <CardMedia
                        component="img"
                        sx={{
                            height: 200, // MUI에서는 단위를 생략하고 숫자만 적어도 px로 취급합니다.
                            width: 200,
                            borderRadius: '50%',
                            margin: 'auto' // 이미지를 가운데로 정렬합니다.
                        }}
                        image={cgImage}
                        alt="jh"
                    />

                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            왕장령
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            히히힣
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
                </Box>
            </Container>



            <div style={{marginTop : '50px'}}></div>




            <div>
                <footer className="footer" style={{ backgroundColor: '#333333', color: 'white', padding: '10px 0', height: '130px'}}>
                    <div className="footer-container">
                        <div className="row">

                            <div className="col-lg-6 col-md-12 mb-2 d-flex">
                                <img src={logo} alt="logo" style={{ maxWidth: '100px', marginRight: '15px' }}/>
                                <div>
                                    <h5 className="uu">Are You T?</h5>
                                    <p>여러분들의 성공을 기원합니다.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-2">
                                <h5 className="uu">Follow Us</h5>
                                <div className="social-links">
                                    <a className="social-icon facebook-icon" href="#!"><i className="fab fa-facebook-f" /></a>
                                    <a className="social-icon twitter-icon" href="#!"><i className="fab fa-twitter" /></a>
                                    <a className="social-icon instagram-icon" href="#!"><i className="fab fa-instagram" /></a>
                                    <a className="social-icon youtube-icon" href="#!"><i className="fab fa-youtube" /></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-2">
                                <h5 className="uu">Contact</h5>
                                <ul className="contact-list contact-text-large">
                                    <li><a href="mailto:smartkorea77@gmail.com">이메일</a></li>
                                    <li><a href="https://maps.google.com">위치</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="text-center" style={{ backgroundColor: '#20232a', color: '#f8f9fa', padding: '5px 0' }}>
                    <small>© 2023 너랑 나</small>
                </div>
            </div>






            {/* Portfolio Modals*/}
                {/* Portfolio Modal 1*/}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* Portfolio Modal - Title*/}
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Ai 영어학습</h2>
                                            {/* Icon Divider*/}
                                            <div className="divider-custom">
                                                <div className="divider-custom-line" />
                                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                                <div className="divider-custom-line" />
                                            </div>
                                            {/* Portfolio Modal - Image*/}
                                            <img className="img-fluid rounded mb-5" src={aic} alt="..." />
                                            {/* Portfolio Modal - Text*/}
                                            <p className="mb-4">진짜 사람같은 AI와 자유롭게 대화해보세요!</p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw" />
                                                닫기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Portfolio Modal 2*/}
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} aria-labelledby="portfolioModal2" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* Portfolio Modal - Title*/}
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">편리성</h2>
                                            {/* Icon Divider*/}
                                            <div className="divider-custom">
                                                <div className="divider-custom-line" />
                                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                                <div className="divider-custom-line" />
                                            </div>
                                            {/* Portfolio Modal - Image*/}
                                            <img className="img-fluid rounded mb-5" src={eng} alt="..." />
                                            {/* Portfolio Modal - Text*/}
                                            <p className="mb-4">언제 어디서든 시간과 장소를 구애 받지 않고, 편하게 이용할 수 있습니다.</p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw" />
                                                닫기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Portfolio Modal 3*/}
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} aria-labelledby="portfolioModal3" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            {/* Portfolio Modal - Title*/}
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">성공</h2>
                                            {/* Icon Divider*/}
                                            <div className="divider-custom">
                                                <div className="divider-custom-line" />
                                                <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                                                <div className="divider-custom-line" />
                                            </div>
                                            {/* Portfolio Modal - Image*/}
                                            <img className="img-fluid rounded mb-5" src={success} alt="..." />
                                            {/* Portfolio Modal - Text*/}
                                            <p className="mb-4">T와 함께하며 영어분야에서 성공하세요!</p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw" />
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
    )
}