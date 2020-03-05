/* --- Global --- */
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {withAmplify} from 'amplify-system';
import {graphqlOperation} from 'aws-amplify';

/* --- Local --- */
// import {createPetition} from '@datastore/mutations';

/* --- Component --- */
const FormSignPetition = props => {
  const amplify = withAmplify();
  const {handleSubmit, register, errors} = useForm();
  const [status, setStatus] = useState(0);

  /* --- Form : EventHandler : Submit --- */
  const onSubmit = async values => {
    const petitionDetails = values;
    try {
      // const petition = await amplify.api.graphql(
      //   graphqlOperation(createPetition, {input: petitionDetails}),
      // );
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
            variant={['text']}
            name="name"
            placeholder="Name"
            register={register}
            errors={errors}
            sx={{
              border: 'none',
              boxShadow: 1,
              height: 60,
              width: ['100%'],
              p: 3,
            }}
          />
          <Molecule.Field
            variant={['text']}
            name="description"
            placeholder="Description"
            as="textarea"
            register={register}
            errors={errors}
            sx={{
              border: 'none',
              borderLeft: '2px solid',
              borderColor: 'gray',
              boxShadow: 1,
              height: 120,
              mt: 3,
              width: ['100%'],
              p: 3,
            }}
          />
          <Molecule.Field
            variant={['text']}
            name="pepoID"
            placeholder="Pepo Video ID"
            register={register}
            errors={errors}
            sx={{
              border: 'none',
              borderLeft: '2px solid',
              borderColor: 'gray',
              boxShadow: 1,
              mt: 3,
              width: ['100%'],
              p: 3,
            }}
          />
          <Atom.Span>
            <Atom.Button
              gradient="purpink"
              direction={45}
              md
              sx={{
                // color: '#3e3e3e',
                height: 60,
                width: '100%',
                mt: 3,
              }}>
              <Atom.Span as="h3" xl>
                Share Your <strong>BIG</strong> Idea <strong>Today</strong>
              </Atom.Span>
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
