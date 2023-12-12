import {Avatar, Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";

export const ForgotPassword = () => {
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
                    Forgot password
                </Typography>

                <Typography sx={{marginTop:3}}  variant="body1">
                Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Reset Password
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="sign-in" variant="body2">
                                Return to sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}