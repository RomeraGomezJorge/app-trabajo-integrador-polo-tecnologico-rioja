import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";

export const SignIn = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    alignItems:"center",
                    flexDirection: 'column',
                    display: 'flex',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box>
                    <TextField
                        margin="normal"
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        fullWidth

                    />
                    <TextField
                        margin="normal"
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="email"
                        type="password"
                        fullWidth
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="./forgot-password" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="./sign-up" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Container>
    )
}