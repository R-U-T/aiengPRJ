// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// //import Link from '@mui/material/Link';
// import { Link } from 'react-router-dom';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Navigation2 from "../Navigation2";
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';
//
//
// const defaultTheme = createTheme();
//
// export default function SignInSide() {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         console.log({
//             email: data.get('email'),
//             password: data.get('password'),
//             name: data.get('name'),
//             gender: data.get('gender'),
//         });
//     };
//
//
//     const sendNumber = () => {
//         // 인증번호 전송 로직
//         console.log('인증번호 전송 로직 실행');
//         // 예시: 이메일 주소를 서버에 전송하여 인증번호를 요청하는 코드를 여기에 작성합니다.
//     };
//
//     const confirmNumber = () => {
//
//         console.log('ㅋㅋㅋ');
//
//     };
//
//
//     return (
//         <>
//             <Navigation2/>
//         <ThemeProvider theme={defaultTheme}>
//             <Grid container component="main" sx={{ height: '100vh' }}>
//                 <CssBaseline />
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     sx={{
//                         backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundColor: (t) =>
//                             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 />
//                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 4,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>
//                         <Typography component="h1" variant="h5">
//                             Sign up
//                         </Typography>
//
//                         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth={false}
//                                 style={{ flex: 9 }}
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 autoComplete="email"
//                                 autoFocus
//                             />
//
//                             <Button
//                                 variant="contained"
//                                 style={{ flex: 1 , backgroundColor : 'black'}}
//                                 onclick={confirmNumber}
//                                 name="confirmBtn"
//                                 id="confirmBtn"
//                             >
//                               인증
//                             </Button>
//                             </div>
//
//
//                             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                                 <TextField
//                                     margin="normal"
//                                     required
//                                     fullWidth={false}
//                                     style={{ flex: 8 }}
//                                     id="mail_number"
//                                     label="인증번호"
//                                     name="mail_number"
//                                 />
//
//                                 <Button
//                                     variant="contained"
//                                     style={{ flex: 2, backgroundColor: 'black' }}
//                                     onClick={sendNumber}  // 수정된 부분
//                                     id="sendBtn"
//                                     name="sendBtn"
//
//                                 >
//                                     인증확인
//                                 </Button>
//                             </div>
//
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 autoComplete="current-password"
//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="name"
//                                 label="Name"
//                                 name="name"
//                                 autoComplete="name"
//                                 autoFocus
//                             />
//
//                             <FormControl component="fieldset" sx={{ mt: 2, mb: 2 }}>
//                                 <FormLabel component="legend">Gender</FormLabel>
//                                 <RadioGroup
//                                     row
//                                     aria-label="gender"
//                                     name="gender"
//                                     defaultValue="man"
//                                 >
//                                     <FormControlLabel value="man" control={<Radio />} label="man" />
//                                     <FormControlLabel value="woman" control={<Radio />} label="woman" />
//                                 </RadioGroup>
//                             </FormControl>
//
//
//
//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 sx={{
//                                     mt: 3,
//                                     mb: 2,
//                                     padding: '6px 12px', // 패딩으로 크기 조정
//                                     backgroundColor: 'black', // 배경색을 검은색으로 설정
//                                     '&:hover': {
//                                         backgroundColor: 'black' // 마우스 오버 시 색상 변경 없음
//                                     }
//                                 }}
//                             >
//                                 Sign Up
//                             </Button>
//
//
//                             <Grid container>
//                                 <Grid item xs/>
//                                 <Grid item>
//                                     <Link to="/login" variant="body2" style={{ textDecoration: 'none' }}>
//                                         {"Already have an account? Sign in"}
//                                     </Link>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </ThemeProvider>
//             </>
//     );
// }




























import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
//import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from "../Navigation";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

export default function SignInSide() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            pw: data.get('password'),
            name: data.get('name'),
            gender: data.get('gender'),
        };

        try {
            const response = await fetch('http://localhost/user/save', {
                method: 'Put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('User registered successfully.');
                navigate('/login');
            } else {
                console.error('Failed to register user.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };


    return (
        <>
            <Navigation/>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>

                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                />

                                <FormControl component="fieldset" sx={{ mt: 2, mb: 2 }}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="gender"
                                        name="gender"
                                        defaultValue={1}
                                    >
                                        <FormControlLabel value={1} control={<Radio />} label="man" />
                                        <FormControlLabel value={0} control={<Radio />} label="woman" />
                                    </RadioGroup>
                                </FormControl>



                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item xs/>
                                    <Grid item>
                                        <Link to="/login" variant="body2">
                                            {"Already have an account? Sign in"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}