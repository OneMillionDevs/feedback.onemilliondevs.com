/* --- Local --- */

/* --- Component --- */
const PetitionIntroduction = props => {
  return (
    <Atom.Box>
      <Atom.Flex
        center
        column
        sx={{
          py: 4,
          textAlign: 'center',
        }}>
        <Atom.Heading giga>Why Now</Atom.Heading>
        <Atom.Paragraph sx={{fontSize: 3}}>
          Protect your rights to <strong>Freedom of Information</strong>!
        </Atom.Paragraph>
      </Atom.Flex>
    </Atom.Box>
  );
};

export default PetitionIntroduction;
