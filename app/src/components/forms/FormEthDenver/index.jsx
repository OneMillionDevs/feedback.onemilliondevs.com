/* --- Global --- */
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
/* --- Local --- */
import {withFirebase} from '@horizin/firebase-system';
import {firebase} from '@settings/firebase';
import {GithubLoginLarge} from '@components';

const inputFieldStyle = {
  border: 'none',
  borderLeft: '3px solid',
  borderLeftColor: 'gray',
  boxShadow: 1,
  mt: 3,
  width: ['100%'],
  transition: '0.2s all',
  p: 3,
  '&:focus': {
    borderColor: 'blue',
  },
};

const inputTextAreaStyle = {
  border: 'none',
  borderLeft: '3px solid',
  borderLeftColor: 'gray',
  boxShadow: 1,
  height: [120],
  mt: 3,
  width: ['100%'],
  transition: '0.2s all',
  p: 3,
  '&:focus': {
    borderColor: 'blue',
  },
};

/* --- Component --- */
const FormSignPetition = props => {
  const firebaseProvider = withFirebase();
  const {handleSubmit, register, errors} = useForm();
  const [status, setStatus] = useState(0);

  /* --- Form : EventHandler : Submit --- */
  const onSubmit = async values => {
    const submission = {
      submission: values,
      user: firebaseProvider.user.uid,
    };
    try {
      setStatus(1);
      const ref = firebase.database().ref(`submissions`);
      ref.push(submission);
    } catch (error) {
      console.log(error);
      setStatus(-1);
    }
  };

  /* --- Form : Component --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
      {status === 1 ? (
        <SubmissionComplete />
      ) : (
        <Atom.Flex column sx={{flex: 1}}>
          <Molecule.Field
            hidden
            name="form"
            placeholder="form"
            defaultValue="ethdenver-hackathon"
            register={register}
            errors={errors}
          />
          <Molecule.Field
            name="name"
            placeholder="Name"
            // label="Name"
            register={register}
            errors={errors}
            sx={inputFieldStyle}
          />
          <Molecule.Field
            name="email"
            type="email"
            placeholder="Email"
            // label="Email"
            register={register}
            errors={errors}
            sx={inputFieldStyle}
          />
          <Molecule.Field
            name="role"
            placeholder="Role (Developer, Designer, Idea Person, etc...)"
            // label="Role"
            register={register}
            errors={errors}
            sx={inputFieldStyle}
          />
          <Molecule.Field
            name="project-url"
            placeholder="Project URL (https://github.com/)"
            // label="Project URL"
            register={register}
            errors={errors}
            sx={inputFieldStyle}
          />
          <Molecule.Field
            name="hackathon-attend-future"
            placeholder="How likely are you to attend another hackathon?"
            register={register}
            errors={errors}
            sx={inputFieldStyle}
          />
          <Molecule.Field
            name="hackathon-memorable"
            placeholder="What was the most memorable experience you took away from this event?"
            register={register}
            errors={errors}
            sx={inputFieldStyle}
          />

          <Molecule.Field
            name="ethdenver-favorite"
            as="textarea"
            placeholder="What was your favorite part about the EthDenver hackathon?"
            register={register}
            errors={errors}
            sx={inputTextAreaStyle}
          />
          <Molecule.Field
            name="ethdenver-sponsor-interactions"
            as="textarea"
            placeholder="How would you rate your interactions with sponsors? Did anything stand out?"
            register={register}
            errors={errors}
            sx={inputTextAreaStyle}
          />
          <Molecule.Field
            name="ethdenver-experience-overview"
            as="textarea"
            placeholder="Is there anything else you would like us to know about your experience?"
            register={register}
            errors={errors}
            sx={inputTextAreaStyle}
          />
          <Atom.Span sx={{mt: 3}}>
            {!firebaseProvider.user ? (
              <GithubLoginLarge />
            ) : (
              <Atom.Button
                gradient="blue"
                direction={10}
                md
                sx={{
                  height: 60,
                  width: '100%',
                  mt: 3,
                }}>
                <Atom.Span xl>Submit Feedback</Atom.Span>
              </Atom.Button>
            )}
          </Atom.Span>
        </Atom.Flex>
      )}
    </form>
  );
};

const SubmissionComplete = props => {
  return (
    <Atom.Flex card center column>
      <Atom.Heading>Thank You!</Atom.Heading>
      <Atom.Paragraph>
        We appreciate you taking the time to complete our survey.
      </Atom.Paragraph>
      <Atom.Span sx={{color: 'blue', fontWeight: 700}}>
        <a href="https://twitter.com/1MillionDevs" target="_blank">
          @1MillionDevs
        </a>
      </Atom.Span>
    </Atom.Flex>
  );
};

export default FormSignPetition;
