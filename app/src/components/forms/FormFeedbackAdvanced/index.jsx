/* --- Global --- */
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {firebase} from '@settings/firebase';
/* --- Local --- */

/* --- Component --- */
const FormSignPetition = props => {
  const {handleSubmit, register, errors} = useForm();
  const [status, setStatus] = useState(0);

  /* --- Form : EventHandler : Submit --- */
  const onSubmit = async values => {
    const submission = values;
    try {
      setStatus(1);
      const ref = firebase.database().ref(`submissions`);
      console.log(ref, 'ref');
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
            defaultValue="milliondevs-general"
            register={register}
            errors={errors}
          />
          <Molecule.Field
            name="name"
            placeholder="Name"
            register={register}
            errors={errors}
            sx={{
              border: 'none',
              borderLeft: '3px solid',
              borderLeftColor: 'gray',
              boxShadow: 1,
              height: 60,
              width: ['100%'],
              transition: '0.2s all',
              p: 3,
              '&:focus': {
                borderColor: 'blue',
              },
            }}
          />
          <Molecule.Field
            name="email"
            placeholder="Email"
            register={register}
            errors={errors}
            sx={{
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
            }}
          />
          <Molecule.Field
            name="archetype"
            placeholder="Archetype"
            as="select"
            register={register}
            errors={errors}
            sx={{
              border: 'none',
              // borderLeft: '3px solid',
              // borderLeftColor: 'gray',
              boxShadow: 1,
              height: 30,
              mt: 3,
              width: ['100%'],
              transition: '0.2s all',
              p: 3,
              // '&:focus': {
              //   borderColor: 'blue',
              // },
            }}>
            <option value="">Select Archetype</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="communityr">Community Manager</option>
            <option value="produt">Product Management</option>
            <option value="other">Other</option>
          </Molecule.Field>
          <Molecule.Field
            name="feedback"
            as="textarea"
            placeholder="I think the 1MillionDevs campaign improve by..."
            register={register}
            errors={errors}
            sx={{
              border: 'none',
              borderLeft: '3px solid',
              borderLeftColor: 'gray',
              boxShadow: 1,
              height: 150,
              mt: 3,
              width: ['100%'],
              transition: '0.2s all',
              p: 3,
              '&:focus': {
                borderColor: 'blue',
              },
            }}
          />
          <Atom.Span>
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
