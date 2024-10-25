import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


interface Props {
  setValues: Dispatch<SetStateAction<{
    name: string;
    email: string;
    message: string;
    file: FileList | null;
 }>>;
  values: {
    name: string;
    email: string;
    message: string;
    file: FileList | null;
  }
}

export default function File({setValues, values}: Props) {
    const [translation] = useTranslation('global');
  return (
    <Button
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={<MdOutlineCloudUpload />}
    >
      {
        values?.file ? translation("form.inputs-file-upload") : translation("form.inputs-file")
      }
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => setValues(prev => ({
          ...prev,
          file: event.target.files
        }))}
        name='files'
        multiple
      />
    </Button>
  );
}