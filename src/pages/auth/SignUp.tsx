import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography
} from "@mui/material";
import { useState } from "react";

export const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (<Container component="main" maxWidth="sm">
        <Box
            sx={{
                marginTop: 8,
                alignItems: "center",
                flexDirection: 'column',
                display: 'flex',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Box  mt={4}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextField
                            id="name"
                            label="User Fullname"
                            name="name"
                            fullWidth
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            id="club_name"
                            label="Club name"
                            name="club_name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            type="email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            id="password_"
                            label="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            id="password_confirmation"
                            label="Password confirmation"
                            name="password_confirmation"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            id="address"
                            label="Address"
                            name="address"
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            id="phone"
                            label="Phone number"
                            name="phone"
                            fullWidth
                        />
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Create an acount
                    </Button>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item mb={8}>
                        <Link href="/sign-in" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>)

}