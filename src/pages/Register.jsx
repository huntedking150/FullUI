import { Formik } from 'formik';
import React from 'react';
import registerUserSchema from '../schemas/register.user.schema';
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={registerUserSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '1rem',
                width: '300px',
              }}
            >
              <Typography variant="h4">Sign up</Typography>

              {/* first name */}
              <FormControl>
                <TextField
                  label="First name"
                  {...formik.getFieldProps('firstName')}
                />

                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>

              {/* last name */}

              <FormControl>
                <TextField
                  label="Last name"
                  {...formik.getFieldProps('lastName')}
                />

                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormHelperText error>
                    {formik.errors.lastName}
                  </FormHelperText>
                ) : null}
              </FormControl>

              {/*email */}

              <FormControl>
                <TextField label="Email" {...formik.getFieldProps('email')} />

                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              {/*password */}

              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps('password')}
                />

                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Stack sx={{ width: '100%', alignItems: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ mb: '10px' }}
                >
                  login
                </Button>

                <Link to="/login">Already Registered? Click to Login</Link>
              </Stack>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
