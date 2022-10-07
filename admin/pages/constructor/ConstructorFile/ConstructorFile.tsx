import React, { FC, useContext } from 'react';
import { Button } from '@mui/material';
import FileUpload, { FileUploadProps } from 'react-material-file-upload';
import { Section, Content, Footer } from '../Constructor.style';
import { ConstructorContext } from '../Constructor.context';

interface ConstructorFileProps {
  onNext: () => void;
}

export const ConstructorFile: FC<ConstructorFileProps> = ({ onNext }) => {
  const { file, onFileChange } = useContext(ConstructorContext);

  return (
    <Section>
      <Content>
        <FileUpload
          value={file}
          maxFiles={1}
          accept="image/png, image/jpeg"
          onChange={onFileChange}
          title="Drag 'n' drop some image here, or click to select file"
          buttonProps={{ disableElevation: true }}
        />
      </Content>
      <Footer>
        <Button disabled={!file.length} variant="contained" onClick={onNext}>
          Next
        </Button>
      </Footer>
    </Section>
  );
};
