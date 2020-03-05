/* --- Global --- */
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

/* --- Local --- */

/* --- Component --- */
const FormSignPetition = props => {
  const {handleSubmit, register, errors} = useForm();
  const [status, setStatus] = useState(0);

  /* --- Form : EventHandler : Submit --- */
  const onSubmit = async values => {
    const petitionDetails = values;
    try {
      setStatus(1);
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
            name="address"
            placeholder="Ethereum Address"
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
              <Atom.Span xl>Early Registration</Atom.Span>
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
        Be sure to share the video and tag Pepo too!
      </Atom.Paragraph>
      <Atom.Span sx={{color: 'blue', fontWeight: 700}}>
        <a href="https://twitter.com/pepo" target="_blank">
          @horizin
        </a>
      </Atom.Span>
    </Atom.Flex>
  );
};

export default FormSignPetition;
