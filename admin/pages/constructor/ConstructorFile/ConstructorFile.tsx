import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import FileUpload from 'react-material-file-upload';
import { Section, Content, Footer } from '../Constructor.style';
import { ConstructorContext } from '../Constructor.context';

interface ConstructorFileProps {
  onNext: () => void;
}

export const ConstructorFile: FC<ConstructorFileProps> = ({ onNext }) => {
  const { files, onFilesChange } = useContext(ConstructorContext);

  return (
    <Section>
      <Content>
        <FileUpload
          value={files}
          maxFiles={1}
          accept="image/png, image/jpeg"
          onChange={onFilesChange}
          title="Drag 'n' drop some image here, or click to select file"
          buttonProps={{ disableElevation: true }}
        />
      </Content>
      <Footer>
        <Button disabled={!files.length} variant="contained" onClick={onNext} disableElevation>
          Next
        </Button>
      </Footer>
    </Section>
  );
};
